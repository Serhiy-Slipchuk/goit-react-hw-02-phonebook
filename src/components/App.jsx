import css from './App.module.scss'
import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from './ContactsList/ContactsList';

export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: ''
  }

  addContact = (event) => {
    event.preventDefault();
    this.setState(prevState => ({contacts: [...prevState.contacts, {id: nanoid(5), name: this.state.name, number: this.state.number}]}));
    this.setState({name: ''});
    this.setState({number: ''});
  }

  handlerInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <div className={css.phonebookThumb}>
          <h1 className={css.title}>Phonebook</h1>

          <ContactsForm
            onSubmitForm={this.addContact}
            onChangeInput={this.handlerInputChange}
            name={this.state.name}
            number={this.state.number}
          />

          <ContactsList contacts={this.state.contacts}/>
          
        </div>
      </div>
    );
  }
};
