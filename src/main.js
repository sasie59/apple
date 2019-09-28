import printMe from './print.js';

import "./app.css";

console.warn('main222');
printMe();

if (module.hot) {
  module.hot.accept('./print.js', function() {
    printMe();
  })
}