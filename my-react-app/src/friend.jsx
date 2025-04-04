export default function Friend({friend}){
    const {name, email, phone} = friend;
    return (
        <div className="card bg-[#fff]">
            <h2 className="text-[#000] font-bold">Name: {name}</h2>
            <h6 className="text-[#000]">Email: {email}</h6>
            <h6 className="text-[#000]">Phone: {phone}</h6>
        </div>
    )
}