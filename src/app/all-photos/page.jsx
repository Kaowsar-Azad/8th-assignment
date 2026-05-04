
import Category from "@/conponents/Category";
import PhotoCard from "@/conponents/PhotoCard";



const AllPhotosPage = async () => {
    
    const res = await fetch('https://pixgen-project-x2ts.vercel.app/data.json')
    const photos = await res.json()
    
    
    return (
        <div>

            <h1 className="text-2xl font-bold m-4">All Photos</h1>
            <Category></Category>
           
            
        </div>
    );
};

export default AllPhotosPage;