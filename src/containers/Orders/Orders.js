import React, {Component} from "react";
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";


class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('orders.json')
            .then( (response) => {
                const fetchedOrders = [];
                for(let key in response.data){
                    fetchedOrders.push({
                        ...response.data[key],
                         id:key
                    })
                }
                this.setState({loading:false, orders:fetchedOrders});
            })
            .catch( error => {
                this.setState({loading:false});
            });
    }

    render() {
        let fetchedOrders = <Spinner />
        if(!this.state.loading) {
            fetchedOrders = this.state.orders.map(order => {
                    return <Order key={order.id}
                                  ingredients={order.ingredients}
                                  price={order.price}/>
                })
        }
        return (
            <div>
                {fetchedOrders}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);