import { use } from "react"
export default function Friends({friendsPromise}){
    const friends = use (friendsPromise);
    return (
        <div className="card bg-[#ddd]">
            <h3 className="text-[#000] text-3xl font-bold">Friends:{friends.length}</h3>

        </div>
    )
}