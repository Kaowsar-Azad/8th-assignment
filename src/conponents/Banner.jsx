import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center mt-3 rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
           Explore the Digital Library
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
           Discover thousands of books in stories, technology, and science. Borrow digitally and start reading in seconds.
          </p>

          <div className="flex gap-4">
            <Link href="all-photos">
              <Button className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                Browse All Books
              </Button>
            </Link>

            <Link href="/signup">
              <Button variant="outline" className="text-white">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;