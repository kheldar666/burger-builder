import React, {Component} from "react";
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('[OrderSummary] Did Update');
    // }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTranform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)} USD</strong></p>
                <p>Continue to Checkout ?</p>
                <Button btnType="Danger" click={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" click={this.props.purchaseContinued}>CONTINUE</Button>
            </Wrapper>
        );
    }
};

export default OrderSummary;