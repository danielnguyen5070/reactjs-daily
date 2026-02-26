// import React, { useEffect, useState } from "react";

// const products = [
//     { id: 1, name: "Laptop", price: 1200 },
//     { id: 2, name: "Phone", price: 800 },
//     { id: 3, name: "Tablet", price: 600 },
//     { id: 4, name: "Monitor", price: 300 },
// ];

// export default function ProductSearch() {
//     const [search, setSearch] = useState("");
//     const [list, setList] = useState([]);
//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         const result = products.filter(p =>
//             p.name.toLowerCase().includes(search.toLowerCase())
//         );

//         setList(result);
//     }, []);

//     useEffect(() => {
//         let sum = 0;
//         list.forEach(item => {
//             for (let i = 0; i < 500000; i++) { }
//             sum += item.price;
//         });
//         setTotal(sum);
//     }, [list, total]);

//     return (
//         <div>
//             <input
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//             />

//             <h3>Total price: {total}</h3>

//             <ul>
//                 {list.map((item, index) => (
//                     <li key={index}>
//                         {item.name} - ${item.price}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
