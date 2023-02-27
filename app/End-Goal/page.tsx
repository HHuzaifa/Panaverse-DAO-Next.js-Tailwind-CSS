import Image from "next/image";

export default function End_Goal() {
  return (
    <>
      <section>
        <div className="flex justify-center m-12 items-center pl-24">

          <div className="flex flex-col justify-center ml-8 max-w-xs m-20">
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

          <div className="flex items-center m-20">
            <Image
              src="/endGoal.png"
              width="450"
              height="380"
              alt="end goal section image"
              className="flex-shrink-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
