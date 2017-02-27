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
import Link from '../Link';
import s from './Navigation.css';
import * as constants from '../../constants';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      backgroundColor: '#FFF',
      nav1TextColour: constants.COLOR_1,
      nav2TextColour: constants.COLOR_2,
      nav3TextColour: constants.COLOR_3
    };
  }

  handleClick() {
    this.props.navigationActions.toggleNav();
  }

  handleMouseOver(backgroundColor, navNumber, color) {
    this.setState({
      backgroundColor: backgroundColor,
      [navNumber]: color
    });
  }

  handleMouseOut(navNumber, color) {
    this.setState({
      backgroundColor: '#FFF',
      [navNumber]: color
    });
  }

  handleTouch() {

  }

  render() {
    return (
      <nav className={this.props.navActive ? s.primary_nav_is_active : s.primary_nav}
           style={{backgroundColor: this.state.backgroundColor}}
           onClick={this.handleClick}>
        <div className={s.primary_nav_wrapper}>
          <ul className={s.primary_nav_list}>
            <li className={s.home}>
              <Link to="/"
                    className={`${this.props.navActive ? s.primary_nav_item_active : s.primary_nav_item}`}
                    style={{color: this.state.nav1TextColour}}
                    onMouseOver={() => this.handleMouseOver(constants.COLOR_1, 'nav1TextColour', '#FFF')}
                    onMouseOut={() => this.handleMouseOut('nav1TextColour', constants.COLOR_1)}>
                Home
              </Link>
            </li>
            <li className={s.contact}>
              <Link to="/about"
                    className={`${this.props.navActive ? s.primary_nav_item_active : s.primary_nav_item}`}
                    style={{color: this.state.nav2TextColour}}
                    onMouseOver={() => this.handleMouseOver(constants.COLOR_2, 'nav2TextColour', '#FFF')}
                    onMouseOut={() => this.handleMouseOut('nav2TextColour', constants.COLOR_2)}>
                About
              </Link>
            </li>
            <li className={s.blog}>
              <Link to="/blog"
                    className={`${this.props.navActive ? s.primary_nav_item_active : s.primary_nav_item}`}
                    style={{color: this.state.nav3TextColour}}
                    onMouseOver={() => this.handleMouseOver(constants.COLOR_3, 'nav3TextColour', '#FFF')}
                    onMouseOut={() => this.handleMouseOut('nav3TextColour', constants.COLOR_3)}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}

export default Navigation;
