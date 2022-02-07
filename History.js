import React from 'react';
import { Text, View, FlatList } from 'react-native';

export default function History({ route, navigation }) {

    const { history } = route.params;
    const { styles } = route.params;

    return(
    <View style={styles.historyupper}>
      <Text>History</Text>
      <FlatList
      data={history}
      renderItem={({item}) => <Text>{item.key}</Text>}
      keyExtractor={(item, index) => index.toString()} />
    </View>
    )
}
