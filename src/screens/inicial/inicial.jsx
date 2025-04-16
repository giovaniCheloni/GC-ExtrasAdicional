import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './inicial.style.js';

const Inicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao GC - Extas & Adicional</Text>
      <Text style={styles.description}>
      Com este aplicativo, calcular suas horas extras e adicional noturno nunca foi tão fácil. Basta inserir suas horas de Adicional noturno e Horas-Extras que o app calcula automaticamente seus ganhos extras, considerando os diferentes percentuais para cada situação. Tenha controle total sobre seus rendimentos e garanta que você esteja recebendo o valor justo pelo seu trabalho.

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
