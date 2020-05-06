import React from "react";
import Wrapper from "../../../hoc/Wrapper";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTranform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );}
        );

    return (
        <Wrapper>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout ?</p>
        </Wrapper>
    );

};

export default orderSummary;