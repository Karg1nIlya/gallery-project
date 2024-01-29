import { Provider } from 'react-redux';
import { App } from './App';
import ReactDOM from 'react-dom/client';
import store from './store/store';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { Layout } from './pages/Layout/Layout';

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = ReactDOM.createRoot(root)

container.render(
    <Provider store={store}>
        <App/>
    </Provider>
    
)
