import * as React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Login } from './pages/login'
import { Table } from './pages/table'
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`

const Main: React.FC = () => {

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/attendance_management" element={<Table />} />
        </Routes>
      </Router>
    </>
  )
}

render(<Main />, document.getElementById('app'))