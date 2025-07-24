import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import Timeline from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success of the company",
  },
  {
    Logo: Logo2,
    heading: "Teamwork",
    Description: "Collaboration and cooperation across departments",
  },
  {
    Logo: Logo3,
    heading: "Innovation",
    Description: "Encouraging creative thinking and new ideas",
  },
  {
    Logo: Logo4,
    heading: "Integrity",
    Description: "Acting with honesty and transparency",
  },
];

function TimelineSection() {
  return (
    <div className="w-full flex flex-row gap-16 items-start ">
      <div className="w-[45%] flex flex-col gap-8 mt-20 ">
        {timeline.map((element, index) => (
          <div className="flex flex-row gap-5 items-start" key={index}>
            <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full shadow">
              <img
                src={element.Logo}
                alt={`Step ${index + 1}`}
                className="w-6 h-6"
              />
            </div>
            <div>
              <h2 className="font-semibold text-[18px] text-gray-800">
                {element.heading}
              </h2>
              <p className="text-base text-gray-600">{element.Description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* image  */}
      <div className="relative shadow-blue-200">
        <img
          src={Timeline}
          alt="TimelineImage"
          className="shadow-blue-50 h-fit object-cover"
        />

        <div className="absolute flex flex-row bg-caribbeangreen-700 text-white uppercase py-7
        left-[50%] -translate-[40%] -translate-y-[50%]">
          <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300">
            <p className="text-3xl ">10</p>
            <p className="text-caribbeangreen-300 text-sm">
              Years of experience
            </p>
          </div>
          <div className="flex gap-5 items-center px-7">
            <p className="text-3xl font-bold"> 250</p>
            <p className="text-caribbeangreen-300 text-sm">Types of Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineSection;
