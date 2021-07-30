import React, { useEffect, useRef, useState } from 'react'
import { LocationIcon, SearchElement, SearchIcon, SearchInput, SearchResult } from './Styled'
import { DebounceInput } from 'react-debounce-input';
import { fetchCities } from '../../api/fetchCities';
import Suggestion from './Suggestion';
import useClickOutside from '../../hooks/useClickOutside';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const firstUpdate = useRef(true);
    const suggestionRef = useRef(null);
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

    return (
        <SearchElement>
            <SearchIcon />
            <DebounceInput element={SearchInput} onChange={searchInputChangeHandler} debounceTimeout={300} placeholder="Search for location" />
            <LocationIcon />
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
