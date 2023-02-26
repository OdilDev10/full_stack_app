import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  TextEditingController _emailController = TextEditingController();
  TextEditingController _usernameController = TextEditingController();
  TextEditingController _confirmPasswordController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('register'),
      ),
      body: Container(
        width: double.infinity,
        padding: EdgeInsets.all(25.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TextField(
              controller: _usernameController,
              decoration:
                  InputDecoration(labelText: 'Please enter your Username'),
            ),
            SizedBox(
              height: 10.0,
            ),
            TextField(
              controller: _emailController,
              decoration: InputDecoration(labelText: 'Please enter your email'),
            ),
            SizedBox(
              height: 10.0,
            ),
            TextField(
              controller: _passwordController,
              decoration:
                  InputDecoration(labelText: 'Please enter your password'),
              obscureText: true,
            ),
            SizedBox(
              height: 10.0,
            ),
            TextField(
              controller: _confirmPasswordController,
              decoration:
                  InputDecoration(labelText: 'Please confimr your password'),
              obscureText: true,
            ),
            ElevatedButton(
              onPressed: () async {
                var url = Uri.parse('http://localhost:3000/api/auth/register');
                print(_emailController.text);
                print(_confirmPasswordController.text);
                print(_usernameController.text);
                print(_passwordController.text);

                var headers = {'content-type': 'application/json'};
                var body = {
                  "username": _usernameController.text,
                  "email": _emailController.text,
                  "password": _passwordController.text,
                  "confirmaPassword": _confirmPasswordController.text,
                };
                var jsonBody = json.encode(body);
                var response =
                    await http.post(url, headers: headers, body: jsonBody);
                // Navigator.pushNamed(context, '/perfil');

                print(response.statusCode);
                print(response.body);
              },
              child: Text('Login'),
            )
          ],
        ),
      ),
    );
  }
}
