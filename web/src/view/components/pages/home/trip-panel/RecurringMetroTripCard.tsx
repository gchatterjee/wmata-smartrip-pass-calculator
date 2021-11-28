import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { Moment } from 'moment'
import StationPicker from './StationPicker'
import TimePicker from './TimePicker'
import DayPicker, { WeekRecord } from './DayPicker'

export interface RecurringTrip {
  source?: string
  destination?: string
  week?: WeekRecord
  time?: Moment
  shouldBeDeleted: boolean
  id: string
}

interface Props {
  id: string
  stations: Record<string, Station>
  onChange?: (trip: RecurringTrip) => void
}

export default function RecurringMetroTripCard({ stations, id, onChange = () => {} }: Props) {
  const [recurringTrip, setRecurringTrip] = useState<RecurringTrip>({ shouldBeDeleted: false, id })

  const update = ({
    source,
    destination,
    week,
    time,
    shouldBeDeleted,
  }: {
    source?: string
    destination?: string
    week?: WeekRecord
    time?: Moment
    shouldBeDeleted?: boolean
  }) => {
    const newVal = {
      id,
      source: source || recurringTrip.source,
      destination: destination || recurringTrip.destination,
      week: week || recurringTrip.week,
      time: time || recurringTrip.time,
      shouldBeDeleted: shouldBeDeleted || recurringTrip.shouldBeDeleted,
    }
    onChange(newVal)
    setRecurringTrip(newVal)
  }

  return (
    <Card className='trip-card recurring-trip-card'>
      <Card.Header>Metro Trip</Card.Header>
      <Card.Body>
        <Form>
          <StationPicker
            stations={stations}
            label='Source Station'
            onChange={source => update({ source })}
          />
          <StationPicker
            stations={stations}
            label='Destination Station'
            onChange={destination => update({ destination })}
          />
          <DayPicker onChange={week => update({ week })} />
          <TimePicker onChange={time => update({ time })} />
        </Form>
        <Button variant='warning' onClick={() => update({ shouldBeDeleted: true })}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}
