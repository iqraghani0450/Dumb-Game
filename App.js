import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [boolean, tryBoolean] = useState(false);
  const [integer, setInteger] = useState(0);
  const changeText = () =>  tryBoolean(true);
  const changePlace = () => setInteger(integer + 15);
  return (
    <View style={styles.container}>
      <View style={styles.dumb}>
      <Text style={styles.text}>{boolean==false?"Are you dumb?":"I knew it :3"}</Text>
      </View>
      <View style={styles.oneline}>
      <TouchableOpacity style={styles.button} onPress={() => changeText()}><Text style={styles.text}>Yes</Text></TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'grey', padding: 12, borderColor: 'black', borderWidth: 2, bottom: integer, right: integer}} onPress={() => changePlace()}><Text style={styles.text}>No</Text></TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dec8ab',
    alignItems: 'center',
    borderColor: '#570000',
    borderWidth: 5,
 },
  
  dumb: {
   width: "100%",
   height: "50%",
   alignItems: 'center',
   justifyContent: 'center',
  },

  text: {
    fontSize: 30,
  },

  oneline: {
    width: "50%",
    justifyContent: 'space-between',
    flexDirection: 'row',  
  },

  button: {
    backgroundColor: 'grey',
    padding: 12,
    borderColor: 'black',
    borderWidth: 2,
  },
});
