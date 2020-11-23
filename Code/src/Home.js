import React from 'react';
import fire from './config/fire';
import firebase from 'firebase';
import NatPark from "./NatPark";
import logo from './logo.jpg';
import searchIcon from './search-icon.png';
import { Redirect, BrowserRouter } from 'react-router-dom';
import {Route, Switch, Link} from "react-router-dom";
import ParkList from "./ParkList";
import Map from './Map';
import Menu from './Menu';


class Home extends React.Component {

    logout() {
        fire.auth().signOut();
    }

    constructor(props) {
        super(props);
        this.state = {
            parksList: [],
        }
    }


    componentDidMount() {
        firebase.database().ref('data').on('value', snapshot => {
            let parks_list = [];
            snapshot.forEach(snap => {
                parks_list.push(snap.val());
            });
            this.setState({
                parksList: parks_list
            });
            console.log(parks_list)
        });
    }


    render(){
        return(
            <div className='App'>

                <nav className="menu">
                    <h1 style={{
                        backgroundImage: 'url(' + logo + ')'
                    }}className="menu__logo"> National Park </h1>
                    <BrowserRouter>
                        <div className="menu__right">
                            {/*<BrowserRouter>*/}
                                <ul className="menu__list">
                                    <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
                                    <li className="menu__list-item"><a className="menu__link" href="#"><Link to={'/ParkList'}>List</Link></a></li>
                                    <li className="menu__list-item"><a className="menu__link" href="#"><Link to={'/Map'}>Map</Link></a></li>
                                    <li className="menu__list-item"><a className="menu__link" href="#">About</a></li>
                                    <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>
                                </ul>
                            <Switch>
                                <Route path='/Map' exact component={Map}/>
                                <Route path='/Home' exact component={Home}/>
                                <Route path='/ParkList' component={ParkList}/>
                            </Switch>
                            {/*</BrowserRouter>*/}

                            <button style={{backgroundImage: 'url(' + searchIcon + ')'}} className="menu__search-button"/>

                            <form className="menu__search-form hide" method="POST">
                                <input className="menu__search-input" placeholder="Type and hit enter"/>
                            </form>
                        </div>
                    </BrowserRouter>
                </nav>

                <BrowserRouter>
                    <div className = 'jumbotron text-center bg-sky'>
                        <h3>Parks List</h3>
                        <nav>
                            <ul>
                                <li><Link to='/NatPark'>View Park</Link></li>
                                {/*<li><Link to='/ParkList'>View List</Link></li>*/}
                            </ul>
                        </nav>
                        <Switch>
                            {/*<Route path='/ParkList' component={ParkList}/>*/}
                            <Route path={'/Menu'} component={Menu}/>
                            <Route path='/NatPark' component={NatPark}/>
                        </Switch>
                    </div>
                </BrowserRouter>
                <button style = {{margin: '10px'}} onClick = {this.logout}>Logout</button>
            </div>

        )
    }

}

            {/*    <div className='container'>*/}
            {/*        <table id='example' className='display'>*/}
            {/*            <thead className='thead'>*/}
            {/*            <tr>*/}
            {/*                <th>Park Name</th>*/}
            {/*                <th>Park Code</th>*/}
            {/*                <th>State</th>*/}
            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            <tbody>*/}
            {/*                {this.state.parksList.map(data => {*/}
            {/*                    return(*/}
            {/*                        <tr>*/}
            {/*                            /!*<BrowserRouter>*!/*/}
            {/*                                <td>{data.fullName}</td>*/}
            {/*                                <td>{data.parkCode}</td>*/}
            {/*                                <td>{data.states}</td>*/}
            {/*                                /!*<Button onClick={this.routeChange()}>View Park</Button>*!/*/}
            {/*                            /!*</BrowserRouter>*!/*/}
            {/*                        </tr>*/}
            {/*                    );*/}
            {/*                })}*/}
            {/*            </tbody>*/}
            {/*        </table>*/}
            {/*        <button style = {{margin: '10px'}} onClick = {this.logout}>Logout</button>*/}
            {/*    </div>*/}
            {/*</div>*/}


export default Home;


















