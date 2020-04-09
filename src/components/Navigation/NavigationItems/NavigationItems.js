import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import axios from "axios";

function amisawyer() {
    axios({
        method: 'get',
        url: 'http://a2b8b17a.ngrok.io/users/sec',
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token') }
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    axios({
        method: 'get',
        url: 'http://a2b8b17a.ngrok.io/users/check',
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token') }
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/login">ZALOGUJ</NavigationItem>
        <NavigationItem link="/register">ZAREJESTRUJ</NavigationItem>
        <NavigationItem link="/logout">WYLOGUJ</NavigationItem>
        <button onClick={amisawyer}>AM I SAWYER?!</button>
    </ul>
);

export default navigationItems;