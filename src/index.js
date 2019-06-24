import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'semantic-ui-css/semantic.min.css'

// user_id: 14
// GET https://warm-shore-17060.herokuapp.com/api/v1/users/:user_id/courses

// GET https://warm-shore-17060.herokuapp.com/api/v1/users/:user_id/courses/:id

// PATCH: https://warm-shore-17060.herokuapp.com/api/v1/users/:user_id/students/:id

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
