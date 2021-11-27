import React from 'react'

import { TITLE } from '../../../../app.constant'
import RecurringMetroTripPanel from './trip-panel/RecurringMetroTripPanel'

interface Props {}
interface State {
  loading: boolean
  stations?: Record<string, Station>
}

export default class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { loading: true }
    this.getStations()
  }

  async getStations() {
    const { default: stations } = await import('../../../../data/station-list-transformed.json')
    this.setState({ loading: false, stations })
  }

  render() {
    const { loading, stations } = this.state
    return loading ? (
      <div>loading...</div>
    ) : (
      <>
        <h1>{TITLE}</h1>
        {/* <MonthChooser />
      this component will allow the user to choose a month */}
        <RecurringMetroTripPanel stations={stations || {}} />
      </>
    )
  }
}
