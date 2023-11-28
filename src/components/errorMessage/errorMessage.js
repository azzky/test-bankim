import { FormattedMessage } from 'react-intl';

import classes from './errorMessage.module.css';
/**
 * Component responsible for rendering error message if input is not valid
 * @param props
 * @param {Boolean} props.isShow when true renders message
 * @param {String} props.message intl mapped text id of message
 * @returns {JSX.Element}
 */
const ErrorMessage = ({
    isShow,
    message
}) => {
    return isShow && (
        <p className={classes.errorMessage}>
            <FormattedMessage id={message}/>
        </p>
    );
};

export default ErrorMessage;