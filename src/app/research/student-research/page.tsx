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
            <div className="heading">Student Participation in Research</div>
            The Institute actively promotes a research-oriented culture among
            students by providing opportunities to participate in research
            projects, case studies, surveys, seminars, conferences, and academic
            publications. Students are encouraged to explore contemporary
            issues, develop original and innovative ideas, apply theoretical
            knowledge to real-world problems, and present their findings through
            research papers and presentations. These initiatives enhance
            students’ analytical, critical-thinking, problem-solving, and
            academic communication skills while nurturing curiosity and a spirit
            of inquiry. Through faculty guidance and institutional support,
            students are motivated to transform their ideas into meaningful
            research outcomes and develop as confident, innovative, and
            research-oriented professionals.
          </div>
        </div>

        <div className="col-lg-12 placement_testi_mainbox mt-2 pt-3 mt-sm-5">
          <div className="placement_testi_list mb-3">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-5">
                <div className="placement_testi_img">
                  <Image
                    src="/images/research/student-research-2.webp"
                    alt="Placement Testimonial"
                    width={1200}
                    height={900}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="row">
                  <div className="col-lg-12 subheading mb-3">
                    IMS research center organized “AVISHKAR” On 19th September,
                    2025
                  </div>
                  <div className="col-lg-12">
                    A college level Poster making Competition was held at
                    IMSCD&R as per the guidelines prescribed by SPPU. The theme
                    for Poster Making Competition was “Business, Technology and
                    Social Science” as prescribed by SPPU. In all, 40 students
                    from BBA, BCA, MBA and MCA department participated for this
                    competition. Dr. Anand Pandit, Co-ordinator for Aavishkar
                    (Ahilyanagar region) and Head of the Geography Department,
                    New Arts, commerce and Science College was invited as the
                    Chief Guest for the event. Three teams from MBA & MCA each,
                    One team from BBA & BCA qualified to represented institute a
                    Zonal Level.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="placement_testi_list mb-3">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4">
                <div className="placement_testi_img">
                  <Image
                    src="/images/research/student-research-1.webp"
                    alt="Placement Testimonial"
                    width={1200}
                    height={900}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="row">
                  <div className="col-lg-12 subheading mb-3">
                    Students Participated at Zonal Level Avishkar Competition”
                    on 4th October 2025
                  </div>
                  <div className="col-lg-12">
                    IMSCD&R students participated at the Zonal level Avishkar
                    competition at New arts Commerce and Science College. Three
                    teams from MBA & MCA each, One team from BBA & BCA
                    represented institute. Two Students Rifat Bhagwan & Garima
                    Yadav got selected for the University level from Zonal Level
                    which was held on 12.11.2025 at Savitaribai Phule Pune
                    University Pune.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
