/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Order } from 'components/Order';
import axios from 'services/axios-orders';
import { withErrorHandler, withLoading } from 'hoc';
import * as actions from 'store/actions';
// import { Spinner } from 'components/UI';

class Orders extends Component {
    componentDidMount() {
        if (this.props.orders && this.props.orders.length === 0) {
            this.props.onFetchOrders(this.props.token, this.props.userId);
        }
    }
    render() {
        let orders = <p>No orders to display</p>;
        if (this.props.orders.length > 0) {
            orders = this.props.orders.map((order) => {
                return (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                );
            });
        }
        return <div>{orders}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: (token, userId) =>
            dispatch(actions.fetchOrders(token, userId)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withErrorHandler(withLoading(Orders), axios));
