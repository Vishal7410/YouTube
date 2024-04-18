import Button from "./Button"

const list = ["All","Music","Mixes","Songs","Phone","Gaming","Movies","Jukebox","News","Live","Computer","Batting","Gaming1","Gaming2","Gaming3","Gaming4","Gaming5","Wathced1"]


const ButtonList = () => {
  return (
    // <div className="flex">
    //  <Button name= "All"/>
    //  <Button name= "Music"/>
    //  <Button name= "Mixes"/>
    //  {/* <Button name= "T-series"/> */}
    //  <Button name= "Phone"/>
    //  <Button name= "Gaming"/>
     
    //  <Button name= "Movie"/>
    //  {/* <Button name= "Arijit Singh"/> */}
    //  {/* <Button name= "Marvel Studios"/> */}
    //  <Button name= "Jukebox"/>
    //  <Button name= "News"/>
    //  <Button name= "Live"/>
    //  {/* <Button name= "Indian Pop Music"/> */}
    //  <Button name= "Computer"/>
    //  <Button name= "Batting"/>
    //  {/* <Button name= "Recently uploaded"/> */}
    //  <Button name= "Wathced"/>
    //  {/* <Button name= "New for You"/> */}
    


    // </div>
    <div className="flex">
      {
        // eslint-disable-next-line react/jsx-key
        list.map((name)=>(<div key={name}><Button name={name}/></div>))
      }
    </div>
  )
}

export default ButtonList