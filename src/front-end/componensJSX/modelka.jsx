// import React, { useState } from "react";

// const Modelka = ({isOpen, onClosed, gamno}) => {
//     const [isFormModelkaOpen, setFormModelkaOpen] = useState(false);
//     const [isGuvnoData, setGuvnoData] = useState({pole1: '', pole2:''});
//     if (!isOpen || !gamno) return null;
//     const changeData = (event) => {
//         const{poleName, poleValue} = event.target;
//         setGuvnoData((previousPodiya) => ({
//             ...previousPodiya,
//             [poleName]:poleValue
//         }))
//     }
//     const submitChangeData = (event) => {
//         event.preventDefault()
//         console.log("NADISLANO", isGuvnoData)
//         setGuvnoData(false)
    
//     }
//     const toggleData = () => setFormModelkaOpen((previous) => !previous)

//     return(
//         <div className="modelka-pole" onClick={onClosed}>
//             <div className="modelka-modelka">
//                 <div className="kartinka">
//                     <img src="https://via.placeholder.com/350" />
//                     <div className="kartinka-small">
//                         <img src="https://via.placeholder.com/50" />
//                         <img src="https://via.placeholder.com/50" />
//                         <img src="https://via.placeholder.com/50" />
//                     </div>
//                 </div>
//                 <div className="kantent">
//                     <h2>NAZVA</h2>
//                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ad, eum odit fugit doloremque hic explicabo dolor vel obcaecati corporis sit inventore magnam neque itaque rem laboriosam recusandae voluptate ut.</p>
//                 </div>
//                 <div className="knopki">
//                     <button className="knopka">knopka1</button>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default Modelka