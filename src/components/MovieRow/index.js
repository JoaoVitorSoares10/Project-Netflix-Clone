import React, {useState} from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function Row({title, items}){

    const [scrollx, setscrollx] = useState(0);

    const handleLeftArrow =()=>{
        let x = scrollx + Math.round(window.innerWidth/2)
        if(x > 0){
            x = 0;
        }
        setscrollx(x);
    }

    const handleRightArrow =()=>{
        let x = scrollx - Math.round(window.innerWidth/2);
        let listW = items.results.length * 150;
        
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 30;
        }
        setscrollx(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
               <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollx,
                    width: items.results.length*150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div className="movieRow--item" key={key}>
                            <img alt={item.original_title}src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}