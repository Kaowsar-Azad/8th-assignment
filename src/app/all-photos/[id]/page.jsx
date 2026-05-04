


"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = ({ params }) => {
  const { id } = use(params);
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/signin");
    }
  }, [session, isPending, router]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((photos) => {
        const p = photos.find((p) => p.id == id);
        setPhoto(p);
      });
  }, [id]);

  const handleBorrow = () => {
    toast.success("Borrow Request Sent!");
  };

  if (isPending || !session || !photo) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-2 md:p-12 flex items-center justify-center">
      <ToastContainer />
      <div className="w-full max-w-6xl">
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-600/30 p-4 md:p-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-2xl"></div>
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="rounded-2xl w-full h-[500px] object-cover shadow-2xl ring-1 ring-white/10"
              />
              <span className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-2 rounded-full text-xs font-medium text-white shadow-lg">
                {photo.category}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {photo.title}
                </h1>
                <p className="text-slate-300 text-base font-medium">
                  {photo.author}
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50">
                  <h2 className="font-semibold text-white text-sm uppercase tracking-wider mb-3">Description</h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {photo.description}
                  </p>
                </div>

                <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50">
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Availability Status</p>
                      <p className="text-green-400 font-bold text-lg">
                        {photo.copies} Copies Left
                      </p>
                    </div>
                    <button
                      onClick={handleBorrow}
                      className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-8 py-3 rounded-lg text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm whitespace-nowrap"
                    >
                      Borrow Book
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/60 backdrop-blur-sm p-5 rounded-2xl text-center border border-slate-600/50">
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Published</p>
                    <p className="font-bold text-white text-sm">
                      {new Date(photo.publishedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="bg-slate-900/60 backdrop-blur-sm p-5 rounded-2xl text-center border border-slate-600/50">
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Format</p>
                    <p className="font-bold text-white text-sm">Digital / PDF</p>
                  </div>
                </div>

                <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50">
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {photo.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-600/40 to-purple-500/40 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
