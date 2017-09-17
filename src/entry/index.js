import 'style/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import { AppContainer } from 'react-hot-loader';

// import App from './container/App';
import App from '../routes/index.js';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('../routes/index.js', () => {
    render(App)
  });
}