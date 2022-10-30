import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ContactForm(){
    return(
        <React.Fragment>
            <Container>
            <Typography>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><h4>Let Us Get Back to You Via Email</h4></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"><h4>Your Message</h4></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            </Typography>
            </Container>
        </React.Fragment>
    )
}

export default ContactForm;