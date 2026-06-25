import InnerpageBanner from '@/components/InnerpageBanner'
import React from 'react'

const page = () => {
  return (
    <div className="innerpage-wrapper">
        <InnerpageBanner
        title={`Contact Us`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Contact" },
        ]}
      />
        <div className="innerpagewrapper">
            <div className="div">
                <div className="div">

                </div>
            </div>
        </div>
    </div>
  )
}

export default page
