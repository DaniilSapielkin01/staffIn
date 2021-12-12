import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { TwitterPicker } from 'react-color'

import { TextField } from '@customary/uikit'

import UncontrolledPopover from "reactstrap/lib/UncontrolledPopover";

import './ColoredTagAdd.scss'

import { ReactComponent as IconCheck } from '../../../assets/icons/checked.svg';
import { ReactComponent as IconClose } from '../../../assets/icons/close.svg';
import { ReactComponent as IconPalette } from '../../../assets/icons/fill.svg';
import AddButton from '../../../components/common/AddButton';

const ColoredTag = ({
  edit,
  children,
  onChange,
  onComplete,
  defaultColor,
  options,
}) => {

  const [showTextField, setShowTextField] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(true);
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    setTitle(edit.title);
    setColor(edit.color);
    setShowTextField(Boolean(edit.title))
  }, [edit]);

  useEffect(() => {
    setAutocompleteOptions(options)
  }, [options]);

  const handleComplete = hex => {
    setColor(hex);
    setShowPalette(false)
  };

  const saveTag = () => {
    onComplete && onComplete({ color: color || defaultColor, title })
    setTitle('');
    setColor('');
    setShowPalette(false);
    setShowTextField(false);
    setShowAutocomplete(false)
  };

  const handleChange = newValue => {
    setTitle(newValue);
    onChange(newValue);

    let newOptions = options;

    if ( newValue.length ) {
      newOptions = options.filter(({ title }) => title.toLowerCase().indexOf(newValue.toLowerCase()) > -1)
    }

    setAutocompleteOptions(newOptions);
    setShowAutocomplete(true)
  };

  const handleChooseOption = newValue => {
    setTitle(newValue);
    setShowAutocomplete(false)
  };

  const openPalette = () => {
    setShowPalette(!showPalette);
    setShowAutocomplete(false)
  };

  return (
    <>
      {
        showTextField ? <div className="ctag">
            <div className="d-flex align-items-center ctag__field">
              <TextField
                className="ctag__input"
                value={title}
                onChange={({target: {value}}) => handleChange(value)}
              />
              <div
                className="ctag__icon px-1 cursor-pointer"
                onClick={saveTag}
              >
                {title && title.length ?
                  <IconCheck width="15px" height="15px"/>
                  :
                  <IconClose width="11px" height="11px"/>
                }
              </div>
              <div
                className={cn("ctag__icon px-1 cursor-pointer", {'active': showPalette})}
                onClick={openPalette}
                id="Popover-open-palette"
              >
                <IconPalette fill={color && color} width="15px" height="15px"/>
              </div>
            </div>
            {showAutocomplete &&
            <div className="ctag__autocomplete">
              {autocompleteOptions && autocompleteOptions.map(({ title }, i) =>
                <div
                  key={i}
                  onClick={() => handleChooseOption(title)}
                  className="ctag__autocomplete-item"
                >
                  {title}
                </div>
              )}
            </div>
            }
            <UncontrolledPopover
              trigger="legacy"
              isOpen={showPalette}
              placement="bottom"
              target="Popover-open-palette"
              toggle={openPalette}
            >
              <TwitterPicker
                triangle="hide"
                color={color}
                onChange={({hex}) => handleComplete(hex)}
              />
            </UncontrolledPopover>
          </div>
          :
          <AddButton onClick={() => setShowTextField(true)}>
            {children}
          </AddButton>
      }
    </>
  )
}

ColoredTag.defaultProps = {
  defaultColor: '#000000',
  onChange: () => {},
  options: [],
}

ColoredTag.propTypes = {
  children: PropTypes.any,
  onChange: PropTypes.func,
  onComplete: PropTypes.func,
  options: PropTypes.array,
  color: PropTypes.string,
  edit: PropTypes.object,
}

export default ColoredTag
