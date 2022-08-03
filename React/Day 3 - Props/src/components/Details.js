import React from "react";

class Details extends React.Component{
    render() {
        const {Title, Price, Offers} = this.props.data.data;
        return (
            <>
                <h3>{Title}</h3>
                <h4>{Price}</h4>
                <h5>{Offers}</h5>
            </>
        )
    }
}

export default Details;
