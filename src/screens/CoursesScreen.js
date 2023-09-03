import React from 'react'
import { FlatList, StyleSheet, Text, View,TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function CoursesScreen() {
    const navigation = useNavigation();
    const msg = '<3'

    const navigateCoursesInfo = (course) => {
      if (course.name === 'Angular') {
        navigation.navigate('CoursesInfo', { courseName: course.name });
      } else if (course.name === 'Bootstrap') {
        navigation.navigate('CoursesInfo'); 
      }else if (course.name === 'Kotlin') {
        navigation.navigate('CoursesInfo'); 
      } else {
        navigation.navigate('CoursesInfo'); // Alternative
      }

    } 

    const courses = [
      {name:"Angular",id:1},
      {name:"React Js",id:2},
      {name:"JavaScript",id:3},
      {name:"Bootstrap",id:4},
      {name:"CSS",id:5},
      {name:"Kotlin",id:6},
      {name:"C#",id:7},
      {name:".NET",id:8},
      {name:"React Native",id:9},
      {name:"Flutter",id:10},
      {name:"Ruby",id:11},
      {name:"GO",id:12},
      {name:"Python",id:13},
      {name:"PHP",id:14},
      {name:"Swift",id:15},
  
    ];

    

    return (
      <FlatList 
        data={courses}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateCoursesInfo(item)}>
            <Text style={styles.content}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
  
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    title:{
      fontSize:30,
    },content:{
      flex:1,
      backgroundColor:'yellow',
      alignItems:'center',
      justifyContent: 'center',
      marginVertical:3,
      fontSize:18,
      padding:20,
    }
  });