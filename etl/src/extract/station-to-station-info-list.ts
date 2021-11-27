import axios from 'axios'

const STATION_TO_STATION_INFO_LIST_URL =
  'https://api.wmata.com/Rail.svc/json/jSrcStationToDstStationInfo'

const extract = async (apiKey: string) => {
  const headers = { api_key: apiKey }
  const { data }: { data: StationToStationInfoList } = await axios.get(
    STATION_TO_STATION_INFO_LIST_URL,
    { headers }
  )
  return data
}

export default extract
