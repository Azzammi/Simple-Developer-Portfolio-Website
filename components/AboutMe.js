import React from "react";
import userData from "@constants/data";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <Link
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <Link
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </Link>{" "}
                and I&apos;ll get back. I swear.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I&apos;m looking for a job currently, If you see me as a good
                fit, check my{" "}
                <Link
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </Link>{" "}
                and I&apos;d love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center ">
                <Link
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </p>
                </Link>
              </div>
              <div className="flex flex-row justify-start items-center">
                <Link
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </Link>
              </div>
              <div className="flex flex-row justify-start items-center">
                <Link
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </Link>
              </div>
              <div className="flex flex-row justify-start items-center">
                <Link
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                alt="Javascript"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png"
                alt="PHP"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                alt="HTML"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                alt="CSS"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
                alt="VueJS"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
                alt="Git"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png"
                alt="MySQL"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="https://github-production-user-asset-6210df.s3.amazonaws.com/25181517/276620225-afcf1c98-544e-41fb-bf44-edba5e62809a.png"
                alt="Laravel"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
                alt="ReactJS"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="https://github-production-user-asset-6210df.s3.amazonaws.com/136815194/254798345-5f8c622c-c217-4649-b0a9-7e0ee24bd704.png"
                alt="Next"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
                alt="NodeJS"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="
                https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png"
                alt="Postgre"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="
                https://user-images.githubusercontent.com/25181517/183345125-9a7cd2e6-6ad6-436f-8490-44c903bef84c.png"
                alt="Nginx"
                width={70}
                height={70}
                className="mx-4 my-4"
              />
              <Image
                src="
                https://user-images.githubusercontent.com/25181517/183911547-990692bc-8411-4878-99a0-43506cdb69cf.png"
                alt="Google Cloud"
                width={70}
                height={70}
                className="mx-4 my-4"
              />


              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
