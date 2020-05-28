import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    const arrIngredient = [];
    for(let ingredientName in props.ingredients) {
        arrIngredient.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }
    console.log(arrIngredient)
    return (
        <div className={classes.Order}>
            <p>Ingredients: {
                arrIngredient.map(ig =>{
                    return <span
                                key={ig.name}
                                style={{
                                    textTransform:'capitalize',
                                    display:'inline-block',
                                    margin:'0 8px',
                                    border:'1px solid #ccc',
                                    padding:'5px'}}>
                                {ig.name} ({ig.amount})
                            </span>
                })
            }</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
}

export default order;