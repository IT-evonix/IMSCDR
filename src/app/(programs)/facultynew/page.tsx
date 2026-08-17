"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Faculty, facultyData } from "@/data/faculty";
import InnerpageBanner from "@/components/InnerpageBanner";

const FacultySection = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  // Check whether data is actually available
  // Empty, null, undefined, "-", "0", and 0 will be hidden
  const hasValue = (value: unknown) => {
    if (value === null || value === undefined) return false;

    if (typeof value === "number") {
      return value > 0;
    }

    if (typeof value === "string") {
      const cleanedValue = value.trim();

      return (
        cleanedValue !== "" && cleanedValue !== "-" && cleanedValue !== "0"
      );
    }

    return true;
  };

  // Open faculty popup
  const handleClick = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
  };

  // Close popup
  const closeFaculty = () => {
    setSelectedFaculty(null);
  };

  // ESC key + body scroll lock
  useEffect(() => {
    if (selectedFaculty) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeFaculty();
      }
    };

    if (selectedFaculty) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedFaculty]);

  const groupedFaculty = useMemo(() => {
    const rows: Faculty[][] = [];

    for (let i = 0; i < facultyData.length; i += 4) {
      rows.push(facultyData.slice(i, i + 4));
    }

    return rows;
  }, []);

  return (
    <div className="faculty-page">
      <InnerpageBanner
        title="Faculty"
        breadcrumbs={[
          {
            label: "Faculty",
          },
        ]}
      />

      <section className="faculty-section">
        <div className="container">
          {/* =========================
              FACULTY CARDS
          ========================== */}

          {groupedFaculty.map((row, rowIndex) => (
            <div className="faculty-grid" key={rowIndex}>
              {row.map((faculty) => (
                <div key={faculty.id} className="faculty-item">
                  <div
                    className="faculty-card"
                    onClick={() => handleClick(faculty)}
                  >
                    <div className="faculty-image">
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        fill
                        sizes="100vw"
                      />
                    </div>

                    <div className="faculty-content">
                      <div className="subheading">{faculty.name}</div>

                      <span>{faculty.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          FACULTY POPUP
      ================================================== */}
      
        {selectedFaculty && (
          <div className="faculty-modal-overlay" onClick={closeFaculty}>
            <div className="container">
            <div className="faculty-modal" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                className="faculty-close"
                onClick={closeFaculty}
                aria-label="Close Faculty Details"
              >
                ✕
              </button>

              <div className="faculty-details">
                <div className="details-grid">
                  {/* =========================
                    LEFT SIDE
                ========================== */}

                  <div className="left">
                    <Image
                      src={selectedFaculty.image}
                      alt={selectedFaculty.name}
                      width={300}
                      height={380}
                    />

                    <div className="facultydetails_name">
                      <div className="heading">{selectedFaculty.name}</div>

                      <div className="subheading">
                        {selectedFaculty.designation}
                      </div>
                    </div>
                  </div>

                  {/* =========================
                    RIGHT SIDE
                ========================== */}

                  <div className="right">
                    {/* =========================
                      BASIC INFORMATION
                  ========================== */}

                    <div className="info_box_main">
                      {/* Qualification */}
                      {hasValue(selectedFaculty.qualification) && (
                        <div className="info-box">
                          <div className="subheading">Qualification</div>

                          <p>{selectedFaculty.qualification}</p>
                        </div>
                      )}

                      {/* Broad Areas */}
                      {selectedFaculty.broadAreas?.length ? (
                        <div className="info-box">
                          <div className="subheading">Broad Areas</div>

                          <ul>
                            {selectedFaculty.broadAreas.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {/* Specific Areas */}
                      {selectedFaculty.specificAreas?.length ? (
                        <div className="info-box">
                          <div className="subheading">Specific Areas</div>

                          <ul>
                            {selectedFaculty.specificAreas.map(
                              (item, index) => (
                                <li key={index}>{item}</li>
                              ),
                            )}
                          </ul>
                        </div>
                      ) : null}

                      {/* Research Papers */}
                      {hasValue(selectedFaculty.researchPapersPublished) && (
                        <div className="info-box">
                          <div className="subheading">
                            Research Papers Published
                          </div>

                          <p>{selectedFaculty.researchPapersPublished}</p>
                        </div>
                      )}

                      {/* Books Published */}
                      {hasValue(selectedFaculty.booksPublished) && (
                        <div className="info-box">
                          <div className="subheading">Books Published</div>

                          <p>{selectedFaculty.booksPublished}</p>
                        </div>
                      )}

                      {/* Book Chapters */}
                      {hasValue(selectedFaculty.bookChaptersPublished) && (
                        <div className="info-box">
                          <div className="subheading">
                            Book Chapters Published
                          </div>

                          <p>{selectedFaculty.bookChaptersPublished}</p>
                        </div>
                      )}

                      {/* Sponsored Research */}
                      {hasValue(selectedFaculty.sponsoredResearchProjects) && (
                        <div className="info-box">
                          <div className="subheading">
                            Sponsored Research Projects
                          </div>

                          <p>{selectedFaculty.sponsoredResearchProjects}</p>
                        </div>
                      )}

                      {/* Email */}
                      {hasValue(selectedFaculty.email) && (
                        <div className="info-box">
                          <div className="subheading">Email ID</div>

                          <a href={`mailto:${selectedFaculty.email}`}>
                            {selectedFaculty.email}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* ==================================================
                      RESEARCH PROFILE + RESEARCH GUIDANCE
                  ================================================== */}

                    {(hasValue(selectedFaculty.orcidId) ||
                      hasValue(selectedFaculty.googleScholar) ||
                      hasValue(selectedFaculty.scopusId) ||
                      hasValue(selectedFaculty.phdAwarded) ||
                      hasValue(selectedFaculty.phdScholarsInProcess) ||
                      hasValue(selectedFaculty.patents)) && (
                      <div className="profiledesignbox">
                        {/* =========================
                          RESEARCH PROFILE
                      ========================== */}

                        {(hasValue(selectedFaculty.orcidId) ||
                          hasValue(selectedFaculty.googleScholar) ||
                          hasValue(selectedFaculty.scopusId)) && (
                          <div className="info-box1">
                            <div className="profiledesign">
                              <div className="subheading">Research Profile</div>

                              {/* ORCID */}
                              {hasValue(selectedFaculty.orcidId) && (
                                <div className="info-boxrow">
                                  <a
                                    className="research_linkbtn"
                                    href={selectedFaculty.orcidId}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    ORCID ID Profile
                                  </a>
                                </div>
                              )}

                              {/* Google Scholar */}
                              {hasValue(selectedFaculty.googleScholar) && (
                                <div className="info-boxrow">
                                  <a
                                    className="research_linkbtn"
                                    href={selectedFaculty.googleScholar}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Google Scholar Profile
                                  </a>
                                </div>
                              )}

                              {/* Scopus */}
                              {hasValue(selectedFaculty.scopusId) && (
                                <div className="info-boxrow">
                                  <a
                                    className="research_linkbtn"
                                    href={selectedFaculty.scopusId}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Scopus Profile
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* =========================
                          RESEARCH GUIDANCE
                      ========================== */}

                        {(hasValue(selectedFaculty.phdAwarded) ||
                          hasValue(selectedFaculty.phdScholarsInProcess) ||
                          hasValue(selectedFaculty.patents)) && (
                          <div className="info-box1">
                            <div className="profiledesign profiledesign1">
                              <div className="subheading">
                                Research Guidance
                              </div>

                              {/* Ph.D Awarded */}
                              {hasValue(selectedFaculty.phdAwarded) && (
                                <div className="info-boxrow">
                                  <div className="subheading">
                                    Ph.D. Awarded
                                  </div>

                                  <p>{selectedFaculty.phdAwarded}</p>
                                </div>
                              )}

                              {/* Ph.D Scholars */}
                              {hasValue(
                                selectedFaculty.phdScholarsInProcess,
                              ) && (
                                <div className="info-boxrow">
                                  <div className="subheading">
                                    Ph.D. Scholars in Process
                                  </div>

                                  <p>{selectedFaculty.phdScholarsInProcess}</p>
                                </div>
                              )}

                              {/* Patents */}
                              {hasValue(selectedFaculty.patents) && (
                                <div className="info-boxrow">
                                  <div className="subheading">Patents</div>

                                  <p>{selectedFaculty.patents}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* =========================
                      PROFILE CONTENT
                  ========================== */}

                    {hasValue(selectedFaculty.profileContent) && (
                      <div className="facultydetail-content">
                        <div className="subheading">
                          Academic Background, Research Interests & Expertise
                        </div>

                        <p>{selectedFaculty.profileContent}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        )}
      
    </div>
  );
};

export default FacultySection;
