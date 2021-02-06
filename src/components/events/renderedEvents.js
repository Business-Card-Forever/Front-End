import React from "react";

import Events from "./events";



class GetEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : null,
        }
    }

    componentDidMount() {
        this.renderMyData();
    }

    renderMyData(){
        fetch(`http://e-bcard.herokuapp.com/company_api/companyevents/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                let last10 = responseJson.slice(Math.max(responseJson.length - 5, 1))
                console.log(last10);
                this.setState({ data : responseJson })
            })
            .catch((error) => {
                console.error(error);
            });
            
    }

render(){
    return(
        <>
        {this.state.data ? <Events info={this.state.data} /> : <h1>Loading</h1> }
        </>
    );
}
}


export default GetEvents;
