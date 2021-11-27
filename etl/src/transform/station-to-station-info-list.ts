import path from 'path'
import { promises as fs } from 'fs'

const DATA_DIRECTORY = path.resolve(__dirname, '..', 'data')

const transform = async () => {
  const stationToStationInfoList: StationToStationInfoList = JSON.parse(
    await fs.readFile(`${DATA_DIRECTORY}/station-to-station-info-list.json`, 'utf-8')
  )
  const { StationToStationInfos: stationToStationInfos } = stationToStationInfoList
  return stationToStationInfos.reduce(
    (
      stationToStationInfoMap: Record<string, Record<string, StationToStationInfo>>,
      stationToStationInfo: StationToStationInfo
    ) => {
      const { SourceStation: sourceStation, DestinationStation: destinationStation } =
        stationToStationInfo
      const sourceMap = { ...(stationToStationInfoMap[sourceStation] || {}) }
      sourceMap[destinationStation] = stationToStationInfo
      return { ...stationToStationInfoMap, [sourceStation]: sourceMap }
    },
    {}
  )
}

export default transform
