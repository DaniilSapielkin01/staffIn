
import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import { DropdownItem } from 'reactstrap';
import ColoredScrollbars from '../../../components/common/ColoredScrollBar';
import { Checkbox, SearchField } from '@customary/uikit';

import { ReactComponent as IconFolder } from '../../../assets/icons/folder.svg';
import './ModifyColumns.scss';

const THEME_PRIMARY = 'primary';
const THEME_OUTLINE_PRIMARY = 'outline_primary';
const THEME_SECONDARY = 'secondary';
const THEME_OUTLINE_SECONDARY = 'outline_secondary';
const SUBMIT_TYPE = 'submit';
const BUTTON_TYPE = 'button';

export const THEMES = [THEME_PRIMARY, THEME_OUTLINE_PRIMARY, THEME_SECONDARY, THEME_OUTLINE_SECONDARY];
export const TYPES = [SUBMIT_TYPE, BUTTON_TYPE];

export const props = {
  themes: THEMES,
  types: TYPES,
};


class ModifyColumns extends PureComponent {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.state = {
      input: '',
      isOpen: false,
      position: {
        x: 0,
        y: 0,
      }
    };
  }

  static defaultProps = {
    theme: THEME_PRIMARY,
    onClick: () => {},
    fixedWidth: false,
    small: false,
    disabledNames: [],
    nameKeys: 'name',
    type: BUTTON_TYPE,
  };

  setInput = value => {
    this.setState({
      input: value,
    })
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = e => {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
      this.setState(prevState => ({
          isOpen: !prevState.isOpen,
        })
      )
    }
  }

  handleClickOpen = e => {
    const boundingClientRect = e.currentTarget.getBoundingClientRect();

    const x = boundingClientRect.x + window.scrollX + boundingClientRect.width / 2 - 10;
    const y = boundingClientRect.y + window.scrollX;
    this.setState({
      isOpen: true,
      position: {
        x: x,
        y: y,
      }
    })
  };

  onChangeList = itemId => {
    const schema = this.props.schema.map(item => (item.id === itemId ? ({ ...item, visible: !item.visible }) : item));

    this.props.onChangeList(schema)
  };

  render() {

    const { schema, disabledNames, nameKeys } = this.props;
    const { input, position, isOpen } = this.state;

    return (
      <div className="modify-columns">
        <div className="p-0 d-flex justify-content-start"
             onClick={e => this.handleClickOpen(e)}>
          <span className="bg-white z-index-3"><IconFolder className="hover-icon"/></span>
        </div>
        {
          isOpen && createPortal(
            <div className="modify-columns__menu bg-white position-absolute" style={{left: position.x, top: position.y}}
                 ref={this.wrapperRef}>
              <div className="pl-3 pr-3 title-menu pb-2 pt-2">Modify columns</div>
              <div className="modify-columns__w-search ml-auto mr-auto mb-2">
                <SearchField
                  onChange={({ target: { value } }) => this.setInput(value)}
                  value={input}
                  placeholder="Filter"
                />
              </div>
              <ColoredScrollbars
                autoHeight
                hideTracksWhenNotNeeded
                autoHeightMax={360}
              >
                {schema && schema
                  .filter(item => item.Header && typeof item.Header === 'string' && (input ? item.Header.toLowerCase().includes(input.toLowerCase()) : true)).map(item => (
                    <DropdownItem key={item.id} toggle={false} className="item pl-3 pr-3">
                      <Checkbox
                        label={item.Header}
                        value={item.visible}
                        disabled={disabledNames.includes(item[nameKeys])}
                        onChange={() => this.onChangeList(item.id)}
                      />
                    </DropdownItem>
                  ))
                }
              </ColoredScrollbars>
            </div>,
            document.getElementById('modals')
          )
        }
      </div>
    );
  }
}
export default ModifyColumns;
