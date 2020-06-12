import React from 'react';
import ItemList from './components/ItemList';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

//入力値に`books`を追加して出力するシンプルな関数を定義
const getDataFromAPI = async keyword => {
  // eslint-disable-next-line
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  const result = await axios.get(`${requestUrl}${keyword}`);
  return result;
}

const getArtworkFromAPI = async keyword => {
  const artworkUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
  const result = await axios.get(`${artworkUrl}${keyword}`)
  return result;
}

const App = () => {
  const languages = ['React', 'Vue', 'Angular','oilpainting'];
  return (
    <BrowserRouter>
      <div>
        <h1>React-Firebase Todo App</h1>
        <ul>
          <li><Link to='/'>Todo List</Link></li>
          <li><Link to='/react'>React</Link></li>
          <li><Link to='/vue'>Vue</Link></li>
          <li><Link to='/angular'>Angular</Link></li>
          <li><Link to='/oilpainting'>Oilpainting</Link></li>
        </ul>
        <hr/>
        <Route exact path='/' component={ItemList}/>
        <Route 
          path='/react' 
          render={
            props =>
             <Booklist 
                language={languages[0]}
                getData={keyword => getDataFromAPI(keyword)}
                 />} 
        /> 
        <Route 
          path='/vue' 
          render={
            props =>
             <Booklist 
                language={languages[1]}
                getData={keyword => getDataFromAPI(keyword)}
                 />} 
        /> 
        <Route 
          path='/angular' 
          render={
            props =>
             <Booklist 
                language={languages[2]}
                getData={keyword => getDataFromAPI(keyword)}
                 />} 
        /> 
        <Route 
          path='/angular' 
          render={
            props =>
             <Booklist 
                language={languages[3]}
                getData={keyword => getArtworkFromAPI(keyword)}
                 />} 
        /> 
      </div>
    </BrowserRouter>
    );
}

export default App;
