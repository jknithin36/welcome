import React from "react";

const Paragraph = ({ children }) => (
  <p className="font-caveat text-md mb-6 text-gray-700 sm:text-lg md:text-xl lg:text-2xl">
    {children}
  </p>
);

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex min-h-screen flex-col items-center bg-gray-100 p-4"
      >
        <div className="mt-40 flex w-full max-w-6xl flex-col items-start">
          <h1 className="font-rubik mb-6 mt-4 text-[24px] uppercase sm:text-[30px] md:text-[40px] lg:text-[50px]">
            A Little About Me
          </h1>
          <Paragraph>
            My name is Nithin, and I hail from India. I have a strong academic
            background, having completed my schooling at Montessori School with
            an impressive 92% score. I then pursued my intermediate studies at
            Narayana Junior College in Adibatla, achieving an 89% score.
            Following that, I earned my Bachelor's degree in Computer Science
            from Vellore Institute of Technology, Amaravathi, with a commendable
            83% score. Currently, I am furthering my education by pursuing a
            Master's degree in Computer Science at Kent State University.
          </Paragraph>
          <Paragraph>
            In terms of work experience, I completed an internship at
            UpClicklabs in Pune, where I worked as a Full Stack Web Developer.
            This role allowed me to gain valuable hands-on experience in web
            development. My primary interests lie in web and mobile programming,
            particularly using JavaScript. I am passionate about creating
            dynamic and responsive applications that enhance user experiences.
          </Paragraph>
          <Paragraph>
            In my free time, I love going on trips, cooking dishes, and watching
            movies. Additionally, I enjoy playing cricket, which is one of my
            favorite sports. These activities help me relax and maintain a
            balanced lifestyle.
          </Paragraph>
          <Paragraph>
            I am excited about the opportunities that lie ahead and am eager to
            continue growing and developing my skills in the field of computer
            science.
          </Paragraph>
        </div>
      </div>
    </>
  );
};

export default About;
