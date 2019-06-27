import React from 'react';
import { connect } from 'react-redux';
import {getCustomer} from '../redux/actions/dataActions';

// components
import Customer from '../components/Customer';

export class CustomerPage extends React.Component {

	componentDidMount() {
		const customerId = this.props.match.params.id;
		this.props.getCustomer(customerId)
	}

	render(){
		return (
			<Customer customer={this.props.customer}/>
		)
	}
}

const mapStateToProps = state => ({
	customer: state.data.customer
})
export default connect(mapStateToProps, { getCustomer })(CustomerPage)