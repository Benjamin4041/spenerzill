import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Works from "../../components/works/works";
import "./aboutme.css";
import { motion } from "framer-motion";
export default function Aboutme() {
  return (
    <motion.div className="aboutmeMainCon" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <section className="aboutmeMainCon_section1">
        <Navbar />
        <div className="flex flex-col">
          <div className="pmcS1_innerCon">
            <span className="pmcS1_innerCon-giftextcon">
              <div className="giftextcon_gifCon">
                <img src="/images/bryan1.gif" alt="BryanImage" />
              </div>
              <img
                src="/images/sportify.svg"
                className="spotifyicon"
                alt="playlistIcon"
              />
              <p className="giftextcon_p">based in london</p>
            </span>
            <p className="pmcS1_innerCon-p">
              I have always had a genuine desire and an expectation for
              diversity, Inclusion, and empathy within the communities in which
              I belong. I bring this philosophy with me in every project: An
              emphasis on an empathetic community
            </p>
          </div>
          <h2 className="pmcS1_h2">
            <span className="flex  items-center">
              creative <hr />
            </span>
            product designer
          </h2>
        </div>
      </section>
      <section className="aboutmeMainCon_section2 flex">
        <p className="aboutmeMainCon_section2-p1">
          A JOURNEY FUELED BY PASSION.
        </p>
        <span className="aboutmeMainCon_section2-innercon">
          <p className="section2_innercon-p">
            Bryan has built a diverse design/artistic career working in
            advertising, film, tech, broadcast and corporate branding. He has
            mastered techniques encompassing everything from product design
            experiences to motion design. Bryan’s key passion is to deliver
            innovative design solutions and drive social impact through creative
            content and by using data for informed design decisions,
            implementing design solutions for brand/product growth, and applying
            design principles for increased engagement.
          </p>
          <div className="section2_innercon-image2Con">
            <img src="/images/bryan2.png" alt="bryanimage2" />
          </div>
          <p className="section2_innercon-p2">
            With a specialty in Product Design, Bryan loves experimenting with
            motion design, CG, branding & visual effects As designers, we're
            inviting the communities we love to enjoy and adopt our products
            into their lives. So let us serve our community members the best
            that we can!
          </p>
        </span>
      </section>
      <section className="aboutmeMainCon_section3 flex">
        <p className="aboutmeMainCon_section3-p">
          I HAVE FOUND INTEREST IN MANY OTHER THINGS
        </p>
        <span className="flex flex-col">
          <p className="aboutmeMainCon_section3-p2">Music,</p>
          <div className="aboutmeMainCon_section3-imageCon">
            <img src="/images/spotifyimage.png" alt="" />
          </div>
          <p className="aboutmeMainCon_section3-p3">
            reading,
            <br />
            Traveling,
            <br />
            Gaming.
          </p>
        </span>
      </section>
      <section className="section3">
        <span className="section3_innercon1">
          <p className="section3_innercon1-p1">awards & recognitions</p>
          <p className="section3_innercon1-p2">
            Bryan has earned for himself recognition,
          </p>
        </span>
        <div className="table_Con">
          <div className="title">
            <p className="title_p">PROJECT</p>
            <p className="title_p title_middle">AWARD OF PLATFORM</p>
            <p className="title_p">YEAR</p>
          </div>
          <div className="title2">
            <p className="title2_p1">RAVEN BANK</p>
            <p className="middle title2_p2">
              BEHANCE
              <br />
              <span>BEST OF BEHANCE BRAND SOLUTION</span>
            </p>
            <p className="title2_p3">2022</p>
          </div>
          <div className="title2">
            <p className="title2_p1">RAVEN BANK</p>
            <p className="middle title2_p2">
              DESIGN RUSH
              <br />
              <span>BEST PROMOTIONAL PRINT DESIGN</span>
            </p>
            <p className="title2_p3">2022</p>
          </div>
          <div className="title2">
            <p className="title2_p1">CLUBHOUSE</p>
            <p className="middle title2_p2">
              BEHANCE
              <br />
              <span>DISTINCT BRAND IDENTITY</span>
            </p>
            <p className="title2_p3">2022</p>
          </div>
          <div className="title2">
            <p className="title2_p1">POPCENTRAL TV</p>
            <p className="middle title2_p2">
              PHENOMENALLY!
              <br />
              <span>PHENOMENAL DESIGNER</span>
            </p>
            <p className="title2_p3">2021</p>
          </div>
          <div className="title2">
            <p className="title2_p1">VIACOM</p>
            <p className="middle title2_p2">
              PROMAX GLOBAL AWARD
              <br />
              <span>BEST PROMOTIONAL PRINT DESIGN</span>
            </p>
            <p className="title2_p3">2019</p>
          </div>
          <div className="title2">
            <p className="title2_p1">POPCENTRAL TV</p>
            <p className="middle title2_p2">
              PROMAX GLOBAL AWARD
              <br />
              <span>DISTINCT BRAND IDENTITY</span>
            </p>
            <p className="title2_p3">2018</p>
          </div>
        </div>
      </section>
      <section className="aboutmeMainCon_section4">
        <div className="recentWorksCon flex mb-80">
          <p className="recentWorksCon_p">/recent works</p>
          <div className=" mb-80 flex  recentWorksCon_innerCon">
            <div className="relative">
              <a
                href="https://www.behance.net/gallery/144665791/Raven-Bank-Brand-Positioning-Visual-Identity"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <Works
                  brandname={"raven bank"}
                  worktype={"/branding"}
                  period={"aug.2021"}
                  gif={true}
                  clip={"/images/59c75d144665791.629651f57a524.gif"}
                />
              </a>
            </div>
            <div className="relative clubhouse">
              <a href="https://www.behance.net/gallery/120048355/CLUBHOUSE-RE-BRANDING-PROJECT-PROJECTMUTEYOURMIC" rel="noopener noreferrer">
                <Works
                  brandname={"Clubhouse"}
                  worktype={"/branding"}
                  period={"aug.2021"}
                  circle1={{ backgroundColor: "#1CFF5C" }}
                  circle2={{ backgroundColor: "#1CFF5C" }}
                  circle3={{ backgroundColor: "#FFFFFF" }}
                  brandnamestyle={{}}
                  worktypestyle={{ transform: "translateX(5.5em)" }}
                  clip={"/images/clubhouse.mp4"}
                  gif={false}
                  brandclass={"workClubhouse"}
                />
              </a>
            </div>
            <div className="relative yellostar">
              <a href="https://www.behance.net/gallery/152733905/Orion-Rebrand-Broadcast-Design">
                <Works
                  brandname={"yello star"}
                  circle1={{ backgroundColor: "#FDC32C" }}
                  circle2={{ backgroundColor: "#1CFF5C" }}
                  circle3={{ backgroundColor: "#5550F4" }}
                  worktype={"/branding"}
                  period={"aug.2021"}
                  worktypestyle={{ transform: "translateX(9.9em)" }}
                  clip={"/images/yellowstar-desktop.mp4"}
                  gif={false}
                  brandclass={"workYellostar"}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}
