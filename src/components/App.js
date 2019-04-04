import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import OneRoute from './routes';
import { Menu } from 'antd';
import TwoCompopnent from './twoComponent'

function AppRouter() {
  console.log(OneRoute);
  return (
    <Router>
      <div>
        <nav className="nav-header">
          <Menu mode="horizontal">
            {Object.keys(OneRoute).map((item) => {
              return (
                <Menu.Item key={item}>
                  <Link to={OneRoute[item].path}>{item}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </nav>
        <Route path="/" exact render={(props) =><TwoCompopnent {...props} {...OneRoute.index.children}/> } />
        <Route path="/about" render={(props) =><TwoCompopnent {...props} {...OneRoute.about.children}/> } />
        <Route path="/news" render={(props) =><TwoCompopnent {...props}/> } />
        <Route path="/events" render={(props) =><TwoCompopnent {...props}/> } />

        {/* <Route path="/" exact component={Index} />
        <Route path="/about" render={(props) =><About {...props}/> } />
        <Route path="/users" children={(props) => <div>{props.match ? 'active': 'deactive'}</div>} />
        <Route path="/ids/:id" component={Id}></Route> */}
      </div>
    </Router>
  );
}

export default AppRouter;
