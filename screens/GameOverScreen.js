import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";

export const GameOverScreen = ({playerRounds, userGuess, onRestartGame}) => {
  return (
    <View style={styles.screen}>
        <Text>The game is over!!</Text>
        <Text>Number of rounds : {playerRounds}</Text>
        <Text>Number was: {userGuess}</Text>
        <Button title='New Game' onPress={onRestartGame}/>
    </View>
  )
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})