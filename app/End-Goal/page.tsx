import Image from "next/image";

export default function End_Goal() {
  return (
    <>
      <section>
        <div className="flex flex-col text-center lg:mr-20 lg:my-32 justify-center m-12 items-center my-20 lg:flex-row">
          <div className="flex lg:mb-10 lg:mt-28">
            <Image
              src="/endGoal.png"
              width="650"
              height="580"
              alt="end goal section image"
              className="lg:max-h-56 lg:max-w-md"
            />
          </div>

          <div className="flex flex-col justify-center max-w-xs">
            <p className="text-[#001038] font-bold font-mono text-2xl text-center">
              The Outcome for Participants of the Program
            </p>
            <div className="bg-[#001038] p-6 rounded-2xl shadow-xl mt-8">
              <p className="text-white font-light text-lg text-center">
                In this brand-new type of curriculum, students will learn how to
                make money and boost exports in the classroom and will begin
                doing so within six months of the program's beginning. It
                resembles a cross between a corporate venture and an educational
                project
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
