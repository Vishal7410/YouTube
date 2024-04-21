import { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
 import VideoCard, { AdVideoCard } from './VideoCard'
import { Link } from 'react-router-dom';


const VideoContainer = () => {
const [videos, setVideos] = useState([])






 useEffect(()=> {
  getYoutubeVideo();
},[])
  

const getYoutubeVideo = async() => {
  const data = await fetch(YOUTUBE_VIDEO_API)
  const json = await data.json();
  // console.log(json);
  setVideos(json.items)
}
  return (
    <div className='flex flex-wrap'>
      <AdVideoCard info={videos[0]}/>
      {videos.map((videos)=> ( 
     // eslint-disable-next-line react/jsx-key
     <Link to={"/watch?v="+videos.id} key={videos.id} ><VideoCard  info={videos}/></Link> ))}
             
    </div>
  )
}

export default VideoContainer