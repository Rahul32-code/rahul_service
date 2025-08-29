import { useState } from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import Javascript from "../assets/skills/javascript.png";
import reactjs from "../assets/skills/reactjs.png";
import zustand from "../assets/skills/zustand.png";
import tailwind from "../assets/skills/tailwindcss.png";
import bootstrap from "../assets/skills/bootstrap.png";
import gsap from "../assets/skills/gsap.png";
import nodejs from "../assets/skills/nodejs.png";
import express from "../assets/skills/express.png";
import mysql from "../assets/skills/mysql.png";
import mongodb from "../assets/skills/mongodb.png";
import firebase from "../assets/skills/firebase.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import vscode from "../assets/skills/vscode.png";
import postman from "../assets/skills/postman.png";
import vercel from "../assets/skills/vercel.png";
import netlify from "../assets/skills/netlify.png";
import render from "../assets/skills/render.png";

const skills = [
  // frontend
  { name: "HTML", level: "95", category: "frontend", icon: html },
  { name: "CSS", level: "95", category: "frontend", icon: css },
  { name: "Javascript", level: "90", category: "frontend", icon: Javascript },
  { name: "React Js", level: "90", category: "frontend", icon: reactjs },
  { name: "Zustand", level: "80", category: "frontend", icon: zustand },
  { name: "Tailwind CSS", level: "90", category: "frontend", icon: tailwind },
  { name: "Bootstrap", level: "90", category: "frontend", icon: bootstrap },
  { name: "GSAP", level: "90", category: "frontend", icon: gsap },

  // backend
  { name: "Node Js", level: "80", category: "backend", icon: nodejs },
  { name: "Express Js", level: "75", category: "backend", icon: express },
  { name: "mySql", level: "80", category: "backend", icon: mysql },
  { name: "MongoDB", level: "70", category: "backend", icon: mongodb },
  { name: "Firebase", level: "60", category: "backend", icon: firebase },

  // tools
  { name: "Git", level: "90", category: "tools", icon: git },
  { name: "Github", level: "90", category: "tools", icon: github },
  { name: "VScode", level: "95", category: "tools", icon: vscode },
  { name: "PostMan", level: "85", category: "tools", icon: postman },
  { name: "Vercel", level: "85", category: "tools", icon: vercel },
  { name: "Netlify", level: "85", category: "tools", icon: netlify },
  { name: "Render", level: "85", category: "tools", icon: render },
];

const categories = ["all", "backend", "frontend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter skills based on active category
  const filterSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="container px-6 mx-auto mb-10">
      <div className="text-center px-4 py-4">
        <h2 className="text-white text-4xl leading-tight text-shadow-md mb-4">
          My{" "}
          <span className="text-shadow-[0_0_15px_rgba(13,148,136,0.4)] text-teal-600">
            Services
          </span>
        </h2>
        <p className="text-gray-600">
          A Collection Of My Technical Skills and Expertise Honed Through
          Various Projects and Experiences
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 my-10">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-lg border transition duration-300 text-sm font-medium cursor-pointer backdrop-blur-md
        ${
          activeCategory === cat
            ? "bg-teal-500/20 border-teal-300 text-teal-600 shadow-[0_0_25px_rgba(13,148,136,0.6)]"
            : "bg-white/10 border-white/30 text-white hover:shadow-[0_0_15px_rgba(13,148,136,0.4)] hover:bg-teal-500/20 hover:border-teal-300 hover:text-teal-600"
        }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills List */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filterSkills.map((skill) => (
          <div
            key={skill.name}
            className="text-center text-white bg-white/10 border border-white/30 p-5 rounded-lg backdrop-blur-md cursor-pointer hover:text-teal-600 hover:shadow-[0_0_15px_rgba(13,148,136,0.4)] hover:border-teal-600 hover:bg-teal-500/20 hover text-teal-600"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-20 h-auto  mx-auto mb-2"
            />
            <p className="text-sm font-semibold ">{skill.name}</p>
            <p className="text-xs text-gray-400">Level: {skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
