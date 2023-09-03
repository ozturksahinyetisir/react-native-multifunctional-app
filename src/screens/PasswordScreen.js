import { StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'

export default function PasswordScreen() {
    const [password,setPassword]=useState('');
    const [id,setId]=useState('');
  return (
    <View style={styles.main}>
        <Text>Id:</Text>
      <TextInput style={styles.input}
      value={id}
      onChangeText={(newValue1)=>setId(newValue1)}
      autoCapitalize="none" autoCorrect={false}
      />
      {id.length <6 ?(
        <Text>Id must be at least 6 characters.</Text>
        ):null}
      <Text>Password:</Text>
      <TextInput style={styles.input}
      value={password}
      autoCapitalize="none" 
      autoCorrect={false} 
      onChangeText={(newValue)=>setPassword(newValue)}
      secureTextEntry={true}
      />
      {password.length <6 ?(
        <Text>Password must be at least 6 characters.</Text>
      ):null}
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        margin:10,
    },
    input:{
        borderColor:'black',
        borderWidth:1,
        padding:10,
        
    }
})