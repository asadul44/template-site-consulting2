import React from 'react';
import {Switch , Route} from 'react-router-dom'
import Home from './Layout/Home';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';
import About from './About';
import Service from './Service';
import Blog from './Blog';
import Contact from './Contact';

const MyRoute = () => {
    return (
        <div>

            <MyHeader  />

            <Switch>
                 <Route exact path="/"  component={Home} />
                 <Route  path="/about"  component={About} />
                 <Route  path="/service"  component={Service} />
                 <Route  path="/blog"  component={Blog} />
                 <Route  path="/contact"  component={Contact} />
            </Switch>

            <MyFooter />
            
        </div>
    );
};

export default MyRoute;