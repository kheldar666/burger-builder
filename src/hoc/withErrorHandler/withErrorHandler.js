import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Wrapper from '../../hoc/Wrapper/Wrapper'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(request => {
                console.log(request)
                this.setState({error:null});
                return request;
            })
            this.respInterceptor = axios.interceptors.response.use(response => response, error => {
                console.log(error)
                this.setState({error:error});
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.respInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error:null});
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