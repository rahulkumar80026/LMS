import { FaArrowRight, FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSecction from "../components/core/HomePage/LearningLanguageSecction";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/Common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";

function Home() {
  return (
    <div>
      {/* section 1 */}

      <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-max-content">
        <Link to={"/signup"}>
          <div
            className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-50
          transition-all duration-200 hover:scale-95 w-full"
          >
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900">
              <p> Become an Instructor</p>
              <FaCircleArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-cente text-4xl font-semibold mt-7 ">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>
        <div className="w-[90%] text-center text-lg font-bold text-richblack-300 mt-4">
          with our online coding course, you can learn at your own space, from
          anywhere in the world.
        </div>
        <div className="flex flex-row gap-7 mt-8  ">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>
        {/* Video Play  */}
        <div className="shadow-blue-200 mx-3 my-10">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4"></source>
          </video>
        </div>

        {/* Code section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"Coding potential"}></HighlightText> with
                our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowlegde with you."
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<DOCTYPE html>\n <html>\n <title>Example</title>\n<link href="stylesheet.css">`}
            codecolor={"text-yellow-25"}
          ></CodeBlocks>
        </div>
        {/* Code section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"Coding potential"}></HighlightText> with
                our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowlegde with you."
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<DOCTYPE html>\n <html>\n <title>Example</title>\n<link href="stylesheet.css">`}
            codecolor={"text-yellow-25"}
          ></CodeBlocks>

          {/* explore section  */}
          <div>
            <ExploreMore />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-5">
            <div className="h-[150px]"></div>

            {/* ✅ Center Buttons Horizontally */}
            <div className="flex flex-row justify-center items-center gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="mx-auto w-11/12 max-w-max-content flex flex-col gap-5">
          {/* Outer Flex for Left-Right Layout */}
          <div className="flex flex-col md:flex-row gap-5 items-start justify-center mb-10">
            {/* Left Side: Heading */}
            <div className="text-4xl font-semibold w-full md:w-1/2">
              Get the Skills you need for a{" "}
              <HighlightText text={"Job that is in demand"} />
            </div>

            {/* Right Side: Paragraph + Button */}
            <div className="flex flex-col gap-10 w-full md:w-1/2 items-start">
              <div className="text-[16px]">
                The modern StudyCircle dictates its own terms. Today, to be a
                competitive specialist requires more than professional skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                Learn more
              </CTAButton>
            </div>
          </div>
          <TimelineSection></TimelineSection>
          <LearningLanguageSecction></LearningLanguageSecction>
        </div>
      </div>

      {/* section 3 */}
      <div
        className="w-11/12 mx-auto max-w-max-content flex-col items-center
      justify-between gap-8 first-letter: bg-richblack-900 text-white"
      >
        <InstructorSection></InstructorSection>
        <h2 className="text-center text-4xl mt-10 font-semibold">
          Reviews from Others Learners
        </h2>
        {/* Review slider here */}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
