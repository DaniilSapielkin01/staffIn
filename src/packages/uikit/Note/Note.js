import React, { PureComponent } from 'react';
import pt from 'prop-types';
import cn from 'classnames';

import './Note.scss';

const THEME_PRIMARY = 'primary';
const THEME_BROWN = 'brown';

export const THEMES = [THEME_PRIMARY, THEME_BROWN];

export const props = {
  themes: THEMES,
};

class Note extends PureComponent {
  static propTypes = {
    /**
     * button content
     */
    children: pt.node,
    /**
     * color theme
     */
    theme: pt.oneOf(props.themes),

    className: pt.string,
  };

  static defaultProps = {
    theme: THEME_PRIMARY,
  };

  render() {
    const {
      children, theme, className
    } = this.props;

    return (
      <div
        className={cn(
          `note note-${theme}`,
          { [className]: className }
        )}
      >
        { children }
      </div>
    );
  }
}
export default Note;
