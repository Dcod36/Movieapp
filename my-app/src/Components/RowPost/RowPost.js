import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'  
function RowPost(props) {
  const[movies,setmovies]=useState([])  
  const[urlid,seturlid]=useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
    }).catch(err=>{alert('Network Error')}) 
  }, [])
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
   const handleMovie=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        seturlid(response.data.results[0])
    }
  else{
    console.log('Array is empty')
  }})
   }
  return (

    <div className='row'>   
    <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
        
            <img onClick={()=>handleMovie(obj.id)}className={props.isSmall? "smallPoster":"poster"} src={`${imageUrl+obj.backdrop_path}`}alt='poster'/>

  )}
            
      </div>
     {urlid && <Youtube  videoId={urlid.key} opts={opts}/> }
    </div>
  )
}

export default RowPost 
