// import React, { useEffect, useState } from "react";

// type Product = {
//     id: number;
//     title: string;
//     price: number;
//     category: string;
// };

// export default function Dashboard() {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [display, setDisplay] = useState<Product[]>([]);
//     const [keyword, setKeyword] = useState("");
//     const [category, setCategory] = useState("all");
//     const [form, setForm] = useState({
//         title: "",
//         price: "",
//         category: "",
//     });
//     const [renderCount, setRenderCount] = useState(0);
//     const [history, setHistory] = useState<string[]>([]);

//     useEffect(() => {
//         const arr: Product[] = [];
//         for (let i = 0; i < 80; i++) {
//             arr.push({
//                 id: i + 1,
//                 title: "Product " + (i + 1),
//                 price: Math.floor(Math.random() * 1000),
//                 category: i % 2 === 0 ? "tech" : "lifestyle",
//             });
//         }
//         setProducts(arr);
//         setDisplay(arr);
//     }, []);

//     useEffect(() => {
//         let temp: Product[] = [];

//         for (let i = 0; i < products.length; i++) {
//             const p = products[i];

//             const matchKeyword =
//                 p.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;

//             const matchCategory =
//                 category === "all" ? true : p.category === category;

//             if (matchKeyword && matchCategory) {
//                 temp.push(p);
//             }
//         }

//         setDisplay(temp);
//     }, [keyword, category, products]);

//     useEffect(() => {
//         const h = [...history];
//         h.push("Render " + new Date().toLocaleTimeString());
//         setHistory(h);
//     }, [renderCount]);

//     const expensiveProcess = () => {
//         let sum = 0;
//         for (let i = 0; i < 50000000; i++) {
//             sum += i % 10;
//         }
//         return sum;
//     };

//     const addProduct = () => {
//         const newItem: Product = {
//             id: Date.now(),
//             title: form.title,
//             price: Number(form.price),
//             category: form.category,
//         };

//         setProducts([...products, newItem]);

//         setForm({
//             title: "",
//             price: "",
//             category: "",
//         });
//     };

//     const removeProduct = (id: number) => {
//         const newList: Product[] = [];

//         for (let i = 0; i < products.length; i++) {
//             if (products[i].id !== id) {
//                 newList.push(products[i]);
//             }
//         }

//         setProducts(newList);
//     };

//     return (
//         <div className="p-10 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>

//             <div className="bg-white p-6 mb-6 shadow">
//                 <h2 className="text-xl mb-4">Add Product</h2>

//                 <div className="flex gap-4">
//                     <input
//                         className="border p-2 w-full"
//                         placeholder="Title"
//                         value={form.title}
//                         onChange={(e) => setForm({ ...form, title: e.target.value })}
//                     />

//                     <input
//                         className="border p-2 w-full"
//                         placeholder="Price"
//                         value={form.price}
//                         onChange={(e) => setForm({ ...form, price: e.target.value })}
//                     />

//                     <input
//                         className="border p-2 w-full"
//                         placeholder="Category"
//                         value={form.category}
//                         onChange={(e) => setForm({ ...form, category: e.target.value })}
//                     />

//                     <button
//                         onClick={addProduct}
//                         className="bg-blue-500 text-white px-4"
//                     >
//                         Add
//                     </button>
//                 </div>
//             </div>

//             <div className="bg-white p-6 mb-6 shadow">
//                 <h2 className="text-xl mb-4">Filter</h2>

//                 <div className="flex gap-4">
//                     <input
//                         className="border p-2 w-full"
//                         placeholder="Search..."
//                         value={keyword}
//                         onChange={(e) => setKeyword(e.target.value)}
//                     />

//                     <select
//                         className="border p-2"
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                     >
//                         <option value="all">All</option>
//                         <option value="tech">Tech</option>
//                         <option value="lifestyle">Lifestyle</option>
//                     </select>

//                     <button
//                         className="bg-green-500 text-white px-4"
//                         onClick={() => setRenderCount(renderCount + 1)}
//                     >
//                         Force Render ({renderCount})
//                     </button>
//                 </div>
//             </div>

//             <div className="bg-white p-6 mb-6 shadow">
//                 <h2 className="text-xl mb-4">Stats</h2>
//                 <p>Total: {products.length}</p>
//                 <p>Showing: {display.length}</p>
//                 <p>Expensive Result: {expensiveProcess()}</p>
//             </div>

//             <div className="bg-white p-6 shadow">
//                 <h2 className="text-xl mb-4">List</h2>

//                 {display.map((p, i) => (
//                     <div
//                         key={i}
//                         className="flex justify-between border-b py-3"
//                     >
//                         <div>
//                             <p className="font-medium">{p.title}</p>
//                             <p className="text-sm text-gray-500">
//                                 ${p.price} - {p.category}
//                             </p>
//                         </div>

//                         <button
//                             onClick={() => removeProduct(p.id)}
//                             className="bg-red-500 text-white px-3"
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             <div className="bg-white p-6 mt-6 shadow max-h-40 overflow-auto">
//                 <h2 className="text-xl mb-4">Render History</h2>

//                 {history.map((h, idx) => (
//                     <div key={idx} className="text-sm">
//                         {h}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }