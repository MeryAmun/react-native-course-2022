import React, {useState} from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View , Alert} from "react-native";
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { NumberContainer } from '../components/NumberContainer';
import colors from '../constants/color'

export const StartGameScreen = ({onStartGame}) => {
const [enteredValue, setEnteredValue] = useState('');
const [confirmed, setConfirmed] = useState(false);
const [selectedNumber, setSelectedNumber] = useState('')


const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
}


const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
}

const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
        Alert.alert('Invalid number!', 
        'Number has to be a number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
        return;
    }
setConfirmed(true)
setSelectedNumber(chosenNumber)
setEnteredValue('')
Keyboard.dismiss();
}

let confirmedOutput;

if(confirmed){
  
  confirmedOutput =  <Card style={styles.summary}>
       <Text> You Selected</Text>
       <NumberContainer selectedNumber={selectedNumber}/>
       <Button title='START GAME' onPress={() => onStartGame(selectedNumber)}/>
  </Card>
    
}
  return (
  <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
  }}>
       <View style={styles.screen}>
<Text style={styles.title}>Start a New Game !</Text>
<Card style={styles.inputContainer}>
<Text>Select a Number</Text>
    <Input style={styles.input} 
    blurOnSubmit
    autoCorrect={false}
    autoCapitalize='none'
    keyboardType='number-pad'
    maxLength={2}
    onChangeText={numberInputHandler}
    value={enteredValue}
    />
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
      <Button title='Reset' onPress={resetInputHandler} color={colors.accent}/>
      </View>
      <View style={styles.button}>
      <Button title='Confirm' onPress={confirmInputHandler} color={colors.primary}/>
      </View>
    </View>
</Card>
{confirmedOutput}
   </View>
  </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
screen:{
    flex: 1,
    padding:10,
    alignItems:'center'
},
title:{
fontSize:20,
marginVertical:10,

},
inputContainer:{
    width:300,
    maxWidth:'80%',
    alignItems:'center',
    shadowColor:'black',
},
buttonContainer:{
flexDirection:'row',
width:'100%',
justifyContent:'space-between',
paddingHorizontal: 15
},
button:{
    width:'40%'
},
input:{
    width:50,
    textAlign:'center'
},
summary:{
    marginTop:20,
    alignItems:'center'
}
})