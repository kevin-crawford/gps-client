import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';


// MUI
import Card from '@material-ui/core/Card';
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


// add created by through redux state of user state to get name of person 

class Job extends Component {
	render() {
		const { classes, job: { customer, createdAt, comments, description, jobId, notified, parts } } = this.props
		return (
			<Card className={classes.card}>
				<CardContent className={classes.content}>
					<div>
					<Typography variant="h5" color="primary" component={Link} to={`/job/${jobId}`}>
							{customer.address}
					</Typography>
					</div>
					<Typography variant="body2" color="textSecondary" component={Link} to={`/customer/${customer.customerId}`}>Name: {customer.name}</Typography>
					<Typography variant="body2" color="textSecondary">Address: {customer.address}</Typography>
					<Typography variant="body2" color="textSecondary">Phone Number: {customer.phoneNum}</Typography>
					<br/>
					<Typography variant="body2" color="textSecondary">Description: {description}</Typography>
					<Typography variant="body2" color="textSecondary">Parts: {parts}</Typography>
					<Typography variant="body2" color="textSecondary">Comments: {comments}</Typography>
					<Typography variant="body2" color="textSecondary">Job Created: {createdAt}</Typography>
				</CardContent>
			</Card>
		)
	}
}

export default withStyles(styles)(Job);