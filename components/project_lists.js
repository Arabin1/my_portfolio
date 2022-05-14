import React, { useState } from "react";
import { projects } from "../constants/projects";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MyToast from "./toast";
import { noSourceCodeMessage, toastDelay } from "../constants/utilities";

const ProjectLists = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleLink = (link) => {
    if (link) {
      router.push(link);
    } else {
      setShow(true);
      setTimeout(function () {
        setShow(false);
      }, toastDelay);
    }
  };

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="project-wrapper" key={project.id}>
          <div className="project-container shadow">
            <div className="mb-1">
              <Image
                src={project.image}
                priority={true}
                width={300}
                height={185}
                alt={project.name}
              />
            </div>
            <div className="p-2 project-des-container">
              <p className="des-text-color text-center">
                {project.description}
              </p>
            </div>
            <h3 className="title-text-color">Tech used</h3>
            <div className="divider1" />
            <p className="des-text-color">
              {project.tech.map((language, index, array) => (
                <span key={index}>
                  <span>{language}</span>
                  {index === array.length - 1 ? null : <span>, </span>}
                </span>
              ))}
            </p>
            <div className="d-flex justify-content-between w-100 p-2">
              <Link href="#">
                <a className="link" onClick={() => handleLink(project.source)}>
                  Source code
                </a>
              </Link>
              <Link href={project.visit}>
                <a className="link">Visit</a>
              </Link>
            </div>
            <MyToast show={show} className="my-toast shadow bg-primary">
              {noSourceCodeMessage}
            </MyToast>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectLists;
