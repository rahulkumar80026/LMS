import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";

function InstructorSection() {
  return (
    <div>
      <div className="flex flex-row gap-20 items-center shadow-white mt-15">
        <div className="w-[50%]">
          <img src={Instructor} alt="Instructor" />
        </div>
        <div className="w-[50%] flex flex-col gap-5">
          <div className="text-4xl font-semibold w-[50%]">
            Become an
            <HighlightText text={"Instructor"}></HighlightText>
          </div>
          <p className="font-medium text-[16px] w-[80%] text-richblack-300">
            Instructor from around the world teach millions of students on
            StudyCircle. we provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex flex-row gap-2 items-center">
                Start Learning Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
