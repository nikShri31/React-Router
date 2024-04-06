import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();  // data m poori github id ka data h.
//This hook provides the value returned from your route loader.

console.log(data);

    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github;
 
// **Loader ek function leta h so 'useEffect' ki jgh hum loader ka use kr ye function 
//    usme pass kr denge but ye ek alg function h github ko kaise pta chlega ki 
//    gitInfoLoader m data fetch kr loader ko bhej diya h??? 
// ***useLoaderData()- hook ka use krke

export const gitInfoLoader = async ()=>{
       const response  =   await fetch('https://github.com/nikShri31/React-Router.git');
       return response.json();
}
