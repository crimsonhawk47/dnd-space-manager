import React from 'react'
import { Grid } from '@material-ui/core'
import StatBlock from '../StatBlock/StatBlock'


const CharacterPage = () => {
    return (
        <Grid container>
            <Grid item xs={3}>
                <StatBlock name='Strength' />
            </Grid>
            <Grid item xs={9}>

            </Grid>
        </Grid>
    )
}

export default CharacterPage