/**
 * Created by AlnordWang on 2017/7/14.
 */

import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-length' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.prototype = {
  onCLick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo