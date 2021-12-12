import 'react-perfect-scrollbar/dist/css/styles.css';

let render = () => {
  import('./assets/sass/main.scss').then(x => {
    require('./AppRenderer');
  });
};

render();