import React , { useReducer } from 'react';

export const WeatherContext = React.createContext();

const initialState = {
    weather: null,
    isLoading: false,
    unit:'celcius',
    extendedForecast: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_WEATHER_START":
            return { ...state,  isLoading: true };
        case "FETCH_WEATHER_SUCCESS":
            return { ...state, isLoading: false, ...action.data }   
        case 'default':
            return state
    }
}

export const ContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    return <WeatherContext.Provider value={{state, dispatch}}>{children}</WeatherContext.Provider>
}
