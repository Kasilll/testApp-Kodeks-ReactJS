import React from 'react'
import { Switch } from '@material-ui/core'
import PropTypes from 'prop-types'

export default function ToggleSwitch({ checked, setChecked }) {
	function toggleChecked() {
		setChecked(!checked)
	}
	return (
		<div className="container__sort">
			<span>по дате создания</span>
			<Switch checked={checked} onChange={toggleChecked} name="checked" />
			<span>по алфовиту</span>
		</div>
	)
}

ToggleSwitch.propTypes = {
	setChecked: PropTypes.func,
	checked: PropTypes.bool
}
