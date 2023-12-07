import { useForm } from 'react-hook-form';
import { useReducer } from 'react';

import {
  calculateInterest,
  calculateMaturity,
  calculateNairaBills,
} from '@/utils/helpers';
import Form from './Form';
import Results from './Results';
import Loader from '@/components/Loader';

const initalState = {
  interest: 0,
  maturity: 0,
  isUSD: false,
  interestIntervals: null,
};

function formReducer(state, action) {
  switch (action.type) {
    case 'field/update':
      return { ...state, [action.field]: action.payload };
    case 'reset':
      return initalState;
    default:
      return state;
  }
}

function CalcForm({ products }) {
  const [state, dispatch] = useReducer(formReducer, initalState);

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  if (!products || products.length === 0) {
    return <Loader />;
  }

  const allProducts = products.map((product) => product.name);

  function handleReset() {
    dispatch({ type: 'reset' });
    reset();
  }

  const formActions = { register, handleSubmit, errors, handleReset };

  async function onSubmit(data) {
    const formattedData = {
      ...data,
      amount: +data.amount,
      tenor: +data.tenor,
    };

    //COMPUTE VARIABLES TO BE USED IN THE CALCULATIONS

    /* Interest rate */
    const interestRate = products.find(
      (el) => el.name === formattedData.product
    )?.interest_rate;

    /* Is the input in USD? */
    const isUSD = formattedData.product.toLowerCase().includes('usd');

    /* Would the currency be exchanged? */
    const isExchanged =
      formattedData.product.toLowerCase().includes('usd') &&
      formattedData.product.toLowerCase().includes('naira');

    /* Is the product type 'Naira Bills'? */
    const isNairaBills =
      formattedData.product.toLowerCase().includes('naira') &&
      formattedData.product.toLowerCase().includes('bills');

    /* Calculate Naira Bills */
    if (isNairaBills) {
      const { interestAmount, interestIntervals, finalMaturity } =
        calculateNairaBills(
          formattedData.amount,
          formattedData.tenor,
          interestRate
        );

      dispatchInterestAndMaturityAndInterestIntervals(
        interestAmount,
        finalMaturity,
        isUSD,
        interestIntervals
      );

      return;
    }

    /* Calculate Interest */
    const interest = await calculateInterest(
      formattedData.amount,
      formattedData.tenor,
      interestRate,
      isExchanged,
      isUSD
    );

    /* Calculate Maturity */
    const maturity = await calculateMaturity(
      formattedData.amount,
      interest,
      isExchanged
    );

    dispatchInterestAndMaturity(interest, maturity, isUSD);
  }

  /* Update state.interest && state.maturity */
  function dispatchInterestAndMaturity(interest, maturity, isUSD) {
    dispatch({ type: 'field/update', field: 'interest', payload: interest });
    dispatch({ type: 'field/update', field: 'maturity', payload: maturity });
    dispatch({ type: 'field/update', field: 'isUSD', payload: isUSD });
    dispatch({
      type: 'field/update',
      field: 'interestIntervals',
      payload: null,
    });
  }

  /* Update state.interest && state.maturity && state.interestIntervals */
  function dispatchInterestAndMaturityAndInterestIntervals(
    interest,
    maturity,
    isUSD,
    interestIntervals
  ) {
    dispatch({ type: 'field/update', field: 'interest', payload: interest });
    dispatch({ type: 'field/update', field: 'maturity', payload: maturity });
    dispatch({ type: 'field/update', field: 'isUSD', payload: isUSD });
    dispatch({
      type: 'field/update',
      field: 'interestIntervals',
      payload: interestIntervals,
    });
  }

  /* Show the form if interest and maturity have not been calculated yet */
  if (state.interest === 0 && state.maturity === 0) {
    return (
      <Form
        products={allProducts}
        formActions={formActions}
        onSubmit={onSubmit}
        state={state}
      />
    );
  }

  if (state.interest > 0 && state.maturity > 0) {
    return <Results state={state} reset={handleReset} />;
  }

  console.log(state);
}

export default CalcForm;
