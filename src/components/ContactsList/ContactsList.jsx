import css from './ContactsList.module.scss'
import PropTypes from 'prop-types'

const ContactsList = function ({ contacts }) {
    return (
        <>
            <h1 className={css.heading}>Contacts</h1>
            <ul className={css.contactsList}>
                {contacts.map(( { id, name } ) => {
                    return (
                        <li key={id}>
                            <p className={css.contactText}>{name}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    )
}

export default ContactsList