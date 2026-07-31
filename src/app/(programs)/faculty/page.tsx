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

  // Desktop : 4 cards per row
  const groupedFaculty = useMemo(() => {
    const rows: Faculty[][] = [];

    for (let i = 0; i < facultyData.length; i += 4) {
      rows.push(facultyData.slice(i, i + 4));
    }

    return rows;
  }, []);

  return (
    <div>
      <InnerpageBanner
        title="Faculty"
        breadcrumbs={[{ label: "Anti-Ragging And Discipline Cell" }]}
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
                      style={{ left: `${arrowLeft}px` }}
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
                          width={280}
                          height={350}
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
                            <div className="subheading">Research Areas</div>
                            <ul>
                              {selectedInRow.researchAreas.map(
                                (item, index) => (
                                  <li key={index}>{item}</li>
                                ),
                              )}
                            </ul>
                          </div>

                          <div className="info-box">
                            <div className="subheading">Specialization</div>
                            <ul>
                              {selectedInRow.specialization.map(
                                (item, index) => (
                                  <li key={index}>{item}</li>
                                ),
                              )}
                            </ul>
                          </div>

                          <div className="info-box">
                            <div className="subheading">Email</div>
                            <p>{selectedInRow.email}</p>
                          </div>
                        </div>

                        <div className="facultydetail-content">
                          {/* <div className="subheading">Profile</div> */}
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
