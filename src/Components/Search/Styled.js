import styled from 'styled-components';
import { ReactComponent as SearchIconSvg } from '../../assets/search-icon.svg';
import { ReactComponent as LocationIconSvg } from '../../assets/location-icon.svg';
// location-icon.svg


export const SearchElement = styled.div`
    display:flex;
    position:relative;
`

export const SearchInput = styled.input`
    margin: 0px auto;
    margin-top: 32px;
    margin-top: 32px;
    width: 100%;
    border-radius: 16px;
    outline:none;
    font-size: 18px;
    padding: 16px;
    box-shadow: 0px 0px 7px grey;
    border:none;
    padding-left:4.5rem;

    &::placeholder {
        color:#4a6fa1;
    }
`;

export const SearchIcon = styled(SearchIconSvg)`
    position: absolute;
    left:1%;
    top:55%;
    fill: #4a6fa1;
`;

export const LocationIcon = styled(LocationIconSvg)`
    position: absolute;
    right: 1%;
    bottom: 22%;
    cursor: pointer;
`;

export const SearchResult = styled.div`
    position: absolute;
    flex-direction: column;
    background: white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    width: 100%;
    top:8.7rem;
    border-radius: 5px;
    overflow: hidden;
`;

export const SuggestionItem = styled.a`
    color: #2079c9;
    text-decoration: none;
    padding: 10px 16px;
    display: block;
    text-align: left;
    border-bottom: 1px dotted rgb(204, 204, 204);
    font-size: 16px;
    cursor: pointer;
    &:hover {
    background-color: rgb(249, 249, 249);
    }
`;