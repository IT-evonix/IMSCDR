import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMS-CDR Ahilyanagar Admission Process | Apply for Courses",
  description: "Learn the IMS-CDR Ahilyanagar admission process, including application steps, eligibility requirements, documents and key guidance for prospective students.",
  alternates: {
    canonical: "https://imscdr.ac.in/admission-process",
  },
  openGraph: {
    title: "IMS-CDR Ahilyanagar Admission Process | Apply for Courses",
    description: "Learn the IMS-CDR Ahilyanagar admission process, including application steps, eligibility requirements, documents and key guidance for prospective students.",
    url: "https://imscdr.ac.in/admission-process",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "IMS-CDR Ahilyanagar Admission Process | Apply for Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMS-CDR Ahilyanagar Admission Process | Apply for Courses",
    description: "Learn the IMS-CDR Ahilyanagar admission process, including application steps, eligibility requirements, documents and key guidance for prospective students.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
// import Image from "next/image";
import { ClipboardCheck, UserPlus, FilePlus } from "lucide-react";
import ChevronPattern from "@/components/admission/ChevronPattern";
const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="admission_process_main">
        <div className="admission_process_inner">
          <div className="heading">Your Admission Journey</div>
          <div className="admission_process_phase admission_phase1">
            <div className="admission_process_top">
              <div className="phaseNum_Name">
                <div className="phaseNumber">Phase 01</div>
                <div className="phaseName">CET Examination</div>
              </div>
              <div className="phaseiconimage">
                <ClipboardCheck size={30} strokeWidth={1} />
              </div>
            </div>
            <div className="admission_process_content">
              <div className="processCrad_main">
                <div className="processCrad">
                  <div className="processIcon">
                    <ClipboardCheck size={30} strokeWidth={1} color="#44ade2" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      CET Cell declares registration for CET exam
                    </div>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processCrad_Arrow">
                    <ChevronPattern/>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processIcon">
                    <UserPlus size={30} strokeWidth={1} color="#44ade2" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Student register for respective CET exam
                    </div>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processCrad_Arrow">
                    <ChevronPattern/>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processIcon">
                    <ClipboardCheck size={30} strokeWidth={1} color="#44ade2" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Student attend the CET exam
                    </div>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processCrad_Arrow">
                    <ChevronPattern/>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processIcon">
                    <FilePlus size={30} strokeWidth={1} color="#44ade2" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Result of CET displayed by CET Cell
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* phase 2 start */}
          <div className="admission_process_phase admission_phase2">
            <div className="admission_process_top">
              <div className="phaseNum_Name">
                <div className="phaseNumber">Phase 02</div>
                <div className="phaseName">Course Registration & Merit List</div>
              </div>
              <div className="phaseiconimage">
                <ClipboardCheck size={30} strokeWidth={1} />
              </div>
            </div>
            <div className="admission_process_content">
              <div className="processCrad_main">
                <div className="processCrad">
                  <div className="processIcon">
                    <ClipboardCheck size={30} strokeWidth={1} color="#7159a6" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      CET Cell displays course registration schedule
                    </div>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processCrad_Arrow">
                    <ChevronPattern/>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processIcon">
                    <UserPlus size={30} strokeWidth={1} color="#7159a6" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Student register for respective course
                    </div>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processCrad_Arrow">
                    <ChevronPattern/>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processIcon">
                    <ClipboardCheck size={30} strokeWidth={1} color="#7159a6" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Provisional merit list
                    </div>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processCrad_Arrow">
                    <ChevronPattern/>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processIcon">
                    <FilePlus size={30} strokeWidth={1} color="#7159a6" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Grievance round
                    </div>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processCrad_Arrow">
                    <ChevronPattern/>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processIcon">
                    <FilePlus size={30} strokeWidth={1} color="#7159a6" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Final merit list
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* phase 3 start here */}
          <div className="admission_process_phase admission_phase3">
            <div className="admission_process_top">
              <div className="phaseNum_Name">
                <div className="phaseNumber">Phase 03</div>
                <div className="phaseName">Option Filing & Seat Allotment</div>
              </div>
              <div className="phaseiconimage">
                <ClipboardCheck size={30} strokeWidth={1} />
              </div>
            </div>
            <div className="admission_process_content">
              <div className="processCrad_main">
                <div className="processCrad">
                  <div className="processIcon">
                    <ClipboardCheck size={30} strokeWidth={1} color="#f58232" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      CET Cell declares option round
                    </div>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processCrad_Arrow">
                    <ChevronPattern/>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processIcon">
                    <UserPlus size={30} strokeWidth={1} color="#f58232" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Student fill in their options
                    </div>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processCrad_Arrow">
                    <ChevronPattern/>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processIcon">
                    <ClipboardCheck size={30} strokeWidth={1} color="#f58232" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Institute-wise seat allotment done by CET Cell on their website
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* phase 4 start here  */}
          <div className="admission_process_phase admission_phase4">
            <div className="admission_process_top">
              <div className="phaseNum_Name">
                <div className="phaseNumber">Phase 04</div>
                <div className="phaseName">Allotment Response</div>
              </div>
              <div className="phaseiconimage">
                <ClipboardCheck size={30} strokeWidth={1} />
              </div>
            </div>
            <div className="admission_process_content">
              <div className="processCrad_main">
                <div className="processCrad">
                  <div className="processIcon">
                    <ClipboardCheck size={30} strokeWidth={1} color="#f05a94" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Student freezes or floats their allotted seat
                    </div>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processCrad_Arrow">
                    <ChevronPattern/>
                  </div>
                </div>
                <div className="processCrad">
                  <div className="processIcon">
                    <UserPlus size={30} strokeWidth={1} color="#f05a94" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Report to the allotted institute within 3 days
                    </div>
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
