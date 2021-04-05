import React, { Component } from 'react';
import {Container, List, ListItem} from '@material-ui/core';
import BookListItem from './BookListItem';

class BookList extends Component {
    render() {
        // const books = this.props.books;
        const { books } = this.props; 
        const bookItems = books.map( book => {
            return (
                <ListItem key={book.ISBN}>
                    <BookListItem book={book} />
                </ListItem>
            )
        })

        return (
            <Container maxWidth='sm'>
            <List>
                {bookItems}

                <ListItem>
                    <BookListItem book={books[0]} />
                    {books[0].title}
                </ListItem>
                <ListItem>
                     {books[1].title}
                </ListItem>
                <ListItem>
                    {books[2].title}
                </ListItem>
            </List> 
            </Container>
        )
    }
}

export default BookList;