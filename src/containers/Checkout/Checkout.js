import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";
import QueryParamsUtils from "../../utils/QueryParamsUtils";

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat:0,
            cheese:0,
            bacon:0
        },
        totalPrice:0
    }

    componentDidMount() {
        if(this.props.location.search) {
            let queryParams = QueryParamsUtils.toObject(this.props.location.search);

            for (let [ingredient] of Object.entries(queryParams)) {
                if(ingredient.localeCompare("totalPrice") === 0) {
                    //Removing totalPrice from Ingredients
                    this.setState({totalPrice: queryParams[ingredient]})
                    delete queryParams[ingredient];
                }
            }

            this.setState({ingredients:queryParams})
        } else {
            this.props.history.replace('/');
        }
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'} exact
                       render={() => (<ContactData
                                            ingredients={this.state.ingredients}
                                            totalPrice={this.state.totalPrice}
                                            {...this.props}
                       />)}/>
            </div>
        );
    }

}

export default Checkout;