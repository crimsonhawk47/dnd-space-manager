import React from 'react'
import { Grid } from '@material-ui/core'
import StatBlock from '../StatBlock/StatBlock'
import CharacterContext from '../ContextMaker/ContextMaker'


const CharacterPage = () => {
    const context = React.useContext(CharacterContext)
    const char = context.characterStats
    const getCharacter = context.getCharacter

    React.useEffect(() => {
        getCharacter()
    }, [])


    return (
        <>
            <Grid container justify='center'>
                <h1>{char.name}</h1>
            </Grid>
            <Grid container>
                <Grid item xs={3}>
                    <StatBlock name='Strength' score={char.strength} />
                    <StatBlock name='Dexterity' score={char.dexterity} />
                    <StatBlock name='Constitution' score={char.constitution} />
                    <StatBlock name='Intelligence' score={char.intelligence} />
                    <StatBlock name='Wisdom' score={char.wisdom} />
                    <StatBlock name='Charisma' score={char.charisma} />
                </Grid>
                <Grid item xs={9}>
                    <button onClick={getCharacter}>Hey[[[[ </button>

                </Grid>
            </Grid>
        </>
    )
}

export default CharacterPage