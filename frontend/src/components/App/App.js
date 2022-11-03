import './App.scss';
import FsacHeader from '../FsacHeader/FsacHeader'
import FilmList from '../../pages/Films/FilmList'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import { Helmet } from 'react-helmet';
import SeriesList from "../../pages/Series/SeriesList";
import AnimeList from "../../pages/Anime/AnimeList";
import CartoonsList from "../../pages/Cartoons/CartoonsList";
import FilmDetail from "../../pages/Films/FilmDetail";
import SeriesDetail from "../../pages/Series/SeriesDetail";
import AnimeDetail from "../../pages/Anime/AnimeDetail";
import CartoonsDetail from "../../pages/Cartoons/CartoonsDetail";
import ActorsDetail from "../../pages/Actors/ActorsDetail";
import DirectorsDetail from "../../pages/Directors/DirectorsDetail";
import Index from "../Index/Index";
import FsacFooter from "../FsacFooter/FsacFooter";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <FsacHeader/>
                <Helmet>
                    <title>FSAC</title>
                </Helmet>
                <main>
                    <div className={'sska'}>
                        <Routes>
                            <Route exact="true" path="/" element={<Index/>}/>
                            <Route exact="true" path="/films/" element={<FilmList/>}/>
                            <Route exact="true" path="/films/:slug" element={<FilmDetail/>}/>
                            <Route exact="true" path="/series/" element={<SeriesList/>}/>
                            <Route exact="true" path="/series/:slug" element={<SeriesDetail/>}/>
                            <Route exact="true" path="/anime/" element={<AnimeList/>}/>
                            <Route exact="true" path="/anime/:slug" element={<AnimeDetail/>}/>
                            <Route exact="true" path="/cartoons/" element={<CartoonsList/>}/>
                            <Route exact="true" path="/cartoons/:slug" element={<CartoonsDetail/>}/>
                            <Route exact="true" path="/actors/:slug" element={<ActorsDetail/>}/>
                            <Route exact="true" path="/directors/:slug" element={<DirectorsDetail/>}/>
                        </Routes>
                    </div>
                </main>
                <FsacFooter/>
            </div>
        </BrowserRouter>
    )
}

export default App;
