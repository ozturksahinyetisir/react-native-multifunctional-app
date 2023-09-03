import { StyleSheet, Text, View ,Button,TouchableOpacity} from 'react-native'
import React,{useReducer} from 'react';

const reducer =(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'increment':
            return {...state,count:state.count+action.payload};
        case 'decrement':    
        return {...state,count:state.count-action.payload};
        default:
            return state;
    }
}

export default function CounterReducerScreen() {
    const [state, dispatch] = useReducer(reducer,{count:0});
    const handleIncrement=() => {
        dispatch({type:'increment',payload:1});
    }
    const handleDecrement=() => {
        dispatch({type:'decrement',payload:1});
    }
    const handleReset=() => {
       
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

      </View>
      <Text style={styles.counterText}>Sayı: {state.count}</Text>
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