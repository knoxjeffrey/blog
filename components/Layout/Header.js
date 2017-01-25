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
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';
import {Row} from 'react-flexbox-grid/lib';
import _ from 'lodash'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      hovered: false,
      lastScrollPosition: 0,
      scrollDirection: 'down',
      navVisible: true,
      isDetatched: false
    };
  }

  handleClick() {
    this.props.navigationActions.toggleNav();
  }

  handleMouseOver() {
    this.setState({ hovered: true });
  }

  handleMouseOut() {
    this.setState({ hovered: false });
  }

  setScrollDirectionAndPosition() {
    var scrollPosition = window.pageYOffset;
    var direction = scrollPosition > this.state.lastScrollPosition ? 'down' : 'up'
    this.setState({
      scrollDirection: direction,
      lastScrollPosition: scrollPosition
    });
  }

  handleNavStatus() {
    var scrollTop =(window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var updateNavVisible = false
    var updateIsDetatched = true

    if(scrollTop <= 110) { updateNavVisible = true }
    if(scrollTop < 550) { updateIsDetatched = false }

    if(this.state.scrollDirection === 'up') {
      updateNavVisible = true
      updateIsDetatched = true
    }

    if(scrollTop >= 550) { updateIsDetatched = true }

    if(this.state.isDetatched === true) { updateIsDetatched = true }

    if(this.state.lastScrollPosition === 0) { updateIsDetatched = false }

    this.setState({
      navVisible: updateNavVisible,
      isDetatched: updateIsDetatched
    });
  }

  closeNavOnScroll() {
    this.props.navigationActions.turnOffNav();
  }

  handleScroll(event) {
    // var scrollTop =(window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // var scrollPosition = window.pageYOffset;
    // var windowSize = window.innerHeight;
    // var bodyHeight = document.body.offsetHeight;
    // var scrollBottom = Math.max(bodyHeight - (scrollPosition + windowSize), 0)
    this.setScrollDirectionAndPosition()
    this.handleNavStatus()
    this.closeNavOnScroll()
  }

  componentDidMount() {
      window.addEventListener('scroll', _.throttle(this.handleScroll,75));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    console.log(this.state)
    return (
      <header>
        <Row>
          <div className={`${s.header} ${this.state.isDetatched ? s.header_detatched : ''} ${this.state.navVisible ? '' : s.header_invisible} clearfix`}>
            <div className ={s.hamburger} onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
              <div className={`${s.hamburger_layer} ${this.props.navActive ? s.hamburger_top_active : s.hamburger_top} ${this.state.hovered ? s.hamburger_top_hover : ''}`}></div>
              <div className={`${s.hamburger_layer} ${this.props.navActive ? s.hamburger_middle_active : s.hamburger_middle} ${this.state.hovered ? s.hamburger_middle_hover : ''}`}></div>
              <div className={`${s.hamburger_layer} ${this.props.navActive ? s.hamburger_bottom_active : s.hamburger_bottom} ${this.state.hovered ? s.hamburger_bottom_hover : ''}`}></div>
            </div>
          </div>
        </Row>
        <Navigation {...this.props} />
      </header>
    );
  }
}

export default Header;
