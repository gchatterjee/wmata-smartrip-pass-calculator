import React from 'react'

interface Props {
  pageKey: string
}

export default class View extends React.PureComponent<Props> {
  render() {
    const { pageKey } = this.props
    return (
      <div>
        <h1>{pageKey}</h1>
      </div> // implement logic to show different pages here
    )
  }
}
