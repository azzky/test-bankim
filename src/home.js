import { FormattedMessage } from 'react-intl';
import InputRange from 'react-input-range';
import { useForm } from "react-hook-form"

import classes from './home.module.css'
import 'react-input-range/lib/css/index.css'
import './global.css';
import useSubmit from './hooks/useForm';

const cities = [
    { value: 'telaviv', label: 'Tel Aviv' },
    { value: 'ariel', label: 'Ariel' }
];

const monthsOptions = [
    { value: '0', label: 'this month' },
    { value: '1', label: 'next month' }
];

const typeOptions = [
    { value: '0', label: 'new house' },
    { value: '1', label: 'cottage' }
];

const isOwnOptions = [
    { value: '0', label: 'no' },
    { value: '1', label: 'yes' }
]

// const onSubmit = ({ values }) => console.log(values);

const Home = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const {
        changeInitialPayment,
        changeInitialValue,
        changeMonthlyPayment,
        changeYears,
        initialValue,
        initialPayment,
        years,
        monthlyPay,
        monthlyPayValue,
        percent,
        submitForm
    } = useSubmit()
    console.log({
        changeInitialPayment,
        changeInitialValue,
        changeMonthlyPayment,
        changeYears,
        initialValue,
        initialPayment,
        years,
        monthlyPay,
        monthlyPayValue,
        percent,
        submitForm
    });
    return (
        <>
            <h1>
                <FormattedMessage id="home.title"/>
            </h1>
            <form
                onSubmit={handleSubmit(submitForm)}
                className={classes.form}
            >
                <div>
                    <label>
                        <FormattedMessage id="ipotekaForm.totalvalueTitle"/>
                        <input type="number"
                            name="totalValue"
                            className={`${classes.input} ${errors.totalValue ? classes.error : ''}`}
                            {...register("totalValue", { required: true })}
                            value={initialValue}
                            onChange={changeInitialValue}
                        />
                    </label>
                    {errors.totalValue && <p className={classes.errorMessage}>
                        <FormattedMessage id="global.required"/>
                    </p>}
                </div>
                <div>
                    <label>
                        <FormattedMessage id="ipotekaForm.cityTitle"/>
                        <select
                            className={`${classes.input} ${errors.city ? classes.error : ''}`}
                            {...register("city", { required: true })}>
                            <option selected disabled value="" key="placeholder">
                                <FormattedMessage id="ipotekaForm.cityPlaceholder"/>
                            </option>
                            {cities.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                        </select>
                    </label>
                    {errors.city && <p className={classes.errorMessage}>
                        <FormattedMessage id="global.required"/>
                    </p>}
                </div>
                <div>
                    <label>
                        <FormattedMessage id="ipotekaForm.whenTitle"/>
                        <select
                            className={`${classes.input} ${errors.when ? classes.error : ''}`}
                            {...register("when", { required: true })}>
                            <option selected disabled value="" key="placeholder">
                                <FormattedMessage id="ipotekaForm.whenPlaceholder"/>
                            </option>
                            {monthsOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                        </select>
                    </label>
                    {errors.when && <p className={classes.errorMessage}>
                        <FormattedMessage id="global.required"/>
                    </p>}
                </div>
                <div>
                    <label onChange={changeInitialPayment}>
                        <FormattedMessage id="ipotekaForm.initialPayTitle"/>
                        <input
                            type="number"
                            name="initialPayment"
                            value={initialPayment}
                            className={`${classes.input} ${errors.totalValue ? classes.error : ''}`}
                            {...register("initialPayment")}
                        />
                    </label>
                    <InputRange
                            maxValue={initialValue}
                            minValue={0}
                            value={initialPayment}
                            onChange={value => changeInitialPayment(value)}
                        />
                    <div className={classes.hint}>
                        <p>Cумма финансирования: {initialPayment}</p>
                        <p>Процент финансирования: {percent}%</p>
                    </div>
                    {percent < 26 && <div className={classes.errorHint}>
                        <p>Сумма первоначального взноса меньше 25% от стоимости недвижимости</p>
                    </div>}
                </div>
                <div>
                    <label>
                        <FormattedMessage id="ipotekaForm.typeTitle"/>
                        <select
                            className={`${classes.input} ${errors.type ? classes.error : ''}`}
                            {...register("type", { required: true })}>
                            <option selected disabled value="" key="placeholder">
                                <FormattedMessage id="ipotekaForm.typePlaceholder"/>
                            </option>
                            {typeOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                        </select>
                    </label>
                    {errors.type && <p className={classes.errorMessage}>
                        <FormattedMessage id="global.required"/>
                    </p>}
                </div>
                <div>
                    <label>
                        <FormattedMessage id="ipotekaForm.isOwnTitle"/>
                        <select
                            className={`${classes.input} ${errors.isOwn ? classes.error : ''}`}
                            {...register("isOwn", { required: true })}>
                            <option selected disabled value="">
                                <FormattedMessage id="ipotekaForm.isOwnPlaceholder"/>
                            </option>
                            {isOwnOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                        </select>
                    </label>
                    {errors.isOwn && <p className={classes.errorMessage}>
                        <FormattedMessage id="global.required"/>
                    </p>}
                </div>
                <hr className={classes.divider}/>
                <div className="years">
                    <label onChange={changeYears}>
                        <FormattedMessage id="ipotekaForm.timeTitle"/>
                        <input
                            type="number"
                            value={years}
                            className={`${classes.input} ${errors.time ? classes.error : ''}`}
                            {...register("time", { required: true })}
                        />
                    </label>
                    <InputRange
                        maxValue={30}
                        minValue={0}
                        value={years}
                        onChange={value => changeYears(value)}
                    />
                    {years < 4 && <div className={classes.errorHint}>
                        <p>Cрок ипотеки не может быть меньше 4 года</p>
                    </div>}
                </div>
                <div>
                    <label onChange={changeMonthlyPayment}>
                        <FormattedMessage id="ipotekaForm.monthlyPayTitle"/>
                        <input
                            type="number"
                            value={monthlyPay}
                            className={`${classes.input} ${errors.monthlyPay ? classes.error : ''}`}
                            {...register("monthlyPay", { required: true })}
                        />
                    </label>
                    <InputRange
                            maxValue={monthlyPayValue}
                            minValue={0}
                            value={monthlyPay}
                            onChange={value => changeMonthlyPayment(value)}
                        />
                    {errors.monthlyPay && <p className={classes.errorMessage}>
                        <FormattedMessage id="global.required"/>
                    </p>}
                </div>
                <hr className={classes.divider}/>
                <button type='submit' className={classes.submit}>
                    <FormattedMessage id="ipotekaForm.submit"/>
                </button>
            </form>
        </>
    );
};

export default Home;