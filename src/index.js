import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/AppContainer';
import { Provider } from 'react-redux';
import store from '../redux/store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
/* Znajdź element, którego id to 'app' i wstaw do niego komponent App,
aby nasza aplikacja mogła korzystać z magazynu, musimy wrappować całą 
aplikację w komponent Provider, który przed chwilą zaimportowaliśmy */

