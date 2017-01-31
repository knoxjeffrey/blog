/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';
import {Grid} from 'react-flexbox-grid/lib';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash'

import { connect } from 'react-redux'
import * as navigationActions from '../../actions/navigation_actions/index';
import * as splashActions from '../../actions/splash_actions/index';
import * as mainActions from '../../actions/main_actions/index';
import { bindActionCreators } from 'redux'

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.scrollPositionUpdater = this.scrollPositionUpdater.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.scrollPositionUpdater, 16));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollPositionUpdater() {
    this.props.mainActions.updateScrollPosition(window.pageYOffset);
  }

  render() {
    var divAlteredProps = {}
    divAlteredProps['children'] = this.props['children']


    return (
      <div className={s.font}>
        <Grid fluid className={s.flexbox_container}>
          <div className={s.container} >
            <Header {...this.props} />
            <main className={s.main}>
              <div {...divAlteredProps} className={cx(s.content, this.props.className)} />
              <RaisedButton label="Default" />
              <Footer />
            </main>
          </div>
        </Grid>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    navigationActions: bindActionCreators(navigationActions, dispatch),
    splashActions: bindActionCreators(splashActions, dispatch),
    mainActions: bindActionCreators(mainActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    navActive: state.navActive,
    mainPageActive: state.mainPageActive,
    scrollPosition: state.scrollPosition
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
