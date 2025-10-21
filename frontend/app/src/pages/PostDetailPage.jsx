import { useParams } from "react-router-dom";
import { api } from "../utils/api";

export default function PostDetailPage(){
    const { id } = useParams();

    const handleJoin = async () => {
    const token = localStorage.getItem("token");
    const postId = post._id;
    const res = await api.joinPost(token, postId);

    if (res.participation) {
        alert("Joined successfully!");
    } else {
        alert(res.message || "Could not join post");
    }
    };
}