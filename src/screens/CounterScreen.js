import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native'
import React, {useState} from 'react';

export default function CounterScreen() {
    const [counter,setCounter] = useState(0)
    const handleIncrement=() => {
        setCounter(counter+1)
    }
    const handleDecrement=() => {
        setCounter(counter-1)
    }
    const handleReset=() => {
        setCounter(0)
    }
    return(
        <View style={styles.container}>
      <Text style={styles.title}>CounterScreen</Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleIncrement}
        >
          <Text style={styles.text}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
          onPress={handleDecrement}
        >
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleReset}
        >
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.counterText}>Sayı: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
    spacing: {
        height: 15,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
        marginBottom: 10,
        
      },
      button: {
        flex: 1,
        backgroundColor: '#f1f56c',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 11,
        margin:5,
        
      },
      counterText: {
        fontSize: 18,
      },
      text:{
        fontSize:22,
        textAlign:'center',
      }
})