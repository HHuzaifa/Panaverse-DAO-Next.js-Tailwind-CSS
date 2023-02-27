import Image from "next/image";

export default function Courses() {
  return (
    <section className="bg-[#0E091D] py-20">
      <div className="container mx-auto mb-auto">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-white text-3xl font-bold font-mono mb-4">
            Study Trackway
          </h1>
          <h3 className="text-white font-bold text-lg font-mono mt-3">
            Core Courses / Quarters
          </h3>
          <h3 className="text-white font-bold text-lg font-mono">
            “Common in all specialization”
          </h3>
          <p className="text-gray-300 text-sm font-mono mt-11 justify-center max-w-md text-center">
            Every participant of the program will start by completing the
            following three core courses.
          </p>
        </div>

        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center text-center bg-[#D9D9D9] w-64 rounded-md shadow-md p-6 m-4 max-w-sm py-20 px-10">
            <Image
              src="/typescript IMG.png"
              width="100"
              height="100"
              alt="typescript card image"
            />
            <h6 className="text-[#041E48] text-md font-bold font-mono">
              Quarter 1(Core)
            </h6>
            <p className="text-[#0E091D] text-sm font-mono">
              <strong className="font-bold ">CS-101:</strong> Object-Oriented
              Programming using TypeScript
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-[#D9D9D9] w-64 rounded-md shadow-md p-6 m-4 max-w-sm py-10">
            <Image
              src="/dollarMaking.png"
              width="100"
              height="100"
              alt="dollar making card image"
            />
            <h6 className="text-[#041E48] text-md font-bold font-mono">
              Quarter 2(Core)
            </h6>
            <p className="text-[#0E091D] text-sm font-mono">
              <strong className="font-bold ">W2-201: </strong>Developing
              Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js
              13 and Cloud Development Kit (CDK) for Terraform
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-[#D9D9D9] w-64 rounded-md shadow-md p-6 m-4 max-w-sm py-8 px-10">
            <Image
              src="/nextJS.png"
              width="100"
              height="100"
              alt="nextJS card image"
              className="m-6"
            />
            <h6 className="text-[#041E48] text-md font-bold font-mono">
              Quarter 3(Core)
            </h6>
            <p className="text-[#0E091D] text-sm font-mono">
              <strong className="font-bold ">$-101: </strong> Dollar Making
              Bootcamp - Full-Stack Template and API Product Development
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center m-16">
        <h3 className="text-white text-lg font-bold font-mono mt-3">
          Specialized Courses / Quarters
        </h3>
        <p className="text-gray-300 text-md font-mono max-w-md text-center justify-center mt-11">
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each.
        </p>
      </div>

      <div className="flex flex-col bg-[#D9D9D9] rounded-md shadow-md p-16 m-20 mx-64">
        <h1 className="flex justify-center text-[#1E1E1E] font-bold text-center text-2xl font-mono mb-12">
          Web 3.0 (Blockchain) and Metaverse Specialization
        </h1>

        <div className="flex justify-center">
          <div className="flex flex-col items-start mr-8">
            <Image
              src="/metaverseCourse.jpg"
              width="500"
              height="500"
              alt="metaverse course image"
              className="rounded-3xl mt-8"
            />
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono ">
                Quarter 3
              </h6>

              <Image
                src="/metaCourseImage1.png"
                width="150"
                height="150"
                alt="meta course inner image 1"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm text-center pb-5">
                <strong className="font-bold ">W3-351: </strong> Developing
                Smart Contracts and Planet-Scale Web 3.0 Dapps
              </p>
            </div>

            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono ">
                Quarter 4
              </h6>

              <Image
                src="/meta3.png"
                width="150"
                height="150"
                alt="meta course inner image 2"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm text-center">
                <strong className="font-bold ">MV-361: </strong> Developing
                Planet-Scale Open Virtual and Augmented Metaverse Experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#D9D9D9] rounded-md shadow-md p-16 m-20 mx-64">
        <h1 className="flex justify-center text-[#1E1E1E] font-bold text-2xl text-center font-mono mb-12">
          Artificial Intelligence (AI) and Deep Learning Specialization
        </h1>

        <div className="flex justify-center">
          <div className="flex flex-col items-start mr-8">
            <Image
              src="/AIcardImage.png"
              width="500"
              height="500"
              alt="AI course image"
              className="rounded-3xl mt-8"
            />
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono ">
                Quarter 3
              </h6>

              <Image
                src="/aiCard1.png"
                width="150"
                height="150"
                alt="ai inner image 1"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm text-center">
                <strong className="font-bold ">AI-351: </strong>Developing
                Planet-Scale Intelligent APIs and Python Programming
              </p>
            </div>

            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono ">
                Quarter 4
              </h6>

              <Image
                src="/aiCard2.png"
                width="150"
                height="150"
                alt="ai card inner image 2"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm pb-5 text-center">
                <strong className="font-bold ">AI-361: </strong>Deep Learning
                and MLOps
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#D9D9D9] rounded-md shadow-md p-16 m-20 mx-64">
        <h1 className="flex justify-center text-[#1E1E1E] text-center font-bold text-2xl font-mono mb-12">
          Cloud-Native Computing Specialization
        </h1>

        <div className="flex justify-center">
          <div className="flex flex-col items-start mr-8">
            <Image
              src="/cloundComputinBig.jpg"
              width="500"
              height="500"
              alt="cloud computing course image"
              className="rounded-3xl mt-8"
            />
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono ">
                Quarter 3
              </h6>

              <Image
                src="/kubernetes.png"
                width="150"
                height="150"
                alt="kubernetes course inner image 1"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm text-center">
                <strong className="font-bold ">CN-351: </strong>Certified
                Kubernetes Application Developer (CKAD)
              </p>
            </div>

            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono ">
                Quarter 4
              </h6>

              <Image
                src="/terraform.png"
                width="160"
                height="160"
                alt="terraform course inner image 3"
                className="pt-5"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm text-center">
                <strong className="font-bold ">CN-361: </strong>Developing
                Multi-Cloud APIs using CDK for Terraform
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#D9D9D9] rounded-md shadow-md p-16 m-20 mx-64">
        <h1 className="flex justify-center text-[#1E1E1E] text-center font-bold text-2xl font-mono mb-12">
          Ambient Computing and IoT Specialization
        </h1>

        <div className="flex justify-center">
          <div className="flex flex-col items-start mr-8">
            <Image
              src="/iotCourse.jpg"
              width="500"
              height="700"
              alt="IOT course image"
              className="rounded-3xl mt-8"
            />
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono ">
                Quarter 3
              </h6>

              <Image
                src="/iotInner.png"
                width="120"
                height="120"
                alt="iot course inner image 1"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm text-center">
                <strong className="font-bold ">AC-351: </strong>Ambient
                Computing with Voice Assistants and Matter Protocol Devices
              </p>
            </div>

            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono ">
                Quarter 4
              </h6>

              <Image
                src="/rustInner.png"
                width="120"
                height="120"
                alt="rust course inner image 3"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm text-center">
                <strong className="font-bold ">AC-361: </strong>Embedded
                Programming using C and Rust
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#D9D9D9] rounded-md shadow-md p-16 m-20 mx-64">
        <h1 className="flex justify-center text-[#1E1E1E] text-center font-bold text-2xl font-mono mb-12">
          Network Programmability and Automation Specialization
        </h1>

        <div className="flex justify-center">
          <div className="flex flex-col items-start mr-8">
            <Image
              src="/netProgramming.jpg"
              width="500"
              height="500"
              alt="network course image"
              className="rounded-3xl mt-8"
            />
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono ">
                Quarter 3
              </h6>

              <Image
                src="/cisco.png"
                width="150"
                height="150"
                alt="cisco course inner image 1"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm text-center pb-5">
                <strong className="font-bold ">NPA-351: </strong>CCNA 200-301
                Certification
              </p>
            </div>

            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono ">
                Quarter 4
              </h6>

              <Image
                src="/network 2.png"
                width="150"
                height="150"
                alt="network course inner image 3"
                className="pb-4"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm text-center">
                <strong className="font-bold ">NPA-361: </strong>Network
                Programmability and Automation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#D9D9D9] rounded-md shadow-md p-16 m-20 mx-64">
        <h1 className="flex justify-center text-[#1E1E1E] text-center font-bold text-2xl font-mono mb-12">
          Genomics and Bioinformatics Specialization
        </h1>

        <div className="flex justify-center">
          <div className="flex flex-col items-start mr-8">
            <Image
              src="/genomicsCourse.jpeg"
              width="400"
              height="300"
              alt="genomics course image"
              className="rounded-3xl mt-8"
            />
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono pt-5">
                Quarter 3
              </h6>

              <Image
                src="/Biopython.png"
                width="150"
                height="150"
                alt="biopython course inner image 1"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm text-center pb-5">
                <strong className="font-bold ">Bio-351: </strong>Python for
                Biologists
              </p>
            </div>

            <div className="flex flex-col justify-between items-center">
              <h6 className="text-[#041E48] text-md font-bold font-mono pt-5">
                Quarter 4
              </h6>

              <Image
                src="/scikit bio.png"
                width="150"
                height="150"
                alt="scikit bio course inner image 3"
              />

              <p className="text-[#0E091D] text-sm font-mono max-w-sm text-center pb-5">
                <strong className="font-bold ">Bio-361: </strong>Bioinformatics
                with Python
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
