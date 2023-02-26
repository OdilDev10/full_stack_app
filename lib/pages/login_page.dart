import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  TextEditingController _emailController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('login'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Image.network(
            "https://mozilladevelopers.github.io/playground/static/ffdelogo.1513a37b.png",
          ),
          SizedBox(
            height: 10.0,
          ),
          Container(
            margin: const EdgeInsets.only(right: 25.0, left: 25.0),
            child: Column(
              children: [
                TextFormField(
                  controller: _emailController,
                  decoration:
                      InputDecoration(labelText: 'Please enter your email'),
                ),
                TextFormField(
                  controller: _passwordController,
                  decoration: InputDecoration(labelText: 'Enter your password'),
                  obscureText: true,
                ),
                SizedBox(
                  height: 10.0,
                ),
              ],
            ),
          ),
          ElevatedButton(
            onPressed: () async {
              var url = Uri.parse('http://localhost:3000/api/auth/login');
              print(_emailController.text);
              print(_passwordController.text);

              var headers = {'content-type': 'application/json'};
              var body = {
                "email": _emailController.text,
                "password": _passwordController.text,
              };
              var jsonBody = json.encode(body);
              var response =
                  await http.post(url, headers: headers, body: jsonBody);

              if (response.statusCode == 200) {
                var jsonResponse = json.decode(response.body);
                var token = jsonResponse['Token'];

                final storage = new FlutterSecureStorage();
                await storage.write(key: 'token', value: token);

                // Navigator.pushNamed(context, '/perfil');

                String? tokenGet = await storage.read(key: 'token');
                print(tokenGet);
              } else {
                print(response.statusCode);
                print(response.body);
              }
            },
            child: Text('Login'),
          )
        ],
      ),
    );
  }
}
