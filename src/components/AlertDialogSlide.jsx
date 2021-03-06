import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import PropTypes from 'prop-types'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})

export default function AlertDialogSlide({ open, setOpen }) {
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">{'Ты ввел не те данные, которые нужно... :('}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Введите пожалуйста одно слово или число, либо число + слово. Тогда все будет OK ;)
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

AlertDialogSlide.propTypes = {
	open: PropTypes.bool,
	setOpen: PropTypes.func
}
