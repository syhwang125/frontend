import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { TextField , InputAdornment } from '@material-ui/core';

class SearchBar extends Component {
    render() {

        const { onSearchTitle } = this.props;

        return (
            <TextField 
                InputProps={{ 
                    startAdornment: (
                    <InputAdornment position='start'>
                        <SearchIcon />
                    </InputAdornment>
                    )
                }}

                onChange = { event => onSearchTitle( event.target.value )}
            />
        )
    }
}

export default SearchBar;