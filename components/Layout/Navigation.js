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

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.navigationActions.toggleNav();
  }

  render() {
    return (
      <nav className={this.props.navActive ? s.primary_nav_is_active : s.primary_nav} onClick={this.handleClick}>
        <div className={s.primary_nav_wrapper}>
          <ul className={s.primary_nav_list}>
            <li className={s.home}>
              <Link to="/" className={`${this.props.navActive ? s.primary_nav_item_active : s.primary_nav_item} ${s.primary_nav1} active`}>Home</Link>
            </li>
            <li className={s.contact}>
              <Link to="/about" className={`${this.props.navActive ? s.primary_nav_item_active : s.primary_nav_item} ${s.primary_nav2} active`}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}

export default Navigation;
