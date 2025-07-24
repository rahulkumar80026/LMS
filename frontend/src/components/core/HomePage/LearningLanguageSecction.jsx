import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import know_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import CTAButton from "../HomePage/Button";

function LearningLanguageSection() {
  return (
    <div className="flex flex-col gap-5 mt-20 items-center mb-30">
      <div className="text-4xl font-semibold text-center">
        Your swiss knife for <HighlightText text={"Learn any language"} />
      </div>

      <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[90%] sm:w-[60%]">
        Using spin, learning multiple languages becomes easy with 20+ language
        realistic voice-overs, progress tracking, custom modules and more.
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-5">
        <img
          src={know_your_progress}
          alt="Know Your Progress"
          className="object-contain w-[250px] -mr-24"
        />
        <img
          src={compare_with_others}
          alt="Compare With Others"
          className="object-contain w-[250px]"
        />
        <img
          src={know_your_lesson}
          alt="Know Your Lesson"
          className="object-contain w-[250px] -ml-25"
        />
      </div>
      <div className="w-fit">
        <CTAButton active={true} linkto={"/signup"}>
          Learn more
        </CTAButton>
      </div>
    </div>
  );
}

export default LearningLanguageSection;
