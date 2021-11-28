import React, { useState } from 'react'
import DaySymbol from './DaySymbol'

import { Day as DayToken, week } from './day-picker.constant'

export type WeekRecord = Record<DayToken, boolean>
interface Props {
  onChange?: (state: WeekRecord) => void
}

export default function DayPicker({ onChange = () => {} }: Props): JSX.Element {
  const [selectedDays, setSelectedDays] = useState<WeekRecord>(
    week.reduce((records, day: DayToken) => ({ ...records, [day]: false }), {}) as WeekRecord
  )

  const update = (day: DayToken, isSelected: boolean) => {
    const newVal: WeekRecord = { ...selectedDays, [day]: isSelected }
    setSelectedDays(newVal)
    onChange(newVal)
  }

  return (
    <>
      {week.map(day => (
        <DaySymbol
          key={day}
          day={day}
          onChange={(isSelected: boolean) => update(day, isSelected)}
        />
      ))}
    </>
  )
}

export type Day = DayToken
