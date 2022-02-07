import React, {useState} from 'react';
import { StyleSheet, Button, Text, 
    TextInput, View } from 'react-native';

export default function Calculator({ navigation }) {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [result, setResult] = useState('0');
    const [history, setHistory] = useState([]);

    const sum = () => {
        if (first == '' || second == '') {
          setResult('invalid input numbers')
        } else {
          const sum = parseFloat(first) + parseFloat(second) 
          setResult(sum)
          const calculation = `${first} + ${second} = ${sum}`
          setHistory([...history, {key: calculation}])
        }
      };
    
      const subtract = () => {
        if (first == '' || second == '') {
          setResult('invalid input numbers')
        } else {
          const difference = parseFloat(first) - parseFloat(second)
          setResult(difference)
          const calculation = `${first} - ${second} = ${difference}`
          setHistory([...history, {key: calculation}])
        }
      }

    return(
        <View style={styles.container}>
      <View style={styles.upper}>
        <Text style={styles.result}>Result: {result}</Text>
        <TextInput style={styles.input}
        onChangeText={first => setFirst(first)} value={first} keyboardType='number-pad'
        />
        <TextInput style={styles.input}
        onChangeText={second => setSecond(second)} value={second} keyboardType='number-pad'
        />
      </View>
      <View style={styles.homelower}>
        <View style={styles.button}>
          <Button title='+' color="#a6c6cb"
          onPress={sum} />
        </View>
        <View style={styles.button}>
          <Button title='-' color="#a6c6cb"
          onPress={subtract}/>
          </View>
          <View style={styles.history}>
          <Button title='History' color="#a6c6cb"
           onPress={() => navigation.navigate('History', {history: history, styles: styles})}
           />
          </View>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    upper: {
      flex: 1,
      backgroundColor: '#a6c6cb',
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-end', 
      paddingBottom: 10
    },
    homelower: {
      flex: 2, 
      backgroundColor: '#e5e4e2', 
      flexDirection: 'row',
      alignItems: 'flex-start', 
      justifyContent: 'center', 
      paddingTop: 10,
    },
    historyupper: {
      flex: 1, 
      backgroundColor: '#e5e4e2', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      padding: 10
    },
    input: {
      width: 200, 
      borderColor: '#e5e4e2', 
      borderWidth: 1, 
      marginTop: 5
    },
    button: {
      width: 40,
      paddingRight: 10
    },
    history: {
      width: 75,
    },
    heading: {
      fontWeight: 'bold'
    },
    result: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 18
    }
  });