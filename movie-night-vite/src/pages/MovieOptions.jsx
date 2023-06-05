import React from 'react'
import '../CSS/color-palette.css';
import { Grid, Card, CardMedia, Box } from '@mui/material';

const movieOptions = [
    {
        id: 1,
        path: 'src/assets/images/baby-driver.jpg',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        id: 2,
        path: 'src/assets/images/baby-driver.jpg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        id: 3,
        path: 'src/assets/images/baby-driver.jpg',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        id: 4,
        path: 'src/assets/images/baby-driver.jpg',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        id: 5,
        path: 'src/assets/images/baby-driver.jpg',
        title: 'Coffee',
        author: '@nolanissac',
    },
]

function MovieOptions() {
    return (
        <Grid container spacing={6} paddingX={12} paddingTop={12}>
            {movieOptions.map(movie => {
                return <Grid item xs={3} key={movie.id}>
                    <Card key={movie.id}>
                        <CardMedia key={movie.id}
                            component="img"
                            image={movie.path}
                            alt="Baby Driver Poster"
                        />
                    </Card>
                </Grid>
            }
            )
            }
        </Grid>
    )
}

export default MovieOptions