import React from 'react'
import { Checkbox } from '@customary/uikit';
import { components } from 'react-select';
import { get } from 'lodash';
import { CreateLabelComponent } from '../../../views/app/conversation/OutboundPopup/CreateLabelComponent';
import cn from 'classnames';
import images from 'react-payment-inputs/lib/images';
import {getIconByColumn} from "../../../views/app/Views/Grid/getIconByColumn";

export const SingleValue = props => {
  return (
    <components.SingleValue {...props}>{props.children}</components.SingleValue>
  );
};

export const SingleValueWithColumnIcon = props => {
  return (
    <components.SingleValue {...props} className="d-flex align-items-center pt-1">
      <span className="d-flex pr-1">{getIconByColumn(props.data.componentName)}</span>
      {props.children}
    </components.SingleValue>
  );
};


export const OptionCard = props => {
  const { cx, getStyles, innerProps, innerRef, className, data } = props;

  return (
    <div
      ref={innerRef}
      style={getStyles('option', props)}
      className={cn(
        "d-flex align-items-center",
        { [className]: className },
        cx({
          'option': true,
          'option--is-disabled': get(data, 'isDisabled'),
          'option--is-focused': get(data, 'isFocused'),
          'option--is-selected': get(data, 'isSelected'),
        }),
      )}
      {...innerProps}
    >
      <div className="d-flex align-items-center">
        <svg children={images[get(data, 'card.brand')]} width="1.5em" height="1em" viewBox="0 0 24 16" />
        <div className="ml-3">••••<span className="font-weight-bold">{get(data, 'card.last4')}</span></div>
        <div className="ml-3">
          <span className="text-secondary text-small pr-2">exp</span>
          <span className="font-weight-bold">{`${get(data, 'card.exp_month')}/${get(data, 'card.exp_year')}`}</span>
        </div>
        {get(data, 'metadata.is_default') &&   <div className="payment-methods_card_default px-2 ml-3">Default</div>}
      </div>
    </div>
  );
};

export const OptionWithColor = props => {
  const { cx, children, innerProps, innerRef, getStyles, selectProps, data, options, label } = props;
  const {currentTagColor, onChangeTagColor} = selectProps;
  const isCreatableOption = options.some(({ title }) => title !== label);

  return (
    <div
      style={getStyles('option', props)}
      ref={innerRef}
      className={cn(
        "d-flex align-items-center",
        cx({
          'option': true,
          'option--is-disabled': get(data, 'isDisabled'),
          'option--is-focused': get(data, 'isFocused'),
          'option--is-selected': get(data, 'isSelected'),
        }),
      )}
    >
      {
        !isCreatableOption
          ? <>
              <div className={cn("d-flex px-2 justify-content-between py-1 align-items-center w-100", {option: true })}>
                <div className="w-100" {...innerProps}>
                 Create "{children}"
                </div>
                <CreateLabelComponent currentColor={currentTagColor} setCurrentColor={onChangeTagColor} />
              </div>
            </>
          : <div className="d-flex w-100" {...innerProps}>
            {get(data, 'color') && <div style={{width: "20px", height: "20px", background: data.color, borderRadius: '.25rem'}} className="mr-2" />}
            {children}
            </div>
      }
    </div>
  );
};

export const OptionWithColumnIcon = props => {
    const { cx, getStyles, children, innerProps, innerRef, data } = props;
    return (
        <div
            ref={innerRef}
            style={getStyles('option', props)}
            className={cn(
                "d-flex align-items-center",
                cx({
                    'option': true,
                    'option--is-disabled': get(data, 'isDisabled'),
                    'option--is-focused': get(data, 'isFocused'),
                    'option--is-selected': get(data, 'isSelected'),
                }),
            )}
            {...innerProps}
        >
            <div className="d-flex align-items-center mr-2">{getIconByColumn(data.componentName)}</div> {children}
        </div>
    )
};

export const OptionWithAvatar = props => {
  const { cx, getStyles, children, innerProps, innerRef, isMulti, selectProps, value, data } = props;
  const selectedValue = selectProps.value;


  return (
    <div
      ref={innerRef}
      style={getStyles('option', props)}
      className={cn(
        "d-flex align-items-center",
        cx({
          'option': true,
          'option--is-disabled': get(data, 'isDisabled'),
          'option--is-focused': get(data, 'isFocused'),
          'option--is-selected': get(data, 'isSelected'),
        }),
      )}
      {...innerProps}
    >
      {
        isMulti && <Checkbox
          label={false}
          value={((selectedValue ? (selectedValue.map ? selectedValue : [selectedValue]) : []).map(v => {
            const key = Object.keys(v).find(key => v[key] === value);
            return v[key]
          }).indexOf(value) > -1 || false)}
          className="mr-1"
        />
      }
      <div style={{width: "20px", height: "20px"}}
           className="bg-muted text-secondary rounded overflow-hidden d-flex justify-content-center align-items-center mr-2">
        {
          get(data, 'icon')
            ? data.icon || <img className="d-flex w-100" src={data.icon} alt='' />
            : <span className="d-flex">{get(data, 'name', 'N').toString().charAt(0)}</span>
        }
      </div>
      <div className="text-truncate">
        {children}
      </div>
    </div>
  );
};

const Option = props => {
  const { cx, getStyles, children, innerProps, innerRef, isMulti, selectProps, value, data } = props;
  const selectedValue = selectProps.value;

  return (
    <div
      ref={innerRef}
      style={getStyles('option', props)}
      className={cn(
        "d-flex align-items-center",
        cx({
          'option': true,
          'option--is-disabled': get(data, 'isDisabled'),
          'option--is-focused': get(data, 'isFocused'),
          'option--is-selected': get(data, 'isSelected'),
        }),
      )}
      {...innerProps}
    >
      {
        isMulti
          ? (<Checkbox
            label={children}
            onChange={() => {}}
            value={((selectedValue ? (selectedValue.map ? selectedValue : [selectedValue]) : []).map(v => {
              const key = Object.keys(v).find(key => v[key] === value);
              return v[key]
            }).indexOf(value) > -1 || false)}
            className="mr-1"
          />)
          : children
      }
    </div>
  );
};

export default Option
