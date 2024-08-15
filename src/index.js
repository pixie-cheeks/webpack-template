import './index.css';

// eslint-disable-next-line no-console
console.log('Check whether everything is working or not.');

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
