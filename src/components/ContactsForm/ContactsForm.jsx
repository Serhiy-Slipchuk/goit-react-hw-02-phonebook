import css from './ContactsForm.module.scss'
import PropTypes from 'prop-types'


const ContactsForm = function({ onSubmitForm, onChangeInput, name }) {
    return (
        <form className={css.form} onSubmit={onSubmitForm}>
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

ContactsForm.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default ContactsForm