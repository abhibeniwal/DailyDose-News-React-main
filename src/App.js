import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const[progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={progress}
            />
          <Routes>
          <Route exact path="/business" element = {<News setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country = "in" category = "business" heading="Business"/>}></Route>
          <Route exact path="/entertainment" element = {<News setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country = "in" category = "entertainment" heading="Entertainment"/>}></Route>
          <Route exact path="/" element = {<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={9} country = "in" category = "general" heading="General"/>}></Route>
          <Route exact path="/health" element = {<News setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country = "in" category = "health" heading="Health"/>}></Route>
          <Route exact path="/science" element = {<News setProgress = {setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country = "in" category = "science" heading="Science"/>}></Route>
          <Route exact path="/sports" element = {<News setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country = "in" category = "sports" heading="Sports"/>}></Route>
          <Route exact path="/technology" element = {<News setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country = "in" category = "technology" heading="Technology"/>}></Route>
          
          </Routes>
      </Router>
        </div>
    )
}

export default App;
