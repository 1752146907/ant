import React from 'react';
import ReactDOM from 'react-dom';
import { Router, HashRouter, Route, hashHistory, Link } from 'react-router-dom';
import './index.css';
import TodoItem from './components/TodoItem';
import Test from './components/Test';
import Input from './components/Input';
import date from './components/date';
import Rate from './components/Rate';

ReactDOM.render((
    <HashRouter history={hashHistory}>
        <div id="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/test">test</Link></li>
                <li><Link to="/input">input</Link></li>
                <li><Link to="/date">时间</Link></li>
                <li><Link to="/rate">五角星</Link></li>
            </ul>

            <hr/>
            <Route exact path="/" component={TodoItem}/>
            <Route path="/test" component={Test}/>
            <Route path="/input" component={Input}/>
            <Route path="/date" component={date}/>
            <Route path="/rate" component={Rate}/>
        </div>
    </HashRouter>
), document.getElementById('router'));
