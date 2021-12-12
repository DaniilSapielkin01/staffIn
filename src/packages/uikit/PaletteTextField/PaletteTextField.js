import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TwitterPicker } from 'react-color'
import cn from 'classnames'
import { TextField } from '@customary/uikit'
import UncontrolledPopover from 'reactstrap/lib/UncontrolledPopover'

import { ReactComponent as IconPalette } from '../../../assets/icons/fill.svg'

import './PaletteTextField.scss'

const PaletteTextField = ({
  onChange,
  placement,
  ...props
}) => {
  const [showPalette, setShowPalette] = useState(false)
  const [color, setColor] = useState('')

  const handleChange = value => {
    setColor(value)
    onChange(value)
  }

  const handleComplete = color => {
    setColor(color)
    setShowPalette(false)
    onChange(color)
  }

  return (
    <div className="pfield d-flex justify-content-between align-items-end">
      <TextField
        { ...props }
        className="pfield__input"
        value={color}
        onChange={({target: {value}}) => handleChange(value)}
      />
      <div
        className={cn("pfield__icon px-1 cursor-pointer", {'active': showPalette})}
        onClick={() => setShowPalette(!showPalette)}
        id="palette-popover"
      >
        <IconPalette fill={color && color} width="15px" height="15px"/>
      </div>
      <UncontrolledPopover
        trigger="legacy"
        isOpen={showPalette}
        placement={placement}
        target="palette-popover"
        toggle={() => setShowPalette(!showPalette)}
      >
        <TwitterPicker
          triangle="hide"
          color={color}
          onChange={({hex}) => handleComplete(hex)}
        />
      </UncontrolledPopover>
    </div>
  )
}

PaletteTextField.defaultProps = {
  placement: 'bottom'
}

PaletteTextField.propTypes = {
  onChange: PropTypes.func,
  placement: PropTypes.string,
  ...TextField.propTypes
}

export default PaletteTextField
