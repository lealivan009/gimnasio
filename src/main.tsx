import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AxiosInterceptor } from './interceptor/axios.interceptor';

const container = document.getElementById('root');
const root = createRoot(container!);

AxiosInterceptor();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);