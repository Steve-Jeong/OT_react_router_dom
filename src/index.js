import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Route, Switch, Link, NavLink, useParams} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home ...
    </div>
  )
}

var contents = [
  {id:1, title:"HTML", description:"HTML is ..."},
  {id:2, title:"JS", description:"JS is ..."},
  {id:3, title:"React", description:"React is ..."},
]

const Topic = () => {
  var params = useParams()
  var selected_contents = {
    title:"No Such Topic",
    description:"Topic not found"
  }
  for(let id in contents) {
    if(contents[id].id === Number(params.topic_id)) {
      selected_contents.title = contents[id].title
      selected_contents.description = contents[id].description
      break
    }
  }

  return (
    <div>
      <h2>{selected_contents.title}</h2>
      <p>{selected_contents.description}</p>
    </div>
  )
}


function Topics() {
  var lis = []
  for(let ls in contents) {
    lis.push(<li key={contents[ls].id}><NavLink to={"/topics/"+contents[ls].id}>{contents[ls].title}</NavLink></li>)
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Route path="/topics/:topic_id"><Topic></Topic></Route>
      {/* <Switch>
        <Route path="/topics/1">HTML is ...</Route>
        <Route path="/topics/2">JS is ...</Route>
        <Route path="/topics/3">React is ...</Route>
      </Switch> */}
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact ...
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route>URL not found</Route>
      </Switch>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
