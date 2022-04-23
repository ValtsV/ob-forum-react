import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './routes/LoginPage';
import ThemesPage from './routes/ThemesPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<App />} >
        <Route path='temas' element={<ThemesPage />} />
        <Route path='discusiones/:id' element={<DiscussionsPage />} />
        <Route path='preguntas/:id' element={<QuestionPage />} />
        <Route path='pregunta-nueva/' element={<NewQuestionPage />} />
      </Route>
      <Route path='login' element={<LoginPage />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
