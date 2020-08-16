import PropsTypes from 'prop-types'
import React, { Component } from 'react'
import { Book }from './Books'
import { Hiring }from './Hiring'
import { NotHiring }from './NotHiring'

class Library extends Component {
    static defaultProps={
      books: [
        {
          "title" :"hello","author": "nsihan","pages": 1000
        }
      ]
    }
  
    state = {
      open: true,
      freeBookMark: false,
      hiring: true,
      data: [],
      loading: false
    }
    
    componentDidMount() {
      this.setState({
        loading: true
      })
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({ data, loading: false }))
    }
  
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //     open: true
    //   }
    //   this.toggleOpenCloased = this.toggleOpenCloased.bind(this)
    // }
  
    //=> it will bind the  method
  
    toggleOpenCloased = () => 
      // prevstate act as a call back function. no matter how long will it take it will change the state
      this.setState(prevState => ({
        open: !prevState.open
      }))
    
  
  
  
    render() {
      console.log(this.state)
      const { books } = this.props
      return (
        <div>
          {this.state.Hiring ? <Hiring /> : <NotHiring />}
  
          {this.state.loading
            ? "Loading...."
            : <div>
              {this.state.data.map(
                product => {
                  return (
                    <div key={product.id}>
                      <h3>library product of the week</h3>
                      <h4>{product.name}</h4>
                      <img alt={product.name} src={product.image} height={100} />
                    </div>
                  )
                }
              )}
            </div>}
  
          <button onClick={this.toggleOpenCloased}>Change</button>
          <h1>the library is {this.state.open ? 'open' : 'closed'}</h1>
          {books.map(
            (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} freeBookMark={this.state.freeBookMark} />
          )}
  
        </div>
      )
    }
  }
  //good for debugging
Library.PropsTypes={
    books:PropsTypes.array
  }
  export default Library