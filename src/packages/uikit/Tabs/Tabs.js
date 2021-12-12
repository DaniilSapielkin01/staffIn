import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Tabs.scss';

const THEME_PRIMARY = 'primary';
const THEME_SECONDARY = 'secondary';

export const THEMES = [THEME_PRIMARY, THEME_SECONDARY];

export const props = { themes: THEMES };

class Tabs extends PureComponent {
  static propTypes = {
    activeTab: PropTypes.string,
    theme: PropTypes.oneOf(props.themes),
    onTabChange: PropTypes.func,
    className: PropTypes.string,
    classNameTab: PropTypes.string,
  };

  static defaultProps = {
    theme: THEME_PRIMARY,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.activeTab
    }
  }

  componentWillReceiveProps = (props, state) => {
    if (props.activeTab !== state.activeTab) {
      this.setState({ activeTab: props.activeTab })
    }
  };

  onTabChange = activeTab => {
    const { onTabChange } = this.props;
    this.setState({ activeTab }, () => (onTabChange && onTabChange(activeTab)) || {})
  };

  render() {

    const { activeTab } = this.state;

    const {
      theme,
      children,
      className,
      classNameTab,
    } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { activeTab })
    );

    return (
      <div className={`tabs tabs-${theme}`}>
        <ul className={cn(
          `d-flex`,
          { [className]: className }
        )}>
          { React.Children.map(children, child =>
            <li
              className={cn(
                'tabs__tab w-100',
                { [classNameTab]: classNameTab },
                {
                  'active' : activeTab === child.props.tab,
                  'disabled' : child.props.disabled
                }
              )}
              onClick={ child.props.disabled ? () => {} : () => this.onTabChange(child.props.tab) }
            >
              <span>{ child.props.title }</span>
            </li>
          ) }
        </ul>
        <div className="tabs__panel">
          { childrenWithProps }
        </div>
      </div>
    );
  }
}
export default Tabs;
