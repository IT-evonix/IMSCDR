"use client";

import { Fragment, useMemo, useState } from "react";
import Image from "next/image";

import { Faculty, facultyData } from "@/data/faculty";
import InnerpageBanner from "@/components/InnerpageBanner";

const FacultySection = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [arrowLeft, setArrowLeft] = useState(0);

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
                      <div className="left">
                        <Image
                          src={selectedInRow.image}
                          alt={selectedInRow.name}
                          width={300}
                          height={380}
                        />
                      </div>
                      <div className="right">
                        <div className="heading">{selectedInRow.name}</div>
                        <div className="subheading">
                          {selectedInRow.designation}
                        </div>
                        <div className="info_box_main">
                          <div className="info-box">
                            <div className="subheading">Qualification</div>
                            <p>{selectedInRow.qualification}</p>
                          </div>
                          <div className="info-box">
                            <div className="subheading">Broad Areas</div>
                            {selectedInRow.broadAreas?.length ? (
                              <ul>
                                {selectedInRow.broadAreas.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p>-</p>
                            )}
                          </div>
                          <div className="info-box">
                            <div className="subheading">Specific Areas</div>
                            {selectedInRow.specificAreas?.length ? (
                              <ul>
                                {selectedInRow.specificAreas.map(
                                  (item, index) => (
                                    <li key={index}>{item}</li>
                                  ),
                                )}
                              </ul>
                            ) : (
                              <p>-</p>
                            )}
                          </div>
                          
                          <div className="info-box">
                            <div className="subheading">
                              Research Papers Published
                            </div>
                            <p>
                              {selectedInRow.researchPapersPublished ?? "-"}
                            </p>
                          </div>
                          <div className="info-box">
                            <div className="subheading">Books Published</div>
                            <p>{selectedInRow.booksPublished ?? "-"}</p>
                          </div>
                          <div className="info-box">
                            <div className="subheading">
                              Book Chapters Published
                            </div>
                            <p>{selectedInRow.bookChaptersPublished ?? "-"}</p>
                          </div>
                          <div className="info-box">
                            <div className="subheading">
                              Sponsored Research Projects
                            </div>
                            <p>
                              {selectedInRow.sponsoredResearchProjects ?? "-"}
                            </p>
                          </div>
                          <div className="info-box">
                            <div className="subheading">Research Guidance</div>
                            <p>{selectedInRow.researchGuidance || "-"}</p>
                          </div>
                          <div className="info-box">
                            <div className="subheading">Ph.D. Awarded</div>
                            <p>{selectedInRow.phdAwarded ?? "-"}</p>
                          </div>
                          <div className="info-box">
                            <div className="subheading">
                              Ph.D. Scholars in Process
                            </div>
                            <p>{selectedInRow.phdScholarsInProcess ?? "-"}</p>
                          </div>
                          <div className="info-box">
                            <div className="subheading">Patents</div>
                            <p>{selectedInRow.patents ?? "-"}</p>
                          </div>
                          <div className="info-box">
                            <div className="subheading">Email ID</div>
                            <a href={`mailto:${selectedInRow.email}`}>
                              {selectedInRow.email}
                            </a>
                          </div>
                        </div>
                        <div className="div">
                          <div className="info-box1">
                            <div className="profiledesign">
                              <div className="subheading">Research Profile</div>
                              <div className="info-boxrow">
                                <div className="subheading">ORCID ID</div>
                                <p>{selectedInRow.orcidId || "-"}</p>
                              </div>
                              <div className="info-boxrow">
                                <div className="subheading">Google Scholar</div>
                                {selectedInRow.googleScholar ? (
                                  <a
                                    href={selectedInRow.googleScholar}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Google Scholar Profile
                                  </a>
                                ) : (
                                  <p>-</p>
                                )}
                              </div>
                              <div className="info-boxrow">
                                <div className="subheading">Scopus ID</div>
                                <p>{selectedInRow.scopusId || "-"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="facultydetail-content">
                          <div className="subheading">
                            Academic Background, Research Interests & Expertise
                          </div>
                          <p>{selectedInRow.profileContent}</p>
                        </div>
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
