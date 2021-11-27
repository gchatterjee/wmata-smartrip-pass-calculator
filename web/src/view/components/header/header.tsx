import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'

import { TITLE, PAGE_KEYS } from '../../../app.constant'

interface Props {
  pageKey: string
}

export default class Header extends React.PureComponent<Props> {
  render() {
    const { pageKey } = this.props

    return (
      <Navbar variant='dark' className='mr-auto navbar'>
        <LinkContainer to='/home'>
          <Navbar.Brand>{TITLE}</Navbar.Brand>
        </LinkContainer>
        <Nav className='mr-auto'>
          {Object.entries(PAGE_KEYS).map(([key, title]) => (
            <LinkContainer key={key} to={`${key}`}>
              <Nav.Link href={`${key}`} className={key === pageKey ? 'navlink active' : 'navlink'}>
                {title}
              </Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Navbar>
    )
  }
}
