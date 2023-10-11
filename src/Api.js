import axios from 'axios';

const API_KEY = '57deaace5f83e02f27a32080d2690d48';

export const getCurrentWeather = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getForecast = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};