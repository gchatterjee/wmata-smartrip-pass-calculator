import SelectedDays from '../selection/SelectedDays'
import Trip from './Trip'

export default class RecurringTrip extends Trip {
  days = new SelectedDays()
}
