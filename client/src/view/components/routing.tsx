import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import { Admin } from '../pages/Admin';
import { ShowBill } from '../pages/ShowBill';
import { Tickets } from '../pages/Tickets';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () =><Admin path={'/'}/>
  },
  {
    path: '/ShowBill.tsx',
    sidebar: () => <ShowBill path={'/ShowBill.tsx'}/>
  },
  {
    path: '/Tickets.tsx',
    sidebar: () => <Tickets path={'/Tickets.tsx'}/>
  }
];

export default function Routing() {
  return (
      <Router>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
      </Router>
  );
}
