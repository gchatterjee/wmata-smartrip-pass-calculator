import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import RecurringTrip from '../../../../../model/trip/RecurringTrip'
import SelectedStation from '../../../../../model/selection/SelectedStation'

import StationPicker from './StationPicker'
import TimePicker from './TimePicker'
import DayPicker from './DayPicker/DayPicker'

interface Props {
  trip: RecurringTrip
  remove: () => void
  stations: Record<string, Station>
  onChange?: (trip: RecurringTrip) => void
}

export default class RecurringMetroTripCard extends React.PureComponent<Props> {
  render() {
    const { remove, stations, trip } = this.props

    return (
      <Card className='trip-card recurring-trip-card'>
        <Card.Header>Metro Trip</Card.Header>
        <Card.Body>
          <Form>
            <StationPicker
              stations={stations}
              controlId='metro-trip.source'
              label='Source Station'
              onChange={(station: SelectedStation) => {
                trip.source = station
              }}
            />
            <StationPicker
              stations={stations}
              controlId='metro-trip.destination'
              label='Destination Station'
              onChange={(station: SelectedStation) => {
                trip.destination = station
              }}
            />
            <DayPicker onChange={console.log} />
            <TimePicker onChange={console.log} />
          </Form>
          <Button variant='warning' onClick={remove}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    )
  }
}
