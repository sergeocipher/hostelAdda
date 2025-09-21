import { useParams } from "react-router-dom";

export default function PostDetailPage(){
    const { id } = useParams();
    return <div>post detail page : {id} </div>;
}