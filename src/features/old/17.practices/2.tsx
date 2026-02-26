// import { useEffect, useState, useMemo } from "react";

// type Product = {
//     id: number;
//     name: string;
//     price: number;
// };

// export default function ProductSearch() {
//     const [search, setSearch] = useState("");
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         setLoading(true);

//         fetch(`https://example.com/api/products?q=${search}`)
//             .then(res => res.json())
//             .then(data => {
//                 setProducts(data);
//                 setLoading(false);
//             });
//     }, [search, products]);

//     const expensiveTotal = useMemo(() => {
//         let sum = 0;
//         products.forEach(p => {
//             for (let i = 0; i < 500000; i++) { }
//             sum += p.price;
//         });
//         return sum;
//     }, [products, total]);

//     useEffect(() => {
//         setTotal(expensiveTotal);
//     }, [expensiveTotal, total]);

//     return (
//         <div>
//             <input
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//             />

//             {loading && <p>Loading...</p>}

//             <h3>Total: {total}</h3>

//             <ul>
//                 {products.map((p, index) => (
//                     <li key={index}>
//                         {p.name} - ${p.price}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
