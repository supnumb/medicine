import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from '../components/EmployeeRouter';


window.onload = () => {
    ReactDOM.render(<AppRouter />, document.getElementById('App'));
};

