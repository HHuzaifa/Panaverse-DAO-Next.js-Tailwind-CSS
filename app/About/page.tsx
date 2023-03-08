import Image from "next/image";

export default function About() {
  return (
    <section className="relative h-auto">
      <div className="w-full flex justify-center relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/heroBGimageMobile.png"
            className="w-screen h-screen"
            alt="Hero Background desktop Image"
          ></img>
        </div>

        <div className="absolute inset-0">
          <img
            src="/heroBGimageTablet.png"
            className="w-screen h-screen"
            alt="Hero Background tablet Image"
          ></img>
        </div>

        <div className="absolute inset-0">
          <img
            src="/heroBGimageDesktop.png"
            className="w-full h-full object-cover sm:hidden md:hidden"
            alt="Hero Background desktop Image"
          >
          </img>
        </div>

        <div className="lg:flex lg:flex-row lg:items-center lg:mt-24 lg:ml-36 2xl:mb-44">
          <div className="flex justify-center transform md:mb-6 lg:w-80 lg:h-80">
            <Image
              src="/heroAvatar.png"
              width="300"
              height="300"
              alt="panaverse hero avatar"
              className="rounded-b-full md:w-100 md:h-100 lg:object-cover lg:ml-60"
            />
          </div>
          <div className="flex justify-end flex-col relative items-center text-center mx-10 md:mx-32 lg:mx-64">
            <h1 className="text-2xl md:text-3xl font-bold font-mono text-white my-5 lg:text-4xl 2xl:text-6xl">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className=" text-sm md:text-base font-light text-white my-6 md:my-10 2xl:text-4xl">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="text-sm md:text-base font-light text-white 2xl:text-4xl">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
