import Image from "next/image";
import prisma from "@/prisma/client";
interface Project {
  id: number;
  title: string;
  content: string;
  image: string;
  youtubeUrl: string;
  online: boolean;
  userId: number;
}

export default async function GetProject() {
  const projects = await prisma?.project.findMany({
    where: {
      userId: 1,
    },
  });

  return (
    <div className="flex justify-around items-center sm:items-stretch flex-col md:flex-row pb-10">
      {projects.map((projects) => (
        <div
          key={projects.id}
          style={{ height: "auto" }}
          className=" hover:scale-105 hover:transform  hover:bg-custom-section-dark-light hover:bg-opacity-10 transition-transform  rounded-lg shadow-xl p-4 dark:bg-custom-section-dark-light bg-custom-section-light-purple my-2 mx-2 w-full lg:w-5/12"
        >
          <a
            style={{ height: "100%" }}
            className=" flex flex-col"
            href={projects.youtubeUrl}
          >
            <h3 className=" border-b-2 border-gray-400 text-xl mb-4">
              {projects.title}
            </h3>
            <p className="text-sm my-4 ">{projects.content}</p>
            <div className="w-full mt-auto">
              <Image
                className="mb-5"
                src={projects.image}
                alt={projects.title}
                width={800}
                height={550}
              />
            </div>
            <div></div>
          </a>
        </div>
      ))}
    </div>
  );
}
