import profilePic from "../assets/Profile.png";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
// import react from "../assets/react.svg";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
// import { SiNodejs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import React from "react";
import { FaJs } from "react-icons/fa";

const socialMedia = [
  {
    id: 1,
    icon: <FaFacebook className="text-white text-3xl hover:text-blue-500" />,
    url: "https://www.facebook.com",
  },
  {
    id: 1,
    icon: <BsLinkedin className="text-white text-3xl hover:text-blue-500" />,
    url: "https://www.linkedin.com",
  },
  {
    id: 1,
    icon: <FaGithub className="text-white text-3xl hover:text-blue-300" />,
    url: "https://www.facebook.com",
  },
  {
    id: 1,
    icon: (
      <AiFillInstagram className="text-white text-4xl hover:text-pink-700" />
    ),
    url: "https://www.facebook.com",
  },
];

const skills = [
  {
    id: 1,
    name: "MomgoDB",
    icon: <SiMongodb className="text-green-500 text-2xl" />,
  },
  {
    id: 2,
    name: "ExpressJs",
    icon: <SiExpress className="text-yellow-500 text-2xl" />,
  },
  {
    id: 3,
    name: "React",
    icon: <FaReact className="text-blue-500 text-2xl" />,
  },
  // {
  //   id: 4,
  //   name: "Html",
  //   icon: <FaReact className="text-blue-500 text-2xl" />,
  // },
  {
    id: 5,
    name: "Javascript",
    icon: <FaJs className="text-blue-500 text-2xl" />,
  },
];
export const About = () => {
  const style = {
    FontFace: "Times New Roman",
  };
  return (
    <>
      <div className="flex  flex-col items-center justify-center mx-auto">
        <div>
          <motion.div
            className="flex items-center justify-center mx-auto hover:scale-110"
            initial={{ opacity: 0, x: -10, y: -10 }}
            animate={{ opacity: 10, x: 10, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={profilePic}
              alt="profile picture"
              className="w-48 h-48 rounded-full"
            />
          </motion.div>
          <motion.div
            className=" py-2"
            initial={{ opacity: 0, x: -10, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9 }}
            style={style}
          >
            <h1 className="font-bold text-4xl text-green-600 text-center">
              👋 Hi, I'm yuvraj singh
            </h1>
            <h2 className="text-white text-center font-medium text-xl py-2">
              🔍 , self-motivated, and confident.
            </h2>
            <h2 className="text-yellow-600 text-center  text-2xl font-semibold">
              🌍 MERN | Full-Stack Web Developer
            </h2>
          </motion.div>

          <motion.div className="flex items-center justify-center gap-2">
            {socialMedia?.map((item) => (
              <motion.a
                key={item.id}
                href={item.url}
                initial={{
                  opacity: 0,
                  x: 30,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="hover:scale-110"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          <div className="text-white flex items-center justify-center gap-2 my-3">
            {skills.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center gap-2 bg-gray-950 py-3 px-5 shadow-md shadow-green-300 rounded-2xl hover:scale-110"
              >
                <div>{item.icon}</div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col my-10 items-start justify-center mx-auto w-5/6 p-7 bg-gray-700 rounded-xl">
          <h2 className="text-white text-start py-2 text-3xl font-semibold ">🎯 Objective</h2>
          <p className="text-white ">
            A motivated individual with in-depth knowledge of programming
            languages, especially JavaScript and development tools. I am skilled
            and experienced in both Front-end and Back-end Web Development,
            seeking a position as a Web Developer in a growth-oriented company
            where I can use my skills to the advantage of the company while
            having the scope to develop my own skills.
          </p>
        </div>
      </div>
    </>
  );
};