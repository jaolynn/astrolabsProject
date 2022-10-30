import React from 'react';
import { Link } from 'react-router-dom';
import './LostNFound.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ContactForm from "./ContactForm.js";
import LostPetsCards from "./LostPetsCards.js"


function LostNFound() {
    return (
    <React.Fragment>
        <Typography>
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
                    <h1 className="fw-light">Lost and Found</h1>
                </div>
                </div>
            </section>

            <Container>
                <p><h3>Lose Your Pet?</h3></p>
                <br/>
                <br/>
                <p><h5>Getting the word out early is the key to getting your dog or cat back safely and soundly. Don't assume your pet will return on his own in a few hours. Don't wait around to see if he'll find his way home. As soon as you are aware that your pet is missing, GET THE WORD OUT. Remember, have good, clear photos on hand just in case, and ALWAYS make sure your dogs and cats are wearing a collar with identification tags. Microchipping is an excellent form of identification, but always make sure your pet has a visible collar and tags.</h5></p>
                <br/>
                <p><h6><li>Make posters, and lots of them. Keep it simple: “LOST DOG (or cat)!” should be at the top in large, easy to read, (even from a moving vehicle) bold letters. Then include a brief description or breed type: “Beige, wire-haired terrier ” or “Striped grey and black short-haired cat “. Don't assume that people will know your particular pure breed, so always include a description. Include the animal's name, it may make it easier for someone to call your pet over and capture him, and it also makes your pet into a valued member of your family, and not just another lost animal statistic. Offer a reward, don't state how much in the ad, and include your telephone number in large numbers at the bottom of the poster.</li></h6></p>
                <br/>
                <p><h6><li>Make dozens of index cards with the same information as above, and go to every home, in every direction from the site of where your pet disappeared, and give a card, or stick a card under doors or on windshields. Stop and speak with every person you encounter -the more people know about your lost pet, the more likely the one person who spots him will call you. Your pet may be frightened, ask people to please check their barns and sheds, especially at night.</li></h6></p>
                <br/>
                <p><h6><li>Place a “Lost ” ad in your local newspaper the very first morning your pet is gone. These ads are usually free.</li></h6></p>
                <br/>
                <p><h6><li>GET THE WORD OUT! The more people know you have lost a pet, and that you are upset, worried and desperately trying to find your pet, the more people will call you if they see an animal in the woods or on the road, or in their backyard.</li></h6></p>
                <br/>
                <p><h6><li>Get out and call for your pet by name. Enlist family and friends to canvas the neighborhood, in all directions, on the roads and as the crow flies. Don't try to predict where your pet could or wouldn't have gone -YOU NEVER KNOW. The best time to call for your pet is at night, and at dawn. If you are calling from your car, drive slowly, roll down all the windows, stop and turn your vehicle off frequently to listen.</li></h6></p>
                <br/>
                <p><h6><li>Call all your neighbors personally.</li></h6></p>
                <br/>
                <p><h6><li>Call all veterinary clinics, including emergency veterinary hospitals outside your local area. Sometimes people pick up a stray and drive it to a distant clinic. Call all animal shelters and animal control and dog control officers, all local police and state troopers, all local kennels, the highway department, dog training clubs, grooming shops get the word out.</li></h6></p>
                <br/>
                <p><h6><li>Visit all local dog pounds and animal shelters, don't rely on their information, go through and look at all dogs and cats, DAILY.</li></h6></p>
                <br/>
                <p><h6><li>Don't give up!</li></h6></p>
                <br/>
                <p><h6><li>Dogs and cats often wander far away, and do things you wouldn't predict they would do. Try everything, look everywhere, tell everyone. You'd be surprised how many people will be supportive, will get out and help you look, will offer words of encouragement and hope, will suggest places to look that other stray animals have gone.</li></h6></p>
                <br/>
                <p><h6><li>Even the friendliest and most social pet may quickly become terrified and wild. Your own friendly pet, when lost, may hide from people, run away if he sees a person, he may even run away from you. Don't chase after a lost pet -they are much faster than we are and you'll only scare them more. Instead, sit on the ground; talk in normal tones, repeating his name and familiar phrases over and over again. A frightened animal will usually stick around, and after a few minutes or hours,come closer and closer.</li></h6></p>
                <br/>
                <p><h6><li>In rare cases, you may need to rent or purchase a Humane Live trap, and set it to capture a terrified lost pet. Local animal shelters often rent or loan these, and will have an appropriate size for a dog or a cat.</li></h6></p>
                <br/>
                <p><h6><li>Again, DON'T GIVE UP! Be aggressive in your search, get lots of help, get the word out right away - don't wait a few hours “to see if he'll come home on his own “– you need those early hours to put up posters and give out cards.</li></h6></p>
                <br />
                <ContactForm />
                <br />                
            </Container>

            <div className="album py-5 bg-light">
                <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                    <div className="card shadow-sm">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{ color: 'red', backgroundColor: 'lightgray' }}><strong>#Missing</strong></text><img src={require('./missingBuddy.jpg')}></img>

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
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{color: 'red', backgroundColor:'lightgray'}}><strong>#Missing</strong></text><img src= {require("./missingCrash.jpg")}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{ color: 'red', backgroundColor: 'lightgray' }}><strong>#Missing</strong></text><img src= {require("./missingIvory.jpg")}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <hr />
            <br />
            <br />
            <Container>
                <br/>
                <br/>
                <p><h3>Found a Pet?</h3></p>
                <br/>
                <br/>
                <p><h6>
                Don't assume he must be a stray, he may just have escaped from his garden and is wandering around the neighbourhood looking for friends.
                <br/><br/>
                Check to see if he is wearing a tag with the owners' phone number. He may also be wearing a municipality-tag; in this case he should be microchipped. If possible, take him to the nearest vet to check for a  microchip. Unfortunately at the time of writing there is no centralised database of microchip numbers but most vets should be able to email the number to other vets if one is found.
                <br/><br/>
                If there is no way to identify him, there are still several steps you can take:
                <br/><br/>
                Please contact us and we will check to see if any pets have been reported missing. If a microchip is found we will also send this information to all our contacts to try and trace the owner.  We will also check our own databases. You'll need to give us a description and your contact number so we can keep you informed.
                <br/><br/>
                Check our website and social media to see if anyone has reported a lost pet to us. It is possible you might have to  recheck this page as the lost pet may not be added immediately.
                <br/><br/>
                Check with your neighbours to see if anyone has lost a pet. Place a “found dog (cat)” notice up locally; in supermarkets, near schools etc with a colour picture of the pet. While  you're at it, check the boards for notices of lost pets which might fit  the description. Never post the full microchip number, this may be the only way the rightful owner can claim the pet. Not everyone has honest intentions! This is especially important with purebred pets.
                <br/><br/>
                While trying to find the owners make sure the pet has plenty  shade, water and some food.  Also ensure that it is in a safe place. If you absolutely cannot care for the pet at your residence, try to  find someone who can; a friend or co-worker. 
                <br/><br/>
                When the pet's owner is found, make sure you inform us so we can update our records.
                <br/><br/>
                If you cannot trace the owner, please let us know and we will add the pet to our priority list. We cannot guarantee we will be able to take it immediately as space at the kennels is limited. In the meantime, you can advertise locally and on social media to see if anyone is able to take the pet.
                </h6></p>
                <br/>
                <ContactForm />
                <br/>
                <br/>
            </Container>
            <div className="album py-5 bg-light">
                <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                    <div className="card shadow-sm">
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{color: 'red', backgroundColor:'lightgray'}}><strong>#Found</strong></text><img src= {require("./foundAmiga.jpg")}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{color: 'red', backgroundColor:'lightgray'}}><strong>#Found</strong></text><img src= {require("./foundMaggie.jpg")}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em" style={{color: 'red', backgroundColor:'lightgray'}}><strong>#Found</strong></text><img src= {require("./foundRona.jpg")}></img>

                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
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
        </Typography> 
    </React.Fragment>
    )
}

export default LostNFound;