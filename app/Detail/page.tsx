import Image from "next/image";

export default function DetailedProgram() {
  return (
    <section>
      <div className="py-32  bg-[#0E091D] flex flex-col px-36 bg-gradient-to-r from-[#0E091D] via-black to-[#530840]">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-white text-3xl font-bold font-mono">Program in Detail</h1>
        </div>
        <div className="flex flex-col px-36 justify-centercenter text-center pt-16">
          <p className="text-white text-lg font-light">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first three quarters are shared
            by all specialties and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development.
          </p>
          <p className="text-white pt-8 text-lg font-light">
            It is going to be a fifteen-month-long hybrid program that includes
            both onsite and online classes and is divided into five quarters of
            13 weeks each.
          </p>
          <p className="text-white pt-8 text-lg font-light">
            The emphasis will be on hands-on learning by educating students to
            produce projects. To accommodate everyone, courses will be held
            primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </p>
        </div>
      </div>

      <section className="bg-white">
    
        <div className="justify-center flex p-24 flex-row items-center">
          <Image
            src="/sirAdil.jpg"
            width="300"
            height="240"
            alt="sir adil image"
            className="border-white rounded-md border-2 mx-2"
          />
          <Image
            src="/classRoom.jpg"
            width="300"
            height="240"
            alt="classroom image"
            className="border-white rounded-md border-2 mx-2"
          />
          <Image
            src="/sirZia.jpg"
            width="300"
            height="240"
            alt="sir zia image"
            className="border-white rounded-md border-2 mx-2"
          />
        </div>
      </section>
    </section>
  );
}
