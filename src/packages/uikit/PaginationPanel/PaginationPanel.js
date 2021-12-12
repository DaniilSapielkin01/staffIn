import React, { PureComponent } from 'react';
import pt from 'prop-types';
import cn from 'classnames';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { ReactComponent as PrevIcon } from '../../../assets/icons/prev.svg';
import { ReactComponent as NextIcon } from '../../../assets/icons/next.svg';
import './PaginationPanel.scss';

class PaginationPanel extends PureComponent {
  static propTypes = {
    /**
     * total records
     */
    total: pt.number,
    /**
     * count records for one page
     */
    pageSize: pt.number,
    /**
     * number of selected page
     */
    currentPage: pt.number,
    /**
     * change event callback
     */
    onChange: pt.func,

    className: pt.string,
  };

  render() {
    const {
      total, pageSize, currentPage, onChange, className
    } = this.props;

    return (
      <div className={cn({[className]: className})}>
        {(total > pageSize) && (
          <Pagination
            prevIcon={<PrevIcon />}
            nextIcon={<NextIcon />}
            onChange={onChange}
            showTitle={false}
            showPrevNextJumpers
            pageSize={pageSize}
            current={currentPage}
            total={total}
          />
        )}
      </div>
    );
  }
}
export default PaginationPanel;
