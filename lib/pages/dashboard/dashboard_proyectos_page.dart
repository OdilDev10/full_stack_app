import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class ProyectosPage extends StatefulWidget {
  const ProyectosPage({super.key});

  @override
  State<ProyectosPage> createState() => _ProyectosPageState();
}

class _ProyectosPageState extends State<ProyectosPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Proyectos"),
        actions: [
          IconButton(
              onPressed: () {
                print("FUNCINA");

                
              },
              icon: Icon(Icons.paste_rounded))
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
