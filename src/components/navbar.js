import React, { Component } from 'react';
import {Nav, Navbar, FormControl, Form, Button } from 'react-bootstrap';

export default class NavBar extends Component{
    render(){
        return(
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">Private Library</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Book Lists</Nav.Link>
                    <Nav.Link href="/create">Add new book</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}