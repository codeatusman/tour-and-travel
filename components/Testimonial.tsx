"use client";
import Slider from "react-slick";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TESTIMONIAL } from "@/constants";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  var settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="padding-container max-container pt-16 bg-slate-10 relative">
      <h3 className="bold-32 text-center">Testimonial</h3>
      <p className="text-center max-w-lg m-auto text-gray-30 py-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        nemo quia placeat blanditiis neque odio assumenda cons
      </p>
      <Slider {...settings}>
        {TESTIMONIAL.map((testimonial) => (
          <TestimonialItem
            key={testimonial.desc}
            des={testimonial.desc}
            title={testimonial.title}
            profession={testimonial.profession}
            URL={testimonial.URL}
          />
        ))}
      </Slider>
    </section>
  );
};

type TestimonialItem = {
  des: string;
  URL: string;
  title: string;
  profession: string;
};

const TestimonialItem = ({ des, title, profession, URL }: TestimonialItem) => {
  return (
    <div className="mx-4 my-12 relative px-8 py-12 rounded-md bg-white z-10">
      <span className="text-slate-10 text-9xl absolute -top-4 right-4 -z-10">
        <RiDoubleQuotesR />
      </span>
      <p className="text-gray-50 text-center">{des}</p>
      <div className="flexCenter gap-4 mt-8">
        <Image
          src={URL}
          alt="user"
          height={55}
          width={55}
          className="rounded-full"
        />
        <div>
          <div className="medium-16">{title}</div>
          <div className="text-gray-20 regular-14">{profession}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
