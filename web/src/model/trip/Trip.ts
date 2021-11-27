import { v4 as uuid } from 'uuid'

import SelectedStation from '../selection/SelectedStation'
import SelectedTime from '../selection/SelectedTime'

export default class Trip {
  source = new SelectedStation()

  destination = new SelectedStation()

  time = new SelectedTime()

  id: string

  constructor() {
    this.id = uuid()
  }
}
