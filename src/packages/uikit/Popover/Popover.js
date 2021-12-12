import React, { PureComponent } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { UncontrolledPopover } from 'reactstrap';
import './Popover.scss';

import { ReactComponent as IconDots } from '../../../assets/icons/dots-vertical.svg';
import { ReactComponent as IconSettings } from '../../../assets/icons/settings.svg';

const setIcon = iconType => {
  switch (iconType) {
    case 'dots':
      return <IconDots style={{ height: '14px' }} />;

    case 'settings':
      return <IconSettings />;

    default:
      return <button>Button</button>;
  }
};

class Popover extends PureComponent {
  static propTypes = {
    options: PropTypes.array.isRequired,
    selected: PropTypes.object,
    label: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    placement: PropTypes.string,
  };

  static defaultProps = {
    options: [{
      name: 'Status',
      value: 1,
    }, {
      name: 'Type',
      value: 2,
    }, {
      name: 'Date',
      value: 3,
    }],
    icon: 'dots',
    placement: 'right',
  };

  state = {
    popoverOpen: false,
  }

  render() {
    const {
      popoverOpen,
    } = this.state;
    const {
      id,
      icon,
      toggle,
      children,
      placement,
      isOpenPopover,
    } = this.props;

    return (
      <div className="position-relative">
        <button
          type="button"
          id={`Popover-${id}`}
          className={cn(
            'btn btn-empty p-2 d-flex cursor-pointer text-secondary text-small hover-icon',
            { 'text-default': popoverOpen },
          )}
          style={{ fontSize: 'initial' }}

        >
          { setIcon(icon) }
        </button>
        <UncontrolledPopover
          trigger="legacy"
          isOpen={isOpenPopover}
          target={`Popover-${id}`}
          toggle={() => toggle(!isOpenPopover)}
          placement={placement}
        >
          <div className="d-flex flex-column list-popover">
            { children }
          </div>
        </UncontrolledPopover>
      </div>
    );
  }
}
export default Popover;
