/** @format */

import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
                {props.ingredients[igKey]}
            </li>
        );
    });
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p>Continue to checkout</p>
            <p>
                <strong>Total Price: {props.price.toFixed(2)}</strong>
            </p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                Cancel
            </Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>
                Continue
            </Button>
        </React.Fragment>
    );
};

export default orderSummary;
