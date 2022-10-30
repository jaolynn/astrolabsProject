import React from 'react';
import { Link } from 'react-router-dom';
import './UsefulContacts.css';
import ContactTable from './ContactTable.js';
import Container from '@mui/material/Container';

function UsefulContacts() {
    return (
        <React.Fragment>
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/urgentadopt" className="nav-link">Urgent Adopt</Link></li>
                    <li className="nav-item"><Link to="/lostandfound" className="nav-link">Lost and Found</Link></li>
                    <li className="nav-item"><Link to="/usefulcontacts" className="nav-link">Useful Contacts</Link></li>
                </ul>
            </header>

           <Container>
            <ContactTable />
           </Container>
                    
                    
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

export default UsefulContacts;