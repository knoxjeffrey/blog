import React, { PropTypes } from 'react';
import s from './Splash.css';
import {Row} from 'react-flexbox-grid/lib';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      opacity: 1,
      margin: 0
    };
  }

  static propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  };

  componentWillReceiveProps(nextProps) {
    if(this.props.scrollPosition !== nextProps.scrollPosition) {
      this.handleScroll()
    }
  }

  handleScroll() {
    this.setState({
      opacity: 1 - (this.props.scrollPosition / 745),
      margin:  1 - (this.props.scrollPosition / 4)
    });
  }

  render() {
    const { color, text, ...props } = this.props;
    return (
      <div className={s.full_page_splash}
           style={{
             backgroundColor: color,
             opacity: this.state.opacity,
           }}
      >
        <Row className={s.splash_text}>
          <div dangerouslySetInnerHTML={{ __html: text }}
               style={{
                 transform: `translate(0, ${this.state.margin}px)`
               }}
          />
        </Row>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
  };
}

function mapStateToProps(state) {
  return {
    scrollPosition: state.scrollPosition
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
