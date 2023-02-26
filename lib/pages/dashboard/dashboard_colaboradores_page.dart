import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class ColaboradoresPage extends StatefulWidget {
  const ColaboradoresPage({super.key});

  @override
  State<ColaboradoresPage> createState() => _ColaboradoresPageState();
}

class _ColaboradoresPageState extends State<ColaboradoresPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Colaboradores"),
        actions: [
          IconButton(
              onPressed: () {
                print("FUNCINA");
              },
              icon: Icon(Icons.group))
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
