import css from './App.module.scss'
import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
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
    setTimeout(()=>{
      console.log(this.state);
    }, 1000)
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

          <h2 className={css.heading}>Contacts</h2>
          <Filter filter={this.state.filter} onChangeFilter={this.handlerInputChange}/>
          <ContactsList contacts={this.state.contacts} filter={this.state.filter}/>

        </div>
      </div>
    );
  }
};
