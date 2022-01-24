import React, {useState} from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function App() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState('0');

  const sum = () => {
    if (first == '' || second == '') {
      setResult('invalid input numbers')
    } else {
      setResult(parseFloat(first) + parseFloat(second))
    }
  };

  const subtract = () => {
    if (first == '' || second == '') {
      setResult('invalid input numbers')
    } else {
      setResult(parseFloat(first) - parseFloat(second))
    }
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#a6c6cb', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 10}}>
        <Text style={{ fontSize: 18, color: 'white'}}>Result: {result}</Text>
        <TextInput style={{width: 200, borderColor: '#e5e4e2', borderWidth: 1, marginTop: 5}}
        onChangeText={first => setFirst(first)} value={first} keyboardType='number-pad'
        />
        <TextInput style={{width: 200, borderColor: '#e5e4e2', borderWidth: 1, marginTop: 5}}
        onChangeText={second => setSecond(second)} value={second} keyboardType='number-pad'
        />
      </View>
      <View style={{flex: 2, backgroundColor: '#e5e4e2', flexDirection: 'row',
    alignItems: 'flex-start', justifyContent: 'space-evenly', padding: 10}}>
        <View style={{width: 40, height: 30}}>
          <Button title='+' color="#a6c6cb"
          onPress={sum} />
        </View>
        <View style={{width: 40, height: 30}}>
          <Button title='-' color="#a6c6cb"
          onPress={subtract}/>
          </View>
      </View>
    </View>
  );
}