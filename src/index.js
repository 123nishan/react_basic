import React, { Component } from 'react'
import { render } from 'react-dom'

let bookList = [
  { "title": "The sun", "author": "nishan", "pages": 260 },
  { "title": "The moon", "author": "sam", "pages": 260 }
]

const Book = ({ title, author, pages, freeBookMark }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free BookMark {freeBookMark ? 'yes ' : 'no!'}</p>
    </section>
  )
}


const Hiring = () =>
  <div> 
    <p>The library is hiring</p>
  </div>


const NotHiring = () =>
  <div> 
    <p>The library is not hiring</p>
  </div>

class Library extends Component {

  state = {
    open: true,
    freeBookMark: false,
    hiring:true
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     open: true
  //   }
  //   this.toggleOpenCloased = this.toggleOpenCloased.bind(this)
  // }

  //=> it will bind the  method

  toggleOpenCloased = () => {
    // prevstate act as a call back function. no matter how long will it take it will change the state
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }



  render() {
    console.log(this.state)
    const { books } = this.props
    return (
      <div>
         {this.state.Hiring? <Hiring/> :<NotHiring/>}
        <button onClick={this.toggleOpenCloased}>Change</button>
        <h1>the library is {this.state.open ? 'open' : 'closed'}</h1>
        {books.map(
          (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} freeBookMark={this.state.freeBookMark} />
        )}

      </div>
    )
  }
}

render(
  <Library books={bookList} />,
  document.getElementById('root')
)





// let skiData={
//   total: 50,
//   powder:20,
//   backcountry:10,
//   goal:100
// }
// // class name should be always upper case, 
// // class Message extends React.Component{
// //   //render method is like main or build method
// //   render(){
// //     return (
// //       <div>
// //         <h1 style={{color:this.props.color}}>{this.props.msg}</h1>
// //     <p>i will check back in {this.props.minutes} minutes</p>
// //       </div>
// //     )
// //   }
// // }

// // below is alternative for tag based design, like widget in flutter 

// // const title=React.createElement(
// //   'ul',
// //   {id:'title',className:'header',style:style},
// //   React.createElement(
// //     'li',
// //     {},
// //     'Item here'
// //   )
// // )


// const getPercentage = decimal=> {
//   return decimal*100+'%'
// }
// const calcGoalProgress=(total,goal)=> {
//   return getPercentage(total/goal)
// }



// //component can also be created as fuction which returns jsx element
// const SkiDayCounter=(props)=> {
//   return (
//     <section>
//       <div>
//           <p>Total days: {props.total}</p>
//       </div>
//       <div>
//           <p>Powder days: assadfhdkf gujsdbf{props.powder}</p>
//       </div>
//       <div>
//           <p>backcountry days: {props.backcountry}</p>
//       </div>
//       <div>
//           <p>goal days: {calcGoalProgress(props.total,props.goal)}</p>
//       </div>
//     </section>
//   )
// }

// // class SkiDayCounter extends Component{



// //   render(){
// //     const {total,powder,backcountry,goal}=this.props

// //   }
// // }

// render(
//  // <Message color="blue" msg="how are you?"  minutes={5}/>,
//  <SkiDayCounter total={skiData.total} powder={skiData.powder} backcountry={skiData.backcountry} goal={skiData.goal}/>,
//   // <div style={style}>
//   //     <h1 id="heading elemet">Hello world</h1>
//   //     <p>We are glad you are here.</p>
//   // </div>,
//     document.getElementById('root')

// )