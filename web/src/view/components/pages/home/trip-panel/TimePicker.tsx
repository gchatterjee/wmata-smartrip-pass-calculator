import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import TimePicker from '@mui/lab/TimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterMoment'
import moment, { Moment } from 'moment'

interface Props {
  onChange?: (time: Moment) => void
}

export default function BasicTimePicker({ onChange = () => {} }: Props): JSX.Element {
  const [time, setTime] = useState<Moment>(moment())

  const update = (newTime: Moment) => {
    setTime(newTime)
    onChange(newTime)
  }

  return (
    <div className='form-item'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label='time'
          value={time}
          onChange={(newTime) => update(newTime || moment())}
          // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  )
}
