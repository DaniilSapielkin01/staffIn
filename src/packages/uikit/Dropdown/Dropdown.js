import React, { PureComponent } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Dropdown.scss';

const DEFAULT_THEME = 'dropdown-default'
const BUTTON_DARKEN = 'dropdown-button-darken'
const PRIMARY_THEME = 'dropdown-primary'
const SECONDARY_THEME = 'dropdown-secondary'
const RED_THEME = 'dropdown-red'
const GREEN_THEME = 'dropdown-green'

export const THEMES = [PRIMARY_THEME, BUTTON_DARKEN, DEFAULT_THEME, SECONDARY_THEME, RED_THEME, GREEN_THEME]

class DropDown extends PureComponent {
  static propTypes = {
    options: PropTypes.array.isRequired,
    selected: PropTypes.object,
    label: PropTypes.any,
    className: PropTypes.string,
    onChange: PropTypes.func,
    showSelectedValue: PropTypes.bool,
    showCaret: PropTypes.bool,
    theme: PropTypes.oneOf(THEMES),
  };

  static defaultProps = {
    options: [{
      name: 'Status',
      value: 1
    }, {
      name: 'Type',
      value: 2
    }, {
      name: 'Date',
      value: 3
    }],
    selected: {
      name: 'Date',
      value: 3
    },
    theme: PRIMARY_THEME,
    showSelectedValue: true,
    showCaret: true,
  };

  state = {
    isOpen: false,
  };

  render() {
    const {
      className,
      onChange,
      label,
      options,
      selected = {},
      showSelectedValue,
      showCaret,
      theme,
    } = this.props;

    const { isOpen } = this.state;

    return (
      <Dropdown
        className={cn(
          `${theme} custom-dropdown`,
          { [className]: className }
        )}
        isOpen={ isOpen }
        toggle={ () => this.setState({ isOpen: !isOpen }) }
      >
        <DropdownToggle
          className={ cn({ 'without-caret': !showCaret }) }
          caret
        >
          { label }
          { showSelectedValue ? <span> { selected.name || 'All' }</span> : null }
        </DropdownToggle>
        <DropdownMenu>
          {
            options.map((item, key) =>
              <DropdownItem key={ key } title={item.name} onClick={ () => onChange(item) }>
                { item.name === selected.name ? <b>{ item.name }</b> : item.name }
              </DropdownItem>
            )
          }
        </DropdownMenu>
      </Dropdown>
    );
  }
}
export default DropDown;
