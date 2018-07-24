import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

const Container = (route) => (<Route path={route.path} render={props =>
    (<route.component  {...route} />)
} />);

export default Container;
