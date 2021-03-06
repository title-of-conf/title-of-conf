import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBlock from "../components/textBlock"

const Sponsor = () => (
  <Layout>
    <SEO title="Sponsor" />
    <TextBlock bgColor="#E7ECEF" title="Sponsors" subtitle="Thank you for partnering with us">
      &lt;title of conf&gt; is run entirely by volunteers, so we need your help to make sure it happens! For information on sponsorships, please <a href="https://drive.google.com/file/d/1Rg9xVT1qO1IBum5ppsD6GCVeLsNrGA_X/view?usp=sharing">see our prospectus</a>. If you're an individual and would like to contribute to the success of the event over time, <a href="https://www.patreon.com/titleofconf">become a Patron</a> today! 
    </TextBlock>
    <TextBlock title="Patrons">
      <ul>
        <li>Sara Chipps</li>
        <li>David Lu</li>
        <li>Jaye Martindell</li>
        <li>Jeremy Lindblom</li>
        <li>István "Flaki" Szmozsánszky</li>
        <li>Leslie Vernon-Blake</li>
        <li>Thomas Ballinger</li>
      </ul>
    </TextBlock>
  </Layout>
);

export default Sponsor