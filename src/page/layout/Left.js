import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Left.scss";
import ProjectList from "../../components/layout/left/ProjectList";
import { BiMessageSquareAdd } from "react-icons/bi";

const Left = () => {
  return (
    <div className="layout left">
      <div className="project">
        <Link to="/login">로그인</Link>
        <ProjectList />
        <div className="add">
          <div className="add-btn">
            <BiMessageSquareAdd />
            프로젝트 추가
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
