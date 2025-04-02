import { use } from "react"

export default function Users({ fetchUsers }){
    const users = use(fetchUsers);
    console.log(users);
    return (
        <div className="card bg-[#ddd]">
            <h3>Users:{users.lenth}</h3>

        </div>
    )
}