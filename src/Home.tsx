import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => null} style={styles.button}>
        <Text style={styles.text}>Test button</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 40.0,
    paddingTop: 10.0,
  },
  button: {
    backgroundColor: '#FD4949',
    borderRadius: 10.0,
    marginBottom: 15.0,
    padding: 15.0,
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 16.0,
    textAlign: 'center',
  }
});

export default {
  name: 'home',
  component: Home,
};