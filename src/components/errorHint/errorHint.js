import { FormattedMessage } from 'react-intl';

/**
 * Component responsible for rendering error hint if input is not valid
 * @param props
 * @param {Object} props.classes styling from parent
 * @param {String} props.text intl mapped text id of message
 * @param {Object} props.values intl values
 * @returns {JSX.Element}
 */
const ErrorHint = ({ classes, text, values }) => {
    return (
        <div className={classes.errorHint}>
            <p>
                <FormattedMessage id={text} values={values}/>
            </p>
        </div>
    );
};

export default ErrorHint;