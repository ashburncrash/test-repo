import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { LinearGradient } from 'expo-linear-gradient';
import { weatherOptions } from './Constant';

export default function Weather ({temp, description, icon}){
    return (
        <LinearGradient
            colors={weatherOptions[icon].gradientColors}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[icon].iconName} size={100} color="white" />
                <Text style={styles.tempText}>{temp} °C</Text>
            </View>
            <View style={styles.halfContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{description}</Text>    
                    <Text style={styles.subtitleText}>{weatherOptions[icon].text}</Text>
                </View>
            </View>
        </LinearGradient>
    );

}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        tempText: {
            fontSize: 60,
            color: 'white'
        },
        titleText: {
            fontSize: 48,
            color: 'white',
            marginBottom: 10
        },
        subtitleText: {
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold'
        },
        halfContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        textContainer: {
            alignItems: "flex-start",
            paddingHorizontal: 40,
            justifyContent: "center",
            flex: 1
        }
    }
);

