import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

// Images
import DiceOne from './assets/images/dice1.png';
import DiceTwo from './assets/images/dice2.png';
import DiceThree from './assets/images/dice3.png';
import DiceFour from './assets/images/dice4.png';
import DiceFive from './assets/images/dice5.png';
import DiceSix from './assets/images/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceFive);

  const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        break;

      case 2:
        setUri(DiceTwo);
        break;

      case 3:
        setUri(DiceThree);
        break;

      case 4:
        setUri(DiceFour);
        ToastAndroid.show('You Won !!!', ToastAndroid.SHORT);
        break;

      case 5:
        setUri(DiceFive);
        break;

      case 6:
        setUri(DiceSix);
        break;
    }
  };

  return (
    <>
      <SafeAreaView style={styles.body}>
        <Text style={styles.headingText}>Show 4 to win !</Text>
        <Image source={uri} style={styles.image} />
        <TouchableOpacity onPress={playButtonTapped}>
          <Text style={styles.button}>Play Game</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#120E43',
  },
  headingText: {
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 32,
    marginVertical: 24,
  },
  image: {
    height: 250,
    width: 250,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontSize: 32,
    backgroundColor: '#E21717',
    color: '#FFFFFF',
    margin: 80,
    borderRadius: 16,
  },
});
