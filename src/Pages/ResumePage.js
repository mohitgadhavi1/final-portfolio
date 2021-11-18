import React from "react";
import Skills from "../Components/Skills";
import { MainLayout } from "../styles/Layouts";
import Resume from "../Components/Resume";

function ResumePage({ onClick }) {
  return (
    <MainLayout onClick={onClick}>
      <Skills />
      <Resume />
    </MainLayout>
  );
}

export default ResumePage;
