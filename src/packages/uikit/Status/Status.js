import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { get } from 'lodash';
import { createPortal } from 'react-dom';

import classes from './Status.module.scss';

import { ReactComponent as IconCaret } from '../../../assets/icons/caret.svg';

const Status = ({ options, selected, isDisabled, onChangedStatus, className, menuPortalTarget }) => {

  const wrapperRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0,  y: 0 });
  const [width, setWidth] = useState(100);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  const handleClickOutside = e => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  };

  const handleClickOpen = e => {
    const boundingClientRect = e.currentTarget.getBoundingClientRect();

    const x = boundingClientRect.x + window.scrollX;
    const y = boundingClientRect.y + window.scrollX + boundingClientRect.height;

    setWidth(boundingClientRect.width);
    setPosition({ x, y });
    setIsOpen(true);
  };

  const handleChange = item => {
    onChangedStatus(item);
    setIsOpen(false)
  };

  return (
    get(selected, 'status') && options.length
      ? <div
        disabled={isDisabled}
        className={cn(classes.root,
          {[className]: className}
        )}
      >
        <div
          onClick={handleClickOpen}
          style={{borderColor: selected.color, color: selected.color}}
          className={cn(classes.valueContainer, {disabled: isDisabled})}
        >
          <div className={classes.select} onClick={handleClickOpen}>
            <div>{selected.status}</div>
            <IconCaret width={12} height={12} className="ml-2" />
          </div>
        </div>
        {
          isOpen && createPortal(
            <div ref={wrapperRef} className={cn(classes.menuList, { isOpen: 'isOpen' })} style={{left: position.x, top: position.y, width: `${width}px`}}>
              {options.map((item, key) =>
                <div key={key} onClick={() => handleChange(item)} className={classes.option}>
                  {item.value === selected.value ? <b>{item.status}</b> : item.status}
                </div>
              )}
            </div>, menuPortalTarget || document.getElementById('selectPortal')
          )
        }
      </div> : ''
    );
  };

Status.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.object.isRequired,
  className: PropTypes.string,
  onChangedStatus: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default Status;
