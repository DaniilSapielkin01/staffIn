import React from 'react';
import classes from './Avatar.module.scss'
import PropTypes from "prop-types";
import Confirm from '../Confirm';
import cn from 'classnames';
import chroma from 'chroma-js';
import {stringToColor} from '../../../helpers/utils';

const STATUS_ONLINE = 'online';
const STATUS_OFFLINE = 'offline';
const STATUS_PENDING = 'pending';

export const STATUSES = [STATUS_ONLINE, STATUS_OFFLINE, STATUS_PENDING];

export const props = {
  STATUSES: STATUSES,
};

const Avatar = ({ id, status, name, icon, width, height, className }) => {

  const firstLetters = name && name.split(" ")[0].charAt(0).toUpperCase();
  const colorText = chroma.contrast(chroma(stringToColor(id)), 'white') > 2 ? 'white' : 'black';

  return (
    <div
      className={cn(classes.root, className)}
      style={{
        width: width,
        height: height,
        background: id ? stringToColor(id) : '#00A0FF',
        color: colorText
      }}
    >
      {
        icon ? <img className={classes.icon} src={icon} alt="" /> :
          <span className={classes.firstLetters}>{firstLetters}</span>
      }
      { status && <span className={classes.infoCircle} data-status={status} /> }
    </div>

  );
};

Confirm.propTypes = {
  id: PropTypes.number,
  status: PropTypes.object,
  name: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Avatar.defaultProps = {
  status: null,
  name: '',
  width: 40,
  height: 40,
};

export default Avatar;
