import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero.js';
import Features from './Features.js';
import './HomeScreen.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function HomeScreen() {
    return (
        <React.Fragment>
      
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg></a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/urgentadopt" className="nav-link">Urgent Adopt</Link></li>
                    <li className="nav-item"><Link to="/lostandfound" className="nav-link">Lost and Found</Link></li>
                    <li className="nav-item"><Link to="/usefulcontacts" className="nav-link">Useful Contacts</Link></li>
                </ul>
                    <div class="col-md-3 text-end">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button class="btn btn-outline-primary me-2">Login</Button>
                        <Button class="btn btn-primary">Sign-up</Button>
                    </ButtonGroup>
            </div></header>
            </div>
            <Hero />
            <Features />
        

            <footer className="text-muted py-5">
                <div className="container">
                    <p className="float-end mb-1">
                    <a href="#">Back to top</a>
                    </p>
                    <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                    <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.2/getting-started/introduction/">getting started guide</a>.</p>
                </div>
            </footer>
            
        </React.Fragment>
    )
}

export default HomeScreen;