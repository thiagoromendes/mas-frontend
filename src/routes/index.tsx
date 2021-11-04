import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Dashboard } from '../pages/Dashboard'
import { NotFound } from '../pages/NotFound'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" />
  </Switch>
)

export default Routes
