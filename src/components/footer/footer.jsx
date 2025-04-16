import React from 'react';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import Favicon from '../../../assets/favicon.png'; // Adjust the path as necessary

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button}>
                    <ImageBackground source={Favicon} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button}>
                    <ImageBackground source={Favicon} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button}>
                    <ImageBackground source={Favicon} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    container: {              
        flexDirection: 'row',        
        backgroundColor: 'white',        
        borderRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,       
    },
    buttonWrapper: { 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%'
    },
    button: {
        padding: 8,
        borderRadius: 50,
        backgroundColor: '#ddd',
        alignItems: 'center',
    },
};

export default Footer;