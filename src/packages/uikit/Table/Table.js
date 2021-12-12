
import React, { PureComponent, Fragment } from 'react';
import './styles.scss';
import classnames from 'classnames';

class Table extends PureComponent {
  state = {
    selected: [],
  };

  static propTypes = {
  //  TODO Props
  };

  static defaultProps = {
    data: [],
  };

  render() {
    const {
      children
    } = this.props;

    return (
      <Fragment>
        <div className="position-relative mt-3 overflow-auto">
          <table className={classnames('responsive-table w-100')}>
            {children}
          </table>
        </div>
      </Fragment>
    );
  }
}
export default Table;
