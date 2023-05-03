import css from './ContactsList.module.scss'
import PropTypes from 'prop-types'

const ContactsList = function ({ contacts, filter }) {
    return (
        <>
            <ul className={css.contactsList}>
                {filter ==='' ?
                contacts.map(( { id, name, number } ) => {
                    return (
                        <li key={id}>
                            <p className={css.contactText}>{name}<span className={css.phoneText}>{number}</span></p>
                        </li>
                    )
                })

                :

                contacts
                .filter(({ name })=> name.toLowerCase().includes(filter.toLowerCase()))
                .map(({ id, name, number }) => {
                    return (
                        <li key={id}>
                            <p className={css.contactText}>{name}<span className={css.phoneText}>{number}</span></p>
                        </li>
                    )
                })
                }
            </ul>
        </>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ),
    filter: PropTypes.string
}

export default ContactsList