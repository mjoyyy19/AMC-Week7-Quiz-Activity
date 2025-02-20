import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image } from 'react-native';

const App = () => {
  // State to track the toggle
  const [isEnabled, setIsEnabled] = useState(false);

  // Function to handle toggle change
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container, { backgroundColor: isEnabled ? 'lightgreen' : 'lightgray' }]}>
      
       <Image
        source={{
          uri: isEnabled
            ? 'https://clipartcraft.com/images/light-bulb-clipart-lit-5.png'
            : 'https://th.bing.com/th/id/R.8ef3ea9c993a6300bc3fcc7a46aec453?rik=Tydr54tZuN%2fpbQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fO%2fM%2fF%2f3%2fL%2fh%2flight-bulb-hi.png&ehk=gypsgDz%2bTQIs17FjC8Yfw%2bczv6srfxbcPfdlwpU4pMI%3d&risl=&pid=ImgRaw&r=0' // URL for "off" state image
        }}
        style={styles.image}
      />
      <Text style={styles.OptionText}>{isEnabled ? 'ON' : 'OFF'}</Text>
      <Switch 
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.text}>AMC</Text>
      <Text style={styles.text2}>Lightbulb</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  OptionText: {
    marginTop: 20,
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  text: {
    marginTop: 20,
    fontSize: 23,
    marginBottom: 10,
    fontWeight: 'bold'
  },

  text2: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 150,
    marginTop: 20
  }
});

export default App;