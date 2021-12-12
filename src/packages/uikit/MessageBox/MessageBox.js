import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Button, SearchField, Tabs, Tab } from '@customary/uikit';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, Modifier } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './MessageBox.scss';

import IconBold from '../../../assets/icons/sb-message-box/bold.svg';
import IconItalic from '../../../assets/icons/sb-message-box/italic.svg';
import IconUnderline from '../../../assets/icons/sb-message-box/underline.svg';
import IconPoints from '../../../assets/icons/sb-message-box/points.svg';
import IconUpper from '../../../assets/icons/sb-message-box/upper.svg';
import IconClip from '../../../assets/icons/sb-message-box/clip.svg';
import IconSmile from '../../../assets/icons/sb-message-box/smile.svg';
import IconVariables from '../../../assets/icons/sb-message-box/variables.svg';

const TYPE_DEFAULT = 'default';
const TYPE_LINE = 'line';

export const TYPES = [TYPE_DEFAULT, TYPE_LINE];

const MessageBox = ({
  type,
  className,
  submitBtn,
  withActions,
  placeholder,
  outbound,
  user: {
    username,
    name,
    last_name,
    email,
    company,
  },
  ...props
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = state => {
    props.msg && props.msg(state && draftToHtml(convertToRaw(state.getCurrentContent())));
    setEditorState(state);
  };

  const onSubmit = e => {
    const value = editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()));
    e.preventDefault();
    props.onSubmit(value);
    setEditorState(EditorState.createEmpty());
  };

  const variables_value = {
    'Customer Name': username,
    'Customer First Name': name,
    'Customer Last Name': last_name,
    'Customer Email Address': email,
    'Customer Phone Number': company
  };

  const variables_dictionary = {
    'Customer Name': '{{name}}',
    'Customer First Name': '{{first_name}}',
    'Customer Last Name': '{{last_name}}',
    'Customer Email Address': '{{email}}',
    'Customer Phone Number': '{{phone}}',
    'Customer Loyalty': '{{loyalty}}',
  };
  const stopPropagation = event => {
    event.stopPropagation();
  };

  const addVariables = i => {
    const contentState = Modifier.insertText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      variables_dictionary[i],
    );

    setEditorState(EditorState.push(editorState, contentState, 'insert-characters'));
  };

  const RenderCustomModal = () => (
    <div
      onClick={stopPropagation}
      className="custom-modal"
    >
      <Tabs
        onClick={stopPropagation}
        classNameNameTab="tab-item"
        activeTab="variables"
        theme="secondary"
      >
        <Tab tab="variables" title="Variables" className="tab-item">
          <div>
            <div className="px-3 mb-3 pt-2">
              <SearchField />
              {
                Object.getOwnPropertyNames(variables_value)
                  .map((el, i) => (
                    <div
                      key={i}
                      className="cursor-pointer"
                      onClick={() => addVariables(el)}
                      onKeyDown={() => {}}
                      style={{ marginTop: '14px' }}
                    >
                      {el}
                    </div>
                  ))
              }
            </div>
          </div>
        </Tab>
        <Tab tab="snippets" title="Snippets">
          <div className="px-3 mb-3 pt-2">
            <SearchField className="mt-2" />
            Snippets
          </div>
        </Tab>
      </Tabs>
    </div>
  );

  const Variables = propsVariables => {
    const [open, setOpen] = useState(false);
    const { onChange } = propsVariables;
    return (
      <div
        className={cn('d-flex align-items-center justify-content-center variables-button cursor-pointer', { 'rdw-option-active': open })}
        aria-haspopup="true"
        aria-expanded={onChange}
        aria-label="rdw-color-picker"
      >
        <div
          className="position-relative d-flex toolbar-btn"
        >
          <img
            src={IconVariables}
            alt=""
            onClick={() => { setOpen(!open); }}
          />
        </div>
        {open ? <RenderCustomModal /> : null}
      </div>
    );
  };

  const toolbar_options = (outbound && ['inline', 'list', 'remove', 'image', 'emoji']) || ['inline', 'list', 'remove', 'image', 'emoji'];
  const div = (
    <>
      <div className={cn('mbox', { [className]: className })}>
        <div
          id="Popover-msg-variable"
          className={cn({ 'd-flex align-items-center': type === TYPE_LINE }, { 'out-border': outbound })}
        >
          <div className="w-100">
            <Editor
              editorState={editorState}
              wrapperClassName={outbound && 'wrapper-class'}
              editorClassName={cn('editor-class', { 'tl-msg-editor': !outbound })}
              onEditorStateChange={onEditorStateChange}
              placeholder="   Type a message..."
              toolbarClassName={cn('toolbar-class', { 'tl-msg-toolbar': !outbound })}
              toolbarCustomButtons={[<Variables />]}
              toolbar={{
                options: toolbar_options,
                inline: {
                  options: ['bold', 'italic', 'underline'],
                  bold: {
                    icon: IconBold,
                    className: 'toolbar-btn',
                  },
                  italic: {
                    icon: IconItalic,
                    className: 'toolbar-btn',
                  },
                  underline: {
                    icon: IconUnderline,
                    className: 'toolbar-btn',
                  },
                },
                list: {
                  options: ['unordered'],
                  unordered: {
                    icon: IconPoints,
                    className: 'toolbar-btn',
                  },
                },
                image: {
                  icon: IconClip,
                  uploadCallback: props.uploadImageCallBack,
                  className: 'toolbar-btn',
                  popupClassName: 'toolbar-popover-image',
                },
                emoji: {
                  icon: IconSmile,
                  className: 'toolbar-btn',
                  popupClassName: 'toolbar-popover-emoji',
                },
                remove: {
                  icon: IconUpper,
                  className: 'toolbar-btn',
                },
              }}
            />
          </div>
          {!outbound
        && (
          <Button
            theme="brown"
            size="md"
            className={cn({ 'ml-2': type === TYPE_LINE }, 'tl-msg-btn')}
            onClick={onSubmit}
          >
            {submitBtn || <>Send</>}
          </Button>
        )}
        </div>
      </div>
    </>
  );
  return div;
};

MessageBox.defaultProps = {
  type: TYPE_DEFAULT,
  user: {
    username: '',
    name: '',
    last_name: '',
    email: '',
    company: '',
  },
};

MessageBox.propTypes = {
  className: PropTypes.string,
  withActions: PropTypes.bool,
  placeholder: PropTypes.string,
  submitBtn: PropTypes.any,
  onSubmit: PropTypes.func,
  type: PropTypes.oneOf(TYPES),
  activeTab: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    company: PropTypes.string,
  }),
};

export default MessageBox;
