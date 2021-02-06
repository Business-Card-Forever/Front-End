import React from "react";
import Recent from "./recentRendered";


class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }


    componentDidMount() {
        this.renderMyData();
    }

    renderMyData() {
        fetch(`http://e-bcard.herokuapp.com/api/userinfo/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                let last5 = responseJson.slice(Math.max(responseJson.length - 5, 0))
                this.setState({ data: last5 })
            })
            .catch((error) => {
                console.error(error);
            });

    }
    render() {
        return (
            <>
                {this.state.data ? <Recent data={this.state.data} /> : <h1>Loding</h1>}
            </>
        );
    }
}


export default GetData;
