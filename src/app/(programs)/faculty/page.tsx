"use client";

import { Fragment, useMemo, useState } from "react";
import Image from "next/image";
import { Faculty, facultyData } from "@/data/faculty";
import InnerpageBanner from "@/components/InnerpageBanner";

const FacultySection = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [arrowLeft, setArrowLeft] = useState(0);

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

  const handleClick = (
    faculty: Faculty,
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const card = event.currentTarget;
    const grid = card.closest(".faculty-grid");

    if (grid) {
      const gridRect = grid.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      setArrowLeft(cardRect.left - gridRect.left + cardRect.width / 2);
    }

    if (selectedFaculty?.id === faculty.id) {
      setSelectedFaculty(null);
    } else {
      setSelectedFaculty(faculty);
    }
  };

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
          {groupedFaculty.map((row, rowIndex) => {
            const selectedInRow = row.find(
              (item) => item.id === selectedFaculty?.id,
            );

            return (
              <Fragment key={rowIndex}>
                {/* Faculty Cards */}
                <div className="faculty-grid">
                  {row.map((faculty) => (
                    <div
                      key={faculty.id}
                      className={`faculty-item ${
                        selectedFaculty?.id === faculty.id ? "active" : ""
                      }`}
                    >
                      <div
                        className="faculty-card"
                        onClick={(e) => handleClick(faculty, e)}
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

                {/* Faculty Details */}
                {selectedInRow && (
                  <div className="faculty-details">
                    <div
                      className="details-arrow"
                      style={{
                        left: `${arrowLeft}px`,
                      }}
                    />

                    <button
                      className="faculty-close"
                      onClick={() => setSelectedFaculty(null)}
                      aria-label="Close Faculty Details"
                    >
                      ✕
                    </button>

                    <div className="details-grid">
                      {/* LEFT SIDE */}
                      <div className="left">
                        <Image
                          src={selectedInRow.image}
                          alt={selectedInRow.name}
                          width={300}
                          height={380}
                        />

                        <div className="facultydetails_name">
                          <div className="heading">{selectedInRow.name}</div>

                          <div className="subheading">
                            {selectedInRow.designation}
                          </div>
                        </div>
                      </div>

                      {/* RIGHT SIDE */}
                      <div className="right">
                        {/* BASIC INFORMATION */}
                        <div className="info_box_main">
                          {/* Qualification */}
                          {hasValue(selectedInRow.qualification) && (
                            <div className="info-box">
                              <div className="subheading">Qualification</div>

                              <p>{selectedInRow.qualification}</p>
                            </div>
                          )}

                          {/* Broad Areas */}
                          {selectedInRow.broadAreas?.length ? (
                            <div className="info-box">
                              <div className="subheading">Broad Areas</div>

                              <ul>
                                {selectedInRow.broadAreas.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          {/* Specific Areas */}
                          {selectedInRow.specificAreas?.length ? (
                            <div className="info-box">
                              <div className="subheading">Specific Areas</div>

                              <ul>
                                {selectedInRow.specificAreas.map(
                                  (item, index) => (
                                    <li key={index}>{item}</li>
                                  ),
                                )}
                              </ul>
                            </div>
                          ) : null}

                          {/* Research Papers */}
                          {hasValue(selectedInRow.researchPapersPublished) && (
                            <div className="info-box">
                              <div className="subheading">
                                Research Papers Published
                              </div>

                              <p>{selectedInRow.researchPapersPublished}</p>
                            </div>
                          )}

                          {/* Books Published */}
                          {hasValue(selectedInRow.booksPublished) && (
                            <div className="info-box">
                              <div className="subheading">Books Published</div>

                              <p>{selectedInRow.booksPublished}</p>
                            </div>
                          )}

                          {/* Book Chapters */}
                          {hasValue(selectedInRow.bookChaptersPublished) && (
                            <div className="info-box">
                              <div className="subheading">
                                Book Chapters Published
                              </div>

                              <p>{selectedInRow.bookChaptersPublished}</p>
                            </div>
                          )}

                          {/* Sponsored Research */}
                          {hasValue(
                            selectedInRow.sponsoredResearchProjects,
                          ) && (
                            <div className="info-box">
                              <div className="subheading">
                                Sponsored Research Projects
                              </div>

                              <p>{selectedInRow.sponsoredResearchProjects}</p>
                            </div>
                          )}

                          {/* Email */}
                          {hasValue(selectedInRow.email) && (
                            <div className="info-box">
                              <div className="subheading">Email ID</div>

                              <a href={`mailto:${selectedInRow.email}`}>
                                {selectedInRow.email}
                              </a>
                            </div>
                          )}
                        </div>

                        {/* RESEARCH PROFILE + RESEARCH GUIDANCE */}
                        {(hasValue(selectedInRow.orcidId) ||
                          hasValue(selectedInRow.googleScholar) ||
                          hasValue(selectedInRow.scopusId) ||
                          hasValue(selectedInRow.phdAwarded) ||
                          hasValue(selectedInRow.phdScholarsInProcess) ||
                          hasValue(selectedInRow.patents)) && (
                          <div className="profiledesignbox">
                            {/* RESEARCH PROFILE */}
                            {(hasValue(selectedInRow.orcidId) ||
                              hasValue(selectedInRow.googleScholar) ||
                              hasValue(selectedInRow.scopusId)) && (
                              <div className="info-box1">
                                <div className="profiledesign ">
                                  <div className="subheading">
                                    Research Profile
                                  </div>

                                  {/* ORCID */}
                                  {hasValue(selectedInRow.orcidId) && (
                                    <div className="info-boxrow">
                                      {/* <div className="subheading">ORCID ID</div> */}

                                      <a
                                        className="research_linkbtn"
                                        href={selectedInRow.orcidId}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        ORCID ID Profile
                                      </a>
                                    </div>
                                  )}

                                  {/* Google Scholar */}
                                  {hasValue(selectedInRow.googleScholar) && (
                                    <div className="info-boxrow">
                                      {/* <div className="subheading">
                                        Google Scholar
                                      </div> */}

                                      <a
                                        className="research_linkbtn"
                                        href={selectedInRow.googleScholar}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Google Scholar Profile
                                      </a>
                                    </div>
                                  )}

                                  {hasValue(selectedInRow.scopusId) && (
                                    <div className="info-boxrow">
                                      {/* <div className="subheading">
                                        Scopus ID
                                      </div> */}

                                      <a
                                        className="research_linkbtn"
                                        href={selectedInRow.scopusId}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Scopus Profile
                                      </a>
                                    </div>
                                  )}

                                  {/* Scopus */}
                                  {/* {hasValue(selectedInRow.scopusId) && (
                                    <div className="info-boxrow">
                                      <div className="subheading">
                                        Scopus ID
                                      </div>

                                      <p>{selectedInRow.scopusId}</p>
                                    </div>
                                  )} */}
                                </div>
                              </div>
                            )}

                            {/* RESEARCH GUIDANCE */}
                            {(hasValue(selectedInRow.phdAwarded) ||
                              hasValue(selectedInRow.phdScholarsInProcess) ||
                              hasValue(selectedInRow.patents)) && (
                              <div className="info-box1">
                                <div className="profiledesign profiledesign1">
                                  <div className="subheading">
                                    Research Guidance
                                  </div>

                                  {/* Ph.D Awarded */}
                                  {hasValue(selectedInRow.phdAwarded) && (
                                    <div className="info-boxrow">
                                      <div className="subheading">
                                        Ph.D. Awarded
                                      </div>

                                      <p>{selectedInRow.phdAwarded}</p>
                                    </div>
                                  )}

                                  {/* Ph.D Scholars */}
                                  {hasValue(
                                    selectedInRow.phdScholarsInProcess,
                                  ) && (
                                    <div className="info-boxrow">
                                      <div className="subheading">
                                        Ph.D. Scholars in Process
                                      </div>

                                      <p>
                                        {selectedInRow.phdScholarsInProcess}
                                      </p>
                                    </div>
                                  )}

                                  {/* Patents */}
                                  {hasValue(selectedInRow.patents) && (
                                    <div className="info-boxrow">
                                      <div className="subheading">Patents</div>

                                      <p>{selectedInRow.patents}</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* PROFILE CONTENT */}
                        {hasValue(selectedInRow.profileContent) && (
                          <div className="facultydetail-content">
                            <div className="subheading">
                              Academic Background, Research Interests &
                              Expertise
                            </div>

                            <p>{selectedInRow.profileContent}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FacultySection;
