import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import {elementType} from "prop-types";

class ContactData extends Component {

    state = {
        orderForm: {
            name:{
                elementType:'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Your name'
                }
            },
            address:{
                elementType:'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Address'
                }
            },
            zipCode:{
                elementType:'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'ZIP COde'
                }
            },
            country:{
                elementType:'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Country'
                }
            },
            email:{
                elementType:'input',
                elementConfig: {
                    type: 'email',
                    placeholder:'Your e-mail'
                }
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig: {
                    options: [
                        {value:'fastest', displayValue:'Fastest'},
                        {value:'cheapest', displayValue:'Cheapest'}
                    ]
                }
            },
        },
        loading:false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading:true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name:'Martin Papy',
                address: {
                    street:'Some street',
                    zipCode: '14578',
                    country:'Vietnam'
                },
                email:'test@test.com'
            },
            deliveryMethod:'fastest'
        }

        axios.post('/orders.json',order)
            .then(response => {
                this.setState({loading:false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading:false });
            });
    }

    render() {
        const formElementsArray = [];
        for(let key in this.state.orderForm) {
            formElementsArray.push({
                    id:key,
                    config: this.state.orderForm[key]
            });
        };
        let form = (
            <form>
                 <Input elementType="..." elementConfig="..." value="..."/>
                {formElementsArray.map(formElement =>(
                    <Input
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.elementValue}
                ))}
                 <Button btnType="Success" click={this.orderHandler}>ORDER</Button>
            </form>
        );

        if(this.state.loading){
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;