import React, {Component} from "react";
import Columnlist from "./Columnlist";
import {Contacts} from "../contacts";

//import PropTypes from "prop-types";

export default class Mainview extends Component {
    render() {
        return (
            <div className={"container"}>
                <div id={"columnTitle"}>Contact List</div>
                <div id={"content"}> <Columnlist contacts={Contacts}/></div>
            </div>
        );
    }
}



// Mainview.propTypes = {
//     name: PropTypes.string.isRequired
// };