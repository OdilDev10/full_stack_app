import 'package:flutter/material.dart';
import 'package:flutter_application_1/pages/about_page.dart';
import 'package:flutter_application_1/pages/dashboard/dashboard_page.dart';
import 'package:flutter_application_1/pages/dashboard/dashboard_proyectos_page.dart';
import 'package:flutter_application_1/pages/home_page.dart';
import 'package:flutter_application_1/pages/login_page.dart';
import 'package:flutter_application_1/pages/perfil_page.dart';
import 'package:flutter_application_1/pages/register_page.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mi aplicación',
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      routes: {
        '/': (context) => const HomePage(),
        '/perfil': (context) => const PerfilPage(),
        '/about': (context) => const AboutPage(),
        '/login': (context) => const Login(),
        '/register': (context) => const RegisterPage(),
        '/dashboard': (context) => const DashboardPage(),
        '/dashboard-proyectos': (context) => const ProyectosPage(),

      },
    );
  }
}

Future<bool> isLoggedIn() async {
  const storage = FlutterSecureStorage();
  String? tokenGet = await storage.read(key: 'token');
  print(tokenGet);

  // Comprueba si el token existe y es válido
  // por ejemplo, podría verificar la fecha de expiración
  return tokenGet != null;
}
