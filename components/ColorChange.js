import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function ColorChange({color,onIncrease,onDecrease}) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`${color} Increase`} 
      onPress={()=>
    onIncrease()}
    />
        <Button title={`${color} Decrease`}
        onPress={()=>
    onDecrease()}
    />
    </View>
  )
}

const styles = StyleSheet.create({})