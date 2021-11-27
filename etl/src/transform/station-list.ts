import path from 'path'
import { promises as fs } from 'fs'

const DATA_DIRECTORY = path.resolve(__dirname, '..', 'data')

const transform = async () => {
  const stationList: StationList = JSON.parse(
    await fs.readFile(`${DATA_DIRECTORY}/station-list.json`, 'utf-8')
  )
  const { Stations: stations } = stationList
  return stations.reduce(
    (stationMap: Record<string, Station>, station: Station) => ({
      ...stationMap,
      [station.Code]: station,
    }),
    {}
  )
}

export default transform
