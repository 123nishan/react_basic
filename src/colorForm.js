import React, { Component } from 'react'
import { render } from 'react-dom'
class FavoriteColorForm extends Component {
  state = {
    value: ''
  }

  newColor = e=>
  this.setState({value:e.target.value})

submit=e=> {
  console.log(this.state.value)
  // button default action is it refresh the page using e.prevetDefault block it default function
  e.preventDefault()
}

  render () {
      return (
        <form onSubmit={this.submit}>
          <label>
            Favorite Color:
              <input type="color"
                      onChange={this.newColor}
              />
          </label>
          <button>Submit</button>
        </form>
      )
  }
}
export default FavoriteColorForm
// render (
//   <FavoriteColorForm/>,
//   document.getElementById('root')
// )