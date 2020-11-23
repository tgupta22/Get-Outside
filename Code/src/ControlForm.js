import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setParksToShow, showUsStateView, showAbout, setParkCardToShow } from './actions';
// import DialogClass from 'src/utils/DialogClass';


const ControlForm = ({ usStates, parks, parksToDisplay, setParksToShow, visitedParkCodes, bucketListParkCodes, showUsStateView }) => {


  const showAllParks = (event) => {
    event.preventDefault();
    setParksToShow('all');
    showUsStateView(false);
  }

  const showVisitedParks = (event) => {
    event.preventDefault();
    setParksToShow('visited');
    showUsStateView(false);
  }

  const showBucketList = (event) => {
    event.preventDefault();
    setParksToShow('bucket');
    showUsStateView(false);
  }

  const displayAbout = (event) => {
    event.preventDefault();
    // showAbout('about');
    setParksToShow('bucket');
    // this.props.setParkCardToShow('');
    showUsStateView(false);

  }
  // const displayAbout = (event) => {
  //     event.preventDefault();
  //     showAbout('about');
  //     showUsStateView(false)
  // }


  
  const getState = (event) => {
    setParksToShow(event.target.value);
    showUsStateView(true);
  }

  return (
    <div className="filter-controls">
      <div className="filters">
        <button onClick={showAllParks} id="show-all-button">Show All Parks</button>
        <button onClick={showVisitedParks} id="show-visited-button"><img className="loc-icons" src="./assets/green-icon.png" alt="green icon" /> Show {visitedParkCodes.length} Visited Parks</button>
        <button onClick={showBucketList} id="show-bucket-button"><img className="loc-icons" src="./assets/purple-icon.png" alt="purple icon" /> Show {bucketListParkCodes.length} Bucket List Parks</button>
        {/*<DialogClass/>*/}
        {/*<button onClick={(e) => this.setState({isOpen: true})} id="show-bucket-button"> About</button>*/}
        {/*<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>The About information goes here.</Dialog>*/}
      </div>
      {/*<label className="filter-label">View Parks By State:*/}
      {/*  <select id="select-menu" value={parksToDisplay} onChange={getState}>*/}
      {/*    <option value="default">Please pick a state</option>*/}
      {/*  {*/}
      {/*    usStates.map(usState => {*/}
      {/*      return (<option value={usState.name} key={usState.name}>{usState.name}</option>)*/}
      {/*    })*/}
      {/*  }*/}
      {/*  </select>*/}
      {/*</label>*/}
    </div>
  )
}

const mapStateToProps = (state) => ({
  usStates: state.usStates,
  parks: state.parks,
  visitedParkCodes: state.visitedParkCodes,
  bucketListParkCodes: state.bucketListParkCodes,
  parksToDisplay: state.parksToDisplay,
});

const mapDispatchToProps = (dispatch) => ({
  setParksToShow: (name) => dispatch(setParksToShow(name)),
  showUsStateView: (showUsState) => dispatch(showUsStateView(showUsState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlForm);