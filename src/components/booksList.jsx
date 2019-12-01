import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';

const Book = props =>(
    <Card className="text-center">
        <Card.Header>Book id: {props.book._id} </Card.Header>
            <Card.Body>
                <Card.Title>Book title: {props.book.title}</Card.Title>
                <Card.Text>
                    {props.book.comment}
                </Card.Text>
                <Button variant="warning"
                onClick={() => {props.deleteBook(props.book._id)}}>Delete</Button>
            </Card.Body>
        <Card.Footer className="text-muted">Updated: {props.book.updatedAt}</Card.Footer>
    </Card>
)

export default class BooksList extends Component {
    constructor(props){
        super(props);

        this.state = {
            books: []
        }

        this.deleteBook = this.deleteBook.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:3000/books/')
            .then(response => {
                this.setState({
                    books: response.data
                })
            })
            .catch(error => console.log(error))
    }

    deleteBook(id){
        axios.delete('http://localhost:3000/books/'+id)
            .then(res => console.log(res.data));

            this.setState({
                books: this.state.books.filter(el => el._id !== id)
            })
    }

    booksList() {
        return this.state.books.map(currentbook => {
            return <Book book={currentbook} deleteBook={this.deleteBook} key={currentbook._id} />
        })
    }

    render(){
        return(
            <div>
                <Container className="text-center">
                    <Row >
                        {this.booksList()}
                        
                    </Row>
                </Container>
            </div>
        )
    }
}