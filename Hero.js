import React from 'react';
import Typography from '@mui/material/Typography';

function Hero(){
    return (
        <React.Fragment>
            <div className="container">
            <Typography>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">
                </script>
            </head>
                <div className="px-4 pt-5 my-5 text-left border-bottom">
                <h2 className="display-4 fw-bold" ><strong>Everyone has a story...</strong></h2>
                <div className="col-lg-6 mx-auto">
                    <div className ="container p-2">
            <br/>
                
                <h2>Meet Mr.Chairman Meow.</h2>
                <br/>
                <br/>
                <img src={require("./mrChairman2.jpg")} className ="align-center large" alt="Mr.Chairman" width="600" height="400"></img>
                <br/>
                <br/>
                <p>
                    <h4>
                a 5 year old domestic cat who found himself abandoned by his breeders under a roof of a villa in Ajman and it was 40 degree outside this confined space with 20 odds of other struggling-to-survive feline lives, no food, no water and no escape.   No one knows how long ago did the breeders abandoned the place, but the condition those cats were found could trigger a mix of emotions in you.
                <br/>  
                <br/>
                Fortunately for them, there are such a kind as <it>Walking Angels</it>.  They could be office workers, ladies in the salon who cut your hair, the gentlemen in the laundry, teachers, or flight attendant.  The list keeps going so on and so forth.  Apart from their busy lives, they take turn to provide food, water, and having these abandoned animals, such as Mr.Chairman Meow, rescued and looked after.  Needless to say,all the cost is out of their own pocket.  
                <br/>
                <br/>
                You can see where I am heading, and no the story is not about Mr.Chairman Meow...at least, not only him. Also, this is not a place asking for donation.  There are many organization for that. 
                    </h4>
                </p>
                <br/>
                <br/>
                <h2><strong> And here's our story...</strong></h2>
                <br/>
                <p>
                <h4>         
                Across the internet, there are multiple organizations that trying to rescue the abadon animals and looking for new home for them.  However, they are scattered across the UAE, some are well known, some are not.  To us, instead of focusing with the name of the organization, we put the animal first and have them all listed in this page.  If you feel the connection to any of the lovely paws, there will be info included, and of course, their location.
                <br/>
                <br/>
                If you are looking for adoption or foster, we will share your request across the network to find the most suitable one(s) for you.  
                <br/>
                <br/>
                In contrast, although we do not encourage this, if you have the need to find a new home for your pets, please feel free to contact us.
                <br/>
                <br/>
                Last but not least, if your pets are lost, we will help you to spead the news.  
                <br/>
                <br/>
                <strong>All these are free of charge.</strong>  Our vision is to make get the silent tales of those animals heard.  Also, get to help out the hard working people out there fighting for the animals lives.</h4>
                </p>                      
                <br/>
                <br/>
                <h2> <strong>Now, what is your story?</strong></h2>
            
            </div></div></div>
            </Typography>
            </div>
        </React.Fragment>
        )
    }

export default Hero;