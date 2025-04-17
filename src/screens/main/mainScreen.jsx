import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './mainScreen.style.js';
import CalculadoraImage from '../../../assets/CalculadoraRealista2.png'; // Import the image
import { COLORS } from '../../constants/colors.js';
import Rectangle from '../../../assets/Rectangle3.png'; // Adjust the path as necessary

const MainScreen = () => {
  const [salarioBase, setSalarioBase] = useState('');
  const [horasNoturnas, setHorasNoturnas] = useState('');
  const [horasExtras, setHorasExtras] = useState('');
  const [resultado, setResultado] = useState(null);
  const [percentualNoturno, setPercentualNoturno] = useState('');
  const [percentualExtra, setPercentualExtra] = useState('');

  const calcular = () => {
    const salarioHora = parseFloat(salarioBase) / 220; // Considerando 220 horas mensais
    const adicionalNoturno = (salarioHora * (percentualNoturno / 100)) * parseFloat(horasNoturnas);
    const horasExtrasCalculadas = (2 * salarioHora * (percentualExtra / 100)) * parseFloat(horasExtras);
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
    setHorasExtras('')
    setPercentualNoturno('');
    setPercentualExtra('');
    setResultado(null);
  };

  return (
    <ImageBackground source={Rectangle} style={styles.container}>    
      <Text style={styles.title}>Cálculo de Adicional Noturno e Horas Extras</Text>
      <Image source={CalculadoraImage} style={styles.imgCalculadora}></Image>
      <TextInput
        style={styles.input}
        placeholder="Salário Base"
        placeholderTextColor= {COLORS.DarkBlue}     
        keyboardType="numeric"
        value={salarioBase}
        onChangeText={setSalarioBase}
      />
      <TextInput
        style={styles.input}
        placeholder="Horas Trabalhadas no Período Noturno"
        placeholderTextColor= {COLORS.DarkBlue} 
        keyboardType="numeric"
        value={horasNoturnas}
        onChangeText={setHorasNoturnas}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de Horas Extras"
        placeholderTextColor= {COLORS.DarkBlue} 
        keyboardType="numeric"
        value={horasExtras}
        onChangeText={setHorasExtras}
      />
      <TextInput
        style={styles.input}
        placeholder="Percentual de Adicional Noturno (%)"       
        keyboardType="numeric"
        value={String(percentualNoturno)}
        onChangeText={text => setPercentualNoturno(parseFloat(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Percentual de Horas Extras (%)"       
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
          <Text style={styles.buttonTextContainer} >Adicional Noturno: R$ {resultado.adicionalNoturno.toFixed(2)}</Text>
          <Text style={styles.buttonTextContainer} >Horas Extras: R$ {resultado.horasExtras.toFixed(2)}</Text>
          <Text style={styles.buttonTextContainer} >Total a Receber: R$ {resultado.total.toFixed(2)}</Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default MainScreen;
