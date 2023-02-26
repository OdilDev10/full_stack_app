import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class ClientesPage extends StatefulWidget {
  const ClientesPage({super.key});

  @override
  State<ClientesPage> createState() => _ClientesPageState();
}

class _ClientesPageState extends State<ClientesPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Clientes"),
        actions: [
          IconButton(
              onPressed: () {
                print("FUNCINA");
              },
              icon: Icon(Icons.person_2_rounded))
        ],
      ),
      body: Container(
        child: Column(
          children: [
            ListView(
              children: [
                Text("Elemento 1"),
                Text("Elemento 2"),
              ],
            )
          ],
        ),
      ),
    );
  }
}
