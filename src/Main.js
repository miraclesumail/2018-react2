import React from 'react'
import querystring from 'querystring'
import { Provider } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Todo from './todo/app'

const Topic = ({match,location}) => {
  return(
      <div>
       <h3>{match.params.topicId}</h3>
       <h3>{querystring.parse(location.search.substr(1))['age']}</h3>
    </div>
  )
}
    
let players = [
    {name:'miracle',age:22,topic:'ddddddd'},
    {name:'qwer',age:23,topic:'eeeeeee'},
    {name:'asdf',age:25,topic:'fffffff'}
  ]  

const Player = ({ match }) => {
 
  console.log( match )
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {
            players.map( (player,index) => 
              (<li key={index}><Link to={`${match.url}/${player.topic}?age=${player.age}`}>{player.name}</Link></li>)
            )
        }  
        
        {/*<li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
        <li><Link to={`${match.url}/components`}>Components</Link></li>
        <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>*/}
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
    </div>
  )
}

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = ({store}) => (
    <Provider store={store}>
        <main>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/Home' component={Home}/>
                <Route path='/About' component={About}/>
                <Route path='/players' component={Player}/>
                <Route path='/todos' component={Todo}/>
            </Switch>
        </main>
    </Provider>    
)

export default Main