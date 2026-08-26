"use client";

import React from "react";
import {
  ArrowUpRight,
  FileSpreadsheet,
  FileText,
} from "lucide-react";

export interface ApprovalItem {
  id: number;
  title: string;
  file?: string;
  url?: string;
  href?: string;
}

interface ApprovalListProps {
  title: string;
  data: ApprovalItem[];
}

const getDocumentType = (link: string) => {
  const cleanLink = link.split("?")[0].toLowerCase();

  if (cleanLink.endsWith(".pdf")) {
    return {
      type: "PDF",
      className: "approval-type-pdf",
    };
  }

  if (
    cleanLink.endsWith(".xls") ||
    cleanLink.endsWith(".xlsx") ||
    cleanLink.endsWith(".csv")
  ) {
    return {
      type: "EXCEL",
      className: "approval-type-excel",
    };
  }

  return {
    type: "LINK",
    className: "approval-type-link",
  };
};

const getIcon = (link: string) => {
  const cleanLink = link.split("?")[0].toLowerCase();

  if (
    cleanLink.endsWith(".xls") ||
    cleanLink.endsWith(".xlsx") ||
    cleanLink.endsWith(".csv")
  ) {
    return <FileSpreadsheet size={30} strokeWidth={1.8} />;
  }

  return <FileText size={30} strokeWidth={1.8} />;
};

export default function ApprovalList({ title, data }: ApprovalListProps) {
  return (
    <section className="approval-section">
      <div className="container">
        <div className="row g-4">
          {data.map((item) => {
            const link = item.file || item.url || item.href;

            if (!link) return null;

            const documentType = getDocumentType(link);
            const isExternal =
              link.startsWith("http://") || link.startsWith("https://");

            return (
              <div className="col-12 col-md-6" key={item.id}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="approval-card"
                >
                  {/* Animated Background */}
                  <span className="approval-card-glow" />

                  {/* Icon */}
                  <div className="approval-icon-wrap">
                    <div className="approval-icon">{getIcon(link)}</div>

                    <span className={`approval-type ${documentType.className}`}>
                      {documentType.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="approval-content">
                    <h3 className="approval-title">{item.title}</h3>
                  </div>

                  {/* Right Arrow */}
                  <div className="approval-arrow">
                    <ArrowUpRight size={20} strokeWidth={1.8} />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
