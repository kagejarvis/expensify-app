import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

// <Route path="/" component={LoginPage} />

// 
// my code
// const AppRouter = () => (
//     <Router history={history}>
//         {
//             (window.location.pathname === '/' || '')
//                 ?
//                 <div>
//                     <Switch>
//                         <Route path="/" component={LoginPage} exact={true} />
//                     </Switch>
//                 </div>
//                 :
//                 <div>
//                     <Header />
//                     <Switch>
//                         <Route path="/" component={LoginPage} exact={true} />
//                         <Route path="/dashboard" component={ExpenseDashboardPage} />
//                         <Route path="/create" component={AddExpensePage} />
//                         <Route path="/help" component={HelpPage} />
//                         <Route path="/edit/:id" component={EditExpensePage} />
//                         <Route component={NotFoundPage} />
//                     </Switch>
//                 </div>
//         }


//     </Router>
// );
