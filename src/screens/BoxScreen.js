import { StyleSheet, Text, View ,Button,FlatList} from 'react-native'
import React,{useState} from 'react'

export default function BoxScreen() {
    const[colors,setColors] = useState([]);
    const randomColor = () =>{
        const red = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    };
    const handleBoxAdd=() => {
        setColors([...colors,randomColor()]);
    
    }
    
    const handleBoxRemove=() => {
        setColors([...colors,-1]);
    
    }
  return (
    <View>
      <Button title="Add Box" onPress={handleBoxAdd}/>
      <FlatList
      data={colors}
        renderItem={({item})=>{
            return <View style = {{
                height:100,
                width:100,
                backgroundColor: item,
                marginVertical:10,
                marginStart:20,
                

            }}
            />;    
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})