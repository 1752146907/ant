import React from 'react'; 
import ReactDOM from 'react-dom';
import { Router, HashRouter, Route, hashHistory, Link } from 'react-router-dom';
import './index.css';
import TodoItem from './components/TodoItem';
import Test from './components/Test';
import Input from './components/Input';
import date from './components/date';
import Rate from './components/Rate';
import Banner from './components/Banner';
import MenuNav from './components/MenuNav';
import AutoCompleteDemo from './components/AutoCompleteDemo';
import StepDemo from './components/StepDemo';
import StepDemoB from './components/StepDemoB';
import LoadingDemo from './components/LoadingDemo';
import CascaderDemo from './components/CascaderDemo';
import Message from './components/Message';
import Login from './components/Login';
import Paginations from './components/Pagination';
import Dialogue from './components/Dialogue';
import Wai from './components/Wai';
import Card from './components/Card'

ReactDOM.render((
    <HashRouter history={hashHistory}>

        <div id="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/test">test</Link></li>
                <li><Link to="/input">input</Link></li>
                <li><Link to="/date">时间</Link></li>
                <li><Link to="/rate">二级菜单</Link></li>
            </ul>

            <hr/>
            <Route exact path="/" component={TodoItem}/>
            <Route path="/test" component={Test}/>
            <Route path="/input" component={Input}/>
            <Route path="/date" component={date}/>
            <Route path="/rate" component={Rate}/>

            <br/>

            <div>
                <Banner />
            </div>

            <br/>
            <div id="">
                <MenuNav  />
            </div>

            <br/>
            <div id="">
                <AutoCompleteDemo  />
            </div>

            <br/>
            <div>
                <StepDemo />
            </div>

            <br/>
            <div>
                <StepDemoB />
            </div>

            <br/>
            <div>
                <LoadingDemo />
            </div>

            <br/>
            <div>
                <CascaderDemo />
            </div>

            <br/>
            <div>
                <Card />
            </div>

            <br/>
            <div>
                <Message />
            </div>

            <br/>
            <div>
                <Login />
            </div>

            <br/>
            <div>
                <Paginations />
            </div>

            <br/>
            <div>
                <Dialogue />
            </div>
            <div>
                <Wai />
            </div>
        </div>



        

    </HashRouter>
), document.getElementById('router'));
