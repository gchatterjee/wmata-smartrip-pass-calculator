import React from 'react'

import Loading from './components/loading'
import Error from './components/error'

interface Props {
  pageKey: string
}

interface State {
  isLoading: boolean
  Page?: React.ElementType
}

export default class View extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { isLoading: true }
    this.loadPage()
  }

  async loadPage() {
    const { pageKey } = this.props
    const { default: Page } = await import(`./components/pages/${pageKey}/${pageKey}`)
    this.setState({ Page, isLoading: false })
  }

  render() {
    const { isLoading, Page } = this.state

    let content = <Error />
    if (isLoading) content = <Loading />
    else if (Page) content = <Page />

    return <div className='page'>{content}</div>
  }
}
