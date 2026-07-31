import React from "react";
// import Image from "next/image";
import { ClipboardCheck, UserPlus, PenTool, FilePlus } from "lucide-react";
import ChevronPattern from "@/components/admission/ChevronPattern";
const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="admission_process_main">
        <div className="admission_process_inner">
          <div className="heading">Your Admission Journey</div>
          <div className="admission_process_phase">
            <div className="admission_process_top">
              <div className="phaseNum_Name">
                <div className="phaseNumber">Phase 01</div>
                <div className="phaseName">CET Examination</div>
              </div>
              <div className="phaseiconimage">
                <ClipboardCheck size={150} strokeWidth={1} />
              </div>
            </div>
            <div className="admission_process_content">
              <div className="processCrad_main">
                <div className="processCrad">
                  <div className="processIcon">
                    <ClipboardCheck size={45} strokeWidth={1} color="#44ade2" />
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
                    <UserPlus size={45} strokeWidth={1} color="#44ade2" />
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
                    <ClipboardCheck size={45} strokeWidth={1} color="#44ade2" />
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
                    <FilePlus size={45} strokeWidth={1} color="#44ade2" />
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
          <div className="admission_process_phase">
            <div className="admission_process_top">
              <div className="phaseNum_Name">
                <div className="phaseNumber">Phase 02</div>
                <div className="phaseName">Course Registration & Merit List</div>
              </div>
              <div className="phaseiconimage">
                <ClipboardCheck size={150} strokeWidth={1} />
              </div>
            </div>
            <div className="admission_process_content">
              <div className="processCrad_main">
                <div className="processCrad">
                  <div className="processIcon">
                    <ClipboardCheck size={45} strokeWidth={1} color="#44ade2" />
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
                    <UserPlus size={45} strokeWidth={1} color="#44ade2" />
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
                    <ClipboardCheck size={45} strokeWidth={1} color="#44ade2" />
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
                    <FilePlus size={45} strokeWidth={1} color="#44ade2" />
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
                    <FilePlus size={45} strokeWidth={1} color="#44ade2" />
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
          <div className="admission_process_phase">
            <div className="admission_process_top">
              <div className="phaseNum_Name">
                <div className="phaseNumber">Phase 03</div>
                <div className="phaseName">Option Filing & Seat Allotment</div>
              </div>
              <div className="phaseiconimage">
                <ClipboardCheck size={150} strokeWidth={1} />
              </div>
            </div>
            <div className="admission_process_content">
              <div className="processCrad_main">
                <div className="processCrad">
                  <div className="processIcon">
                    <ClipboardCheck size={45} strokeWidth={1} color="#44ade2" />
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
                    <UserPlus size={45} strokeWidth={1} color="#44ade2" />
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
                    <ClipboardCheck size={45} strokeWidth={1} color="#44ade2" />
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
          <div className="admission_process_phase">
            <div className="admission_process_top">
              <div className="phaseNum_Name">
                <div className="phaseNumber">Phase 04</div>
                <div className="phaseName">Allotment Response</div>
              </div>
              <div className="phaseiconimage">
                <ClipboardCheck size={150} strokeWidth={1} />
              </div>
            </div>
            <div className="admission_process_content">
              <div className="processCrad_main">
                <div className="processCrad">
                  <div className="processIcon">
                    <ClipboardCheck size={45} strokeWidth={1} color="#44ade2" />
                  </div>
                  <div className="processText">
                    <div className="subheading">
                      Student accept (freeze) or float the allotted college
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
                    <UserPlus size={45} strokeWidth={1} color="#44ade2" />
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
