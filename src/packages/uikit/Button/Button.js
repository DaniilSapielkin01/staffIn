import React, { PureComponent } from 'react';
import pt from 'prop-types';
import cn from 'classnames';

import './Button.scss';

const THEME_PRIMARY = 'primary';
const THEME_PRIMARY_OUTLINE = 'primary-outline';
const THEME_SECONDARY = 'secondary';
const THEME_RED = 'red';
const THEME_BROWN = 'brown';
const THEME_GREEN = 'green';
const THEME_TRANSPARENT = 'transparent';
const THEME_WHITE = 'white';

const SUBMIT_TYPE = 'submit';
const BUTTON_TYPE = 'button';

const BUTTON_SM = 'sm';
const BUTTON_MD = 'md';
const BUTTON_LG = 'lg';
const BUTTON_XLG = 'xlg';
const BUTTON_MAX = 'max';

export const THEMES = [THEME_PRIMARY, THEME_PRIMARY_OUTLINE, THEME_SECONDARY, THEME_RED, THEME_BROWN,
                       THEME_GREEN, THEME_TRANSPARENT, THEME_WHITE];
export const TYPES = [SUBMIT_TYPE, BUTTON_TYPE];
export const SIZES = [BUTTON_SM, BUTTON_MD, BUTTON_LG, BUTTON_XLG, BUTTON_MAX];

export const props = {
  themes: THEMES,
  types: TYPES,
  sizes: SIZES,
};

class Button extends PureComponent {
  static propTypes = {
    /**
     * button content
     */
    children: pt.node,
    /**
     * color theme
     */
    theme: pt.oneOf(props.themes),
    /**
     * click event callback
     */
    onClick: pt.func,
    /**
     * flag for fixed button width
     */
    fixedWidth: pt.bool,
    /**
     * flag for inactive button
     */
    disabled: pt.bool,
    /**
     * button type
     */
    type: pt.oneOf(props.types),
    /**
     * button size
     */
    size: pt.string,
    /**
     * Loading spinner
     */
    spinner: pt.bool,

    className: pt.string,
  };

  static defaultProps = {
    theme: THEME_PRIMARY,
    size: BUTTON_MD,
    onClick: () => {},
    fixedWidth: false,
    disabled: false,
    type: BUTTON_TYPE,
    spinner: false,
    outline: false,
  };

  render() {
    const {
      children, theme, outline, onClick, fixedWidth, disabled, type, size, className, spinner
    } = this.props;

    return (
      <button
        className={cn(
          `button button-${theme} button-${size}`,
          { 'fixed': fixedWidth, 'outline': outline, [className]: className }
        )}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        { (spinner && <span className="spinner loading" /> )|| children }
      </button>
    );
  }
}
export default Button;
