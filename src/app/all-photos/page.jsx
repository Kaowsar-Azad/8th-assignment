
import Category from "@/conponents/Category";
import PhotoCard from "@/conponents/PhotoCard";



const AllPhotosPage = async () => {
    
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/data.json`, { cache: 'no-store' });
    const photos = await res.json();
    
    
    return (
        <div>

            <h1 className="text-2xl font-bold m-4">All Photos</h1>
            <Category></Category>
           
            
        </div>
    );
};

export default AllPhotosPage;