import React from 'react'
import PropTypes from 'prop-types'

import cn from 'classnames';

import './ColoredTag.scss'

const THEME_PRIMARY = 'primary';
const THEME_SECONDARY = 'secondary';

export const THEMES = [THEME_PRIMARY, THEME_SECONDARY];

export const props = {
  themes: THEMES,
};

const ColoredTag = ({
  color,
  theme,
  children,
  onRemove,
  defaultColor,
  onClick,
  className,
}) => {

  return (
    <div
      className={cn('cbadge',
        `cbadge-${theme}`,
        {[className]: className}
      )}
      style={{ backgroundColor: color || defaultColor }}
    >
      {theme === THEME_SECONDARY && <span className="arrow" style={{ borderRightColor: color || defaultColor }} />}
      <span className="title" onClick={onClick}>{ children }</span>
      { onRemove && <span className={`cbadge__remove`} onClick={ onRemove }>x</span> }
    </div>
  )
}

ColoredTag.defaultProps = {
  theme: THEME_PRIMARY,
  defaultColor: '#000000',
  defaultValue: '',
  onClick: () => {},
  onRemove: () => {},
};

ColoredTag.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  defaultColor: PropTypes.string,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(props.themes),
};

export default ColoredTag
