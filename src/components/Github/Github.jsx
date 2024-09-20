import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])
    const [followers, setFollowers] = useState('')
    useEffect(() => {
      fetch('https://api.github.com/users/shanichaun9')
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setData(data)
        setFollowers(data?.id)
      })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl justify-around'>
      Github Followers: {followers}
      <img src={data?.avatar_url} alt="Profile Picture" className='w-20' />
    </div>
  )
}

export default Github
