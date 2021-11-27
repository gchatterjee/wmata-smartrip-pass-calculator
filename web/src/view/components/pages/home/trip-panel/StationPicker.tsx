import React from 'react'
import Form from 'react-bootstrap/Form'

import SelectedStation from '../../../../../model/selection/SelectedStation'

interface Props {
  stations: Record<string, Station>
  onChange?: (station: SelectedStation) => void
  label: string
  controlId: string
}

export default class StationPicker extends React.PureComponent<Props> {
  render() {
    const { stations, onChange, controlId, label } = this.props

    return (
      <Form.Group controlId={controlId} className='form-item'>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as='select'
          onChange={event => {
            const selected = new SelectedStation()
            selected.station = event?.target?.value as string
            if (onChange) onChange(selected)
          }}
        >
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
}
