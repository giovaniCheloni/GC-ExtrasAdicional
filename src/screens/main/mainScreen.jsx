import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './mainScreen.style.js';

const MainScreen = () => {
  const [salarioBase, setSalarioBase] = useState('');
  const [horasNoturnas, setHorasNoturnas] = useState('');
  const [horasExtras, setHorasExtras] = useState('');
  const [resultado, setResultado] = useState(null);
  const [percentualNoturno, setPercentualNoturno] = useState(20);
  const [percentualExtra, setPercentualExtra] = useState(100);

  const calcular = () => {
    const salarioHora = parseFloat(salarioBase) / 220; // Considerando 220 horas mensais
    const adicionalNoturno = (salarioHora * (percentualNoturno / 100)) * parseFloat(horasNoturnas);
    const horasExtrasCalculadas = (salarioHora * (percentualExtra / 100)) * parseFloat(horasExtras);
    const total = adicionalNoturno + horasExtrasCalculadas;

    setResultado({
      adicionalNoturno,
      horasExtras: horasExtrasCalculadas,
      total,
    });
  };

  const limpar = () => {
    setSalarioBase('');
    setHorasNoturnas('');
    setHorasExtras('');
    setResultado(null);
  };

  return (
    <View style={styles.container}>    
      <Text style={styles.title}>Cálculo de Adicional Noturno e Horas Extras</Text>
      <TextInput
        style={styles.input}
        placeholder="Salário Base"
        placeholderTextColor="white"
        keyboardType="numeric"
        value={salarioBase}
        onChangeText={setSalarioBase}
      />
      <TextInput
        style={styles.input}
        placeholder="Horas Trabalhadas no Período Noturno"
        placeholderTextColor="white"
        keyboardType="numeric"
        value={horasNoturnas}
        onChangeText={setHorasNoturnas}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de Horas Extras"
        placeholderTextColor="white"
        keyboardType="numeric"
        value={horasExtras}
        onChangeText={setHorasExtras}
      />
      <TextInput
        style={styles.input}
        placeholder="Percentual de Adicional Noturno (%)"
        placeholderTextColor="white"
        keyboardType="numeric"
        value={String(percentualNoturno)}
        onChangeText={text => setPercentualNoturno(parseFloat(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Percentual de Horas Extras (%)"
        placeholderTextColor="white"
        keyboardType="numeric"
        value={String(percentualExtra)}
        onChangeText={text => setPercentualExtra(parseFloat(text))}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={calcular}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={limpar}
      >
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={styles.resultContainer}>
          <Text style={styles.buttonText} >Adicional Noturno: R$ {resultado.adicionalNoturno.toFixed(2)}</Text>
          <Text style={styles.buttonText} >Horas Extras: R$ {resultado.horasExtras.toFixed(2)}</Text>
          <Text style={styles.buttonText} >Total a Receber: R$ {resultado.total.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};


export default MainScreen;