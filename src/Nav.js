import React from 'react'
import Header from './Header'
import Main from './Main'
import todoApp from './reducer/index'
import { createStore } from 'redux'

let store = createStore(todoApp)
const Nav = () => (
  <div>
    <Header />
    <Main store={store}/>
  </div>
)

export default Nav