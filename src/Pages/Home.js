import React, {useEffect, useState} from "react";
import Tmdb from "../service/tmdb";
import '../Style/Home.css'

import MovieRow from '../components/MovieRow';
import FeaturedMovie from "../components/FeaturedMovie";
import Header from '../components/HomeHeader'
import Loading from '../components/Loading'

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const LoadAll = async ()=>{
    const list = await Tmdb.getHomeList();
    setMovieList(list);
    
    const originals = list.filter(i=>i.slug === 'originals');
    const randomChosen = Math.floor(Math.random() * originals[0].items.results.length);
    const chosen = originals[0].items.results[randomChosen];
    const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
  }

    LoadAll();
  }, [])

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return ()=>{
      window.removeEventListener('scroll', scrollListener)
    }

  }, [])

  return (
    <div className="page">
      <Header black={blackHeader}/>

      {FeaturedData && 
        <FeaturedMovie item={FeaturedData}/>
      }

      <section className="lists">
      {movieList.map((item, key)=>(
        <MovieRow 
          key={key}
          title={item.title}
          items = {item.items}
        />
      ))}
      </section>

      <footer className="HomeFooter">
        <p>Direitos de imagem para Netflix <br/>
        Dados fornecidos pelo site Themoviedb.org <br/>
        Projeto desenvolvido em conjunto com o canal Bonieky Lacerda</p>
      </footer>

      {movieList.length <= 0 && <Loading />}
      
    </div>
  );
}

