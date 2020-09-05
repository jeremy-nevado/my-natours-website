/* eslint-disable */
import '@babel/polyfill';
import { login } from './login';
import { displayMap } from './mapbox.js';

// DOM Elements
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form');

// DELEGATION
if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    displayMap(locations);
}

if (loginForm) {
    document.querySelector('.form').addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    });
}
