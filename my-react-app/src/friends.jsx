import { use } from "react"
import Friend from "./friend";
export default function Friends({friendsPromise}){
    const friends = use (friendsPromise);
    return (
        <div className="card bg-[#ddd]">
            <h3 className="text-[#000] text-3xl font-bold">Friends:{friends.length}</h3>
            {
                friends.map( friend => <Friend key={friend.id} friend = {friend}></Friend> )
            }

        </div>
    )
}