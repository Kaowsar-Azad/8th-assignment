


const page = async({params}) => {
    const {id} = await params;
     const res = await fetch('https://pixgen-eta.vercel.app/data.json')
    const photos = await res.json()
    const photo = photos.find(p => p.id == id)
  return (
    <div>
        
       <h1>{photo.title}</h1>
       <h1>{photo.prompt}</h1>
    </div>
  )
}

export default page