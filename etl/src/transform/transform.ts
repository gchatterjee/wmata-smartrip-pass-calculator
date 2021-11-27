import path from 'path'
import { promises as fs } from 'fs'

import getStationList from './station-list'
import getStationToStationInfoList from './station-to-station-info-list'

const DATA_DIRECTORY = path.resolve(__dirname, '..', 'data')

const transformStationList = async () => {
  console.log('transforming station list...')
  const stations = await getStationList()
  await fs.writeFile(
    `${DATA_DIRECTORY}/station-list-transformed.json`,
    JSON.stringify(stations),
    'utf-8'
  )
  console.log('finished transforming station list.')
}

const transformStationToStationInfoList = async () => {
  console.log('transforming station-to-station list...')
  const stationToStation = await getStationToStationInfoList()
  await fs.writeFile(
    `${DATA_DIRECTORY}/station-to-station-info-list-transformed.json`,
    JSON.stringify(stationToStation),
    'utf-8'
  )
  console.log('finished transforming station-to-station list.')
}

const transform = async () => {
  console.log('starting transform process...')
  try {
    await Promise.all([transformStationList(), transformStationToStationInfoList()])
  } catch (err) {
    console.error('transform error', err)
  }
  console.log('finished transform process.')
}

export default transform
