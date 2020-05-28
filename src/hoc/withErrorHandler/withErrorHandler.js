import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Wrapper from '../../hoc/Wrapper/Wrapper'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        constructor(props) {
            super(props);
            this.reqInterceptor = axios.interceptors.request.use(config => {
                this.errorConfirmedHandler();
                return config;
            });
            this.respInterceptor = axios.interceptors.response.use(response => response, error => {
                this.newErrorHandler(error)
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.respInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error:null});
        }

        newErrorHandler = (error) => {
            this.setState({error:error});
        }

        render() {
            return  <Wrapper>
                        <Modal
                            show={this.state.error}
                            modalClosed={this.errorConfirmedHandler} >
                            {this.state.error ? this.state.error.message : null}
                        </Modal>
                        <WrappedComponent  {...this.props} />
                    </Wrapper>
        }
    }
}




export default withErrorHandler;