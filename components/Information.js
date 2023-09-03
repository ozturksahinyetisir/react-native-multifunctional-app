import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'


export default function Information({ title, imageSource, desc }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.img} source={imageSource} resizeMode="contain" />
      </View>  
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width:150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: 100,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
  },
});