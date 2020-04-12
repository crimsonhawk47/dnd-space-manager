import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CharacterContext = React.createContext()

// export const CharacterProvider = CharacterContext.Provider

export const CharacterProvider = (props) => {

    const [characterStats, setCharacterStats] = useState({})

    const getCharacter = async () => {
        try {
            const response = await axios.get('/api/character')
            setCharacterStats(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <CharacterContext.Provider
            value={{characterStats, getCharacter}}>
            {props.children}
        </CharacterContext.Provider>
    )
}



export const CharacterConsumer = CharacterContext.Consumer

export default CharacterContext