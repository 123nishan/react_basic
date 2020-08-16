import React, { Component } from 'react'
import { render } from 'react-dom'
import Library from './library'


let bookList = [
  { "title": "The sun", "author": "nishan", "pages": 260 },
  { "title": "The moon", "author": "sam", "pages": 260 }
]

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
//           <p>Powder days: {props.powder}</p>
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