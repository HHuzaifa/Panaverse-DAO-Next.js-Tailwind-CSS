import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 ">
      <div>
        <div className="flex pt-8 justify-center">
          <Image
            src="Panaverse Logo.svg"
            width="156"
            height="35"
            alt="footer logo"
          />
        </div>
        <p className="text-white text-sm pb-8 font-light text-center px-96">
          Certified Web 3.0 and Metaverse Developer A One and Quarter Years
          Panaverse DAO Earn as you Learn Program Getting Ready for the Next
          Generation of the Internet
        </p>
        <div className="pb-2">
          <ul className="flex justify-center">
            <li>
              <a
                href="https://www.facebook.com/groups/panaverse"
                target="_blank"
              >
                <Image
                  src="FB-icon.svg"
                  width="40"
                  height="33"
                  alt="facebook logo"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@panaverse/featured"
                target="_blank"
              >
                <Image
                  src="YT-icon.svg"
                  width="40"
                  height="33"
                  alt="youtube logo"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Panaverse_edu" target="_blank">
                <Image
                  src="twitter_icon.svg"
                  width="40"
                  height="33"
                  alt="twitter logo"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/panaverse/"
                target="_blank"
              >
                <Image
                  src="LinkIn_icon.svg"
                  width="40"
                  height="33"
                  alt="linkedin logo"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-black">
          <p className="text-white font-thin text-sm text-center py-1">
            © 2023 Panaverse DAO. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
