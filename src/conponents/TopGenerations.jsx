import React from 'react'
import PhotoCard from './PhotoCard'

const TopGenerations = async() => {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/data.json`, { cache: 'no-store' })
    const photos = await  res.json()
    const topPhotos = photos.slice(0, 4)
  return (
    <div>
        <h1 className="text-2xl font-bold my-5"> Featured Books</h1>
       

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
         {
            topPhotos.map(photo => <PhotoCard key={photo.id}  photo={photo}></PhotoCard>)
         }
       </div>

        </div>
  )
}

export default TopGenerations