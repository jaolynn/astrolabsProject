import React from 'react';
import { Link } from 'react-router-dom';
import './UrgentAdopt.css';

function UrgentAdopt() {
    return (
        <React.Fragment>
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/urgentadopt" className="nav-link">Urgent Adopt</Link></li>
                    <li className="nav-item"><Link to="/urgentadopt" className="nav-link">Lost and Found</Link></li>
                </ul>
            </header>

            <main>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Urgent Adopt</h1>
                </div>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                    <div className="card shadow-sm">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{ color: 'red', backgroundColor: 'lightgray' }}><strong>#Urgent Home is in Need</strong></text><img src={require('./urgentArcher.jpg')}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Inquire</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{ color: 'red', backgroundColor: 'lightgray' }}><strong>#Urgent Home is in Need</strong></text><img src={require('./urgentJacky.jpg')}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Inquire</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{ color: 'red', backgroundColor: 'lightgray' }}><strong>#Urgent Home is in Need</strong></text><img src={require('./urgentNala.jpg')}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Inquire</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col">
                    <div className="card shadow-sm">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{ color: 'red', backgroundColor: 'lightgray' }}><strong>#Urgent Home is in Need</strong></text><img src={require('./urgentNola.jpg')}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Inquire</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{ color: 'red', backgroundColor: 'lightgray' }}><strong>#Urgent Home is in Need</strong></text><img src={require('./urgentOphelia.jpg')}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Inquire</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{ color: 'red', backgroundColor: 'lightgray' }}><strong>#Urgent Home is in Need</strong></text><img src={require('./urgentPanera.jpg')}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Inquire</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col">
                    <div className="card shadow-sm">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{ color: 'red', backgroundColor: 'lightgray' }}><strong>#Urgent Home is in Need</strong></text><img src={require('./urgentReggie.jpg')}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Inquire</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{ color: 'red', backgroundColor: 'lightgray' }}><strong>#Urgent Home is in Need</strong></text><img src={require('./urgentScarlett.jpg')}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Inquire</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{ color: 'red', backgroundColor: 'lightgray' }}><strong>#Urgent Home is in Need</strong></text><img src={require('./urgentTwix.jpg')}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Inquire</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            </main>

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

export default UrgentAdopt;