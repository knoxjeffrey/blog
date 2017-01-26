import React, { PropTypes } from 'react';
import s from './Splash.css';
import {Row} from 'react-flexbox-grid/lib';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.opacityCalculator = this.opacityCalculator.bind(this);

    this.state = {
      splashOpacity: 1
    };
  }

  static propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  };

  opacityCalculator(event) {
    var scrollPosition = window.pageYOffset;
    var opacity = 1 - (scrollPosition / 745);
    this.setState({ splashOpacity: opacity });
  }

  componentDidMount() {
      window.addEventListener('scroll', _.throttle(this.opacityCalculator,75));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.opacityCalculator);
  }

  render() {
    const { color, text, ...props } = this.props;
    return (
      <div className={s.full_page_splash} style={{ backgroundColor : color, opacity : this.state.splashOpacity }}>
        <Row className={s.splash_text}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </Row>
      </div>
    );
  }

}

export default Splash;
