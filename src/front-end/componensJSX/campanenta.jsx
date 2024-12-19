// import React from "react";
// import { useState } from "react"; 
// import "../../styles/style.css";

// const Campanenta =()=>{
//     const[formData, setFormData] = useState({
//         name:"",
//         email:"",
//     });

//     const[error, setError] = useState({
//         name:"",
//         email:"",
//     });

//     const handleFormInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ 
//             ...formData, 
//             [name]: value 
//         });
//     };
    
//     const validate = () =>{
//         const novaPomylka = {}
//         if (!formData.name) {
//             novaPomylka.name = "Ti debil bez imeni"
//         } 
//         if (!formData.email) {
//             novaPomylka.email = "Ti debil bez poshty"
//         } else if(!/\S+@\S+\.\S+/.test(formData.email)){
//             novaPomylka.email = "Ti debil z no good poshta"
//         }
//         setError(novaPomylka)
//         return Object.keys(novaPomylka).length === 0
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         if (validate()){
//             alert("zhertva aborta")
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Name:</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleFormInputChange} />
//                 {error.name && <p style={{color:"red"}}>{error.name}</p>}
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleFormInputChange} />
//                 {error.email && <p style={{color:"red"}}>{error.email}</p>}
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default Campanenta