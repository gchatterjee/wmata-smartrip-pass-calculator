import axios from 'axios'

const STATION_LIST_URL = 'https://api.wmata.com/Rail.svc/json/jStations'

const extract = async (apiKey: string) => {
  const headers = { api_key: apiKey }
  const { data }: { data: StationList } = await axios.get(STATION_LIST_URL, { headers })
  return data
}

export default extract
