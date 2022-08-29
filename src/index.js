import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Views/App';
import NavigationBar from './Views/NavigationBar';
import Error from './Views/Error';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Route,
    Routes,
    Link
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Navigation Bar*/}
        <NavigationBar/>ffff

        {/*Loading Different Pages*/}
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}/>
                <Route index path={"/home"} element={<App/>}/>
                <Route path={"/Error"} element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
