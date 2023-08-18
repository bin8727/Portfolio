import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "SCSS" },
  { skill: "styled-components" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              안녕하세요, 저는 모유빈입니다.{" "}
              <span className="font-bold">{'배우려는 의지가 높고'}</span>,
              <span className="font-bold">{" 스스로 성장하려고 노력하는"}</span>
              프론트엔드 개발자입니다.
            </p>

            <br />

            <p>
              2018년에 평택대학교 경영학과에 입학하여
              2024년 2월 경에 졸업을 예정하고 있습니다.
            </p>
            <br />
            <p>
              작년까지는 바이크를 타는 취미를 갖고 있었습니다.
              새로운 기술이나 기존에 있던 기술에 대한 변경이 있을 때, 다른 사람이 더 좋은 방법으로 작업을 할 때,
              그런 기술이나 습관을 배우려고 노력하고 있습니다!
            </p>

            <br />

            <p>
              새로운 경험을 즐기며, 스스로에게 동기를 부여하고 새로운 것을 배우려고 합니다.
              성장을 위해 학습을 멈추면 안된다고 생각하고, 기술에 대한 열정으로 한계를 넓히기를 바라며
              어디까지 성장할 수 있는지 기대됩니다!
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
