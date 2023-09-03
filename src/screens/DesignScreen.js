import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesignScreen() {
  return (
    <View style={{width:'100%',height:'100%'}}>
      <View style={{
        position:'absolute',
        width:'25%',
        height:'15%',
        top:240,
        left:95,
        backgroundColor:'red'}}>
      </View>
      <View style={{
        position:'absolute',
        width:'25%',
        height:'15%',
        right:95,
        top:240,
        backgroundColor:'green'}}>
      </View>
      <View style={{
        position:'absolute',
        width:'25%',
        height:'15%',
        left:95,
        bottom:240,
        backgroundColor:'blue'}}>
      </View>
      <View style={{
        position:'absolute',
        width:'25%',
        height:'15%',
        right:95,
        bottom:240,
        backgroundColor:'yellow'}}>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})