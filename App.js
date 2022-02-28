import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { GameScreen } from './screens/GameScreen';
import { StartGameScreen } from './screens/StartGameScreen';
import { GameOverScreen } from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0)


  const restartGame = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    
  }

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds)
    
  }

  let content =   <StartGameScreen onStartGame={startGameHandler}/>
  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if(guessRounds > 0 ){
   content = <GameOverScreen playerRounds={guessRounds} userGuess={userNumber} onRestartGame={restartGame}/>
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number App'/>
    {content}  
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  },
});
