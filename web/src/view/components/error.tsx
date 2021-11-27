import React from 'react'
import { Alert } from 'react-bootstrap'

const text = 'Something went wrong.'

export default class Error extends React.PureComponent {
  render() {
    return <Alert variant='error'>{text}</Alert>
  }
}
