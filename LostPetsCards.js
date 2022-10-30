import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function LostPetsCards(){
    return (
        <React.Fragment>
            <Container>
            <Typography>
        
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
            </Typography>                
            </Container>
        </React.Fragment>

    );
}

const itemData = [
    {
      img: require('./missingBuddy.jpg'),
      title: 'Buddy is missing',
    },
];

export default LostPetsCards;