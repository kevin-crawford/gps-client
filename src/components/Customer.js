import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types'


// MUI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		display: 'flex',
		marginBottom: 20
	},
	content: {
		padding: 25
	}
}

class Customer extends Component {
	render() {
		const { classes, customer: {name, customerId, address, phoneNum} } = this.props
		return (
			<Card className={classes.card}>
				<CardContent className={classes.content}>
					<Typography variant="h5" color="primary" component={Link} to={`/customers/${customerId}`}>
							{name}
					</Typography>
					<Typography variant="body2" color="textSecondary">ID: {customerId}</Typography>
					<Typography variant="body2" color="textSecondary">Address: {address}</Typography>
					<Typography variant="body2" color="textSecondary">Phone Number: {phoneNum}</Typography>
				</CardContent>
			</Card>
		)
	}
}

export default withStyles(styles)(Customer);
