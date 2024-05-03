import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));

class User extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            githubData: {
                name: "Default",
                location: "NAN"
            }
        }
        console.log("constructor");
    }

    async componentDidMount() {
        console.log("Component did Mount");
    }

    render() {
        const { name, location } = this.state.githubData;
        console.log("render");
        return (
            <div className="user">
                <h2>Name : {name}</h2>
                <h2>Location : {location}</h2>
            </div>
        )
    }
}

root.render(<User name={"Dipish Bisht"} location={"Delhi"} contact={"bishtdipish"} />);