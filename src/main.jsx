import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import "./styles/main.scss";
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { Loader } from './components/ui'
import store from './store.js';
import { Provider } from 'react-redux';
export const App = React.lazy(() => import(/* webpackChunkName: "App" */ "./App.jsx"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
