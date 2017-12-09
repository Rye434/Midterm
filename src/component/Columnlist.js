import React, {Component} from "react";
import PropTypes from "prop-types";
import {Contacts} from "../contacts";

export default class Columnlist extends Component {
    render(){
        let Contacts = this.props.contacts;
        //var parts = Contacts.dob.split(" ");
        //var splitString = parts[1];
        return (
            <div className={"container"}>
                <div id={"details"}>Click on a contact to the left</div>
                <div id={"Columnlist"}>
                    <ul>
                        {Contacts.map( (contact, index) =>
                            <li className={index} onClick={handleClick}>
                                <img className={"thumbnail"} src={contact.picture.thumbnail}/>
                                <p className={"name"}>{contact.name.first} {contact.name.last}</p>
                                <p>{contact.dob.split(" ")[0]}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

function changeDOB(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}


function handleClick(event){
    var details = document.getElementById("details");
    var index = event.currentTarget.className;
    var allC = Contacts[index];
    var name = allC.name.first + " " + allC.name.last;
    var email = allC.email;
    var cell = allC.cell;
    var age = changeDOB(allC.dob);
    var dob =  "Dob: " + allC.dob.split(" ")[0];
    var dobAge = age + " Years old";

    var dobE = document.createElement("p");
    var dobAgeE = document.createElement("p");
    var pic = document.createElement("img");
    var nameE = document.createElement("p");
    var emailE = document.createElement("p");
    var cellE = document.createElement("p");

    dobE.textContent = dob;
    dobAgeE.textContent = dobAge;
    nameE.textContent = name;
    emailE.textContent = email;
    cellE.textContent = cell;
    pic.setAttribute("src", allC.picture.large);
    nameE.setAttribute("class", "name");

    details.textContent = "";
    details.appendChild(pic);
    details.appendChild(nameE);
    details.appendChild(cellE);
    details.appendChild(emailE);
    details.appendChild(dobE);
    details.appendChild(dobAgeE);
}

Columnlist.propTypes = {
    contacts: PropTypes.array
};