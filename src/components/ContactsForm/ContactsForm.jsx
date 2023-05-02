import css from './ContactsForm.module.scss'


const ContactsForm = function({ addContact, onChangeInput, name }) {
    return (
        <form className={css.form} onSubmit={addContact}>
        <label>
        <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={onChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        </label>
        <button className={css.button} type="submit">Add contact</button>
    </form>
    )
    
}

export default ContactsForm