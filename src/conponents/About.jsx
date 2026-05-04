"use client"
import React from "react"

const About = () => {
  return (
    <div className="bg-white text-gray-900">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-6 bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-3xl">

          <div className="text-center">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 text-xl mb-4">
              ⚡
            </div>
            <h3 className="font-semibold text-lg">Instant Access</h3>
            <p className="text-gray-500 text-sm mt-2">
              Borrow and read your favorite books instantly without any physical wait time.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-pink-100 text-pink-600 text-xl mb-4">
              🛡️
            </div>
            <h3 className="font-semibold text-lg">Secure Platform</h3>
            <p className="text-gray-500 text-sm mt-2">
              Your reading habits and data are protected with industry-standard security.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-green-100 text-green-600 text-xl mb-4">
              ⭐
            </div>
            <h3 className="font-semibold text-lg">Premium Quality</h3>
            <p className="text-gray-500 text-sm mt-2">
              Only the highest rated and most relevant books across all categories.
            </p>
          </div>

        </div>

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold">What Readers Say</h2>
          <p className="text-gray-500 mt-2">
            Join thousands of happy readers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-yellow-400 mb-3">★★★★★</div>
            <p className="text-gray-600 text-sm mb-4">
              "BookBound has completely changed how I access tech books. It's fast and so easy to use!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold">
                S
              </div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-xs text-gray-500">Avid Reader</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-yellow-400 mb-3">★★★★★</div>
            <p className="text-gray-600 text-sm mb-4">
              "The collection of science books is impressive. I found exactly what I was looking for."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold">
                M
              </div>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-xs text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-yellow-400 mb-3">★★★★★</div>
            <p className="text-gray-600 text-sm mb-4">
              "As a student on a budget, this platform is a lifesaver. Highly recommended!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center font-bold">
                E
              </div>
              <div>
                <p className="font-semibold">Emily Brown</p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About