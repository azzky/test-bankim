import { FormattedMessage } from 'react-intl';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

/**
 * Component responsible for rendering input with range handler
 * @param props
 * @param {String} props.label text mapping from label of input
 * @param {Function} props.register useForm hook handler
 * @param {String} props.fieldName text mapping for input name
 * @param {Object} props.classes parent styling
 * @param {Function} props.onChange handles value change
 * @param {Number} props.value input value
 * @param {Number} props.minvalue range min value
 * @param {Number} props.maxValue range max value
 * @returns {JSX.Element}
 */
const InputWithRange = ({
    label,
    register,
    fieldName,
    classes,
    onChange,
    value,
    minvalue,
    maxValue
}) => {
    return (
        <>
            <label onChange={onChange}>
                <FormattedMessage id={label}/>
                <input
                    type="number"
                    name={fieldName}
                    value={value}
                    className={classes.input}
                    {...register(fieldName)}
                />
            </label>
            <InputRange
                maxValue={maxValue}
                minValue={minvalue}
                value={value}
                onChange={value => onChange(value)}
            />
        </>
    );
};

export default InputWithRange;