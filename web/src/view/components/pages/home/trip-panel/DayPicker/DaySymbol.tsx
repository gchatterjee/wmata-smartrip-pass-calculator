import React from 'react'
import { Button } from 'react-bootstrap'
import { labels, Day } from './day-picker.constant'

interface Props {
  day: Day
  onChange?: (isSelected: boolean) => void
}
interface State {
  isSelected: boolean
}

export default class DaySymbol extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { isSelected: false }
  }

  toggle() {
    const { onChange } = this.props
    const { isSelected: currentlySelected } = this.state
    this.setState(({ isSelected }) => ({ isSelected: !isSelected }))
    if (onChange) onChange(!currentlySelected)
  }

  render() {
    const { day } = this.props
    const { isSelected } = this.state
    return (
      <Button
        className={`form-item day-symbol${isSelected ? ' selected' : ''}`}
        onClick={() => this.toggle()}
      >
        {labels[day]}
      </Button>
    )
  }
}
