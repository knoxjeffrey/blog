import React, { PropTypes } from 'react';
import s from './Splash.css';
import {Row} from 'react-flexbox-grid/lib';

class Splash extends React.Component {

  static propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  };

  render() {
    const { color, text, ...props } = this.props;
    return (
      <div className={s.full_page_splash} style={{backgroundColor : color}}>
        <Row className={s.splash_text}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </Row>
      </div>
    );
  }

}

export default Splash;
