import FacilityGrid from "@/components/ui/FacilityListing";
import GallerySlider from "@/components/ui/GallerySlider";
import { galleryData } from "@/data/GallerySlider";
import { hostelFacilities, hostelboysFacilities } from "@/data/hostelFacilities";
import Image from "next/image";

const HostelPage = () => {
  return (
    <section className="innerpagerightside">
      <div className="hostel-section">
        <div className="hosteltopinner">
          <div className="row">
            <div className="col-md-6">
              <div className="heading">Hostel Facilities</div>
              <div className="subheading">
                Safe, Comfortable and Student-Friendly Accommodation
              </div>
              <p>
                IMS-CDR provides separate hostel facilities for boys and girls,
                ensuring a secure, disciplined, and comfortable residential
                environment that supports academic success and personal
                development.
              </p>
            </div>
            <div className="col-md-6">
              <Image
                src="/images/campus/hostel/girl-img.webp"
                alt="infrastructure"
                width={1400}
                height={522}
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="girsandboys_hostel pt-3">
          <div className="row">
            <div className="col-md-5">
              <div className="hostel_image">
                <Image
                  src={"/images/campus/hostel/girls_hostel.webp"}
                  alt={""}
                  className="imf-fluid"
                  width={280}
                  height={426}
                />
                <div className="subheading mb-2">Girls Hostel Facilities</div>
              </div>
            </div>
            <div className="col-md-7">
              <FacilityGrid data={hostelFacilities} />
            </div>
          </div>
        </div>
        <hr />

        <div className="girsandboys_hostel ">
          <div className="row flex-sm-row-reverse">
            
            <div className="col-md-5">
              <div className="hostel_image">
                <Image
                  src={"/images/campus/hostel/girls_hostel.webp"}
                  alt={""}
                  className="imf-fluid"
                  width={250}
                  height={381}
                />
                <div className="subheading mb-2">Boys Hostel Facilities</div>
                <div className="Capacitytext">
                  <span>Capacity</span>
                  <div className="Capacitynum">50</div>
                  <span>Students</span>
                </div>
              </div>
            </div>
            <div className="col-md-7 mb-5 mb-md-0">
              <FacilityGrid data={hostelboysFacilities} />
            </div>
          </div>
        </div>

        <div className="lastpara_hostel pb-3 pb-md-5">
          The hostels are designed to create a home-like environment where students can focus on academics while developing independence, responsibility, and lifelong friendships.
        </div>

        <GallerySlider items={galleryData} />

      </div>
    </section>
  );
};

export default HostelPage;
