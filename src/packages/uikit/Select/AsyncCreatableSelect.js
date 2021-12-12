import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ACS from 'react-select/async-creatable';
import cn from 'classnames';
import IndicatorSeparator from './IndicatorSeparator';
import ClearIndicator from './ClearIndicator';
import DropdownIndicator from './DropdownIndicator';
import { NoOptionsMessage } from './NoOptionsMessage';
import { withLabelControl } from '../../../hoc/withLabelControl';

import defaultStyles from './styles/default';

const ORIENTATION_VERTICAL = 'vertical';
const ORIENTATION_HORIZONTAL = 'horizontal';
export const ORIENTATIONS = [ORIENTATION_VERTICAL, ORIENTATION_HORIZONTAL];

export const props = {
  orientation: ORIENTATIONS,
};

class AsyncCreatableSelect extends PureComponent {
  static propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    isMulti: PropTypes.bool,
    isOpenMenu: PropTypes.bool,
    isCloseMenu: PropTypes.bool,
    isClearable: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
  };

  static defaultProps = {
    orientation: ORIENTATION_VERTICAL,
    styles: defaultStyles,
  };

  render() {
    const {
      isClearable,
      className,
      required,
      isError,
      errorMessage,
      components,
      menuPortalTarget,
      isDisabled,
      readOnly,
      customName,
      ...restProps
    } = this.props;

    const customComponents = {
      NoOptionsMessage,
      ClearIndicator: isClearable && ClearIndicator,
      DropdownIndicator: DropdownIndicator,
      IndicatorSeparator: selectProps => IndicatorSeparator({
        ...selectProps,
        isError,
        isDisabled,
        errorMessage,
      }),
      ...components,
    };

    return (
      <div className={
        cn('select position-relative c-text-field d-flex w-100', { [className]: className })
      }
      >
        <ACS
          isDisabled={isDisabled || readOnly}
          components={customComponents}
          menuPortalTarget={menuPortalTarget && document.getElementById('selectPortal')}
          {...restProps}
        />
      </div>
    );
  }
}

export default withLabelControl(AsyncCreatableSelect);

export const AsyncCreatableSelectWithoutLabel = AsyncCreatableSelect;
