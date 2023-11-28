import { FormattedMessage } from 'react-intl';
import { ErrorMessage } from '@components';

/**
 * Component responsible for rendering input with range handler
 * @param props
 * @param {String} props.label text mapping from label of input
 * @param {Function} props.register useForm hook handler
 * @param {String} props.fieldName text mapping for input name
 * @param {String} props.placeholder text mapping for default value
 * @param {Object} props.classes parent styling
 * @param {Object} props.errors main form errors list
 * @param {Number} props.value input value
 * @param {Boolean} props.isError when true renders error message
 * @param {Array} props.options list of options
 * @returns {JSX.Element}
 */
const Select = ({
    label,
    isError,
    register,
    options,
    fieldName,
    classes,
    errors,
    placeholder
}) => {
    return (
        <>
            <label>
                <FormattedMessage id={label}/>
                <select
                    className={`${classes.input} ${isError ? classes.error : ''}`}
                    {...register(fieldName, { required: true })}
                >
                    <option selected disabled value="" key="placeholder">
                        <FormattedMessage id={placeholder}/>
                    </option>
                    {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
            </label>
            <ErrorMessage message="global.required" isShow={errors.city}/>
        </>
    );
};

export default Select;