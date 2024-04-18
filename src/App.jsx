
import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import store from './utils/store'
import MainContainer from "./MainContainer";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
  path: '/',
  element: <Body/>,
  childern: [
    {
      path : "/",
      element: <MainContainer/>,
    },
    {
      path: "watch",
      element: <WatchPage/>,
    } ,
  ],
},
]);


function App() {

  return (
    <Provider store={store}>
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>
      <Body/>
   
      
    </div>
      
    </Provider>
  )
}

export default App
