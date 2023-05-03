import css from './ContactsList.module.scss'
import PropTypes from 'prop-types'
import ContactItem from 'components/ContactItem/ContactItem'

const ContactsList = function ({ contacts, filter }) {
    return (
        <>
            <ul className={css.contactsList}>
                {filter ==='' ?
                contacts.map(( { id, name, number } ) => {
                    return <ContactItem key={id} name={name} number={number} />
                })

                :

                contacts
                .filter(({ name })=> name.toLowerCase().includes(filter.toLowerCase()))
                .map(({ id, name, number }) => {
                    return <ContactItem key={id} name={name} number={number} />
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