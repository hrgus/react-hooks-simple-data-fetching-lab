import React, { useState , useEffect } from "react";

function App() {
   const [image, setImage ] = useState('');

   useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setImage(data.message))
   }, [])

   if (!image) {
      return <p>Loading...</p>
   }

console.log(image)

   return (
      <>
         {/* <p>Loading...</p> */}
         <img src={image} alt="A Random Dog"/>
      </>
   );
}

export default App;