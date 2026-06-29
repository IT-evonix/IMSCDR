import LeftSidebar from "@/components/LeftSidebar";
import ProgramBanner from "@/components/ProgramBanner";
import { programSidebar } from "@/data/programSidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const program = programSidebar.mba;

  return (
    <>
      <ProgramBanner heading={program.heading} />

      <section className="innerpage_data">
        <div className="container">
          <div className="row">

            <div className="col-lg-3">
              <LeftSidebar
                heading={program.heading}
                menuItems={program.menuItems}
              />
            </div>

            <div className="col-lg-9">
              {children}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}