import { Route , Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import CreateOrderPage from "./pages/CreateOrderPage";
import HomeFeedPage from "./pages/HomeFeedPage";
import MyProfilePage from "./pages/MyProfilePage";
import PostDetailPage from "./pages/PostDetailPage";
import MyPostPage from "./pages/MyPostPage";
import FriendPage from "./pages/FriendPage";


function App(){
  return (
      <Routes>
        <Route path= "/" element = {<LoginPage/>}/>
        <Route path= "/create-order" element = {<CreateOrderPage/>}/>
        <Route path= "/home" element = {<HomeFeedPage/>}/>
        <Route path= "/profile" element = {<MyProfilePage/>}/>
        <Route path= "/myposts" element = {<MyPostPage/>}/>
        <Route path= "/post/:id" element = {<PostDetailPage/>}/>
        <Route path = "/friend" element = {<FriendPage/>} />
      </Routes>
  )
}

export default App;