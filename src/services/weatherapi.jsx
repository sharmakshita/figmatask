import axios from "axios"

const API_KEY = "847194b3ac623cb7192eec5e38fd1721"
const CITY = "Mount Abu"
const COUNTRY = "IN"

export const getWeather = async () => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&units=metric&appid=${API_KEY}`
  )
  return res.data
}

