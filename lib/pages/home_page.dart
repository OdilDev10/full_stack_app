import 'package:flutter/material.dart';
import 'package:flutter_application_1/pages/perfil_page.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      

      appBar: AppBar(
        title: const Text('Inicio'),
        
        actions: [
          IconButton(
            icon: Icon(Icons.person),
            onPressed: () {
              Navigator.pushNamed(context, '/login');
            },
          ),
          IconButton(
            icon: Icon(Icons.app_registration),
            onPressed: () {
              Navigator.pushNamed(context, '/register');
            },
          )
        ],
      ),
      body: Scaffold(body: Container(
      width: double.infinity,
      padding: EdgeInsets.all(35.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(
            height: 25.0,
          ),
          Text(
            "HOME",
          ),
          SizedBox(
            width: 25.0,
          ),
          Image.network(
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
            height: 250.0,
          ),
          Text("Centered hero"),
          SizedBox(
            width: 20.0,
          ),
          Text(
              'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.'),
          SizedBox(
            width: 20.0,
          ),
          Text('Index'),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                  onPressed: () {
                    Navigator.pushNamed(context, '/about');
                  },
                  child: Text("About")),
              SizedBox(
                width: 20.0,
              ),
              ElevatedButton(onPressed: null, child: Text("Secundary")),
            ],
          )
        ],
      ),
    ),) 
    );
  }
}


