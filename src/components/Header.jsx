import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import {YOUTUBE_SUGGESTION_API } from "../utils/constants";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestion] = useState([])

  useEffect(()=> {
    //Api call here
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer)
    };
  }, [searchQuery]);

  /*

  *key press - i
  - render the component
  - useEffect();
  - start timer => make API call after 200ms

  * Key - ip
  
  - destroy the  component(useEffect return method)
  - re-render the component 
  - useEffect()
  - start timer => make api call afetr 200ms 

  -setTimeOut(200) - make an API call

  */

  const getSearchSuggestion = async ()=> {
    console.log("API CALL - " + searchQuery);

    const data = await fetch(YOUTUBE_SUGGESTION_API+searchQuery)
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1])
  }

   const dispatch = useDispatch();

   const toggleMenuHandler = () =>{
    dispatch(toggleMenu())

   }
  return (
    <div className="grid grid-flow-col justify-between p-2 m-2 shadow-lg">
      <div className="flex">
        <img
          className="h-8 cursor-pointer"
          onClick={()=> toggleMenuHandler()}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=="
          alt="Hambuger"
        />
        <img
          className="h-8 mx-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt="YouTube Logo" 
        />
      </div>
      
      <div  className="col-span-10 px-10">
        <div>
        <input
         className="px-5 w-1/2 border border-gray-400 rounded-l-full p-2"
        type="text" placeholder="Search" 
        value = {searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
       />
        <button className=" w-16 border border-gray-400 rounded-r-full p-2  bg-gray-100">🔍</button>
        </div>
        <div className="fixed bg-white py-2 px-3 w-[29.5rem] shadow-lg rounded-lg border border-gray-100"> 
          <ul> 
            {suggestion.map((s)=>(
            <li key={s} className="py-2 px-2 shadow-sm hover:bg-gray-200 ">🔎 {s}</li>) )}
           
           
          </ul>
        </div>
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt="userIcon"
        />
      </div>
    </div>
  );
};

export default Header;
