import React, { Component } from 'react';
import classnames from 'classnames';
import { isEqual, sortBy, find } from 'lodash';

import { ColoredScrollBars, SearchField } from '@customary/uikit';
import { ReactComponent as IconPlus } from '../../../assets/icons/plus.svg';
import { ReactComponent as IconMinus } from '../../../assets/icons/minus.svg';

import './DualListBox.scss';

class DualListBox extends Component {

  state = {
    tempArrayOfFields: { add: [], extract: [] },
    availableList: [],
    selectedList: [],
    filterValueLeft: "",
    filterValueRight: "",
  };

  componentDidMount() {
    const { availableOptions, selectedOptions = [] } = this.props;

    this.setState({
      availableList: availableOptions,
      selectedList: selectedOptions,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { availableOptions, selectedOptions } = this.props;


    if (!isEqual(sortBy(availableOptions), sortBy(prevProps.availableOptions))) {
      this.setState({
        availableList: availableOptions,
        selectedList: selectedOptions,
        tempArrayOfFields: {
          add: [],
          extract: [],
        }
      });
    }
  }

  handleSelectField = (field, actionType) => {
    const { tempArrayOfFields } = this.state;
    if (tempArrayOfFields[actionType].length && find(tempArrayOfFields[actionType], field)) {
      this.setState(prevState => ({
        tempArrayOfFields: {
          ...prevState.tempArrayOfFields,
          [actionType]: tempArrayOfFields[actionType].filter(item => item.id !== field.id),
        },
      }));
    } else {
      this.setState(prevState => ({
        tempArrayOfFields: {
          ...prevState.tempArrayOfFields,
          [actionType]: [...prevState.tempArrayOfFields[actionType], field],
        },
      }));
    }
  };

  handleAddFields = () => {
    const {
      tempArrayOfFields,
    } = this.state;

    const { options } = this.props;

    if (tempArrayOfFields.add.length) {
      const newAdd = [...tempArrayOfFields.add];
      const preparedArray = options.map(option => {
        const currOption = newAdd.map(item => ({...item, visible: true})).find(item => item.id === option.id);
        if (currOption) {
          return currOption;
        }

        return option;
      });

      this.setState(prevState => ({
        tempArrayOfFields: {
          ...prevState.tempArrayOfFields,
          add: [],
        },
      }));

      this.props.onChange(preparedArray);
    }
  };

  handleDeleteFields = () => {
    const {
      tempArrayOfFields,
    } = this.state;

    const { options = [] } = this.props;

    if (tempArrayOfFields.extract.length) {
      const newExtract = [...tempArrayOfFields.extract];
      const preparedArray = options.map(option => {
        const currOption = newExtract.map(item => ({...item, visible: false})).find(item => item.id === option.id);
        if (currOption) {
          return currOption;
        }

        return option;
      });

      this.setState(prevState => ({
        tempArrayOfFields: {
          ...prevState.tempArrayOfFields,
          extract: [],
        },
      }));

      this.props.onChange(preparedArray);
    }
  };

  handleAvailableFilter = value => {
    this.setState({ filterValueLeft: value });
  };

  handleSelectedFilter = value => {
    this.setState({ filterValueRight: value });
  };

  render() {
    const {
      tempArrayOfFields,
      filterValueRight,
      filterValueLeft,
    } = this.state;

    const {
      headerLabelLeft = 'Available',
      headerLabelRight = 'Selected',
      options,
      disabledNames = [],
      nameKeys = 'name',
    } = this.props;

    const localOptions = [...options];

    return (
      localOptions &&
      (<div className="wrapper-dual-list d-flex">
        <div className="dual-list py-3">
          <h3 className="header-label text-uppercase px-4 mb-3">{headerLabelLeft}</h3>
          <div className="px-3 mb-3">
            <SearchField
              onChange={e => this.handleAvailableFilter(e.target.value)}
            />
          </div>
          <ColoredScrollBars
            autoHeight
            hideTracksWhenNotNeeded
            autoHeightMax={300}
          >
            <ul className="list-unstyled mb-0">
              {localOptions.filter(item =>
                !item.visible && item.label.toLowerCase().search(filterValueLeft.toLowerCase()) !== -1).map((item, index) => (
                <li
                  key={index}
                  title={item.label}
                  className={classnames('dual-list-item px-4 text-truncate', { 'selected': find(tempArrayOfFields.add, item) })}
                  onClick={ () => this.handleSelectField(item, 'add')}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </ColoredScrollBars>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <button
            disabled={!tempArrayOfFields.add.length}
            className="bt arrow-left my-1"
            onClick={this.handleAddFields}
          >
            <IconPlus className="mr-1" /> <span>Add</span>
          </button>
          <button
            disabled={!tempArrayOfFields.extract.length}
            className="bt arrow-right my-1"
            onClick={this.handleDeleteFields}
          >
            <IconMinus className="mr-1" /><span> Delete</span>
          </button>
        </div>
        <div className="dual-list pt-3 pb-3">
          <h3 className="header-label text-uppercase px-4 mb-3">{headerLabelRight}</h3>
          <div className="px-3 mb-3">
            <SearchField
              onChange={e => this.handleSelectedFilter(e.target.value)}
            />
          </div>
          <ul className="list-unstyled">
            {localOptions.filter(item => item.visible && item.label.toLowerCase().search(filterValueRight.toLowerCase()) !== -1).map((item, index) => (
              <li
                key={index}
                title={item.label}
                className={classnames('dual-list-item px-4 text-truncate',
                  {
                    'selected': find(tempArrayOfFields.extract, item),
                    'text-muted cursor-default': disabledNames.includes(item[nameKeys])
                  })}
                onClick={() => !disabledNames.includes(item[nameKeys]) && this.handleSelectField(item, 'extract')}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>)
    );
  }
}

export default DualListBox;
