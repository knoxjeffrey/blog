/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import * as constants from '../../constants';
import Splash from '../../components/Splash';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: constants.COLOR_3
    };
  }

  splashHTML() {
    return (
      `<svg viewBox="0 0 100 100">
        <path fill="#FFF" d="M27.143,94.794C14.932,94.794,5,84.862,5,72.652V35.498c0-3.549,2.877-6.427,6.428-6.427s6.428,2.878,6.428,6.427v37.155   c0,5.121,4.166,9.287,9.287,9.287s9.287-4.166,9.287-9.287c-0.003-3.505-1.942-6.674-5.068-8.279   c-3.158-1.62-4.406-5.493-2.786-8.655c1.62-3.16,5.496-4.405,8.654-2.788c7.433,3.814,12.056,11.37,12.056,19.72   C49.285,84.862,39.354,94.794,27.143,94.794z"/>
        <path fill="#FFF" d="M65.715,79.083c-3.551,0-6.431-2.88-6.431-6.431c0-15.46-11.01-28.752-26.177-31.594c-3.492-0.654-5.789-4.014-5.139-7.5   c0.656-3.492,4.02-5.791,7.506-5.136c21.246,3.981,36.668,22.584,36.668,44.23C72.143,76.203,69.263,79.083,65.715,79.083z"/>
        <path fill="#FFF" d="M88.572,79.083c-3.551,0-6.431-2.88-6.431-6.431c0-27.938-20.892-51.424-48.595-54.632   c-3.527-0.409-6.053-3.599-5.648-7.126c0.41-3.526,3.583-6.047,7.128-5.647C69.216,9.207,95,38.185,95,72.652   C95,76.203,92.123,79.083,88.572,79.083z"/>
      </svg>`
    );
  }

  render() {
    return (
      <div>
        <Splash {...this.props} color={this.state.backgroundColor} text={this.splashHTML()} />
        <Layout className={s.content}>

        </Layout>
      </div>
    );
  }

}

export default AboutPage;