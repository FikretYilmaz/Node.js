import express from 'express';

import fetch from 'node-fetch';
import { keys } from './sources/keys.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

app.post('/weather/:cityName', async (req, res) => {
  try {
    const parCityName = req.params.cityName;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${parCityName}&units=metric&appid=${keys.API_KEY}`;

    const fetchResponse = await fetch(apiUrl);
    const json = await fetchResponse.json();
    if (parseInt(json.cod) === 404) {
      const errorText = { weatherText: 'City is not found!' };
      res.json(errorText);
    } else {
      const weatherContent = {
        cityName: parCityName,
        Temperature: json.main.temp,
      };
      res.json(weatherContent);
    }
  } catch (error) {
    console.error(error);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is listening to port 3000`);
});

export default app;
