/* eslint-disable react/prop-types */

const VideoCard = ({info}) => {
  // Check if info is define before destructuring
  if(!info){
    return <div>No video information availabel </div>
  }
  
  // Destructuring info if it's defined
  //  console.log(info);
   const {snippet , statistics} = info;
   const {channelTitle , title , thumbnails} = snippet;
   return (
   <div className='p-2 m-2 w-72 shadow-lg'>
    <img className='rounded-lg '
    src={thumbnails.medium.url} alt="thumbnail" />
    <ul>
      <li className='font-bold py-2'>{title}</li>
    <li>{channelTitle}</li>
    <li>{statistics.viewCount}views</li>
  
  </ul>
   </div>
   )
};

// higher order function
export const AdVideoCard = ({info}) => { 
return(
  <div className="p-1 m-1 border border-red-900">
     <VideoCard info={info}/>
    
  </div>
 

)

}




export default VideoCard