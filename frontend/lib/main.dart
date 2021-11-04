import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';

void main() {
  runApp(MaterialApp(
    home: HomePage(),
  ));
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  getUsers() async {
    http.Response response =
        await http.get(Uri.parse('http://192.168.1.8:5000/api/users'));
    debugPrint(response.body);
    json.decode(response.body);
  }

  @override
  void initState() {
    super.initState();
    getUsers();
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Users List'),
        backgroundColor: Colors.indigo[900],
      ),
      //body: ListView.builder(),
    );
  }
}
