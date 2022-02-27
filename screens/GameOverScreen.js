import React from 'react'
import { View, Text, StyleSheet } from "react-native";

export const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
        <Text>The game is over</Text>
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