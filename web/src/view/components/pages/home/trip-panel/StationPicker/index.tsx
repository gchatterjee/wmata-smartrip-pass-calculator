import React from 'react'
import Form from 'react-bootstrap/Form'

import { v4 as uuid } from 'uuid'

interface Props {
  stations: Record<string, Station>
  onChange?: (station: string) => void
  label: string
}

export default function StationPicker({
  stations,
  label,
  onChange = () => {},
}: Props): JSX.Element {
  return (
    <Form.Group controlId={uuid()} className='form-item'>
      <Form.Label>{label}</Form.Label>
      <Form.Control as='select' onChange={event => onChange(event?.target?.value as string)}>
        <option key='default'>Select a Station</option>
        {Object.entries(stations).map(
          ([code, { Name: name }]: [code: string, station: Station]) => (
            <option key={code} value={code}>
              {name}
            </option>
          )
        )}
      </Form.Control>
    </Form.Group>
  )
}
