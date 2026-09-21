import Image from "next/image";
import Table from "@/components/ui/Table";
import { NameofGuide, SpecializationNames } from "@/data/tablemembers";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="div">
        <div className="aboutsec_inner">
          <div className="aboutus_left">
            <Image
              src="/images/campus/campus-overview/campus-overview.webp"
              alt="Banner"
              width={1200}
              height={700}
              className="img-fluid"
            />
          </div>
          <div className="aboutus_right">
            <div className="heading">Ph.D Research Center</div>
            IMS-CDR is committed to fostering a strong culture of research and
            innovation among faculty members and students. The Institute is an
            approved Ph.D. Research Centre in Management under Savitribai Phule
            Pune University (SPPU), providing a supportive academic environment
            for doctoral research. The Research Centre currently has approved
            Research Guides who mentor scholars in diverse areas of management.
            The Centre facilitates quality research through academic guidance,
            research facilities, scholarly discussions, and research-oriented
            activities. It encourages original thinking, systematic inquiry,
            publication, and knowledge creation, contributing to the advancement
            of management education and research.{" "}
          </div>
        </div>
        <div className="row my-md-5 my-3">
          <div className="col-md-12">
            <Table columns={NameofGuide} data={SpecializationNames} />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12">
            <div className="research_listing">
              <div className="heading">
                Research Scholars Awarded Ph.D 2025- 2026
              </div>
              <ul>
                <li>
                  Mrs Renuka Miskin (Research Scholar) was awarded Ph.D on
                  2.9.2025 under the guidance of Dr M. B. Mehta Research Guide
                  and Dr Mahesh Potdar Co-research guide in the Faculty of
                  Management (Organizational Management. Thesis titled "A study
                  on Organizational Practices in Enterprises Managed by Women
                  Entrepreneurs in Kolhapur City”
                </li>
                <li>
                  Mrs Payal Rahul Khandelwal (Research Scholar) was awarded
                  Ph.D. on 28.8.2025 under the guidance of Dr Harshvardhan
                  Bhavsar Research Guide in the Faculty of Management (Marketing
                  Management). Thesis titled “An analysis of consumer buying
                  behaviour towards cosmetic brands with special reference to
                  Ahmednagar district”
                </li>
                <li>
                  Prof Sayyed N Muddasar (Research Scholar) was awarded Ph.D. on
                  18.9.2025 under the guidance of Dr Pronoti Telore Research
                  Guide in the Faculty of Management (Human Resource
                  Management). Thesis titled “An Analytical Study on Sucession
                  Planning in family-owned enterprises in Ahmednagar District”
                </li>
                <li>
                  Mr.Prem Kulshreshta (Research Scholar) was awarded Ph.D. on
                  21.11.2025 under the guidance of Dr Pronoti Telore Research
                  Guide in the Faculty of Management (Human Resource Management)
                  Thesis tilted “ The analytical study of leadership styles and
                  its impact on medium scale enterprises”{" "}
                </li>
                <li>
                  Mrs Amruta Khanolkar (Research Scholar) was awarded Ph.D. on
                  23.12.2025 under the guidance of Dr Rahul Khandelwal Research
                  Guide in the Faculty of Management (Marketing Management).
                  Thesis titled “An impact of green marketing of FMCG products
                  on the buying behaviour of cusomer with reference to
                  Ahmednagar district”
                </li>
                <li>
                  Mr Nitin Wable (Research Scholar) was awarded Ph.D. on
                  7.1.2026 under the guidance of Dr Rahul Khandelwal Research
                  Guide in the Faculty of Management (Marketing Management).
                  Thesis titled “A study of marketing strategies of fertilizer
                  companies with reference to pune region”
                </li>
                <li>
                  Mr.Kiran Dumbre (Research Scholar) was awarded Ph.D. on
                  8.1.2026 under the guidance of Dr Pronoti Telore Research
                  Guide in the Faculty of Management (Marketing Management).
                  Thesis Tiled “A Study of Effectiveness of Digital Marketing
                  Strategies Adopted by FPO's (With Special Reference to
                  Ahmednagar District)”
                </li>
                <li>
                  Mrs Shilpa Bakshi (Research Scholar) was awarded Ph.D on
                  12.1.2026 under the guidance of Dr Hatim Kayumi Research Guide
                  in the Faculty of Management (Organizational Management).
                  Thesis titled “An Analytical Study of Institutional Practices
                  Ans It's Impact on Working of Faculty Members of Self-Financed
                  Professional Institutions In Ahmednagar District.”
                </li>
                <li>
                  Mr Amol Somase (Research Scholar) was awarded Ph.D. on
                  13.1.2026 under the guidance of Dr Rahul Khandelwal Research
                  Guide in the Faculty of Management (Marketing Management)
                  Thesis titled “A study on orgnizational practices of oil and
                  gas projects with reference to Maharashtra state”
                </li>
                <li>
                  Mr Nilesh Pathare (Research Scholar) was awarded Ph.D on
                  30.1.2026 under the guidance of Dr Hatim Kayumi Research Guide
                  in the Faculty of Management (Organizational Management).
                  Thesis Titled “Impact of Organizational Culture on
                  Effectiveness of Proprietors: A Study With Reference to Small
                  Manufacturing Firms in Ahmednagar District.”
                </li>
                <li>
                  Mr Gokul Sonawane (Reseach Scholar) was awarded Ph.D on
                  23.3.2026 under the guidance of Dr Harshvardhan Bhavsa,
                  Research guide in the Faculty of Management (Marketing
                  Management) Thesis titled “Impact of Marketing Strategies on
                  Consumer Behaviour : A study of Star Hotels in Pune District”
                </li>
                <li>
                  Ms Asmita Banerjee (Research Scholar) was awarded Ph.D. on
                  6.4.2026 under the guidance of Dr Rucha Tandulwadkar, Research
                  Guide in the faculty of Management (Marketing Management)
                  Thesis titled “A study of Consumer Behaviour with Respect to
                  ED-Tech Services (with special reference to Pune District)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
