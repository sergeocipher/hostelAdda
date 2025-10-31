import { Route , Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import CreateOrderPage from "./pages/CreateOrderPage";
import HomeFeedPage from "./pages/HomeFeedPage";
import PostDetailPage from "./pages/PostDetailPage";
import MyPostPage from "./pages/MyPostPage";
import FriendList from "./pages/FriendList";


function App(){
  return (
      <Routes>
        <Route path= "/" element = {<LoginPage/>}/>
        <Route path= "/create-order" element = {<CreateOrderPage/>}/>
        <Route path= "/home" element = {<HomeFeedPage/>}/>
        <Route path= "/myposts" element = {<MyPostPage/>}/>
        <Route path= "/post/:id" element = {<PostDetailPage/>}/>
        <Route path= "/friend" element = {<FriendList/>}/>
      </Routes>
  )
}

export default App;