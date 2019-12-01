import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import axios from 'axios';

export default class CreateBook extends Component{
    constructor(props){
        super(props);
        
        this.state={
            title: '',
            comment: '',
            books: []
        }

        
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onChangeComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const book = {
            title: this.state.title,
            comment: this.state.comment
        }

        console.log(book);

        axios.post('http://localhost:3000/books/add', book)
            .then(res => console.log(res.data));
        
        alert("Book added succesfully!  " + this.state.title)
    
        window.location = '/';
    }


    render(){
        return(
            <div>
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Book name: </Form.Label>
                    <Form.Control type="text"
                     placeholder="Enter book name"
                     required
                     value={this.state.title}
                     onChange={this.onChangeTitle} />
                    <Form.Text className="text-muted">
                    Please tell us about the book of your interest.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Add a comment: </Form.Label>
                    <Form.Control type="text"
                     placeholder="Enter a comment"
                     required
                     value={this.state.comment}
                     onChange={this.onChangeComment}
                      />
                </Form.Group>
                
                <input type="submit" value="Create Book Log" className="btn btn-primary" />
            </Form>
            </div>
        )
    }
}