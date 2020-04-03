import React, { createContext, useState } from 'react'

//create a context (where you can store your data)
export const MoodContext = createContext()

const MoodContextProvider = (props) => {
    // use a hook to access or modify this state
    const [moods, setMoods] = useState([
        { id: 3, note: 1, date: "2020-03-23T18:25:43.511Z", emotion: ":'(", comment: 'Hate my life' },
        { id: 1, note: 7, date: "2020-03-26T08:30:43.511Z", emotion: ":)", comment: 'I feel okay but my cat woke me up at 5 and I am a bit angry at him' },
        { id: 5, note: 5, date: "2020-03-27T16:00:43.511Z", emotion: ":|", comment: 'I am bored' },
        { id: 3, note: 3, date: "2020-03-28T13:14:43.511Z", emotion: ":(", comment: 'It is cloudy today and no one is answering my texts :(' },
        { id: 2, note: 9, date: "2020-03-30T17:00:43.511Z", emotion: ":D", comment: 'It is the end of the cuarentine, yeahhh !!!' },
    ])

    const addMood = (mood) => {
        setMoods([...moods, mood]);
    }

    const removeMood = (id) => {
        setMoods(moods.filter(mood => mood.id !== id));
    }

    return (
        // The wrapped components will all have access to the values we give them
        // we access them via the props (who is wrapped is defined in the App.js)
        <MoodContext.Provider value={{moods, removeMood, addMood}}>
            {props.children}
        </MoodContext.Provider>
    )
}

export default MoodContextProvider;