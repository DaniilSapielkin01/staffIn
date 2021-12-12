import React, { PureComponent } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import pt from 'prop-types';

class ColoredScrollBars extends PureComponent {

  static propTypes = {
    /**
     * show / hide flag
     */
    hideTracksWhenNotNeeded: pt.bool,
    /**
     * flag set automatic block height
     */
    autoHeight: pt.bool,
    /**
     * number for maximum block height
     */
    autoHeightMax: pt.number,
  };

  static defaultProps = {
    hideTracksWhenNotNeeded: false,
    autoHeight: false,
    autoHeightMax: 300,
  };

  renderTrack = ({style, ...props}) => {

    return (
      <div
        style={{ ...style }}
        className='col-scroll-bar-track'
        {...props} />
    );
  };

  renderThumb = ({ style, ...props }) => {

    return (
      <div
        style={{ ...style }}
        className='col-scroll-bar-thumb'
        {...props} />
    );
  };

  render() {
    const { autoHeightMax, autoHeight, hideTracksWhenNotNeeded } = this.props;

    return (
      <Scrollbars
        renderTrackVertical={this.renderTrack}
        renderThumbHorizontal={this.renderThumb}
        renderThumbVertical={this.renderThumb}
        autoHeight={autoHeight}
        hideTracksWhenNotNeeded={hideTracksWhenNotNeeded}
        autoHeightMax={autoHeightMax}
        {...this.props}
      />
    );
  }
}

export default ColoredScrollBars;

