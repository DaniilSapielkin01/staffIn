import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Tabs.scss';

class Tab extends PureComponent {
  static propTypes = {
    tab: PropTypes.string,
    activeTab: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {};

  render() {

    const {
      children,
      className,
      activeTab,
      tab
    } = this.props;

    return (
      activeTab === tab ?
        <div
          className={cn(
            {
              [className]: className,
            }
          )}
        >
          { children }
        </div>
        :
        null
    );
  }
}

export default Tab;
