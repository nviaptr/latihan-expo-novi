import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style = {styles.textStyle}>Halo Ini Halaman Novi</Text>
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
