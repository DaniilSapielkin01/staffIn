import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { ReactComponent as IconClose } from '../../../assets/icons/close.svg';
import './Tag.scss';

const THEME_PRIMARY = 'primary';
const THEME_RED = 'custom-red';
const THEME_BLUE = 'custom-blue';
const THEME_ORANGE = 'custom-orange';

export const THEMES = [THEME_PRIMARY, THEME_RED, THEME_BLUE, THEME_ORANGE];

export const props = {
  themes: THEMES,
};

class Tag extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
    theme: PropTypes.oneOf(props.themes),
    className: PropTypes.string,
  };

  static defaultProps = {
    theme: THEME_PRIMARY
  };

  render() {
    const {
      onClose,
      children,
      theme,
      className,
    } = this.props;

    return (
      <div className={cn(
        `tag ${ theme }`,
        {
          [`${className}`]: className
        }
      )}>
        <div className="tag__title">
          { children }
        </div>

        { onClose ?
          <span onClick={ onClose } className="tag__close">
            <IconClose />
          </span>
          :
          null
        }
      </div>
    );
  }
}
export default Tag;
