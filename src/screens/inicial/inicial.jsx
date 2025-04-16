import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './inicial.style.js';

const Inicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App de Cálculo</Text>
      <Text style={styles.description}>
        Este aplicativo realiza o cálculo de horas extras e adicional noturno.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.buttonText}>Faça seu Calculo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Inicial;
