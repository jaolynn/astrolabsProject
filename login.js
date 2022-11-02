import { useState, useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from './UserContext.js';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


function LoginScreen() {

   

    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);
    var { loggedIn, updateUser } = useContext(UserContext);


   
    var emailField;
    var passwordField;

     
    
    var formData = new FormData();

    function login() {


       
        var errors = [];

        if(emailField.value.length === 0) {
            errors.push('Please enter your email');
        }

        if(passwordField.value.length === 0) {
            errors.push('Please enter your password');
        }

       
        if( errors.length > 0 ) {
            setFormState("client error");
            setErrorsState( errors );
        }

      
        else {
            
            setFormState("loading");
            setErrorsState([]);

           
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/login`,
                {
                    'method': 'POST',
                    'body': formData
                }
            )
            .then(
                function(backendResponse) {
                   
                    return backendResponse.json();
                }
            )
            .then(              
                function(jsonResponse) {
                    if(jsonResponse.status === "ok") {
                        console.log('backend response /users/login', jsonResponse)
                        setFormState("success");

                        // Update the user context
                        updateUser(
                            {
                                "email": jsonResponse.message.email,
                                "firstName": jsonResponse.message.firstName,
                                "lastName": jsonResponse.message.lastName,
                                "avatar": jsonResponse.message.avatar,
                                "jsonwebtoken": jsonResponse.message.jsonwebtoken,
                                "loggedIn": true
                            }
                        )
                    }
                    else {
                        setFormState("backend error");
                    }
                }
            )
            .catch(
                
                function(backendError) {
                    console.log('backendError at /users/login', backendError)
                    setFormState("backend error");
                }
            )
        }
    }

    function addListItem(str) {
        return <li>{str}</li>
    }

    if(loggedIn || formState === "success") {
        return (
            <Navigate to="/" />
        )
    }
    else {
        return (
            <Container maxWidth="sm">
                <Box pt={8}>
                    <Typography component="h1" variant="h2">
                        Login
                    </Typography>
                </Box>

                <Box mt={4} mb={2}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <TextField 
                        inputRef={ 
                            function( thisElement ){
                                emailField = thisElement;
                            } 
                        }
                        label="Email" required={true}/>
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <TextField 
                        inputRef={ 
                            function( thisElement ){
                                passwordField = thisElement;
                            } 
                        }
                        label="Password" required={true} />
                    </FormControl>
                </Box>

                <Box display="flex">
                    
                    {
                        formState !== "loading" &&
                        <Button onClick={login} size="large" variant="contained">Send</Button>
                    }
                    
                    {
                        formState === "loading" &&
                        <CircularProgress />
                    }
                </Box>

                <Box mt={2}>

                    { 
                        formState === "client error" &&
                        <Alert severity="error">
                            <ul>
                            {
                                errorsState.map(addListItem)
                            }
                            </ul>
                        </Alert>
                    }

                    {
                        formState === "success" &&
                        <Alert severity="success">
                            You have logged in successfully!
                        </Alert>
                    }
                </Box>
            </Container>
        )
    }

}

export default LoginScreen;
