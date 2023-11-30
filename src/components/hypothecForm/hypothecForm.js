import useHypothecForm from "./useHypothecForm";
import { useForm } from "react-hook-form"

import { FormattedMessage } from 'react-intl';

import { cities, monthsOptions, typeOptions, isOwnOptions, maxInitialValue } from './config';

import classes from './hypothecForm.module.css';
import { Divider, ErrorMessage, ErrorHint, Select, InputWithRange } from "@components";

/**
 * Component responsible for rendering hypothec form
 * @returns {JSX.Element}
 */
const HypothecForm = () => {
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
    } = useHypothecForm();
    return (
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
                        {...register("totalValue", { required: true, max: maxInitialValue, min: 1 })}
                        value={initialValue}
                        onChange={changeInitialValue}
                    />
                    {initialValue > maxInitialValue && <ErrorHint classes={classes} text="ipotekaForm.tooHighInintialValueHint" values={{ value: maxInitialValue }}/>}
                </label>
                <ErrorMessage message="global.required" isShow={errors.totalValue}/>
            </div>
            <div>
                <Select
                    label="ipotekaForm.cityTitle"
                    isError={!!errors.city}
                    register={register}
                    options={cities}
                    fieldName="city"
                    classes={classes}
                    errors={errors}
                    placeholder="ipotekaForm.cityPlaceholder"
                />
            </div>
            <div>
                <Select
                    label="ipotekaForm.whenTitle"
                    isError={!!errors.when}
                    register={register}
                    options={monthsOptions}
                    fieldName="when"
                    classes={classes}
                    errors={errors}
                    placeholder="ipotekaForm.whenPlaceholder"
                />
            </div>
            <div>
                <InputWithRange
                    label="ipotekaForm.initialPayTitle"
                    register={register}
                    fieldName="initialPayment"
                    classes={classes}
                    onChange={changeInitialPayment}
                    value={initialPayment}
                    minvalue={0}
                    maxValue={initialValue}
                />
                <div className={classes.hint}>
                    <p>
                        <FormattedMessage id="ipotekaForm.initialPayValue" values={{ value: initialPayment }}/>
                    </p>
                    <p>
                        <FormattedMessage id="ipotekaForm.initialPayPercentage" values={{ value: percent }}/>
                    </p>                        
                </div>
                {percent < 26 && <ErrorHint classes={classes} text="ipotekaForm.percentError"/>}
            </div>
            <div>
                <Select
                    label="ipotekaForm.typeTitle"
                    isError={!!errors.type}
                    register={register}
                    options={typeOptions}
                    fieldName="type"
                    classes={classes}
                    errors={errors}
                    placeholder="ipotekaForm.typePlaceholder"
                />
            </div>
            <div>
                <Select
                    label="ipotekaForm.isOwnTitle"
                    isError={!!errors.isOwn}
                    register={register}
                    options={isOwnOptions}
                    fieldName="isOwn"
                    classes={classes}
                    errors={errors}
                    placeholder="ipotekaForm.isOwnPlaceholder"
                />
            </div>
            <Divider/>
            <div className="years">
                <InputWithRange
                    label="ipotekaForm.timeTitle"
                    register={register}
                    fieldName="time"
                    classes={classes}
                    onChange={changeYears}
                    value={years}
                    minvalue={0}
                    maxValue={30}
                />
                {years < 4 && <ErrorHint classes={classes} text="ipotekaForm.yearsErrorHint"/>}
            </div>
            <div>
                <InputWithRange
                    label="ipotekaForm.monthlyPayTitle"
                    register={register}
                    fieldName="monthlyPay"
                    classes={classes}
                    onChange={changeMonthlyPayment}
                    value={monthlyPay}
                    minvalue={0}
                    maxValue={monthlyPayValue}
                />
            </div>
            <Divider/>
            <button type='submit' className={classes.submit}>
                <FormattedMessage id="ipotekaForm.submit"/>
            </button>
        </form>
    );
}

export default HypothecForm;