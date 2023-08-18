import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "그로스톤 2기",
    description:
      "스타팅에서 주최한 해커톤",
    image: "/project1.png",
    github: "https://github.com/bin8727/2-GROWBEYOND-Front-End",
    link: "https://www.growbeyond.store/",
  },
  {
    name: "Todo List",
    description:
      "MERN스택으로 제작한 Todo list, 서버가 죽어있어서 살아나는데 시간이 조금 걸려요..🥲",
    image: "/project2.png",
    github: "https://github.com/bin8727/ToDoList--frontend",
    link: "https://to-do-list-frontend-taupe.vercel.app/",
  },
  {
    name: "Crypto Tracker",
    description:
      "Coin Paprika Api를 이용해서 제작한 코인랭킹 차트",
    image: "/project3.png",
    github: "https://github.com/bin8727/crypto_tracker",
    link: "https://animated-halva-0d5f96.netlify.app/",
  },
  {
    name: "Order App",
    description:
      "장바구니에 담기, 담은 아이템 수량 수정 등의 기능을 구현한 앱",
    image: "/project4.png",
    github: "https://github.com/bin8727/orderApp",
    link: "https://symphonious-entremet-d11520.netlify.app",
  },
  {
    name: "Redux Counter",
    description:
      "리덕스에 타입스크립트를 사용해서 카운트를 세는 앱",
    image: "/project5.png",
    github: "https://github.com/bin8727/redux-counter",
    link: "https://soft-zabaione-92501d.netlify.app/",
  },
  {
    name: "비용 추적 앱",
    description:
      "사용한 금액을 적고 그래프로 총 비용을 추적할 수 있다.",
    image: "/project6.png",
    github: "https://github.com/bin8727/Expenses",
    link: "https://hilarious-medovik-c3bde7.netlify.app",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
