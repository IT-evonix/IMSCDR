"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import InnerpageBanner from "../InnerpageBanner";

export interface ApprovalItem {
  id: number;
  title: string;
  file: string;
}

interface Props {
  title: string;
  data: ApprovalItem[];
}

export default function ApprovalList({ title, data }: Props) {
  return (
    <div className="div">
      <InnerpageBanner
        title="About Us"
        breadcrumbs={[{ label: "Director’s Message" }]}
      />
      <div className="container py-5">
        <div className="heading text-center">{title}</div>

        <div className="row g-4">
          {data.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="approval-card h-100">
                <Link
                    href={item.file}
                    target="_blank"
                    className="approval-link"
                  >
                    <div className="approval-icon">
                      <GraduationCap size={50} />
                    </div>
                    <div className="">{item.title}</div>
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
