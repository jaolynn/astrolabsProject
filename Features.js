import React from 'react';
import Typography from '@mui/material/Typography';


function Features(){
    return (
        <React.Fragment>
        <Typography>
        <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">
                </script>
        </head>
 
        <div class="container px-4 py-5" id="readyToGo">
            <h2 class="pb-2 border-bottom">"We are eager for our new home."</h2>
        
            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
              <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"><img src={require("./Mailo.jpg")}></img>
                  <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Mailo</h2>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="me-auto">
                        <img src={require("./Mailo.jpg")} alt="Mailo" class="rounded-circle border border-white" width="32" height="32"></img>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
        
              <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"><img src={require("./ACHILLES.jpg")}></img>
                  <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Achilles</h2>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="me-auto">
                        <img src={require("./ACHILLES.jpg")} alt="ACHILLES" class="rounded-circle border border-white" width="32" height="32"></img>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
        
              <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"><img src={require("./sandro.jpg")}></img>
                  <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Sandro</h2>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="me-auto">
                        <img src={require("./sandro.jpg")} alt="Sandro" class="rounded-circle border border-white" width="32" height="32"></img>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </Typography>
        </React.Fragment>

        )
    }

export default Features;