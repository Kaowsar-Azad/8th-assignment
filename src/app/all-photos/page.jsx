import Category from "@/conponents/Category";
import PhotoCard from "@/conponents/PhotoCard";



const AllPhotosPage = async ({searchParams}) => {
    const {category} = await searchParams;
    const res = await fetch('https://pixgen-project-x2ts.vercel.app/data.json')
    const photos = await res.json()
    const FilterPhoto = category 
  ? photos.filter(photo => 
      photo.category.toLowerCase() == category.toLowerCase()
    )
  : photos
    
    return (
        <div>

            <h1 className="text-2xl font-bold m-4">All Photos</h1>
            <Category></Category>
            <div className="grid grid-cols-4 gap-5">
                {FilterPhoto.map(photo=> <PhotoCard key={photo.id} photo={photo}/>)}
            </div>

            
        </div>
    );
};

export default AllPhotosPage;