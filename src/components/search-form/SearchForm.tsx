import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import './style.css'

const SearchForm = ({handleClick, handleChange, isError}: any): ReactElement => {
    return (
        <div className="search-container">
            <TextField
                error={ isError ? true : false}
                id="search-outlined"
                className="search-input-outlined"
                onChange={(e) => handleChange(e.target.value)}
            />
            <Button 
                variant="contained"
                size="large" id="search-btn" 
                onClick={() => handleClick()}
            >
                Search
            </Button>
        </div>
    )
}

export default connect()(SearchForm)
