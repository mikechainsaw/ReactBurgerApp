import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.ingredientLabel}</div>
        <button className={classes.Less} onClick={props.ingredientRemoved} >Less</button>
        <button className={classes.More} onClick={props.ingredientAdded} >More</button>
    </div>
);

export default buildControl;