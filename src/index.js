import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import { GlobalState } from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';




ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Provider store={GlobalState}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>,
)
