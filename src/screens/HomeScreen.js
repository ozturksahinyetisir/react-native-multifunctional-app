import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    const msg = "Go to Courses ->"
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Multifunctional App</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Courses')}
      >
        <Text style={styles.buttonText}>{msg}</Text>
      </TouchableOpacity>
      <View style={styles.spacing} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.buttonText}>Counter</Text>
      </TouchableOpacity>
      <View style={styles.spacing} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Box')}
      >
        <Text style={styles.buttonText}>Box App</Text>
      </TouchableOpacity>
      <View style={styles.spacing} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CounterReduce')}
      >
        <Text style={styles.buttonText}>Counter Reducer</Text>
      </TouchableOpacity>
      <View style={styles.spacing} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ColorChangeScreen')}
      >
        <Text style={styles.buttonText}>Color Change Screen</Text>
      </TouchableOpacity>
      <View style={styles.spacing} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PasswordScreen')}
      >
        <Text style={styles.buttonText}>Password Screen</Text>
      </TouchableOpacity>
      <View style={styles.spacing} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DesignScreen')}
      >
        <Text style={styles.buttonText}>Design Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f1f56c',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3, 
    shadowOffset: { width: 0, height: 2 }, 
    shadowColor: 'black', 
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },spacing: {
    height: 15,
  },
});