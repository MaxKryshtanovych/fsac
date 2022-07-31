import './App.css';
import FsacHeader from '../FsacHeader/FsacHeader'
import FilmList from '../../pages/Films/FilmList'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import SeriesList from "../../pages/Series/SeriesList";
import AnimeList from "../../pages/Anime/AnimeList";
import CartoonsList from "../../pages/Cartoons/CartoonsList";
import FilmDetail from "../../pages/Films/FilmDetail";
import SeriesDetail from "../../pages/Series/SeriesDetail";
import AnimeDetail from "../../pages/Anime/AnimeDetail";
import CartoonsDetail from "../../pages/Cartoons/CartoonsDetail";
import ActorsDetail from "../../pages/Actors/ActorsDetail";
import DirectorsDetail from "../../pages/Directors/DirectorsDetail";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <FsacHeader/>
                <main>
                    <Routes>
                        <Route exact="true" path="/"/>
                        <Route exact="true" path="/films/" element={<FilmList/>}/>
                        <Route exact="true" path="/films/:id" element={<FilmDetail/>}/>
                        <Route exact="true" path="/series/" element={<SeriesList/>}/>
                        <Route exact="true" path="/series/:id" element={<SeriesDetail/>}/>
                        <Route exact="true" path="/anime/" element={<AnimeList/>}/>
                        <Route exact="true" path="/anime/:id" element={<AnimeDetail/>}/>
                        <Route exact="true" path="/cartoons/" element={<CartoonsList/>}/>
                        <Route exact="true" path="/cartoons/:id" element={<CartoonsDetail/>}/>
                        <Route exact="true" path="/actors/:id" element={<ActorsDetail/>}/>
                        <Route exact="true" path="/directors/:id" element={<DirectorsDetail/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;
