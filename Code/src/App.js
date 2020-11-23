import React, { Component } from 'react';
import './App.css';
import ParkMap from './ParkMap.js';
import ControlForm from './ControlForm.js';
import LandingPage from './LandingPage.js';
import apiKey from './utils/api.js';
import API from './utils/api';
import cleaners from './utils/cleaners';
import { connect } from 'react-redux';
import { setParks, setUsStates, setBucketListParks, setVisitedParks } from './actions';
import fire from "./config/fire";
import {Dialog} from "./Dialog";
import DialogClass from "./utils/DialogClass";
// import Redirect from './redirect.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageStatus: 'landing',
      variable: 0,
      isOpen: false
      // user: null,
      // pageStatus: 'home',
      // randomImageClass: `landing-background${Math.floor(Math.random() * 6)}`
    };
  }

  logout = () => {
    fire.auth().signOut();

    this.setState({
      pageStatus: 'landing',
      variable: 1,
      isOpen: false
    });
  }

  pullFromLocalStorage = () => {
    if (localStorage.hasOwnProperty('bucket')) {
      let cachedBucketListKeys = localStorage.getItem('bucket');
      let bucketListParkCodes = JSON.parse(cachedBucketListKeys);
      this.props.setBucketListParks(bucketListParkCodes);
    }

    if (localStorage.hasOwnProperty('visited')) {
      let cachedVistedParkKeys = localStorage.getItem('visited');
      let visitedParkCodes = JSON.parse(cachedVistedParkKeys);
      this.props.setVisitedParks(visitedParkCodes);
    }
  }

  openHomePage = () => {
    this.setState({
      pageStatus: 'home'
    });
  }

  async componentDidMount() {
    try {
      const results = await API.getData(`https://api.nps.gov/api/v1/parks?limit=600&q=national%20park&fields=images&api_key=${apiKey}`);
      const parks = cleaners.setParks(results);
      this.props.setParks(parks);
    } catch (error) {
      console.log(error);
    }

    try {
      // const results = await API.getData('https://whateverly-datasets.herokuapp.com/api/v1/states1810');
      // const usStates = cleaners.setUsStates(results);
      // this.props.setUsStates(usStates);
    } catch (error) {
      console.log(error);
    }

    this.pullFromLocalStorage();
  }

  render() {
    const { pageStatus, randomImageClass } = this.state;
    switch(pageStatus) {
      case('home'):
        return (
          <div className="App">
            <div className="overlay">
              <h1 className="home-title">Get Outside</h1>

              {/*<DialogClass />*/}
              <div>
                <button onClick={(e) => this.setState({isOpen: true})} id="show-bucket-button"> Feedback and FAQ</button>
                <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                  <h2>Let us know what you think!</h2>
                  <h3>
                    <a href={"The app will make you add parks to your bucket list as well as visited list. You can further explore to individual parks clicking the mark on the map!\n"}>Fill out the form here.</a>
                  </h3>
                  <h2>Frequently Asked Questions</h2>
                  <h3><a href={"https://www.nps.gov/aboutus/faqs.htm#CP_JUMP_5057993\n"}>FAQ Website</a></h3>
                </Dialog>

                {/*<button onClick={(e) => this.setState({isOpen: true})} id="show-bucket-button">FAQ</button>*/}
                {/*<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>*/}
                {/*  /!*<h2>About Get Outside</h2>*!/*/}
                {/*  <h2>Frequently Asked Questions</h2>*/}
                {/*  <h3><a href={"https://www.nps.gov/aboutus/faqs.htm#CP_JUMP_5057993\n"}>FAQ Website</a></h3>*/}
                {/*</Dialog>*/}
              </div>
              <ControlForm />
              <p className="user-instructions">Click a map marker to learn more about that National Park</p>
              <ParkMap />
              {/*<button style = {{margin: '80px'}} onClick={this.logout}>New Button</button>*/}


              {/*<div>*/}
              {/*  <button onClick={(e) => this.setState({isOpen: true})} id="show-bucket-button"> About</button>*/}
              {/*  <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>The About information goes*/}
              {/*    here.</Dialog>*/}
              {/*</div>*/}

              <button style = {{margin: '80px'}} onClick={this.logout}>Logout</button>
            </div>
          </div>
        );


      default:
        return (
          <div className="App">
            <LandingPage openHomePage={this.openHomePage()} />
            {/*<LandingPage openHomePage={this.logout()} />*/}
          </div>
        );
    }
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setParks: (parks) => dispatch(setParks(parks)),
  setUsStates: (usStates) => dispatch(setUsStates(usStates)),
  setBucketListParks: (bucketListParkCodes) => dispatch(setBucketListParks(bucketListParkCodes)),
  setVisitedParks: (visitedParkCodes) => dispatch(setVisitedParks(visitedParkCodes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
