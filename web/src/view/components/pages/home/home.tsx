import React, { useState, useEffect } from 'react'

import { TITLE } from '../../../../app.constant'
import RecurringMetroTripPanel from './trip-panel/RecurringMetroTripPanel'

export default function Home(): JSX.Element {
  const [stations, setStations] = useState<Record<string, Station> | undefined>()

  useEffect(() => {
    const getStations = async () => {
      const { default: stationList } = await import(
        '../../../../data/station-list-transformed.json'
      )
      setStations(stationList)
    }
    getStations()
  }, [])

  return stations ? (
    <>
      <h1>{TITLE}</h1>
      {/* <MonthChooser />
  this component will allow the user to choose a month */}
      <RecurringMetroTripPanel stations={stations || {}} />
    </>
  ) : (
    <div>loading...</div>
  )
}
