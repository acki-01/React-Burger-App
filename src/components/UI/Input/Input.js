/** @format */

import React from 'react';

import classes from './Input.css';

const input = (props) => {
    const inputClasses = [classes.InputElement];
    if (props.shouldValidate && props.invalid && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    let inpulElement = null;
    switch (props.elementType) {
        case 'input':
            inpulElement = (
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case 'select':
            inpulElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        case 'textarea':
            inpulElement = (
                <textarea
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        default:
            inpulElement = (
                <input
                    className={classes.InputElement}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inpulElement}
        </div>
    );
};

export default input;
