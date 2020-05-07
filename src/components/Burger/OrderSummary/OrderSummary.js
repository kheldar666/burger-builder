import React from "react";
import Wrapper from "../../../hoc/Wrapper";
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price: {props.totalPrice.toFixed(2)} USD</strong></p>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" click={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" click={props.purchaseContinued}>CONTINUE</Button>
        </Wrapper>
    );

};

export default orderSummary;