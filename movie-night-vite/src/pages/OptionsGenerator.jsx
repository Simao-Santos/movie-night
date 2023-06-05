import { Button, Grid, Box } from '@mui/material'
import React from 'react'

function OptionsGenerator() {
    return (
        // <Box display="flex" minHeight="100vh">
            <Grid container minHeight="100vh" direction="column" alignItems="center" justifyContent="center" rowSpacing={2}>
                <Grid item>
                    <Button variant='contained'>
                        Generate options
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant='contained'>
                        Generate without Login
                    </Button>
                </Grid>
            </Grid>
        // </Box>
    )
}

export default OptionsGenerator