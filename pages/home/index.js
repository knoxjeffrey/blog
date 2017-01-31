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
import Layout from '../../components/Layout';
import Splash from '../../components/Splash';
import s from './styles.css';
import { title, html } from './index.md';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import { connect } from 'react-redux'
import * as navigationActions from '../../actions/navigation_actions/index';
import * as splashActions from '../../actions/splash_actions/index';
import * as mainActions from '../../actions/main_actions/index';
import { bindActionCreators } from 'redux'

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    var items = ['rails', 'react']

    this.state = {
      framework: items[Math.floor(Math.random()*items.length)],
    };
  }

  componentDidMount() {
    document.title = title;
  }

  handleMainPageAppearance() {
    this.props.splashActions.showMainPage();
  }

  serverRender() {
    if(this.props.mainPageActive === false) {
      setTimeout(function(){this.handleMainPageAppearance()}.bind(this),4000);
    }
    if (this.state.framework === 'rails') {
      return (
        <div className={s.container}>
          <span className={s.arrow}>-></span>
          <span className={s.directory}>knoxjeffrey</span>
          <span className={s.git}>git:(</span>
          <span className={s.master}>master</span>
          <span className={s.git}>)</span>
          <span className={s.ballot_x}>&#10007;</span>
          <span className={s.initial}></span><span className={s.char1}>r</span><span className={s.char2}>a</span><span className={s.char3}>i</span><span className={s.char4}>l</span><span className={s.char5}>s</span><span className={s.char6}> </span><span className={s.char7}>s</span><span className={s.char_end_rails}></span>
          <div className={s.booting}>
            <div>=> Booting Puma</div>
            <div>=> Rails 5.0.1 application starting in development on http://localhost:3000</div>
            <div>=> Run `rails server -h` for more startup options</div>
            <div>Puma starting in single mode...</div>
            <div>* Version 3.6.2 (ruby 2.3.1-p112), codename: Sleepy Sunday Serenity</div>
            <div>* Min threads: 5, max threads: 5</div>
            <div>* Environment: development</div>
            <div>* Listening on tcp://localhost:3000</div>
            <div>Use Ctrl-C to stop</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={s.container}>
          <span className={s.arrow}>-></span>
          <span className={s.directory}>knoxjeffrey</span>
          <span className={s.git}>git:(</span>
          <span className={s.master}>master</span>
          <span className={s.git}>)</span>
          <span className={s.ballot_x}>&#10007;</span>
          <span className={s.initial}></span><span className={s.char1}>n</span><span className={s.char2}>o</span><span className={s.char3}>d</span><span className={s.char4}>e</span><span className={s.char5}> </span><span className={s.char6}>r</span><span className={s.char7}>u</span><span className={s.char8}>n</span><span className={s.char_end_react}></span>
          <div className={s.booting}>
            <div>Starting 'start'...</div>
            <div>Starting 'clean'...</div>
            <div>Finished 'clean' after 13ms</div>
            <div>webpack built 01ef303be4fbdd6e31c1 in 6931ms</div>
            <div>Time: 6931ms</div>
            <Table className={s.table}>
              <TableHeader className={s.table_header} displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn className={s.header1}>Asset</TableHeaderColumn>
                  <TableHeaderColumn className={s.header2}>Size</TableHeaderColumn>
                  <TableHeaderColumn className={s.header3}>Chunks</TableHeaderColumn>
                  <TableHeaderColumn className={s.header4}></TableHeaderColumn>
                  <TableHeaderColumn className={s.header5}>Chunk Names</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody className={s.table_body} displayRowCheckbox={false}>
                <TableRow>
                  <TableRowColumn className={`${s.header1} ${s.green}`}>main.js?01ef303be4fbdd6e31c1</TableRowColumn>
                  <TableRowColumn className={s.header2}>2.54 MB</TableRowColumn>
                  <TableRowColumn className={s.header3}>0</TableRowColumn>
                  <TableRowColumn className={`${s.header4} ${s.green}`}>[emitted]</TableRowColumn>
                  <TableRowColumn className={s.header5}>main</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className={`${s.header1} ${s.green}`}>1.js?c700155dbcef6e08586e</TableRowColumn>
                  <TableRowColumn className={s.header2}>8.3 kB</TableRowColumn>
                  <TableRowColumn className={s.header3}>1</TableRowColumn>
                  <TableRowColumn className={`${s.header4} ${s.green}`}>[emitted]</TableRowColumn>
                  <TableRowColumn className={s.header5}></TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className={`${s.header1} ${s.green}`}>main.js.map?01ef303be4fbdd6e31c1</TableRowColumn>
                  <TableRowColumn className={s.header2}>3 MB</TableRowColumn>
                  <TableRowColumn className={s.header3}>0</TableRowColumn>
                  <TableRowColumn className={`${s.header4} ${s.green}`}>[emitted]</TableRowColumn>
                  <TableRowColumn className={s.header5}>main</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn className={`${s.header1} ${s.green}`}>1.js.map?c700155dbcef6e08586e</TableRowColumn>
                  <TableRowColumn className={s.header2}>8.72 kB</TableRowColumn>
                  <TableRowColumn className={s.header3}>1</TableRowColumn>
                  <TableRowColumn className={`${s.header4} ${s.green}`}>[emitted]</TableRowColumn>
                  <TableRowColumn className={s.header5}></TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
            <div>webpack: bundle is now VALID.</div>
            <div>[BS] Serving files from: public</div>
            <div>Finished 'start' after 8105ms</div>
          </div>
        </div>
      )
    }
  }

  splashHTML() {
    if (this.props.mainPageActive) {
      return (
      `<svg class=${s.svg_rails} viewBox="0 0 128 128">
          <path fill="#FFF" d="M18.922 104.532v21.468h5.476v-5.591l4.983 4.983h8.402l-6.664-6.664s4.795-.078 5.157-7.01c0-6.361-4.8-7.186-10.343-7.186h-7.011zm5.737 5.824h4.722v3.824h-4.722v-3.824z"></path>
          <path fill="#FFF" d="M48.358 104.619c-2.997-.017-7.155.261-7.155 5.911v14.92h5.62v-3.65h5.447v3.563h5.649v-15.644c0-4.907-5.452-5.1-8.373-5.1h-1.188zm-1.449 5.388h5.273v5.882h-5.273v-5.882z"></path>
          <path fill="#FFF" d="M63.55 104.632h5.815v20.537h-5.815z"></path>
          <path fill="#FFF" d="M75.454 104.905v20.537h13.995v-5.452h-8.269v-15.175l-5.726.09z"></path>
          <path fill="#FFF" d="M107.986 104.722v5.543h-9.36v1.999h3.999s6.453-.09 6.453 6.452c0 6.543-3 6.907-9.088 6.907h-7.36v-4.998h8.451c2.544 0 2.685-.829 2.685-1.551 0-.721-1.3-1.056-3.946-1.056s-7.553-1.301-7.553-6.389c0-5.089 2.545-6.998 7.633-6.998 5.088.001 8.086.091 8.086.091z"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M100.556 10.818c-9.749-4.811-19.734-5.3-29.958-1.687-9.408 3.326-16.913 9.277-22.491 17.381-9.44 13.716-16.296 28.682-20.141 44.938-1.966 8.322-3.241 16.304-2.898 24.897.028.698.131 1.653.2 1.653h48.214c-.137 0-.229-.288-.348-.593-2.536-6.475-4.545-12.891-5.933-19.705-1.995-9.784-3.039-19.541-.979-29.416 2.884-13.829 10.767-23.702 24.055-28.873 7.527-2.932 14.67-2.044 20.937 3.455.058.051.175.048.328.073l2.05-3.087c-3.946-3.758-8.282-6.69-13.036-9.036zM25.067 75.154l-9.45-.714-1.07 9.146 8.891 1.068 1.629-9.5zM33.069 47.135c-2.889-1.129-5.58-2.183-8.363-3.273-.928 2.638-1.794 5.093-2.704 7.675 2.919.936 5.668 1.817 8.524 2.731l2.543-7.133zM72.542 89.993c2.855.212 5.716.36 8.867.543-1.145-2.379-2.16-4.53-3.226-6.657-.116-.231-.51-.454-.777-.458-2.422-.035-4.847-.021-7.421-.021.579 2.1 1.084 4.035 1.674 5.945.088.288.563.624.883.648zM47.243 23.889l-6.353-4.207c-1.703 1.903-3.345 3.738-5.08 5.675l6.532 4.39 4.901-5.858zM67.477 66.515c-.009.257.222.665.446.767 2.289 1.028 4.601 2.008 7.119 3.093-.105-1.99-.176-3.654-.294-5.314-.022-.298-.163-.729-.384-.852-2.101-1.164-4.231-2.274-6.562-3.51-.128 2.129-.257 3.97-.325 5.816zM65.595 8.871l-4.35-4.936-5.989 3.113 4.356 5.307 5.983-3.484zM68.323 48.148c-.129.3.043.932.298 1.163 1.737 1.567 3.534 3.066 5.532 4.777.458-1.917.889-3.625 1.255-5.345.065-.307-.025-.813-.238-.983-1.555-1.254-3.159-2.446-4.822-3.716-.731 1.451-1.439 2.751-2.025 4.104zM78.267 6.276c2.22.062 4.443.034 6.788.034-.234-1.632-.345-2.87-.624-4.067-.083-.355-.621-.831-.982-.86-2.225-.181-4.46-.25-6.91-.367.327 1.647.576 3.099.928 4.526.076.304.518.728.8.734zM80.971 34.77c.113-.212.142-.598.023-.784-1.092-1.706-2.224-3.387-3.398-5.154l-3.803 3.491 5.259 5.827c.705-1.23 1.337-2.292 1.919-3.38zM85.071 23.168c.808 1.499 1.54 2.858 2.271 4.219 3.553-1.946 3.894-2.653 2.635-5.458l-4.906 1.239zM102.073 10.171c1.479.912 3.04 1.688 4.627 2.544l1.062-1.654-5.921-4.334c-.082.881-.206 1.499-.174 2.106.025.465.104 1.151.406 1.338zM106 21.868c-3-.351-4-.698-6-1.058v2.714c2 .173 3 .339 6 .513v-2.169z"></path>
        </svg>
        <svg class=${s.svg_react} viewBox="0 0 128 128">
          <path fill="#FFF" d="M64 81.7c7.3 7.1 14.5 11.3 20.3 11.3 1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3-7.2-7.1-14.4-11.3-20.2-11.3-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zm-12.4-10.3c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zm-14.7 20.1c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zm-28.7-19.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7c-11.2-3.2-17.9-8.1-17.9-12.6 0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zM33.6 112.3c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0h-.7v25.9h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zM57.7 113.4c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zm-15.1 1.6c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2h-12.3zM73.3 106.3c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zM90.3 109c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zM111.1 122.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.799999999999999c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path>
        </svg>
        <svg class=${s.svg_amazon} viewBox="0 0 128 128">
          <path fill="#FFF" d="M44.634 57.361c-2.599 0-5.499 1.001-6.107 4.296-.064.351.167.517.391.567l2.663.32c.246-.014.414-.28.461-.533.228-1.134 1.16-1.669 2.201-1.669.563 0 1.193.193 1.527.71.381.576.354 1.359.354 2.024v.391c-1.582.182-3.666.292-5.147.958-1.709.76-2.912 2.307-2.912 4.58 0 2.913 1.785 4.366 4.083 4.366 1.94 0 3.013-.456 4.509-2.022.497.738.656 1.073 1.562 1.846.202.108.458.098.64-.071v.035c.545-.497 1.535-1.401 2.094-1.881.222-.187.174-.493 0-.746-.5-.707-1.029-1.276-1.029-2.592v-4.366c0-1.85.156-3.556-1.172-4.828-1.046-1.031-2.791-1.385-4.118-1.385zm35.786 0c-2.6 0-5.498 1.001-6.106 4.296-.064.351.166.517.39.567l2.664.32c.246-.014.415-.28.461-.533.229-1.134 1.161-1.669 2.201-1.669.564 0 1.193.193 1.526.71.381.576.319 1.359.319 2.024v.391c-1.582.182-3.63.292-5.112.958-1.711.76-2.91 2.307-2.91 4.58 0 2.913 1.785 4.366 4.082 4.366 1.938 0 3.011-.456 4.509-2.022.495.738.656 1.073 1.563 1.846.203.108.458.098.639-.071v.035c.546-.497 1.537-1.401 2.095-1.881.222-.187.171-.493 0-.746-.5-.707-1.03-1.276-1.03-2.592v-4.366c0-1.85.12-3.556-1.206-4.828-1.05-1.031-2.759-1.385-4.085-1.385zm-20.13.142c-1.68 0-2.924.848-3.585 2.663h-.036v-1.882c-.018-.262-.23-.483-.496-.497h-2.557c-.29 0-.533.245-.533.533v14.378c.022.255.238.479.498.497h2.733c.292 0 .531-.243.532-.533v-7.633c0-1.664-.08-3.94 1.882-3.94 1.937 0 1.668 2.339 1.668 3.94v7.633c0 .271.222.515.498.533h2.733c.29 0 .532-.243.532-.533v-7.633c0-.816-.033-2.006.248-2.733s.971-1.207 1.634-1.207c.789 0 1.394.275 1.598 1.242.126.575.071 2.094.071 2.698v7.633c0 .271.222.515.496.533h2.734c.29 0 .532-.243.532-.533v-9.088c0-1.545.154-3.298-.71-4.509-.765-1.088-2.015-1.563-3.16-1.563-1.605 0-3.101.848-3.763 2.663-.764-1.814-1.842-2.662-3.549-2.662zm46.472 0c-3.949 0-6.142 3.473-6.142 7.953 0 4.448 2.167 8.022 6.142 8.022 3.823 0 6.249-3.492 6.249-7.881 0-4.537-2.198-8.094-6.249-8.094zm15.585 0c-1.887 0-2.966.943-3.728 2.911h-.035v-2.201c-.049-.222-.258-.377-.497-.39h-2.521c-.275 0-.508.199-.533.461v14.378c0 .271.225.515.497.533h2.699c.289 0 .527-.242.531-.533v-7.739c0-.97.083-1.855.463-2.733.306-.697.899-1.137 1.562-1.137 1.883 0 1.703 2.295 1.703 3.87v7.811c.028.244.249.445.498.462h2.733c.269 0 .501-.204.532-.462v-9.053c0-1.392.003-3.324-.71-4.474-.764-1.241-1.975-1.704-3.194-1.704zm-32.803.249c-.278 0-.497.22-.498.532v2.059c.001.31.213.531.498.533h4.686l-5.361 7.916c-.326.511-.354 1.089-.354 1.421v2.095c0 .302.328.63.639.461 3.056-1.668 6.717-1.52 9.479-.035.336.183.675-.16.675-.462v-2.202c-.026-.294-.142-.576-.497-.781-1.568-.901-3.388-1.178-5.111-1.136l4.65-6.815c.43-.613.67-.981.674-1.279v-1.774c0-.306-.209-.532-.496-.532h-8.984zm17.218 2.698c.865 0 1.504.386 1.811 1.384.354 1.152.391 2.588.391 3.799 0 1.846-.086 4.899-2.201 4.899-2.139 0-2.13-3.78-2.13-5.538-.001-1.753.117-4.544 2.129-4.544zm-60.673 5.254v.604c0 1.092.04 2.01-.497 2.981-.434.79-1.116 1.279-1.881 1.279-1.045 0-1.668-.849-1.668-2.06-.001-2.387 2.074-2.804 4.046-2.804zm35.786 0v.604c0 1.092.04 2.01-.496 2.981-.435.79-1.112 1.279-1.882 1.279-1.047 0-1.669-.849-1.669-2.06 0-2.387 2.073-2.804 4.047-2.804zM99.59 73.656v2.06h1.386v-2.06h-1.386zm-40.152.356v14.662h1.278v-1.314c.272.521.582.91.958 1.171.376.262.806.391 1.277.391.939 0 1.75-.479 2.45-1.455.701-.977 1.065-2.392 1.065-4.189 0-1.178-.151-2.154-.462-2.981-.311-.826-.725-1.441-1.242-1.847-.519-.406-1.107-.639-1.739-.639-.452 0-.874.118-1.244.354-.368.236-.666.622-.958 1.101v-5.254h-1.383zm13.135 3.443c-.962 0-1.728.285-2.271.852s-.815 1.296-.815 2.202c0 .525.115.972.318 1.384.202.413.49.748.852.994.364.246 1.09.57 2.166.923.745.24 1.19.444 1.385.604.281.233.427.538.427.959 0 .486-.17.892-.498 1.207-.328.317-.786.461-1.385.461-.6 0-1.094-.168-1.455-.532-.362-.364-.557-.918-.64-1.668l-1.384.283c.313 2.278 1.449 3.41 3.408 3.408 1.045 0 1.844-.295 2.449-.923.604-.628.924-1.471.924-2.485 0-.548-.098-1.022-.284-1.419-.188-.397-.445-.693-.782-.924-.336-.229-1.089-.536-2.236-.923-.834-.292-1.321-.506-1.49-.64-.284-.224-.427-.53-.427-.922 0-.4.133-.739.427-.995.294-.255.747-.39 1.349-.39 1.058 0 1.65.581 1.774 1.739l1.35-.213c-.094-.732-.253-1.312-.496-1.705-.245-.392-.605-.724-1.065-.958-.465-.232-.992-.319-1.601-.319zm8.486 0c-1.109 0-2.046.457-2.77 1.42-.723.963-1.063 2.358-1.063 4.189 0 1.764.348 3.146 1.063 4.083.718.934 1.646 1.384 2.806 1.384.921 0 1.685-.276 2.307-.852.624-.575 1.077-1.423 1.313-2.557l-1.42-.248c-.407 1.451-1.16 2.163-2.2 2.165-.664 0-1.206-.281-1.669-.887-.464-.607-.726-1.507-.78-2.698h6.105v-.497c0-1.792-.357-3.137-1.065-4.083-.709-.945-1.569-1.419-2.627-1.419zm8.414 0c-.331 0-.621.112-.888.355-.267.242-.567.744-.888 1.49v-1.633h-1.243v10.615h1.385v-5.538c0-.772.074-1.516.249-2.201.1-.394.289-.703.532-.923.244-.221.523-.32.816-.32.326 0 .65.131.994.391l.462-1.668c-.482-.386-.955-.568-1.419-.568zm16.969 0c-1.096 0-1.999.462-2.699 1.385-.696.923-1.063 2.309-1.063 4.153 0 1.831.372 3.218 1.063 4.154.693.934 1.559 1.384 2.628 1.384.884 0 1.642-.328 2.272-.994.63-.665 1.014-1.646 1.172-2.911l-1.35-.213c-.101.905-.336 1.557-.71 1.988-.373.43-.823.639-1.349.639-.67 0-1.241-.313-1.67-.958-.427-.646-.638-1.68-.638-3.124 0-1.4.227-2.41.674-3.053.448-.644 1.021-.994 1.704-.994.457 0 .847.177 1.172.531.327.356.543.918.674 1.634l1.351-.283c-.162-1.119-.521-1.962-1.102-2.521-.58-.56-1.284-.817-2.129-.817zm7.917 0c-1.11 0-2.046.457-2.77 1.42-.723.963-1.065 2.358-1.065 4.189 0 1.764.349 3.146 1.065 4.083.719.934 1.646 1.384 2.805 1.384.918 0 1.685-.276 2.308-.852.622-.575 1.075-1.423 1.314-2.557l-1.42-.248c-.41 1.451-1.128 2.163-2.166 2.165-.664 0-1.241-.281-1.704-.887-.463-.607-.725-1.507-.781-2.698h6.106v-.497c0-1.792-.357-3.137-1.065-4.083-.706-.945-1.568-1.419-2.627-1.419zm8.202 0c-.966 0-1.729.285-2.272.852-.545.566-.817 1.296-.817 2.202 0 .525.082.972.284 1.384.2.413.489.748.853.994.361.246 1.09.57 2.166.923.743.24 1.226.444 1.42.604.281.233.426.538.426.959 0 .486-.168.892-.497 1.207-.326.317-.785.461-1.384.461-.602 0-1.094-.168-1.456-.532-.361-.364-.595-.918-.675-1.668l-1.384.283c.313 2.278 1.446 3.41 3.407 3.408 1.047 0 1.881-.295 2.485-.923s.922-1.471.922-2.485c0-.548-.096-1.022-.282-1.419-.188-.397-.479-.693-.817-.924-.336-.229-1.054-.536-2.2-.923-.835-.292-1.357-.506-1.527-.64-.283-.224-.426-.53-.426-.922 0-.4.167-.739.462-.995.294-.255.75-.39 1.35-.39 1.058 0 1.649.581 1.774 1.739l1.349-.213c-.094-.732-.252-1.312-.497-1.705-.244-.392-.605-.724-1.064-.958-.463-.232-.994-.319-1.6-.319zm-31.668.213l3.09 10.615h1.313l3.089-10.615h-1.42l-1.811 6.497c-.219.785-.413 1.464-.533 2.023-.15-.705-.296-1.446-.496-2.166l-1.775-6.354h-1.457zm8.697 0v10.615h1.386v-10.615h-1.386zm-45.513.143c-1.098 0-1.981.492-2.697 1.455-.717.963-1.102 2.358-1.102 4.189 0 1.765.355 3.113 1.065 4.047.709.935 1.657 1.42 2.806 1.42.911 0 1.655-.312 2.271-.888.616-.575 1.042-1.423 1.279-2.556l-1.385-.213c-.404 1.451-1.136 2.163-2.165 2.165-.659 0-1.21-.281-1.669-.888-.46-.606-.727-1.506-.781-2.697h6.035l.036-.497c0-1.792-.364-3.172-1.065-4.119-.701-.945-1.581-1.418-2.628-1.418zm-15.584.248l2.485 10.615h1.455l1.634-8.165.284 1.81 1.313 6.355h1.42l2.521-10.615h-1.313l-1.386 6.141-.462 2.06-.426-2.06-1.207-6.142h-1.42l-1.278 6.213-.426 2.201-.496-2.272-1.279-6.142h-1.419zm42.53.852c.69 0 1.258.333 1.704.994.306.452.506 1.14.567 2.059h-4.58c.044-.932.307-1.65.747-2.201.44-.55.943-.852 1.562-.852zm33.3 0c.688 0 1.258.333 1.704.994.308.452.506 1.14.569 2.059h-4.581c.044-.932.308-1.65.746-2.201.437-.55.943-.852 1.562-.852zm-60.246.39c.682 0 1.23.334 1.67.995.304.452.505 1.14.567 2.059h-4.51c.043-.932.275-1.687.711-2.236.434-.552.948-.818 1.562-.818zm8.805 0c.615 0 1.14.342 1.563.995.423.652.604 1.659.604 3.053 0 1.357-.2 2.37-.64 3.053-.439.684-.96 1.029-1.526 1.029-.416 0-.794-.14-1.136-.426-.344-.286-.595-.696-.782-1.242-.186-.546-.283-1.387-.283-2.485 0-1.294.231-2.263.674-2.947.443-.684.96-1.03 1.526-1.03zM18.594 68.048l-5.29 2.271 4.899 2.095 5.681-2.095-5.29-2.271zm-7.952 2.839l-.178 10.226 7.74 3.408v-10.616l-7.562-3.018zm15.904 0l-6.994 2.663v10.012l6.994-2.84v-9.835zM34.889 39.078l-5.326 2.271 4.935 2.095 5.681-2.095-5.29-2.271zm-7.385 3.018v10.224l6.604 1.917.213-9.302-6.817-2.839zm14.769.567l-6.249 2.663v10.047l6.249-2.84v-9.87zM9.877 53.468l-5.29 2.272 4.899 2.095 5.68-2.095-5.289-2.272zm-7.951 2.841l-.178 10.224 7.739 3.408v-10.615l-7.561-3.017zm15.904 0l-6.994 2.662v10.012l6.994-2.84v-9.834zM26.918 53.091l-5.29 2.271 4.899 2.094 5.68-2.094-5.289-2.271zm-7.952 2.839l-.177 10.225 7.739 3.408v-10.615l-7.562-3.018zm15.905 0l-6.994 2.663v10.012l6.994-2.841v-9.834zM51.533 39.078l-5.289 2.271 4.899 2.095 5.681-2.095-5.291-2.271zm-7.952 2.84l-.178 10.225 7.74 3.407v-10.614l-7.562-3.018zm15.904 0l-6.994 2.663v10.011l6.994-2.84v-9.834z"></path>
        </svg>`
      );
    }
  }

  render() {
    return (
      <div>
        <div className={`${s.server_simulation} ${this.props.mainPageActive ? s.hide_command : s.show_command}`}>
          <div>{this.serverRender()}</div>
        </div>
        <Splash {...this.props} color='#2196F3' text={this.splashHTML()} className={this.props.mainPageActive ? s.layout_shown : s.layout_hidden} />
        <div className={this.props.mainPageActive ? s.layout_shown : s.layout_hidden}>
          <Layout className={s.content}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <h4>Articles</h4>
            <ul>
              {this.props.articles.map((article, i) =>
                <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
              )}
            </ul>
            <p>
              <br /><br />
            </p>
          </Layout>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
