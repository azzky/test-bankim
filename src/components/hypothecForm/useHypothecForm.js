import { useCallback, useState } from 'react';

/**
 * Hook responsible for logic of hypothec form
 * @returns {data}
 * @returns {Function} data.changeInitialPayment callback to change data.initialPayment
 * @returns {Function} data.changeInitialValue callback to change data.initialPayment
 * @returns {Function} data.changeYears callback to change data.years
 * @returns {Number} data.initialValue amount of hypothec
 * @returns {Number} data.initialPayment initial payment of hypothec
 * @returns {Number} data.years how long hypothec will be
 * @returns {Number} data.monthlyPay montly payment value
 * @returns {Number} data.monthlyPayValue initial value of data.monthlyPay
 * @returns {Number} data.percent percantage of data.initialPayment to data.initialValue
 * @returns {Function} data.submitForm action when form successfully submitted
 */

const PERCENT = 1.1053; // dummy value of potential additional bank fee

const formatValue = e => e.target? e.target.value : e; // makes value coming from input and range handler persistent

const useHypothecForm = () => {
    const [initialValue, setInitialValue] = useState(1000000);
    const [initialPayment, setInitialPayment] = useState(Math.round(initialValue / 2));
    const [years, setYears] = useState(4);
    const [monthlyPayValue, setMonthlyPayValue] = useState(Math.round((initialValue - initialPayment) / years / 12 * PERCENT));
    const [monthlyPay, setMnothlyPay] = useState(monthlyPayValue);
    const percent = Math.round((initialPayment / initialValue)*100);

    const submitForm = useCallback(data => {
        console.log(data);
    }, []);

    const changeInitialValue = useCallback(e => {
        const value = formatValue(e);
        setInitialValue(Math.round(value));
        setInitialPayment(prev => value > prev ? prev : Math.round(value));
        setMnothlyPay(Math.round((value - initialPayment) / years));
        setMonthlyPayValue(Math.round(value / years / 12 * PERCENT));
    }, [years, initialPayment]);

    const changeInitialPayment = useCallback(e => {
        const value = formatValue(e);
        setInitialPayment(Math.round(value));
        setMnothlyPay(Math.round((initialValue - value) / years / 12 * PERCENT));
    }, [initialValue, years]);

    const changeYears = useCallback(e => {
        const value = formatValue(e);
        setYears(Math.round(value));
        setMnothlyPay(Math.round((initialValue - initialPayment) / years / 12 * PERCENT));
    }, [initialPayment, initialValue, years]);

    const changeMonthlyPayment = useCallback(e => {
        const value = formatValue(e);
        setMnothlyPay(Math.round(value));
    }, []);

    return {
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
    }
}

export default useHypothecForm;