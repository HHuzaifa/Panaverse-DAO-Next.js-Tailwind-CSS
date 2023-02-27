
export default function About() {
  return (
    // This is the first section of ABOut

    <section className="relative h-screen ">
      {/* This is the background image */}

      <div className="absolute inset-0">
        <img
          src="/HeroBGimage.png"
          className="w-full h-full object-cover"
          alt="Hero Background Image"
        ></img>
      </div>

      {/* This div conatins the text div and an image div */}

      <div>
        {/* Text DIV */}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pr-44 pt-14">
          <h1 className="text-3xl font-bold font-mono text-white mb-4 pr-28">
            Certified Web 3.0 and Metaverse Developer
          </h1>
          <p className="text-lg text-white font-light mb-8 pr-28">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet
          </p>
          <p className="text-md font-light text-white pr-28">
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics Technologies
          </p>
        </div>

        {/* Image DIV */}

        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 pr-32">
          <img
            src="/heroAvatar.png"
            alt="hero avatar image"
            className="w-50 h-50 rounded-lg object-cover"
          ></img>
        </div>
      </div>
    </section>
  );
}
