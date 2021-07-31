import React, { useEffect, useRef, useState } from 'react'
import { LocationIcon, SearchElement, SearchIcon, SearchInput, SearchResult } from './Styled'
import { DebounceInput } from 'react-debounce-input';
import { fetchCities } from '../../api/fetchCities';
import Suggestion from './Suggestion';
import useClickOutside from '../../hooks/useClickOutside';
import { useWeather } from '../../hooks/useWeather';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const firstUpdate = useRef(true);
    const suggestionRef = useRef(null);
    const { weatherContext, fetchWeather } = useWeather()

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        setShowSuggestion(true);
        fetchCities(searchTerm).then((res) => {
            setSuggestions(res);
        })
    }, [searchTerm]);

    useClickOutside(suggestionRef, () => setShowSuggestion(false))

    const searchInputChangeHandler = (event) => {
        setSearchTerm(event.target.value)
    }

    const showPosition = (position) => {
        const positionObj = {
            lat:position.coords.latitude,
            lng:position.coords.longitude,
        }
        fetchWeather(weatherContext.dispatch , positionObj);

    }

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            alert('Geolocation is not supported by this browser.');
          }
    }

    return (
        <SearchElement>
            <SearchIcon />
            <DebounceInput element={SearchInput} onChange={searchInputChangeHandler} debounceTimeout={300} placeholder="Search for location" />
            <LocationIcon onClick={getCurrentLocation} />
            {showSuggestion && (
                <SearchResult  ref={suggestionRef}>
                    {suggestions?.slice(0, 6)?.map((s, i) => (
                        <Suggestion
                            key={i}
                            label={s}
                            hideSuggestionFn={() => {
                                setShowSuggestion(false);
                            }}
                        />
                    ))}
                </SearchResult>
            )}

        </SearchElement>
    )
}

export default Search
