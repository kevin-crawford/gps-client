import React, {useState} from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

//MUI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const JobCreatorModal = (props) => {
	
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	const addNewJob = (job) => {
		console.log('job created')
	}

	return (
		<div>
			<Button variant="contained" color="primary" onClick={handleOpen}>
				Add New Job
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle>New Job Form</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Add A New Job for {props.date}
					</DialogContentText>
					<TextField 
							autoFocus
							margin="dense"
							id="name"
							label="Customer Name"
							type="text"
							fullWidth 
						/>
					<TextField 
						autoFocus
						margin="dense"
						id="description"
						label="Job Description"
						type="text"
						fullWidth 
					/>
					<TextField 
						autoFocus
						margin="dense"
						id="parts"
						label="Parts Needed"
						type="text"
						fullWidth 
					/>
					<TextField 
						autoFocus
						margin="dense"
						id="comments"
						label="Comments"
						type="text"
						fullWidth 
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={addNewJob} color="primary">
						Add Job
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default JobCreatorModal;