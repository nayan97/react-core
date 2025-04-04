import { use } from "react"

export default function Users({ fetchUsers }){
    const users = use(fetchUsers);
    console.log(users);
    return (
        <div className="card bg-[#fff]">
            <h3 className="text-[#000] text-3xl font-bold">Users:{users.length}</h3>

        </div>
    )
}