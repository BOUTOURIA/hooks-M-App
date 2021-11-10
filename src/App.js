
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Naavbar from './components/Navbar'
import Filter from './components/Filter'
import MoviesList from './components/MoviesList'
import Description from "./components/Description";
import './App.css';
import {useState} from 'react'

function App() {
const [movieList, setMovieList]=useState( [
  {
    id: 1,
    title: "Captain America",
    rate: 3,
    img: "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_.jpg",
    Description: "Action || Science Fiction",
  },
  {
    id: 2,
    title: "Captain Marvel",
    rate: 2,
    img: "https://fr.web.img2.acsta.net/pictures/18/12/03/08/53/5968896.jpg",
    Description: "Action || Science Fiction",
  },
  {
    id: 3,
    title: "T H O R ",
    rate: 4,
    img: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
    Description: "Action || Fantasy",
  },
  {
    id: 4,
    title: "Iron Man 3 ",
    rate: 5,
    img: "https://static.posters.cz/image/750/affiches/avengers-endgame-i-am-iron-man-i76482.jpg",
    Description: "Action || Science Fiction",
  },
 
]);
const [search, setSearch] = useState('')

const addHandler=(newMovie)=>{
setMovieList(
  [...movieList,newMovie ]
)
}
return (
  
  <Router>
    
  <div className="App">
    
    <Naavbar/>
      <Routes>
         <Route path="Search" element={
         <Filter setSearch={setSearch} />}/>

         <Route path="/Home" element={
        <MoviesList movieList={movieList}  search={search} addHandler={addHandler} setSearch={setSearch} />}/>
            <Route path= {"/filmDescription/:id"}  element = { <Description   movieList={movieList} />}/>
     </Routes>
   
  </div>
  </Router>
 
  
);
}

export default App;
