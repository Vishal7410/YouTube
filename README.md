- Building the YOUTUBE App

Requirement Clarification
 Feature
 Tech Stack
 - Redux
 - Tailwind

Planning

        Header
         Body
        Sidebar
           MenuItem
        MainContainer
        - ButtonList
        - VideoContainer
        -  VideoCard
      
Header
- header done with grid pattern used
- side bar component build
- Redux store created 
- Manage the side bar Menu using React store

Build YouTube container
- Call Youtube Api and get Key
- created videoCard & and fetch and destructure the data
- create the watch page 

Build the Search Bar

- Debouncing: 

typing slow: 200ms
tying fast : 30ms 

Perfomance
 - iphone pro max = 14 letter*1000 = 140000  Api called 
 - with debouncing = 3 API call *1000 = 3000 Api called 

 Debouncing with 200ms
 - if difference between 2 key storkes is <200ms - DECLINE API CALL/Api NOT call
 >200ms make an API call

 Created the SearchBar suggestions 
        
  
