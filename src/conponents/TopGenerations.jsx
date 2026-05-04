import fs from 'fs';
import path from 'path';
import PhotoCard from './PhotoCard';

const TopGenerations = async() => {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const photos = JSON.parse(fileData);
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