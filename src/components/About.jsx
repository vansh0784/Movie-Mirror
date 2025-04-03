import React from "react";
import Sidenav from "./templates/Sidenav";

const About = () => {
  return (
    <div className="w-full flex h-screen overflow-hidden">
        <Sidenav />

      {/* Main Content - Ensures scrolling inside content only */}
      <div className=" md:w-[80%] min-h-screen bg-[#121212] text-gray-200 px-8 md:px-20 py-12 leading-relaxed overflow-y-auto">
        <h1 className="text-3xl font-extrabold text-center text-zinc-500 mb-4">
          Welcome to Movie Mirror 🎬
        </h1>
        <p className="text-sm text-center text-gray-400 mb-4 max-w-3xl mx-auto">
          A world where cinema meets curiosity. <strong>Movie Mirror</strong> is not just a website;
          it’s a <strong>gateway to the universe of films, actors, and stories</strong> that shape our imagination.
          From the <strong>latest blockbusters</strong> to <strong>timeless classics</strong>, we bring everything under one roof.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-500">🔍 Explore, Discover, Dive In</h2>
            <p className="text-gray-300 mt-1 text-sm">
              Ever found yourself <strong>searching for a movie but forgetting its name?</strong>
              Or wanted to know <strong>where you’ve seen an actor before?</strong>
              <strong>Movie Mirror</strong> solves that for you. With an <strong>intelligent search</strong>,
              you can find any movie, see its <strong>cast, trailers, plot, and reviews</strong>, all in one place.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-500">🔥 Stay on Top of What’s Trending</h2>
            <p className="text-gray-300 mt-1 text-sm">
              Wondering what’s making waves in the film industry?
              <strong>Movie Mirror</strong> keeps you updated with:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
              <li><strong>Daily & Weekly Trending Movies</strong> 🏆</li>
              <li><strong>Popular Blockbusters That Everyone's Talking About</strong> 🎥</li>
              <li><strong>Upcoming Releases You Can’t Miss</strong> 🚀</li>
            </ul>
            <p className="text-gray-300 text-md mt-3">From Hollywood to international cinema, we cover it all.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-500">🎭 Actor Spotlights & Career Journeys</h2>
            <p className="text-gray-300 mt-1 text-sm">
              Every great film is backed by <strong>iconic performances</strong>.
              With <strong>Movie Mirror</strong>, you can:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
              <li><strong>Search for actors and their filmography</strong></li>
              <li><strong>See their most famous roles & awards</strong> 🏅</li>
              <li><strong>Track their upcoming projects</strong></li>
            </ul>
            <p className="text-gray-300 mt-1 ">
              Whether it’s the latest Marvel star or a rising indie actor, we bring <strong>every career to light</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-zinc-500">🚀 The Future of Cinema - What’s Next?</h2>
            <p className="text-gray-300 mt-2 text-sm">
              Never miss a <strong>new release</strong> again. <strong>Movie Mirror</strong> keeps you ahead of the curve
              with a <strong>detailed list of upcoming movies</strong>, their expected release dates,
              trailers, and hype scores.
              Be the first to know about the <strong>next big hit</strong>!
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-300">
            Because Movies Are More Than Just Entertainment 🎬
          </h2>
          <p className="text-gray-400 mt-2 text-sm max-w-2xl mx-auto">
            Cinema is an <strong>art form, a cultural phenomenon, and a reflection of our world</strong>.
            At <strong>Movie Mirror</strong>, we bring you closer to the stories, the creators, and the legends
            behind every masterpiece.
            Whether you are a <strong>film enthusiast, a critic, or just someone looking for a great movie</strong>—
            <strong>Movie Mirror is your ultimate companion</strong>.
          </p>
        </div>

        <div className="mt-16 text-center border-t border-gray-700 pt-6">
          <h2 className="text-xl font-semibold text-gray-300">👨‍💻 About the Creator</h2>
          <p className="text-gray-400 mt-2 text-sm max-w-lg mx-auto">
            Hey there! I'm <strong>Vansh Singh</strong>, a passionate web developer with a love for creating seamless and engaging digital experiences.
            I specialize in <strong>React, MERN stack, and UI/UX development</strong>. My goal is to build intuitive platforms that bridge
            technology with real-world needs. <br />
            Thanks for visiting <strong>Movie Mirror</strong>, and I hope you enjoy exploring the world of cinema here! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
