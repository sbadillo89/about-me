import Card from "./components/card";
import Navbar from "./components/nav-bar";

function App() {
  return (
    <div className="bg-red-500">
      <header>
        <Navbar />
      </header>
      <div className="flex flex-col justify-center items-center pb-4 mt-12">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHhUtDruPSfZg/profile-displayphoto-shrink_800_800/0/1530322805312?e=1620864000&v=beta&t=nMyIQ8Y0hkKl-AQoWUYGs0AN6uQKIkISbvGKowJ_1dI"
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
            I am a certified Software Engineer, currently working at Lean Tech
            IO in Medellin, CO. My specialty is Backend development with .Net
            technologies, however, I have some experience with modern Frontend
            technologies like React Js. These are some accounts of my
            professional trajectory:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-16">
          <Card
            period="2020 - Current"
            company="Lean Tech"
            description="As a backend developer I am responsible for server-side web 
            application logic and integration of the work front-end web developers 
            do."
            skills={[
              "dotnet Core",
              "dotnet Framework",
              "C#",
              "Sql Server",
              "React JS",
              "Typescript",
              "Javascript",
            ]}
            position="Senior dotnet Developer / React Developer"
          />
          <Card
            period="2018-2020"
            company="Consware"
            description="Main responsibilities included to work with development teams and 
            product managers to ideate software solutions, design client-side and 
            server-side architecture and troubleshoot, debug, and upgrade
            existing software."
            skills={[
              "ASP.NET",
              "C#",
              "VB.net",
              "Azure",
              "CI",
              "CD",
              "Sql Server",
              "webforms",
              "windows form",
            ]}
            position="Senior dotnet Developer"
          />
          <Card
            period="2016-2018"
            company="Almacenes de Compra Venta E Jimenez"
            description="Development of the new operative software for the company."
            skills={[
              "C#",
              "VB.net",
              "ASP.NET MVC",
              "Sql Server",
              "Bootstrap",
              "Windows Form",
            ]}
            position="Dotnet Developer"
          />
          <Card
            period="2011-2016"
            company="Almacenes de Compra Venta Megamas"
            description="Development of apps for the operation and management areas of 
            the company."
            skills={["C#", "VB.net", "CI", "CD", "Sql Server", "React JS"]}
            position="Dotnet Developer"
          />
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
