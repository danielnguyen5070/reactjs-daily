// // First render: 1 2 3 6 7 9 11 12
// // Count: 4 5 1 3 6 8 10 7 9 12
// // Ref: 13
// // Click: 14 15 1 3 6 8 10 7 9 12

// import { useState, useEffect, useRef } from "react";

// function Counter() {
//     console.log("1. Component render");

//     const [count, setCount] = useState(() => {
//         console.log("2. useState initializer");
//         return 0;
//     });
//     const renderCount = useRef(0);

//     useEffect(() => {
//         console.log("7. useEffect runs (after render)");

//         return () => {
//             console.log("8. Cleanup before next effect / unmount");
//         };
//     }, [count]);

//     useEffect(() => {
//         console.log("9. Effect runs because count changed");
//         return () => {
//             console.log("10. Cleanup before next effect / unmount");
//         };
//     }, [count]);

//     useEffect(() => {
//         console.log("11. Runs once (componentDidMount)");
//     }, []);

//     useEffect(() => {
//         console.log("12. Runs every render");
//     });

//     function handleClick() {
//         console.log("14. Before:", count);

//         setTimeout(() => {
//             setCount(prev => {
//                 console.log("15. After timeout:", prev + 1);
//                 return prev + 1
//             });
//         }, 1000);
//     }

//     console.log("3. State value:", count);

//     return (
//         <>
//             {console.log("6. render")}
//             <button
//                 className="bg-red-500 text-white p-2 rounded"
//                 onClick={() => {
//                     console.log("4. Click event");
//                     setCount(count + 1);
//                     console.log("5. After setCount (state NOT updated yet)");
//                 }}
//             >
//                 Count: {count}
//             </button>
//             <button onClick={() => {
//                 renderCount.current += 1;
//                 console.log("13. Ref updated (no re-render)");
//             }}>
//                 Update Ref
//             </button>
//             <button onClick={handleClick}>Click</button>
//         </>
//     );
// }

// export default Counter;
import { useEffect, useState } from "react";

function TrickyHook() {
    const [count, setCount] = useState(0);

    console.log("🔄 Render:", count);

    useEffect(() => {
        console.log("✅ Effect runs:", count);

        return () => {
            console.log("🧹 Cleanup:", count);
        };
    }, [count]);

    function handleClick() {
        console.log("👉 Click start:", count);

        setCount(count + 1);
        setCount(count + 1);

        setTimeout(() => {
            console.log("⏱ Timeout sees:", count);
            setCount(prev => prev + 1);
        }, 0);

        console.log("👉 Click end:", count);
    }

    return <button onClick={handleClick}>Click</button>;
}

export default TrickyHook;
