import AdHocTrip from '../trip/AdHocTrip'
import RecurringTrip from '../trip/RecurringTrip'

type TripType = 'AdHoc' | 'Recurring'

export default class AppData {
  trips = {
    recurring: [new RecurringTrip()],
    adHoc: [new AdHocTrip()],
  }

  addTrip({ type }: { type: TripType }) {
    switch (type) {
      case 'AdHoc':
        this.trips.adHoc = [...this.trips.adHoc, new AdHocTrip()]
        break
      case 'Recurring':
        this.trips.recurring = [...this.trips.recurring, new RecurringTrip()]
        break
      default:
        throw new Error('unknown trip type')
    }
  }

  removeTrip(id: string, options?: { type?: TripType }) {
    switch (options?.type) {
      case 'AdHoc':
        this.trips.adHoc = this.trips.adHoc.filter(trip => trip.id !== id)
        break
      case 'Recurring':
        this.trips.recurring = this.trips.recurring.filter(trip => trip.id !== id)
        break
      default:
        throw new Error('unknown trip type')
    }
  }
}
