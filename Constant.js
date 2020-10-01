import React from 'react';

const subtitleTexts = [
    "Hot AF",
    "Coooooooold!",
    "Do yourself a favor and stay home",
    "Hole in the skies",
    "Not a good day to pick a fight",
    "Might not want to take a chance with a lightning",
    "Yep, wet and slippery 😉",
    "you'll be blind by nature today",
    "I know, fucking boring",
    "This much wind is so unnecessary"
];

export const weatherOptions = {
    1:	{
        iconName: 'weather-sunny',
        gradientColors: ["#ffe259", "#ffa751"],
        text: subtitleTexts[0]
    },
    2:	{
        iconName: 'weather-sunny',
        gradientColors: ["#EDE574", "#E1F5C4"],
        text: subtitleTexts[0]
    },
    3:	{
        iconName: 'weather-partly-cloudy',
        gradientColors: ["#D4D3DD", "#EFEFBB"],
        text: subtitleTexts[8]
    },
    4:	{
        iconName: 'weather-partly-cloudy',
        gradientColors: ["#D4D3DD", "#EFEFBB"],
        text: subtitleTexts[8]
    },
    5:	{
        iconName: 'weather-hazy',
        gradientColors: ["#2c3e50", "#bdc3c7"],
        text: subtitleTexts[7]
    },
    6:	{
        iconName: 'weather-cloudy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[8]
    },
    7:	{
        iconName: 'weather-cloudy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[8]
    },
    8:	{
        iconName: 'weather-cloudy-alert',
        gradientColors: ["#bdc3c7", "#2c3e50"],
        text: subtitleTexts[2]
    },
    11:	{
        iconName: 'weather-fog',
        gradientColors: ["#8e9eab", "#eef2f3"],
        text: subtitleTexts[7]
    },
    12: {
        iconName: 'weather-partly-rainy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[6]
    },
    13: {
        iconName: 'weather-rainy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[3]
    },
    14: {
        iconName: 'weather-partly-rainy',
        gradientColors: ["#2BC0E4", "#EAECC6"],
        text: subtitleTexts[6]
    },
    15:	{
        iconName: 'weather-lightning',
        gradientColors: ["#1F1C2C", "#928DAB"],
        text: subtitleTexts[5]
    },
    16:	{
        iconName: 'weather-lightning',
        gradientColors: ["#BBD2C5", "#536976", "#292E49"],
        text: subtitleTexts[5]
    },
    17:	{
        iconName: 'weather-partly-lightning',
        gradientColors: ["#E8CBC0", "#636FA4"],
        text: subtitleTexts[5]
    },
    18:	{
        iconName: 'weather-rainy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[3]
    },
    19:	{
        iconName: 'weather-snowy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[4]
    },	
    20:	{
        iconName: 'weather-snowy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[4]
    },
    21:	{
        iconName: 'weather-partly-snowy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[4]
    },	
    22:	{
        iconName: 'weather-snowy-heavy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[2]
    },	
    23:	{
        iconName: 'weather-partly-snowy',
        gradientColors: ["#757F9A", "#D7DDE8"]
    },	
    24:	{
        iconName: 'weather-hail',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[2]
    },	
    25:	{
        iconName: 'weather-snowy-rainy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[1]
    },	
    26:	{
        iconName: 'weather-rainy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[6]
    },	
    29:	{
        iconName: 'weather-snowy-rainy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[1]
    },	
    30:	{
        iconName: 'weather-sunny-alert',
        gradientColors: ["#fc4a1a", "#f7b733"],
        text: subtitleTexts[0]
    },	
    31:	{
        iconName: 'weather-windy-variant',
        gradientColors: ["#457fca", "#5691c8"],
        text: subtitleTexts[9]
    },
    32:	{
        iconName: 'weather-windy',
        gradientColors: ["#acb6e5", "#86fde8"],
        text: subtitleTexts[9]
    },
    33:	{
        iconName: 'weather-sunny',
        gradientColors: ["#2193b0", "#6dd5ed"],
        text: subtitleTexts[0]
    },
    34:	{
        iconName: 'weather-sunny',
        gradientColors: ["#36D1DC", "#5B86E5"],
        text: subtitleTexts[0]
    },
    35:	{
        iconName: 'weather-partly-cloudy',
        gradientColors: ["#c0c0aa", "#1cefff"],
        text: subtitleTexts[8]
    },	
    36:	{
        iconName: 'weather-partly-cloudy',
        gradientColors: ["#c0c0aa", "#1cefff"],
        text: subtitleTexts[8]
    },
    37:	{
        iconName: 'weather-night-partly-cloudy',
        gradientColors: ["#525252", "#3d72b4"],
        text: subtitleTexts[8]
    },
    38:	{
        iconName: 'weather-cloudy',
        gradientColors: ["#bdc3c7", "#2c3e50"],
        text: subtitleTexts[8]
    },	
    39:	{
        iconName: 'weather-partly-rainy',
        gradientColors: ["#757F9A", "#D7DDE8"],
        text: subtitleTexts[6]
    },	
    40:	{
        iconName: 'weather-partly-rainy',
        gradientColors: ["#bdc3c7", "#2c3e50"],
        text: subtitleTexts[6]
    },
    41:	{
        iconName: 'weather-partly-lightning',
        gradientColors: ["#808080", "#3fada8"],
        text: subtitleTexts[5]
    },
    42:	{
        iconName: 'weather-partly-lightning',
        gradientColors: ["#403A3E", "#BE5869"],
        text: subtitleTexts[5]
    },	
    43:	{
        iconName: 'weather-partly-snowy',
        gradientColors: ["#304352", "#d7d2cc"]
    },
    44:	{
        iconName: 'weather-partly-snowy',
        gradientColors: ["#304352", "#d7d2cc"]
    }
};