import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const all = {
    canViewProblems: true,
    canSubmit: true,
    canViewClarifications: true,
    canViewSubmissions: true,
    canEditContestSetup: true,
    canEditSettings: true,

};

const student = {
    canViewProblems: true,
    canSubmit: true,
    canViewClarifications: true,
};

const judge = {
    canViewProblems: true,
    canSubmit: true,
    canViewClarifications: true,
    canViewSubmissions: true,
};

const admin = {
    canViewProblems: true,
    canSubmit: true,
    canViewClarifications: true,
    canViewSubmissions: true,
    canEditContestSetup: true,
    canEditSettings: true,
};

ReactDOM.render(<App config={all}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
