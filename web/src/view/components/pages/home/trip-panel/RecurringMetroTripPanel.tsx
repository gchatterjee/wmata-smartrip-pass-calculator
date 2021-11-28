import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'

import RecurringMetroTripCard, { RecurringTrip } from './RecurringMetroTripCard'

interface Props {
  stations: Record<string, Station>
}

export default function RecurringMetroTripPanel({ stations }: Props) {
  const [trips, setTrips] = useState<RecurringTrip[]>([{ shouldBeDeleted: false, id: uuid() }])

  const addTrip = () => setTrips([...trips, { shouldBeDeleted: false, id: uuid() }])
  const modifyTrip = (trip: RecurringTrip) => {
    const { id: modifyId, shouldBeDeleted } = trip
    const mutationIndex = trips.map(({ id }) => id).indexOf(modifyId)
    if (mutationIndex !== -1) {
      if (shouldBeDeleted) setTrips([...trips.slice(0, mutationIndex), ...trips.slice(mutationIndex + 1)])
      else setTrips([...trips.slice(0, mutationIndex), trip, ...trips.slice(mutationIndex + 1)])
    }
  }

  return (
    <div className='trip-container'>
      <h2>Recurring Trips</h2>
      {trips.map(
        ({ shouldBeDeleted, id }) =>
          !shouldBeDeleted && (
            <RecurringMetroTripCard key={id} id={id} onChange={modifyTrip} stations={stations} />
          )
      )}
      <Button variant='primary' onClick={addTrip}>
        Add Another
      </Button>
    </div>
  )
}
