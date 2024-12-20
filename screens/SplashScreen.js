// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeTabs'); // Navigate to HomeTabs after 3 seconds
    }, 3000); // 3 seconds delay
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      {/* Icon as the "M" logo */}
      <Icon name="movie" size={100} color="#e50914" style={styles.logo} />
      <Text style={styles.text}>Welcome to MovieApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // black background to match the movie theme
  },
  logo: {
    marginBottom: 20,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',  // white text color for visibility on black background
    textAlign: 'center',
  },
});
