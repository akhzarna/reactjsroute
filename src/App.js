import React from 'react';
import logo from './logo.svg';
import './App.css';

import fire from './Fire'

import { BrowserRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom';

function Register(props){
  return (
  <h1> My Register {props.match.params.rollnumber} </h1>
  );
}

function Login(props){
  return (
    <h1> My Login {props.match.params.rollnumber} </h1>
  );
}

function Dashboard(props){
  return (<h1> My Dashboard {props.match.params.rollnumber} </h1>
  );
}

class App extends React.Component {
  constructor(props){
    super(props);
  }

  DashboardClick(props){
    props.history.push('/Dashboard');
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  try = () => {
      // this.props.history.push('/Dashboard');

      return <Redirect to='/Dashboard' />

  }


  componentDidMount(){
    alert('Test Alert');

    fire.auth().signInWithEmailAndPassword('test1@gmail.com','123456').then((u)=>{
      alert('Successfully Signed In');
    }).catch((error)=>{
      alert('Login or password is not Correct');
    });
  }

  render() {
      return(

        // <Router>
        //   <Switch>
        //       <Route path='/' exact component={Register} />
        //       <Route path='/Login' component={Login} />
        //       <Route path='/Dashboard' component={Dashboard} />
        //
        //       <Route path='/Testone' component={Testone} />
        //
        //   </Switch>
        // </Router>

    <Router>

      <div>

        <Link to='/Register/Osama'> Register </Link>
        <Link to='/Login/2'> Login </Link>
        <Link to='/Dashboard/3'> Dashboard </Link>

        <button onClick={this.DashboardClick.bind(this)}> Dashboard Click </button>

        <button onClick={() => this.nextPath('/Dashboard') }>
        change path
        </button>

        <button id="b1" onClick ={this.try}>Click me</button>

        <Route path='/Dashboard/' component={Dashboard} />

        <Switch>
          <Route path='/Register/:rollnumber' exact={true} component={Register} />
          <Route path='/Login/:rollnumber' component={Login} />
          <Route path='/Dashboard/:rollnumber' component={Dashboard} />
        </Switch>
      </div>
    </Router>

      );
    }
  }

export default App;
