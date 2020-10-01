import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from 'axios';
import Weather from './Weather';

const API_KEY = 'UvN086WZWnsvyn5zAyrLsHiPQI3iWVGq';
const API_HOST = 'http://dataservice.accuweather.com';

export default class extends React.Component{
  
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    // get Location Key for Accuweather Forecast API
    const { data: {Key} } = await axios.get(`${API_HOST}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude}%2C%20${longitude}`);
    // console.log(Key); // cape town location key
    // get Forecast
    // {WeatherText, Temperature: { Metric } = { Metric: null}} 
    const { data } = await axios.get(`${API_HOST}/currentconditions/v1/${Key}?apikey=${API_KEY}`);
    // console.log(data[0].Temperature.Metric.Value, data[0].WeatherText, data[0].WeatherIcon);
    this.setState({isLoading: false, temp: data[0].Temperature.Metric.Value, desc: data[0].WeatherText, icon: data[0].WeatherIcon});
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      // console.log(coords);
      // console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("can't determine the location lol");
      console.error('location error', error);
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() { 
    const {isLoading, temp, desc, icon} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} description={desc} icon={icon}/>;
  }
} 

