// import React from 'react'

// const App = () => {
//   let user = "Manas"

//    const changeUser = () =>{
//     console.log(user)
//     user = "Blaze"
//     console.log(user)
//    }

//   return (
//     <div>
//       <h1>Username is {user} </h1>
//       <button onClick={changeUser}>Change User</button>
//     </div>
//   )
// }

// export default App


// const App = () => {
//   let user = "Manas"

//    const changeUser = () =>{
//     console.log(user)
//     user = "Blazexe"
//     console.log(user)
//    }

//   return (
//     <div>
//       <h1>Username is {user} </h1>
//       <button onClick={changeUser}>Change User</button>
//     </div>
//   )
// }

// export default App



// HOOKS -special type of functions

// import React, { useState } from 'react'

// const App = () => {

//   const [a, setA] = useState(10)
//   const changeA = ()=>{
//     console.log("working")
//     setA(14)
//   }

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={changeA}>ChangeA</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// const App = () => {

//   const [num, setNum] = useState(0)

//   return (
//     <div>
//       <h1>Number is {num}</h1>
//       <button onClick={()=>setNum(num+10)}>Increment</button>
//       <button onClick={()=>setNum(num-10)}>Decrement</button>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h2 className='text-2xl bg-red-700 text-white'>Hello guys</h2>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   const submitHandler = (e)=>{
//     e.preventDefault()

//     console.log("submitted")
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input className='px-4 py-3 text-xl m-5' type="text"  />
//         <button className='px-4 text-white py-3 m-5 text-xl font-semibold'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   const submitHandler = (e)=>{
//     e.preventDefault()

//     console.log("submitted")
//   }

//   const [username, setusername] = useState("Manas Kale")
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input 
//         value={username}
//         className='px-4 py-3 text-xl m-5' type="text" placeholder='Enter Your Name' />
//         <button className='px-4 text-white py-3 m-5 text-xl font-semibold'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {

//   const [username, setusername] = useState("")

//   const submitHandler = (e)=>{
//     e.preventDefault(e)
//     console.log(username)
//     setusername("")
//   }

//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input 
//         value={username}
//         onChange={(e)=>{
//           setusername(e.target.value)
//         }}
//         className='px-4 py-3 text-xl m-5' 
//         type="text" 
//         placeholder='Enter Your Name' />
//         <button className='px-4 text-white py-3 m-5 text-xl font-semibold bg-emerald-600 rounded'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
