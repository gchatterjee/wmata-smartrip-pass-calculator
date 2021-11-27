import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './app.scss'
import View from './view/view'
import { PAGE_KEYS, NOT_FOUND_KEY, PUBLIC_URL } from './app.constant'

const [defaultUrl] = Object.keys(PAGE_KEYS)
const defaultRoute = `/${defaultUrl || NOT_FOUND_KEY}`
const notFoundRoute = `/${NOT_FOUND_KEY}`

export default class App extends React.PureComponent {
  render() {
    return (
      <div className='container'>
        <Router basename={PUBLIC_URL}>
          <Routes>
            {Object.keys(PAGE_KEYS).map(key => (
              <Route key={key} path={`/${key}`} element={<View pageKey={key} />} />
            ))}
            <Route path={notFoundRoute} element={<View pageKey={NOT_FOUND_KEY} />} />
            <Route path='/' element={<Navigate to={defaultRoute} replace />} />
            <Route path='*' element={<Navigate to={notFoundRoute} replace />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
