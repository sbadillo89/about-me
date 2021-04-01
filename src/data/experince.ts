type Experience = {
  period: string;
  company: string;
  description: string;
  position: string;
  skills: string[];
};

const DataExpirience: Experience[] = [
  {
    period: "2020 - Current",
    company: "Lean Tech",
    description: `As a backend developer I am responsible for server-side web 
                  application logic and integration of the work front-end web developers 
                  do.`,
    position: "Senior dotnet Developer / React Developer",
    skills: [
      "dotnet Core",
      "dotnet Framework",
      "C#",
      "Sql Server",
      "React JS",
      "Typescript",
      "Javascript",
    ],
  },
  {
    period: "2018-2020",
    company: "Consware",
    description: `Main responsibilities included to work with development teams and 
                    product managers to ideate software solutions, design client-side and 
                    server-side architecture and troubleshoot, debug, and upgrade
                    existing software.`,
    position: "Senior dotnet Developer",
    skills: [
      "ASP.NET",
      "C#",
      "VB.net",
      "Azure",
      "CI",
      "CD",
      "Sql Server",
      "webforms",
      "windows form",
    ],
  },
  {
    period: "2016-2018",
    company: "Almacenes de Compra Venta E Jimenez",
    description: `Development of the new operative software for the company.`,
    position: "Dotnet Developer",
    skills: [
      "C#",
      "VB.net",
      "ASP.NET MVC",
      "Sql Server",
      "Bootstrap",
      "Windows Form",
    ],
  },
  {
    period: "2011-2016",
    company: "Almacenes de Compra Venta Megamas",
    description: `Development of apps for the operation and management areas of 
    the company.`,
    position: "Dotnet Developer",
    skills: ["C#", "VB.net", "CI", "CD", "Sql Server", "React JS"],
  },
];

export { DataExpirience };
