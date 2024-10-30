import { NextPage } from "next";
import Link from "next/link";

interface Props {
  windowWidth: number;
}

const Resources: NextPage<Props> = ({ windowWidth }) => {
  return (
    <>
      <main className="h-full bg-white">
        {/* Section 1 - Intro */}
        {/* Yellow blob on top-right hand corner */}
        <div className="flex justify-end bg-white mb-[8rem]">
          <img src="/static/become-member/intro/yellow-blob.svg" className="h-[15rem]" />
        </div>
        {/*  */}
        <div className="absolute flex flex-row pl-24 my-[-13rem] overflow-x-hidden w-full">
          <div className="order-first w-screen">
            <h3 className="pt-16 font-bold text-base tracking-[0.20em]">PROVIDING SOLUTIONS</h3>
            <h1 className="pt-5 leading-200 font-bold text-7xl">Resources For</h1>
            <h1 className="pt-5 leading-200 font-bold text-7xl">Professional Development</h1>
            <p className="pt-5 font-medium text-base text-black/60 w-[33rem] break-normal">
              Supporting Brazilian students with essential tools for a successful university
              experience
            </p>
          </div>
        </div>
        {/* Curvy area */}
        <img
          src="/static/become-member/intro/intro-gy-area.svg"
          alt="Intro Curvy Area"
          width={windowWidth}
        />

        <div className="h-auto bg-main-brasa-green flex-grow">
          <div className="h-40 w-full bg-main-brasa-green"></div>

          <div className=" mx-40 rounded-[5rem] flex flex-col flex-grow">
            <div className="font-bold text-3xl mb-5 text-white">Links for Resources</div>
            <details className="w-100 pb-10 ">
              <summary className="text-green-600 p-2 text-3xl cursor-pointer uppercase rounded-xl bg-main-brasa-yellow select-none">
                Educational Resources
              </summary>
              <div className="p-2 text-xl text-white dropdown-content">
                <ul>
                  <li>
                    SARC Services:&nbsp;
                    <Link
                      href="https://academicsuccess.ucf.edu/sarc/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/sarc/)
                    </Link>
                    <ul>
                      <li>
                        Group Peer Tutoring:&nbsp;
                        <Link
                          href="https://ucfsarc.wordpress.com"
                          target="_blank"
                          className="underline text-white"
                        >
                          (https://ucfsarc.wordpress.com)
                        </Link>
                      </li>
                      <li>One-on-One Peer Tutoring</li>
                      <li>Admissions Exams Prep</li>
                      <li>Supplemental Instruction (SI)</li>
                      <li>
                        Peer Knights Academic Coaching & Engagement (ACE):&nbsp;
                        <Link
                          href="https://academicsuccess.ucf.edu/sarc/ace/"
                          target="_blank"
                          className="underline text-white"
                        >
                          https://academicsuccess.ucf.edu/sarc/ace/
                        </Link>
                      </li>
                      <li>
                        Academic Success Workshops:
                        <Link
                          href="https://www.youtube.com/channel/UCONG2Wct3MqLTXvJvwSPckQ"
                          target="_blank"
                          className="underline text-white"
                        >
                          (https://www.youtube.com/channel/UCONG2Wct3MqLTXvJvwSPckQ)
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    University Writing Center:
                    <Link
                      href="https://uwc.cah.ucf.edu"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://uwc.cah.ucf.edu)
                    </Link>
                  </li>
                  <li>
                    Study Union:
                    <Link
                      href="https://academicsuccess.ucf.edu/sarc/study-union-schedule/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/sarc/study-union-schedule/)
                    </Link>
                  </li>
                  <ul>
                    <li>
                      During the fall and spring semesters, SARC tutors and SI Leaders host final
                      review sessions at the Student Union during finals week. Study Union sessions
                      will be held in person in the Student Union and will also be live-streamed and
                      recorded via Zoom.
                    </li>
                  </ul>
                  <li>
                    Library:
                    <Link
                      href="https://library.ucf.edu"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://library.ucf.edu)
                    </Link>
                  </li>
                  <li>
                    Math Success Center:
                    <Link
                      href="https://sciences.ucf.edu/math/success-center/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://sciences.ucf.edu/math/success-center/)
                    </Link>
                  </li>
                  <li>
                    Math Assistance and Learning Lab:
                    <Link
                      href="https://sciences.ucf.edu/math/mall/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://sciences.ucf.edu/math/mall/)
                    </Link>
                  </li>
                  <li>
                    Knack Tutoring:
                    <Link
                      href="https://academicsuccess.ucf.edu/sarc/knack/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/sarc/knack/)
                    </Link>
                  </li>
                </ul>
              </div>
            </details>

            <details className="  w-100 pb-10">
              <summary className="text-green-600 p-2 text-3xl cursor-pointer uppercase rounded-xl bg-main-brasa-yellow select-none">
                Learning Skills Resources
              </summary>
              <div className="p-2 text-xl text-white dropdown-content">
                <ul>
                  <li>
                    Study Skills & Test Preparation:
                    <Link
                      href="https://academicsuccess.ucf.edu/sarc/study-skills-and-test-preparation/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/sarc/study-skills-and-test-preparation/)
                    </Link>
                  </li>
                  <li>
                    Textbook Reading & Note-Taking:
                    <Link
                      href="https://academicsuccess.ucf.edu/sarc/textbook-reading-notetaking/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/sarc/textbook-reading-notetaking/)
                    </Link>
                  </li>
                  <li>
                    Stress & Wellness:
                    <Link
                      href="https://academicsuccess.ucf.edu/sarc/stress-wellness/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/sarc/stress-wellness/)
                    </Link>
                  </li>
                  <li>
                    Time Management:
                    <Link
                      href="https://academicsuccess.ucf.edu/sarc/time-management/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/sarc/time-management/)
                    </Link>
                  </li>
                  <li>
                    Motivation & Persistence:
                    <Link
                      href="https://academicsuccess.ucf.edu/sarc/motivation-persistence/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/sarc/motivation-persistence/)
                    </Link>
                  </li>
                  <li>
                    Online Courses:
                    <Link
                      href="https://academicsuccess.ucf.edu/sarc/online-courses/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/sarc/online-courses/)
                    </Link>
                  </li>
                </ul>
              </div>
            </details>

            <details className="  w-100 pb-10">
              <summary className="text-green-600 p-2 text-3xl cursor-pointer uppercase rounded-xl bg-main-brasa-yellow select-none">
                Professional Skills Resources
              </summary>
              <div className="p-2 text-xl text-white dropdown-content">
                <ul>
                  <li>
                    Career Counseling and Job Search Assistance:
                    <Link href="https://career.ucf.edu">
                      {" ("}
                      https://career.ucf.edu
                      {"):"}
                    </Link>
                    <Link
                      href="https://career.ucf.edu"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://career.ucf.edu)
                    </Link>
                  </li>
                  <li>
                    Handshake (Job and Internship Search Platform):
                    <Link
                      href="https://ucf.joinhandshake.com/stu"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://ucf.joinhandshake.com/stu)
                    </Link>
                  </li>
                  <li>
                    Workday (on-campus job search platform): login through ucf.edu, go to “job
                    opportunities” section, go to “student employment opportunities”, and finally
                    select “UCF Find Student Jobs”
                  </li>
                  <li>
                    Internship Programs and Opportunities:
                    <Link
                      href="https://academicsuccess.ucf.edu/explearning/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/explearning/)
                    </Link>
                  </li>
                  <li>
                    Undergraduate Research Opportunities and Support:
                    <Link
                      href="https://academicsuccess.ucf.edu/our/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/our/)
                    </Link>
                  </li>
                  <li>
                    Resources, Workshops, and Opportunities for Grad School Applicants:
                    <Link
                      href="https://academicsuccess.ucf.edu/aap/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://academicsuccess.ucf.edu/aap/)
                    </Link>
                  </li>
                  <li>
                    Leadership Workshops and Programs:
                    <Link
                      href="https://lead.sdes.ucf.edu"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://lead.sdes.ucf.edu)
                    </Link>
                  </li>
                </ul>
              </div>
            </details>

            <details className="w-100 mb-40">
              <summary className="text-green-600 p-2 text-3xl cursor-pointer uppercase rounded-xl bg-main-brasa-yellow select-none">
                Additional UCF Resources
              </summary>
              <div className="p-2 text-xl text-white dropdown-content">
                <ul>
                  <li>
                    Student Organizations and Events Platform:
                    <Link
                      href="https://knightconnect.campuslabs.com/engage/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://knightconnect.campuslabs.com/engage/)
                    </Link>
                  </li>
                  <li>
                    Assistance with Applying for National and International Awards:
                    <Link
                      href="https://opa.ucf.edu"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://opa.ucf.edu)
                    </Link>
                  </li>
                  <li>
                    Support and Resources for International Students:
                    <Link
                      href="https://global.ucf.edu"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://global.ucf.edu)
                    </Link>
                  </li>
                  <li>
                    Support for Students with Disabilities:
                    <Link
                      href="https://sas.sdes.ucf.edu"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://sas.sdes.ucf.edu)
                    </Link>
                  </li>
                  <li>
                    Mental Health Support:
                    <Link
                      href="https://caps.sdes.ucf.edu"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://caps.sdes.ucf.edu)
                    </Link>
                  </li>
                  <li>
                    Health and Wellness Resources:
                    <Link
                      href="https://whps.sdes.ucf.edu"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://whps.sdes.ucf.edu)
                    </Link>
                  </li>
                  <li>
                    List of Available Scholarships:
                    <Link
                      href="https://www.ucf.edu/financial-aid/types/scholarships/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://www.ucf.edu/financial-aid/types/scholarships/)
                    </Link>
                  </li>
                  <li>
                    Engagement Opportunities and Support:
                    <Link
                      href="https://osi.ucf.edu"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://osi.ucf.edu)
                    </Link>
                  </li>
                  <li>
                    Support for Students Facing Food Insecurity:
                    <Link
                      href="https://studentunion.ucf.edu/knights-pantry/"
                      target="_blank"
                      className="underline text-white"
                    >
                      (https://studentunion.ucf.edu/knights-pantry/)
                    </Link>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resources;
