import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { labels, Day } from './day-picker.constant'

interface Props {
  day: Day
  onChange?: (isSelected: boolean) => void
}

export default function DaySymbol({ day, onChange = () => {} }: Props) {
  const [isSelected, setIsSelected] = useState(false)

  const toggle = () => {
    onChange(!isSelected)
    setIsSelected(!isSelected)
  }

  return (
    <Button className={`form-item day-symbol${isSelected ? ' selected' : ''}`} onClick={toggle}>
      {labels[day]}
    </Button>
  )
}
