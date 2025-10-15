import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Replace with your logo image if available */}
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
        onError={() => {}}
      />
      <Text style={styles.title}>AI Study Companion</Text>
      <ActivityIndicator size="large" color="#4f8cff" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f8cff',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loader: {
    marginTop: 10,
  },
});
