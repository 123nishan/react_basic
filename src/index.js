import React, { Component, useState } from 'react'
import { render } from 'react-dom'
import Library from './library'
import App from './function'
import FavoriteColorForm from './colorForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let bookList = [
  { "title": "The sun", "author": "nishan", "pages": 260 },
  { "title": "The moon", "author": "sam", "pages": 260 }
]



var Car = () => {
  const [state, setstate] = useState(0);
  const setCount = (name) => {
    alert(`hello, ${name}`);
    // console.log(name);
    setstate(state + 1);

  }
  

  return (
    <div>
      <button onClick={() => setCount('nishan')}>
        Click me
</button>
      <br />
      <p>{state}</p>
    </div>
  );
}
class Main extends Component {
  render() {
    return (
        <Router>
          <div className="Main">
            <ul className="Main-header">
              <li>
                <Link to="/">Car</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <Link to="/color">Color</Link>
              </li>
              <li>
                <Link to="/function">Function</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path='/' component={Car}></Route>
              <Route exact path='/library' component={Library}></Route>
              <Route exact path='/color' component={FavoriteColorForm}></Route>
              <Route exact path='/function' component={App}></Route>
            </Switch>
          </div>
        </Router>
    ) ;
  }
}
// const ExampleComponent = () => {



//   return (
//     <button onClick={() => sayHello('James')}>Greet</button>
//   );
// }


render(
  // <Library books={bookList} />,
  <Main />,
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