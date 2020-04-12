import React from 'react'

const CharacterContext = React.createContext()

const char = {
    strength: 12,
    dexterity: 16,
    constitution: 10,
    intelligence: 8,
    wisdom: 14,
    charisma: 13
}

// export const CharacterProvider = CharacterContext.Provider

export const CharacterProvider = (props) => {
    return (
        <CharacterContext.Provider
            value={char}>
            {props.children}
        </CharacterContext.Provider>
    )
}

export const CharacterConsumer = CharacterContext.Consumer

export default CharacterContext