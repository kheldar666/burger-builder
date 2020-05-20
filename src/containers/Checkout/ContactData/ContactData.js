import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css'


class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street:'',
            postalCode: ''
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
        console.log(order);
        // axios.post('/orders.json',order)
        //     .then(response => {
        //         this.setState({loading:false, purchasing:false});
        //     })
        //     .catch(error => {
        //         this.setState({loading:false, purchasing:false});
        //     });
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your e-mail" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" click={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;