import React, { PureComponent } from 'react';

import cn from 'classnames';

import pt from 'prop-types';

import './SearchField.scss';

const THEME_PRIMARY = 'primary';
const THEME_SECONDARY = 'secondary';

export const THEMES = [THEME_PRIMARY, THEME_SECONDARY]

export const props = {
  themes: THEMES,
};

class SearchField extends PureComponent {
  static propTypes = {
    /**
     * onChange event callback
     */
    onChange: pt.func,
    /**
     * color theme
     */
    theme: pt.oneOf(props.themes),
    /**
     * className
     */
    className: pt.string,
    /**
     * placeholder
     */
    placeholder: pt.string,
    /**
     * magnify click event
     */
    handleMagnifyClick: pt.func,
  };

  static defaultProps = {
    theme: THEME_PRIMARY,
    onChange: () => {},
    placeholder: "Search",
  };

  render() {
    const {
      onChange,
      placeholder,
      className,
      theme,
      handleMagnifyClick,
      ...rest
    } = this.props;

    return (
      <div className={cn(`container-search-input ${theme}`, { [className]: className })}>
        <label
          className={cn({ 'cursor-pointer': handleMagnifyClick })}
          onClick={ (handleMagnifyClick && handleMagnifyClick ) || (() => {}) }
        />
        <input
          {...rest}
          type="text"
          placeholder={placeholder}
          className="input-search"
          onChange={e => onChange(e)}
        />
      </div>
    );
  }
}

export default SearchField;
