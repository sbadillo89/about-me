import Card from "./components/card";
import Navbar from "./components/nav-bar";
import { DataExpirience } from "../src/data/experince";
import { Profile } from "./assets/index";

function App() {
  return (
    <div className="bg-red-500">
      <header>
        <Navbar />
      </header>
      <div className="flex flex-col justify-center items-center pb-4 mt-12">
        <img
          src={Profile}
          alt=""
          className="w-52 flex self-center rounded-full shadow-lg p-2 bg-white mt-16"
        ></img>
        <div className="mt-12 lg:mx-64 md:mx-32 mx-4 flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-semibold">Hi, People</p>
          <p className="text-2xl  text-white">
            I'm{" "}
            <span className="font-bold text-gray-900">
              Sergio Andrés Badillo Bustillo
            </span>
          </p>
          <p className="mt-10 text-lg text-gray-800 font-medium text-justify">
            I am a certified Software Engineer, currently working remotely for
            Globant. My specialty is Backend development with .Net technologies,
            however, I have some experience with modern Frontend technologies
            like React Js and Vue Js. These are some accounts of my professional
            trajectory:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-16">
          {DataExpirience &&
            DataExpirience.map((data) => (
              <Card
                key={data.period}
                period={data.period}
                company={data.company}
                description={data.description}
                skills={data.skills}
                position={data.position}
              />
            ))}
        </div>
      </div>
      <footer className="text-center text-white py-2 w-full">
        <p>
          Copyright &copy; {new Date().getFullYear()} Sergio Badillo Bustillo -
          All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
