import Image from "next/image";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="research_journalmain">
        <div className="aboutsec_inner">
          <div className="aboutus_left">
            <Image
              src="/images/campus/campus-overview/campus-overview.webp"
              alt="Banner"
              width={1200}
              height={700}
              className="img-fluid"
            />
          </div>
          <div className="aboutus_right">
            <div className="heading">
              Student Participation in Research
            </div>
            The Institute actively promotes a research-oriented culture among students by providing opportunities to participate in research projects, case studies, surveys, seminars, conferences, and academic publications. Students are encouraged to explore contemporary issues, develop original and innovative ideas, apply theoretical knowledge to real-world problems, and present their findings through research papers and presentations. These initiatives enhance students’ analytical, critical-thinking, problem-solving, and academic communication skills while nurturing curiosity and a spirit of inquiry. Through faculty guidance and institutional support, students are motivated to transform their ideas into meaningful research outcomes and develop as confident, innovative, and research-oriented professionals.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
