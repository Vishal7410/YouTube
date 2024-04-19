
import { Provider } from 'react-redux'
import './App.css'
import Header from './components/Header'
import store from './utils/store'
import Body from './components/Body'
import MainContainer from './components/MainContainer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path:"watch",
      element: <WatchPage/>
    },
    

  ]
}])




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
