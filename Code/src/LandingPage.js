import React, { Component } from 'react';
import './styles/main.scss';
import fire from './config/fire';

class LandingPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  // handleClick = (event) => {
  //   event.preventDefault();
  //   this.props.openHomePage();
  // }

    login(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Successfully logged in...");
            })
            .catch((err) => {
                console.log("Error: " + err.toString());
            });

    }

    signUp(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) =>{
                console.log("Successfully signed in...");
            })
            .catch((err) => {
                console.log("Error: " + err.toString());
            });

    }

  render() {
    return(
        // <div className="splash-div">
        //   <h1 className="splash-title">Mark My Parks</h1>
        //   <div className="info-card">
        //     <p>Dreaming about your next adventure?</p>
        //     <p>Looking for National Park information for the perfect trip?</p>
        //     <p>Find details and resources on all 58 U.S. National Parks</p>
        //   </div>
        //   <button className="enter-btn" onClick={this.handleClick}>Explore Now</button>
        // </div>
        <div style= {{textAlign: 'center'}}>
            <div>
                <div> Email</div>
                <input id = "email" placeholder = "Enter Email.." type="text"/>
            </div>
            <div>
                <div> Password</div>
                <input id = "password" placeholder= "Enter Password.." type = "text"/>
            </div>
            <button style = {{margin: '10px'}} onClick = {this.login}>Login</button>
            <button style = {{margin: '10px'}} onClick = {this.signUp}>Sign Up</button>
        </div>


    );
  }
}

export default LandingPage;