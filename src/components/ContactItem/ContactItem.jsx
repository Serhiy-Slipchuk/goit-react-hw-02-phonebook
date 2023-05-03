import css from './ContactItem.module.scss'
import PropTypes from 'prop-types'

const ContactItem = function({ name, number }) {
    return (
        <li>         
            <p className={css.contactText}>{name}<span className={css.phoneText}>{number}</span></p>
        </li>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}

export default ContactItem