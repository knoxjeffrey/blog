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
      nav2TextColour: constants.COLOR_2
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
            <li className={s.home}
                onMouseOver={() => this.handleMouseOver(constants.COLOR_1, 'nav1TextColour', '#FFF')}
                onMouseOut={() => this.handleMouseOut('nav1TextColour', constants.COLOR_1)}>
              <Link to="/"
                    className={`${this.props.navActive ? s.primary_nav_item_active : s.primary_nav_item} ${s.primary_nav1}`}
                    style={{color: this.state.nav1TextColour}}>
                Home
              </Link>
            </li>
            <li className={s.contact}
                onMouseOver={() => this.handleMouseOver(constants.COLOR_2, 'nav2TextColour', '#FFF')}
                onMouseOut={() => this.handleMouseOut('nav2TextColour', constants.COLOR_2)}>
              <Link to="/about"
                    className={`${this.props.navActive ? s.primary_nav_item_active : s.primary_nav_item} ${s.primary_nav2}`}
                    style={{color: this.state.nav2TextColour}}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}

export default Navigation;
