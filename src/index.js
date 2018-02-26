import './sass/style.scss';
import './scripts/svguse.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Promise from "promise-polyfill";
import Board from './component/Services/Board.jsx';
if (!window.Promise) {
  window.Promise = Promise;
}
  ReactDOM.render(
    (<div>
      <Board/>
    </div>)
  , document.getElementById('App'));
  console.log('OK');
  document.querySelector('.visible_content').classList.remove('visible_content');
  document.querySelector('.preloader').classList.add('visible_content');
