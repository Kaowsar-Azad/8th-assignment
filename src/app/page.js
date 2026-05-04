import Banner from "@/conponents/Banner";
import TopGenerations from "@/conponents/TopGenerations";
import Image from "next/image";
import About from "@/conponents/About";
export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <div className="bg-purple-600 text-white py-2">
         <marquee className="text-sm font-semibold">
           New Arrivals: The Silent Patient | Clean Code | Life of Pi | Special Discount on Memberships for Students!
         </marquee>
       </div>
       <TopGenerations></TopGenerations>
       <About></About>
       
       <div className="bg-gray-100 py-16 mt-10 rounded-2xl text-center px-4">
         <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
         <p className="text-gray-600 mb-6 max-w-lg mx-auto">Get the latest updates on new books, author interviews, and exclusive discounts directly in your inbox.</p>
         <div className="flex justify-center gap-2 max-w-md mx-auto">
           <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg border w-full focus:outline-none focus:ring-2 focus:ring-purple-600" />
           <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">Subscribe</button>
         </div>
       </div>
    </div>
  );
}
