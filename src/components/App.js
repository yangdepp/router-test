import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About(props) {
  console.log(props)
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Id(props){
  console.log(props)
  const {match} = props
  return <p>{match.params.id}</p>
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/ids/">ids</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about" render={(props) =><About {...props}/> } />
        <Route path="/users" children={(props) => <div>{props.match ? 'active': 'deactive'}</div>} />
        <Route path="/ids" component={Id}></Route>
      </div>
    </Router>
  );
}

export default AppRouter;