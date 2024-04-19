import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  // Early Return pattern
  if(!isMenuOpen) return null
  // these line is false then it is not going the below line 

  return (
    <div className="p-5 shadow-lg w-45 ">
      <ul>
        <Link to={"/"}><li>Home</li></Link>
        
        <li>Short</li>
        <li>Subscription</li>
       
      </ul>
      <h1 className=" font-bold pt-3">You → </h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Playlists</li>
        <li>your Videos</li>
        <li>Watch later</li>
        <li>Like videos</li>
        <li>Your clips</li>
      </ul>

      <h1 className="font-bold pt-3">Subscription</h1>
      <ul>
        <li>channel 1</li>
        <li>channel 2</li>
        <li>channel 3</li>
        <li>channel 4</li>
      </ul>
      <h1 className="font-bold pt-3">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold pt-3">More on YouTube</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-3">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar