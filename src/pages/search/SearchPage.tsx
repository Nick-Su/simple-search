import React, { ReactElement, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router';

import SearchForm from '../../components/search-form/SearchForm'
import { setSearchQuery } from '../../actions/searchQueriesActions';
import './style.css'

import { 
    isEmailValid,
    isUsernameValid,
    isIPValid,
    isFullnameValid,
    isPhoneNumberValid
} from '../../services/utils/validators';

const SearchPage: React.FC = ({ dispatch, searchString }: any): ReactElement => {
    const navigate = useNavigate();
    const [parsedString, setParsedString] = useState("");
    const [isFaildToParseString, setIsFaildToParseString] = useState(false)

    const onSearchInputChange = (inputValue: string): void => {
        dispatch(setSearchQuery(inputValue))
        setIsFaildToParseString(false)
        setParsedString("")
    }

    const handleSearchClick = (): void => {

        let isParsed = false;

        if (isEmailValid(searchString)) {
            setParsedString('Email')
            redirectToRoute("/emails")
            isParsed = true;
        }

        if (isUsernameValid(searchString)) {
            setParsedString('Username')
            redirectToRoute("/usernames")
            isParsed = true;
        }

        if (isIPValid(searchString)) {
            setParsedString('IPv4 address')
            redirectToRoute("/ip")
            isParsed = true;
        }

        if (isFullnameValid(searchString)) {
            setParsedString("Full user name")
            redirectToRoute("/users")
            isParsed = true;
        }

        if (isPhoneNumberValid(searchString)) {
            const getSpecialPhoneChars = /[\s-()]/gm;
            const trimmedString = searchString.replace(getSpecialPhoneChars, '')
            setParsedString('Phone number')
            redirectToRoute("/phones", {phone: trimmedString})
            isParsed = true
        }

        if (!isParsed) {
            setParsedString('Incorrect input')
            setIsFaildToParseString(true)
        }
    }

    const redirectToRoute = (path: string, state?: Object): void => {
        setTimeout(() => { navigate(path, { state }) }, 1500)
    }

    return (
        <div className="search-page">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Manjaro_logo_text.svg/2560px-Manjaro_logo_text.svg.png" alt="logo" id="search-logo" />
            <div className="search-form-container">
                <SearchForm handleClick={handleSearchClick} isError={isFaildToParseString} handleChange={onSearchInputChange} />
            </div>
            <p  className={"info-text " + (isFaildToParseString ? 'error-text' : 'success-text')}>{parsedString}</p>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    searchString: state.search.searchQuery,
})

export default connect(mapStateToProps)(SearchPage)
