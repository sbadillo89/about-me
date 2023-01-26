type Experience = {
  period: string;
  company: string;
  description: string;
  position: string;
  skills: string[];
};

const DataExpirience: Experience[] = [
  {
    period: "Mar. 2022 -  Current",
    company: "Globant",
    description: `As a .net developer, my main functions are to support and add new functionalities to the company's (Smile Direct Club) product`,
    position: "Senior dotnet Developer / Vue Js Developer",
    skills: [
      "dotnet Framework",
      "dotnet Core",
      "C#",
      "Aws",
      "DynamoDB",
      "Docker",
      "Vue Js",
    ],
  },
  {
    period: "Jun. 2021 -  Mar. 2022",
    company: "Impexium",
    description: `As a .net developer, my main functions are to support and add new functionalities to the company's product.`,
    position: "Senior dotnet Developer",
    skills: [
      "dotnet Framework",
      "C#",
      "Sql Server",
      "Asp.Net Web Forms",
      "MongoDB",
      "Azure",
    ],
  },
  {
    period: "Jun. 2020 -  Jun. 2021",
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
    period: "Jun. 2018 - May. 2020",
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
    period: "Nov. 2016 - Jun. 2018",
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
    period: "Dic. 2011 - Nov. 2016",
    company: "Almacenes de Compra Venta Megamas",
    description: `Development of apps for the operation and management areas of 
    the company.`,
    position: "Dotnet Developer",
    skills: ["C#", "VB.net", "CI", "CD", "Sql Server", "React JS"],
  },
];

export { DataExpirience };
