import React from"react";

let dialogStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    footWeight: 'bold',
    alignSelf: 'flex-end'
};


export class Dialog extends React.Component {
    render() {
        let dialog = (
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>x</button>
                {this.props.children}
                {/*<li><a href={"https://www.tripadvisor.com/Tourism-g143021-Death_Valley_National_Park_Inyo_County_California-Vacations.html\n"}>TripAdvisor</a></li>*/}
                {/*<li><a href={"https://www.airbnb.com/death-valley-ca/stays\n"}>Airbnb</a></li>*/}
            </div>
        )
        if(!this.props.isOpen) {
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        )
    }
}

// export default Dialog

