import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { AiFillDelete, AiOutlineUser } from "react-icons/ai";
import Swal from "sweetalert2";
const AllUser = () => {
    const axiosSecure = UseAxiosSecure()
 const {data: users = [], refetch } = useQuery({
     queryKey:['users'],
     queryFn: async () =>{
          const res = await axiosSecure.get('/users')
          return res.data
     }
 })
    
 const handleDeleteUser = user =>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    
    axiosSecure.delete(`/users/${ user._id}`)
    .then(res=>{
         if(res.data.deletedCount> 0){
            refetch()
               Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
         }
    })
    }
  }); 
 }

 const handleMakeAdmin = user =>{
     axiosSecure.patch(`/users/admin/${user._id}`)
     .then(res=>{
         console.log(res.data);
         if(res.data.modifiedCount > 0){
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now` ,
            showConfirmButton: false,
            timer: 1500
          });
         }
     })
 }

    return (
        <div>
             <div className=" flex justify-evenly my-4" >
                <h1 className=" text-3xl"> All User </h1>
                <h1 className=" text-3xl"> Total User {users.length} </h1>
             </div>

             <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th> Role </th>
        <th> Action </th>
      </tr>
    </thead>
    <tbody>
     {
        users.map( (user, index) => <tr key={user._id} >
            <th> {index +1} </th>
            <td> {user.name} </td>
            <td> {user.email} </td>
            <td>
              
         {  user.role === 'admin' ? 'Admin' :
           <button 
           onClick={()=> handleMakeAdmin(user)} 
           className=" btn" >   
           <AiOutlineUser className=" text-3xl text-red-400 hover:text-red-900" ></AiOutlineUser>
           </button>
         }


            </td>
            <td>
             <button 
              onClick={()=> handleDeleteUser(user)} 
             className=" btn" >   
             <AiFillDelete className=" text-3xl text-red-400 hover:text-red-900" ></AiFillDelete>
             </button>
            </td>
          </tr> )
     }
      
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AllUser;