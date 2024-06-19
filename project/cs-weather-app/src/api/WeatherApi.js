import Axios from "axios";

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

const convertDate = (date) => {
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
  return `${year}-${month}-${day}`;
};

const getWeather = async ({ latitude, longitude }) => {
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000); // Add 7 days in milliseconds

  const { data: weatherInfo } = await Axios.get(WEATHER_API_URL, {
    params: {
      latitude,
      longitude,
      current_weather: true,
      timezone: "IST",
      daily: ["temperature_2m_max", "temperature_2m_min", "weathercode"],
      start_date: convertDate(startDate),
      end_date: convertDate(endDate),
    },
  });
  return weatherInfo;
};

export default getWeather;
