import { useCallback, useState } from 'react';

const useSubmit = () => {
    const [initialValue, setInitialValue] = useState(1000000);
    const [initialPayment, setInitialPayment] = useState(Math.round(initialValue / 2));
    const [years, setYears] = useState(4);
    const [monthlyPayValue, setMonthlyPayValue] = useState(Math.round((initialValue - initialPayment) / years / 12 * 1.1053));
    // const monthlyPayValue = ((initialValue - initialPayment) / years / 12 * 1.1053).toFixed() * 1;
    const [monthlyPay, setMnothlyPay] = useState(monthlyPayValue);
    const percent = Math.round((initialPayment / initialValue)*100);

    const submitForm = useCallback(data => {
        console.log(data);
    }, []);

    const changeInitialValue = useCallback(e => {
        const value = e.target? e.target.value : e;
        setInitialValue(Math.round(value));
        setInitialPayment(prev => value > prev ? prev : Math.round(value));
        setMnothlyPay(Math.round((value - initialPayment) / years));
        setMonthlyPayValue(Math.round(value / years / 12 * 1.1053));
        // setMnothlyPay((value / years / 12 * 1.1053).toFixed() * 1);
    }, [years, initialPayment]);

    const changeInitialPayment = useCallback(e => {
        const value = e.target? e.target.value : e;
        setInitialPayment(Math.round(value));
        setMnothlyPay(Math.round((initialValue - value) / years / 12 * 1.1053));
        // setMnothlyPay(((initialValue - value) / years / 12 * 1.1053).toFixed() * 1);
    }, [initialValue, years]);

    const changeYears = useCallback(e => {
        const value = e.target? e.target.value : e;
        setYears(Math.round(value));
        setMnothlyPay(Math.round((initialValue - initialPayment) / years / 12 * 1.1053));
    }, [initialPayment, initialValue, years]);

    const changeMonthlyPayment = useCallback(e => {
        const value = e.target? e.target.value : e;
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

export default useSubmit;