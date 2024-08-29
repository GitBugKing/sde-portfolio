import {BackgroundBoxes} from "@/components/BackgroundBoxes";
import EducationCard from "@/components/EducationCard";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ExperienceCard from "@/components/ExperienceCard";
import {MyFooter} from "@/components/MyFooter";
import {NavbarSimple} from "@/components/MyNavbar";

export default function Home() {
  return (
      <div className="mx-auto relative">

          <div className="w-10/12 mx-auto">
              <NavbarSimple/>
              <BackgroundBoxes/>
              <ProjectCard/>
              <EducationCard/>
              <ExperienceCard/>
              <SkillCard/>
              <MyFooter/>
          </div>
      </div>
  );
}
