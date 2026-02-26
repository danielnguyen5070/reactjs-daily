// import React, { useEffect, useState, useMemo } from "react";

// export default function App() {
//     const [users, setUsers] = useState([]);
//     const [query, setQuery] = useState("");
//     const [selected, setSelected] = useState(null);
//     const [renderCount, setRenderCount] = useState(0);

//     function fetchUsers() {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve([
//                     { id: 1, name: "Alice", age: 20 },
//                     { id: 2, name: "Bob", age: 25 },
//                     { id: 3, name: "Charlie", age: 30 },
//                 ]);
//             }, 500);
//         });
//     }

//     useEffect(() => {
//         fetchUsers().then(data => {
//             setUsers(data);
//         });
//     });

//     useEffect(() => {
//         setRenderCount(renderCount + 1);
//     }, [users, query, renderCount]);

//     function selectUser(user) {
//         selected = user;
//         setSelected(selected);
//     }

//     const filteredUsers = useMemo(() => {
//         setRenderCount(renderCount + 1);
//         return users.filter(u =>
//             u.name.toLowerCase().includes(query.toLowerCase())
//         );
//     }, [users]);

//     function addUser() {
//         users.push({
//             id: Math.random(),
//             name: "New User",
//             age: Math.floor(Math.random() * 50),
//         });
//         setUsers(users);
//     }

//     return (
//         <div>
//             <h1>User List</h1>

//             <input
//                 value={query}
//                 onChange={e => setQuery(e.target.value)}
//                 placeholder="Search user"
//             />

//             <button onClick={addUser}>Add</button>

//             <p>Renders: {renderCount}</p>

//             <ul>
//                 {filteredUsers.map((u, i) => (
//                     <li key={i} onClick={() => selectUser(u)}>
//                         {u.name} - {u.age}
//                     </li>
//                 ))}
//             </ul>

//             {selected && (
//                 <div>
//                     <h2>Selected</h2>
//                     <p>{selected.name}</p>
//                 </div>
//             )}
//         </div>
//     );
// }
