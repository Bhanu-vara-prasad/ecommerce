import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex  md:flex-row  flex-col gap-16">
        <img
          src={assets.about_img}
          alt="about image"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            temporibus voluptatibus numquam nisi omnis itaque aspernatur,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            temporibus voluptatibus numquam nisi omnis itaque aspernatur,
            excepturi sed expedita ratione deserunt nobis quaerat commodi velit
            perferendis voluptates voluptate hic reiciendis?
          </p>
          <b className="text-gray-500">
            Our <span className="text-gray-800">Mission</span>
          </b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            temporibus voluptatibus numquam nisi omnis itaque aspernatur,
            excepturi sed expedita ratione deserunt nobis quaerat commodi velit
            perferendis voluptates voluptate hic reiciendis?
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-3 ">
          <b className="text-2xl ">Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non illo
            deserunt assumenda ex, voluptas facilis ipsa facere ducimus
            voluptate est nesciunt perferendis, ratione tempore ipsam quia
            perspiciatis eveniet sint earum.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-3 ">
          <b className="text-2xl ">Convenience:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non illo
            deserunt assumenda ex, voluptas facilis ipsa facere ducimus
            voluptate est nesciunt perferendis, ratione tempore ipsam quia
            perspiciatis eveniet sint earum.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-3 ">
          <b className="text-2xl ">Customer service:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non illo
            deserunt assumenda ex, voluptas facilis ipsa facere ducimus
            voluptate est nesciunt perferendis, ratione tempore ipsam quia
            perspiciatis eveniet sint earum.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
