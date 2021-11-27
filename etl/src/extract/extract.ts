import path from 'path'
import { promises as fs } from 'fs'

import dotenv from 'dotenv'

import getStationList from './station-list'
import getStationToStationInfoList from './station-to-station-info-list'

const { error, parsed } = dotenv.config()
if (error) throw error

const DATA_DIRECTORY = path.resolve(__dirname, '..', 'data')

const extractStationList = async (apiKey: string) => {
  const stations = await getStationList(apiKey)
  await fs.writeFile(`${DATA_DIRECTORY}/station-list.json`, JSON.stringify(stations), 'utf-8')
}

const extractStationToStationInfoList =  async (apiKey: string) => {
  const stationToStation = await getStationToStationInfoList(apiKey)
  await fs.writeFile(
    `${DATA_DIRECTORY}/station-to-station-info-list.json`,
    JSON.stringify(stationToStation),
    'utf-8'
  )
}

const extract = async () => {
  console.log('starting extract process...')
  if (!parsed || !parsed['PRIMARY_KEY']) throw new Error('unable to retrieve API key')
  const apiKey = parsed['PRIMARY_KEY']

  try {
    await Promise.all([ extractStationList(apiKey), extractStationToStationInfoList(apiKey)])
    console.log('finished extract process.')
  } catch (err) {
    console.error('extract process failed.', err)
  }
}

export default extract
