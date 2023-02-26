import {pool} from "../../models/conexion.js"
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken"

// --------------REGISTER--------------

export const register = async (req, res) => {
    try {
        const {username, email, password, confirmPassword} = req.body
        console.log(username, email, password, confirmPassword);


        const validDate = validateData(username, email, password, confirmPassword)
        if(validDate == true) {return res.status(404).send({"Message": "Hay campos vacios."})}

        const validEmil = await validateEmail(email)
        if(validEmil){return res.status(404).send({"Message":`El usuario con email ${email}, existe.`})}

        const validPassword = await validatePassword(password, confirmPassword)
        if(validPassword == false){return res.status(404).send({"Message":`Las claves no coinciden.`})}

        const user = [username, email, validPassword]
        const newUser = await createUser(user)
        if(newUser == false){return res.status(404).send({"Message":`El usuario no fue creado`})}

        res.status(200).send({"Message":"Usuario Creado"})   
        
    } catch (error) {
        res.status(404).send(error)
    }
}

// --------------LOGIN--------------

export const login = async (req, res) => {
    try {
        const {email, password} = req.body
        console.log(req.body);

        if(email == '' || password == '') {return res.status(404).send({"Message": "Hay campos vacios."})}

        const validUser = await validateEmail(email)
        if(validUser == false){
            return res.status(400).send({"Message": "Email no existe"})
        }
        const validPassword = await bcrypt.compare(password, validUser['password'])
        if(validPassword == false){
            return res.status(400).send({"Message": "Clave invalida"})
        }

        const token = jwt.sign({id: validUser['id']}, 'secret-key', {
            algorithm: "HS256",
            expiresIn: 864000
        })

        res.status(200).json({"Token": token})   
    } catch (error) {
        res.status(400).send({"Error": error})
    }    
}

// --------------METODOS--------------

const validateData = (username, email, password, confirmPassword) =>{
    if(username == '' || email == '' || password == '' || confirmPassword == ''){
        return true
    }
        return false
}

const validateEmail = async(email) =>{
    console.log(email)
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email])
    if(!rows[0]){
        return false
    }
    return rows[0]

}

const validatePassword = async (password, confirmPassword) => {
    if(password === confirmPassword){
        const salt = await bcrypt.genSalt(10)
        const validPassword = await bcrypt.hash(password, salt)
        console.log(`Las claves coinciden`)
        return validPassword
    }
    console.log(`Las claves no coinciden`)
    return false
}

const createUser = async (user) => {
    const [username, email, validatePassword] = user
    const [rows] = await pool.query("INSERT INTO users (username, email, password) VALUES (?,?,?)", [username, email, validatePassword])
    if(rows.insertId){
        console.log(user)   
        return true
    }
    return false
}

