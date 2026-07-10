"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";

export interface ApprovalItem {
  id: number;
  title: string;
  file?: string;
  url?: string;
  href?: string;
}

interface Props {
  title: string;
  data: ApprovalItem[];
}

export default function ApprovalList({ title, data }: Props) {
  return (
    <div className="all-3p-section">
      <div className="container">
        <div className="heading text-center">{title}</div>

        <div className="row g-4">
          {data.map((item) => {
            const link = item.file || item.url || item.href || "#";

            return (
              <div className="col-md-4" key={item.id}>
                <div className="approval-card h-100">
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="approval-link"
                  >
                    <div className="approval-icon">
                      <GraduationCap size={50} />
                    </div>
                    <div>{item.title}</div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}