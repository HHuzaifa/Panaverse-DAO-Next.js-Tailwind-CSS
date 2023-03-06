import Image from "next/image";

export default function Fellowship() {
  return (

    <section>
      <div className="flex flex-col justify-center items-center text-center my-8 lg:flex-row lg:justify-center lg:items-center lg:text-center lg:my-32">
        <div className="mt-5  lg:hidden xl:hidden 2xl:hidden">
          <Image
            src="/fellowshipImageMobile.png"
            width="220"
            height="150"
            alt="fellowship section mobile image"
            className="flex-shrink-0 "
          />
        </div>

        <div className="mt-5 hidden md:block lg:max-w-lg lg:max-h-4xl lg:ml-64">
          <Image
            src="/fellowshipImageDesktop.png"
            width="1700"
            height="1000"
            alt="fellowship section large screen image"
            className="flex-shrink-0 object-cover"
          />
        </div>

        <div className="flex flex-col justify-center mx-8 mt-12 mb-5 md:mx-16 lg:mx-72 lg:ml-20">
          <p className="text-[#001038] font-bold font-mono text-xl text-center 2xl:text-5xl">
            Earn While You Learn
          </p>
          <div className="bg-[#001038] p-6 rounded-2xl shadow-xl mt-8 lg:py-14 2xl:mx-40">
            <p className="text-white font-light text-lg text-center 2xl:text-4xl 2xl:py-20">
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the program's beginning. It resembles a
              cross between a corporate venture and an educational project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
