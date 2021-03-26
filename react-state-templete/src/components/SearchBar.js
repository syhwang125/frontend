import React, { Component } from 'react';

import SearchIcon from '@material-ui/core';
import Search from '@material-ui/icons/Search';

class SearchBar extends Component {
    render() {
        reaturn (
            <TextField 
                inputProps={{ 
                    startAdorment: 
                    <InputAdorment position='start'>
                        <SearchIcon />
                    </InputAdorment>
                }}
            />
        )
    }
}

export default SearchBar;