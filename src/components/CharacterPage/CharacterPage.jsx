import React from 'react'
import { Grid } from '@material-ui/core'
import StatBlock from '../StatBlock/StatBlock'


const CharacterPage = () => {
    return (
        <Grid container>
            <Grid item xs={3}>
                <StatBlock name='Strength' score={13} />
                <StatBlock name='Dexterity' score={13} />
                <StatBlock name='Constitution' score={13} />
                <StatBlock name='Intelligence' score={13} />
                <StatBlock name='Wisdom' score={13} />
                <StatBlock name='Charisma' score={13} />
            </Grid>
            <Grid item xs={9}>

            </Grid>
        </Grid>
    )
}

export default CharacterPage