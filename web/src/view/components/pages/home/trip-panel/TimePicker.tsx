import React from 'react'
import TextField from '@mui/material/TextField'
import TimePicker from '@mui/lab/TimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterMoment'
import { Moment } from 'moment'

interface Props {
  onChange?: (time: { hour: number; minute: number }) => void
}

interface State {
  moment?: Moment
}

export default class BasicTimePicker extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  update(moment?: Moment) {
    const { onChange } = this.props
    this.setState({ moment })
    if (onChange && moment) onChange({ hour: moment?.hour(), minute: moment?.minute() })
  }

  render() {
    const { moment } = this.state

    return (
      <div className='form-item'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label='time'
            value={moment}
            onChange={newMoment => this.update(newMoment || undefined)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={params => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
    )
  }
}
