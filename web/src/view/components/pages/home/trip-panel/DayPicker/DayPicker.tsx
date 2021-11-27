import React from 'react'
import { Day, week } from './day-picker.constant'
import DaySymbol from './DaySymbol'

type State = Record<Day, boolean>
interface Props {
  onChange?: (state: State) => void
}

export default class DayPicker extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = week.reduce((records, day: Day) => ({ ...records, [day]: false }), {}) as State
  }

  update(day: Day, isSelected: boolean) {
    const { onChange } = this.props
    this.setState({ [day]: isSelected })
    if (onChange) onChange({ ...this.state, [day]: isSelected })
  }

  render() {
    return (
      <>
        {week.map(day => (
          <DaySymbol
            key={day}
            day={day}
            onChange={(isSelected: boolean) => this.update(day, isSelected)}
          />
        ))}
      </>
    )
  }
}
