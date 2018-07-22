import React from 'react'
import Footer from './footer'
import AddTodo from './addTodo'
import VisibleTodoList from './visibleTodoList'

const Todo = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default Todo