import React, { useEffect, useState } from "react";
import axios from "axios";

import { FiCornerDownRight } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";

import "reset-css";

const ProjectList = (props) => {
  const [projectList, setProjectList] = useState([]);
  const getProjectList = (url) => {
    axios({
      url: "http://localhost:8080/" + url,
      method: "post",
    }).then((res) => {
      setProjectList(res.data);
    });
  };

  useEffect(() => {
    getProjectList("api/getProjectList");
  }, []);

  return (
    <div className="list">
      <ul>
        {projectList.map((project, index) => {
          return (
            <li key={index}>
              <FiCornerDownRight className="icon left" />
              <div className="color-icon" />
              {project.PJT_NAME}
              <AiOutlineSetting className="icon right" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
