import React, { useState } from "react";
import FurnitureShop from "../../img/furnitureShop.png";
import KitchenApp from "../../img/kitchenApp.jpg";
import QuizApp from "../../img/quizApp.jpg";
import SifatliShop from "../../img/sifatliShop.jpg";

const initialProjects = [
  {
    title: "Furniture Shop",
    description: "Demo",
    image: FurnitureShop,
    vercel: "https://furniture-shop-zeta.vercel.app/",
  },
  {
    title: "Sifatli Shop",
    description: "Demo",
    image: SifatliShop,
    vercel: "https://uzum-market-clone-uz.netlify.app/",
  },
  {
    title: "Kitchen App",
    description: "Demo",
    image: KitchenApp,
    vercel: "https://magnificent-croissant-8236df.netlify.app/",
  },
  {
    title: "Quiz App",
    description: "Demo",
    image: QuizApp,
    vercel: "https://quiz-fontend.vercel.app/",
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(initialProjects);

  return (
    <section
      id="portfolio"
      className="container mx-auto px-4 py-10 flex justify-center items-center min-h-screen"
    >
      <div className="text-center">
        <div className="lg:mb-10 mb-5">
          <h1 className="md:text-[39px] text-[25px] font-bold text-black">
            Portfolio
          </h1>
          <span className="md:text-[18px] font-semibold">Most recent work</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <a
              href={project.vercel}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[300px] cursor-pointer h-[300px] bg-white shadow-lg border rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[60%] object-cover mb-3 rounded"
              />
              <h2 className="text-lg font-semibold mb-2 text-center">
                {project.title}
              </h2>
              <p className="flex items-center text-gray-700 text-center">
                {project.description}{" "}
                <i className="bx bx-right-arrow-alt ml-2"></i>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
