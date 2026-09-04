import React from "react";
import Image from "next/image";
import Faq from "@/components/Faq";
import { libraryFaqs } from "@/data/faqData";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading d-none">Coming Soon</div>
      <div className="library_main">
        <div className="row">
          <div className="col-md-7">
            <p>
              In the historic city of Ahmednagar, which takes its name from
              Ahmad Nizam Shah I, who founded the town in 1494, IMS-CDR was
              estd. in 1990 & has reputation for need based and novel
              educational Programmes, community-oriented activities, and
              innovative practices. The primary aim of an institutional library
              is to aid and support the academic programmes offered and
              administer all facets of the Learning Resources. Thus IMS-CDR
              Library imparts leading knowledge to develop appropriate attitude,
              skills and competencies to meet corporate and organizational
              requirements to develop the overall personality of students so as
              to make them responsible citizens. It conducts student-centric and
              library-oriented activities and online dissemination of
              information not only empowers its enduring institution but also
              helps it to continue to grow from strength to strength! It is a
              celebration of Librarianship and also showcases the library
              staff’s selfless and diligent contributions and invaluable
              service.
            </p>
          </div>
          <div className="col-md-5">
            <div className="librarianImg">
              <div className="librarianImginner">
                <Image
                  width={450}
                  height={446}
                  src="/images/campus/library/librarian.webp"
                  alt="Value"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="librarianPara">
              <p className="p-0">
                The academic scenario, over the years, has undergone a
                tremendous change and therefore continuous education is the need
                of the hour. The Library reflects the diversity and character,
                and the needs and expectations of our users. Those needs and
                expectations are often extensive, and the services are
                invaluable. The purpose of the institutional library is to
                familiarize the users i.e. students, staff and stakeholders with
                the reading culture, search strategy, building informal
                education by conducting information literacy programmes,
                professional deliberations and usage of tools and technologies
                in accessing E-resources like E-Books, E-Journals, E-Library,
                Online Databases, and Streaming Videos with current tools and
                technologies in better and effective utilization of resources
                and gearing up for skill based knowledge and leadership
                qualities. Today’s libraries are all about Transition,
                Exploration, Planning, Survival, Optimism and Opportunities and
                Librarians are Linking Ideas Between Readers And Resources .i.e.
                Informing, Enriching, Sharing!
              </p>
            </div>
          </div>
        </div>
        <div className="library_statistical_main">
          <div className="heading">Statistical Data</div>
          <div className="subheading">
            BPHE Society’s Institute of Management Studies (CD&R) Ahmednagar
            Learning Resource Centre
          </div>
          <div className="library_statistical_data">
            <div className="library_card">
              <div className="library_icons">
                <Image
                  width={37}
                  height={37}
                  src="/images/campus/library/open-book.png"
                  alt="Value"
                  className="img-fluid"
                />
              </div>
              <div className="library_card_content">
                <div className="subheading">Resources</div>
                <div className="w-100">
                  <div className="librarytags">Management Programme</div>
                  <div className="librarytags librarytags2">IT Programme</div>
                </div>
              </div>
            </div>
            <div className="library_card">
              <div className="library_icons">
                <Image
                  width={37}
                  height={37}
                  src="/images/campus/library/book.png"
                  alt="Value"
                  className="img-fluid"
                />
              </div>
              <div className="library_card_content">
                <div className="subheading">Volumes Titles</div>
                <div className="w-100 d-flex gap-1 gap-lg-3 flex-wrap align-items-center">
                  <div className="librarytext libraryNum">36565 13249</div> |
                  <div className="librarytext libraryNum">22240 7334</div> |
                  <div className="librarytext libraryNum">14325 5915</div>
                </div>
              </div>
            </div>
            <div className="library_card">
              <div className="library_icons">
                <Image
                  width={37}
                  height={37}
                  src="/images/campus/library/magazine.png"
                  alt="Value"
                  className="img-fluid"
                />
              </div>
              <div className="library_card_content">
                <div className="subheading">Journals :National</div>
                <div className="w-100">
                  <div className="librarynumtext libraryNum">51</div>
                </div>
              </div>
            </div>
            <div className="library_card">
              <div className="library_icons">
                <Image
                  width={37}
                  height={37}
                  src="/images/campus/library/global-access.png"
                  alt="Value"
                  className="img-fluid"
                />
              </div>
              <div className="library_card_content">
                <div className="subheading">
                  Online Resources <span style={{ color: "#f79433" }}>05</span>
                </div>
                <div className="w-100">
                  {/* <div className="librarynumtext libraryNum">05</div> */}
                  <div className="w-100 d-flex flex-wrap">
                    <div className="librarynumtext">
                      DELNET: <span>New Discovery Portal</span>,
                    </div>
                    <div className="librarynumtext">N-LIST Consortia,</div>
                    <div className="librarynumtext">NDLI-Club,</div>
                    <div className="librarynumtext">
                      NPTEL Video Streaming Library,
                    </div>
                    <div className="librarynumtext">
                      User Experience Design (UXd),
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="library_card">
              <div className="library_icons">
                <Image
                  width={37}
                  height={37}
                  src="/images/campus/library/diary.png"
                  alt="Value"
                  className="img-fluid"
                />
              </div>
              <div className="library_card_content">
                <div className="subheading">Periodicals</div>
                <div className="w-100">
                  <div className="librarynumtext libraryNum">17</div>
                </div>
              </div>
            </div>
            <div className="library_card">
              <div className="library_icons">
                <Image
                  width={37}
                  height={37}
                  src="/images/campus/library/cds.png"
                  alt="Value"
                  className="img-fluid"
                />
              </div>
              <div className="library_card_content">
                <div className="subheading">Projects & CDs</div>
                <div className="w-100">
                  <div className="librarynumtext libraryNum">2462 & 1193</div>
                </div>
              </div>
            </div>
            <div className="library_card">
              <div className="library_icons">
                <Image
                  width={37}
                  height={37}
                  src="/images/campus/library/tablet.png"
                  alt="Value"
                  className="img-fluid"
                />
              </div>
              <div className="library_card_content">
                <div className="subheading">E-Books</div>
                <div className="w-100">
                  <div className="librarynumtext">E-Books</div>
                </div>
              </div>
            </div>
            <div className="library_card">
              <div className="library_icons">
                <Image
                  width={37}
                  height={37}
                  src="/images/campus/library/digital-book.png"
                  alt="Value"
                  className="img-fluid"
                />
              </div>
              <div className="library_card_content">
                <div className="subheading">E-Library:CALIBRE</div>
                <div className="w-100 d-flex flex-wrap align-items-center">
                  <div className="librarynumtext">
                    Domain Name: <span>imselibrary.ddns.net,</span>
                  </div>
                  <div className="librarynumtext">
                    Username: <span>staff,</span>
                  </div>
                  <div className="librarynumtext">
                    Password: <span>staff@123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="zigzag-section">
          <div className="zigzag-row reverse">
            <div className="parallaximg_image">
              <Image
                className="img-fluid"
                src="/images/campus/library/Library1.webp"
                alt="about imscdr"
                width={350}
                height={350}
              />
            </div>
            <div className="content-box">
              <p className="p-0">
                The institute has been reaccredited in the year 2018 by NAAC and
                Learning Resource Centre (Library) has played a pivotal role. It
                is the recipient of the Best B- School Library Award from
                Discovery Education Media-MBA. The staff are professionally
                qualified and recipients of the Best Non-Teaching Award from
                Savitribai Phule Pune University, Pune and Outstanding
                Management Librarian Award from International Association of
                Management Scholars (AIMS). Professionally qualified staff with
                Master’s and PhD degrees in Library and Information Science. The
                IMS-CDR library has been automated since 2000. It is spread over
                the area 457.96 Sq.mt. comprising of Circulation Counter and
                Stacking area, Newspaper section, Extracurricular section,
                General Knowledge section, Research and Referencesection,
                Librarians cabin, Photocopying section, Journal and Periodical
                section, Book Bank section, CD Library, Luggage Counter and the
                two spacious Reading Halls along with ramp and section for
                Differently abled students.
              </p>
            </div>
          </div>
          <div className="zigzag-row">
            <div className="parallaximg_image">
              <Image
                className="img-fluid"
                src="/images/campus/library/Library2.webp"
                alt="about imscdr"
                width={350}
                height={350}
              />
            </div>
            <div className="content-box">
              <p className="p-0">
                The circulation counter and Journal section is cordoned off to
                avoid direct contact of staff with users. It is well-lit, clean
                with adequate and appropriate seating arrangement. The Library
                has a good collection of Management Computer books (printed and
                eBooks in PDF Format), Journals of Academic nature and news
                magazine, CDs and multimedia, Research and reference tools,
                e-resource and Institutional repositories, Project reports and
                PhD theses, Newspapers and employment related literature, Maps,
                Bound Volumes and Corporate membership, special collection of
                Competitive examination books, Talking books, NPTEL Video
                streaming video library, rare collection etc.
              </p>
              {/* <ExploreBtn href="/about" text="Know More" /> */}
            </div>
          </div>
        </div>
        <div className="library_services">
          <div className="library_servicesinner">
            <div className="row justify-content-start">
              <div className="col-md-8">
                <p className="m-0">
                  Library best practices are continuous and need-based services.
                  The practices are implemented with available resources and
                  help in creating openness of the library to change. They are
                  further divided into Management and Administration, Collection
                  and Services, Extent of use of service and Use of technology.
                  The services can be broadly categorized as Current Awareness
                  Service; Selective Dissemination of Information; Information
                  Literacy Program and ICT and Bibliographic Services. The
                  digital initiatives include Automated circulation upgraded to
                  Barcode technology, CD / DVD Carousel for CD Library,
                  digitization of Ph. D. Theses, e-visitor count with Door Metal
                  Detector, free Mobile charging points and Book Bank Scheme,
                  Photocopying and Scanning services, Projects in PDF format,
                  remote access of E-books/e-journals from DELNET, NLIST
                  consortium, security with CCTV surveillance and WiFi enabled
                  premises.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="BestPractices_main">
          <div className="subheading mb-3">Best Practices</div>
          <div className="BestPractices_innerlist">
            <span>Automation with Barcode Technology</span>
            <span>Laptop charging point (Free)</span>
            <span>Best user award & Essay</span>
            <span>Book talk show</span>
            <span>N-Computing for Web resources</span>
            <span>Book and Photo exhibition</span>
            <span>CCTV</span>
            <span>Orientation & training program.</span>
            <span>Colored spine labels for resources</span>
            <span>ICT enabled services and facilities</span>
            <span>Use statistics maintained</span>
            <span>Electronic visitor count detector</span>
            <span>Feedback of users (Staff and Students)</span>
            <span>Subject wise arrangement of Projects</span>
            <span>Information notification services and facilities</span>
            <span>Maintenance of service area</span>
            <span>NPTEL Video Streaming Library</span>
            <span>First aid box</span>
            <span>Student Library Committee</span>
            <span>Web OPAC</span>
            <span>Suggestion box and timely response</span>
            <span>
              Continuing education and information literacy programmes
            </span>
            <span>
              Social activities like blood donation, tree plantation, community
              service etc.
            </span>
            <span>
              Publications- News articles in local dailies, Newsletter,
            </span>
          </div>
        </div>

        <div className="library_reinforces">
          <div className="row">
            <div className="col-md-5">
              <p className="p-0">
                The Library reinforces healthy practices and elevates awareness
                of its physical spaces. During the Covid-19 pandemic, the
                Library launched the e–Library on the open source platform
                Calibre with books in PDF format pertaining to the syllabus for
                MBA & MCA Programmes, Economics, Law, Social Studies, Humanities
                and inspirational books. The students and staff are online bulk
                subscribed for weekly e-Newsletter Inspire Pro and daily Free
                Press Journal e-newspaper service (English & Marathi Language)
                through IMS Telegram Channel. The facilities of free study
                material are made available for MBA, MCA students and Book Bank
                for B.Voc students.
              </p>
            </div>
            <div className="col-md-7">
              <div className="place_training_box">
                <div className="subheading">Print Resources</div>
                <span>Books (printed and e-books in PDF format).</span>
                <span>Journals & Periodicals (print + online resources).</span>
                <span>Bound volumes of Journals.</span>
                <span>Corporate memberships.</span>
                <span>Newspapers & Competitive Exams Magazine.</span>
                <span>Ph.D. theses / Dissertations.</span>
                <span>Project reports of students.</span>
                <span>Company Reports.</span>
                <span>Talking Books.</span>
              </div>
              <div className="library_img">
                <Image
                  src="/images/lifeatims/library/librarybooks.webp"
                  alt="Library Image"
                  width={130}
                  height={300}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="BestPractices_main" style={{ background: "#ffe6f4" }}>
          <div className="subheading mb-3">Research Committee</div>
          <div className="BestPractices_innerlist">
            <span>Digital Literacy and innovative research tools.</span>
            <span>Donation drives –Tie up with Villages/ Orphanages.</span>
            <span>Evaluation process – Questionnaire / Google docs.</span>
            <span>Human Values –Respect, Appreciation, Empathy.</span>
            <span>
              Life skills – health and Hygiene, decision making, leadership.
            </span>
            <span>
              National Integrity -National events & Anniversaries.
            </span>
            <span>Non-Verbal Comm. –Press note, Notices, Resume, Reports.</span>
            <span>Personality -Manners, Etiquettes, dressing sense.</span>
            <span>
              Prizes – Cash, books, plants, certificates and mementoes.
            </span>
            <span>Reading habits / Mobile Library.</span>
            <span>
              Skills – Posters, Charts, Essay, Elocution, Quiz Competitions etc.
            </span>
            <span>
              SWOT Analysis-Strengths, Weaknesses, Opportunities, Threats.
            </span>
            <span>Verbal Communication: Values, Family, Gender issues.</span>
            <span>
              Write research articles / Apply for grants /Newspaper articles.
            </span>
            <span>Digital Literacy and innovative research tools.</span>
          </div>
        </div>

        <div className="BestPractices_main rules_and_regulations" style={{ background: "#f8eee2" }}>
          <div className="subheading mb-3">Research Committee</div>
          <div className="BestPractices_innerlist">
            <span>
              The library is open on weekdays for 8 hours and a half hours on
              Saturdays.
            </span>
            <span>
              During university examinations the timings of the reading hall are
              extended for the users.
            </span>
            <span>
              All readers are required to maintain perfect silence and
              discipline in the library. The library resources borrowing
              facilities / services can be withdrawn/ restricted in case of
              misbehavior of users for their misuse of the library.
            </span>
            <span>Bags are to be deposited at the luggage counter.</span>
            <span>
              Charging mobile phones & laptops, personal audio equipment use
              is not permitted.
            </span>
            <span>
              Downloading of undesirable e-resources shall not be allowed and
              punishable if violated.
            </span>
            <span>Extended reading hall hours during examination period.</span>
            <span>
              Library cards are not transferable. The library card holder should
              come personally to borrow the books and authorization is not
              allowed.
            </span>
            <span>
              Library working hours are from 10 am-5 pm on weekdays, Saturday
              half-day i.e.10 am -2 pm.
            </span>
            <span>
              Members are required to carry their I-card/ library card to gain
              entry in the library and at the time of book issue/return
              (whenever asked by the library staff).
            </span>
            <span>
              No photograph of the Library shall be taken without the prior
              permission of the Librarian.
            </span>
            <span>
              No visitor or guest is permitted to use the Library without the
              prior permission of the Librarian.
            </span>
            <span>
              Pets such as dogs, cats, etc… shall not be admitted to the
              library.
            </span>
            <span>
              Readers should not mutilate or damage the library resources in any
              way and protect them from RAIN, FIRE, DUST, INSECT, etc.
            </span>
            <span>Smoking, consumption of food & drink prohibited.</span>
            <span>
              The user is responsible for the safe custody of library resources
              or else a fine will be levied as per the current norms.
            </span>
            <span>
              Users should return the library resource at the end of each
              semester and take CLEARANCE at the end of the academic year.
            </span>
          </div>
        </div>

        <div className="libraryFAQ">
           <Faq title="Frequently Asked Questions" faqs={libraryFaqs} />
        </div>


      </div>
    </div>
  );
};

export default page;
