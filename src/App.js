import './App.css';
import React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Home from './components/Home/Home';
import AddDocument from './components/AddDocument/AddDocument';
import InDocument from './components/InDocument/InDocument';
import SendDocs from './components/SendDocs/SendDocs';
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {autoLogin} from "./store/actions/auth";
import Logout from "./components/Logout/Logout";
import Profile from "./components/Profile/Profile";


class App extends React.Component {

    componentDidMount() {
        this.props.autoLogin()
    }

    render() {
        return (
            <div className="App">
                {
                    this.props.isAuth ?
                    <Switch>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/addDocument" component={AddDocument}/>
                        <Route path="/inDocuments" component={InDocument}/>
                        <Route path="/sentDocs" component={SendDocs}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/profile" component={Profile}/>
                        <Redirect to="/login"/>


                        {/* <Route path="/allDocs" component={AllDocs}/>
                <Route path="/initiative" component={Initiative}/>
                <Route path="/chambers" component={Chambers}/> */}
                    </Switch> :
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Redirect to="/login"/>
                        </Switch>

                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuth: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
