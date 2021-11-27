import React from 'react'
import { Button } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'
import RecurringTrip from '../../../../../model/trip/RecurringTrip'

import RecurringMetroTripCard from './RecurringMetroTripCard'

interface Props {
  stations: Record<string, Station>
  onTripAdd?: (trip: RecurringTrip) => void
  onTripRemove?: () => void
}

interface State {
  trips: { id: string; trip: RecurringTrip }[]
}

export default class RecurringMetroTripPanel extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { trips: [{ id: uuid(), trip: new RecurringTrip() }] }
  }

  addTrip() {
    const { onTripAdd } = this.props
    const trip = new RecurringTrip()
    this.setState(({ trips }) => ({ trips: [...trips, { id: uuid(), trip }] }))
    if (onTripAdd) onTripAdd(trip)
  }

  removeTrip(removeId: string) {
    const { onTripRemove } = this.props
    this.setState(({ trips }) => ({ trips: trips.filter(({ id }) => id !== removeId) }))
    if (onTripRemove) onTripRemove()
  }

  render() {
    const { stations } = this.props
    const { trips } = this.state

    return (
      <div className='trip-container'>
        <h2>Recurring Trips</h2>
        {trips.map(({ id, trip }) => (
          <RecurringMetroTripCard
            key={id}
            trip={trip}
            remove={() => this.removeTrip(id)}
            stations={stations}
          />
        ))}
        <Button variant='primary' onClick={() => this.addTrip()}>
          Add Another
        </Button>
      </div>
    )
  }
}
