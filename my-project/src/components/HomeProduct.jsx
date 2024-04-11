import React from "react";
import ProductList from "../layout/ProductList";

function HomeProduct() {
  const data = [
    {
      images: [
        {
          url: "https://s3-alpha-sig.figma.com/img/2305/7910/d190d178c2a7b276e896b9d38b982bf6?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDTvO-e4xZ6xPBRw0q~qFdp3vrM6Nl3s~u~cJgJ1ODq5Xy41rxsuj7k4AvDtil6EiO-OfJRNCLpaEVyeXQq30GmfvH9XlSzytQKGz95z9kK4CoLX6NO-clYnIZvH2wqE4itLCoj0U7mmEqxpNUjjCs~pvet2RKcbT5Psr5eLfkjZ5EmNwzW51nvM43p49pFcv69S1AaNJqGydLnSKG0H3fZTP7Po-MqtPaMl0VL5p7fUViT2Fo3LK9iI4jbXpb4ZhevFD~Kl8ST8-UctU0WGRgxaimdz5r6U8SG~UCjxaaGDlJMxhLQ2Uro-mTDXEw41Xux6qA1G2-S-eqQfS-8Tyg__",
        },
      ],
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/edfd/a1c2/22054dedce3ff32fe480d8fc8eb07474?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGalDQ9WwEN6xxTZXf5Yiej3Ftf0TtaNLMu5WgZ9Yn7G-Rsa4gAAtYk~K7wMhnDxxnv52pKOVgdM7EZrqwhZ~b~u92610djHtMu5EwaZPNogdEP5xy7ghw~2WS-mhqnOT6aoi8kHz9fyYpXd6BUNKTJIqYQ7FVPUaTxLcWeqZ7PxQA7jFDPxLPpDK~N1EAGHmZw0uuvLQfO~9VSwXOYV32dX8wCCbrIdHddeiZ832yUeGH2wYVyOaq0AKGz5wyhIIktrfc711-7A3lkE3A4T89DNRlfPOkd51MiyFRxnnkL0hz7M3i-mytKERcCfY8YDepTnAgLzSz-DibNAqUvxLA__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/4a6a/1016/1217dc07ba1cda4632e93a5851162bcb?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgBMLnknPbqMm-fpVxlh9Jpd3t-JtuyCTAF1oRH1u0dtACfi0ZcI3SrQi2C0WCgSwJXXraCNdr5gsfL-DYLA6VxHPzaxhP0iUl~pEh~O7qFdtZ54qQVNrg5oIHaH3uwazWakj9QSyR2eWiDerTVrKUOGz1ExfYsgHPyWHKdUco~9U8~s9Z~hC9ieAYeybD42YX7vwa~kj6XlKepk0owV6wwjwNpcO30eT-MzI8ON39MylJoyVPJQL4-XDwTs6tRnjAisHkHyJmp7oGx1Md5IK~A0LvhVmgxNyK-mUiZ78V1igmNubbbzUJndW3IgvLJLFkNXEPGHN1CdF2qFCwFY7A__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/74e6/48e4/3f346f3e64ec6890751ec33b3c7f5197?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WANWb-9orfsQ6r7qyGLfWxpT9K2I0maCTW3uZjB91qtzTgAQohU4DSmYuffY3uDPImC8jWNp--2g5r4yQ25OZ6S0XWIy7swATS8dSrPwwPkBgX5ccybY6GF-tAjb52OWFlZL1dxR9il0vVRKTRW7BM3Y3SVL0-yX3DQE4AX2SlsoJlrEoN3lZfoxLuarVgWeChD-wCvUbdpAG71GSyYLSKneFIYM7~t4cDrNZ9zz0o-IHjourIUkM5XZIvsCUsZlmAh66cuWSnZWPma2nDgNlTUUOT5AHOrpivzy5~jOZ3ySxfBkCmKn8jL7kpe3UUWaUWVCj3G7LT5yQGZfp8Lc5Q__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/41ba/1a58/2a6be5d0abdf4716fbac8cd3a73cb266?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gwpbodlCih2k8ZnaP54978PyRIDHTe-62EcCmP3LyP-It5nxF3L-AqccwZDipSmi-QVLFiI2ej1Dl88-YPHPka-tqcIDHi3~60ltN2HgXVT~e6432vL6xQtWI7pC7volcDwmv~X3vX9f8U9dcMVDyaso4tYHmMT56Ozz0580V-V9zZzuu0yqNRVMhH-GRaE5HRef2NVf-Pfnh8PzHjnKw~wfPn0r8Q6zUuBJqf32FiUZGHvw56GZFxgZyXNsDrWagtgZEaPg8NCb7QcIF~L5hnurxgJ3La4kFLBE3hB9AwmbYhuvgAZ-wXheRU2RUBOEOr7ocXd0mIn4dPuYGlFvwg__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/a4b9/d5de/fc9e3b83803619da05903140ffc77947?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SrUlWau9GtnNDGqsxRJUMZngNcioQ3KmQHVaAGYuMVQaog6FjQxlLeVntNIGWPOKs-hcyV9eyrrYKmncjhHf26tGlr5ZJoRxNKVvNpoGNdcU8XduqQ26pBdlRkIZBdQlmRxtG0d0Ql0bd3Q1yIi8p--5~1v11ZvzgoRxdf6guQd0yJ2nGJ9tsriyrlkoS43fKhXGV4A2-2l8rJxTExu11F2HcqNDJdqO1QhuFhEeo5apGpQYhzFBIkkdorsidhVi2Nb9Gsp30ELCDNwez~rN4l6YSTquaSGskf1vlI0Gg69iuz~T~p1veK~801Nh8I-KiyuyEMx6YFHYyKr96Ld5sQ__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/110b/c11c/4432558f247264194359558513a225fe?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8XTrDv4d9ZCvtIufOyA84803oYoqWISIpKyn11M6gYxFPp0aZwGdp2fu1JmMfkX0fFURJLovTO8GQB-lAJDAX3v8N7TjuwVav~PE9VT0qgRMem~CHbSqU36ydmsKvq1T6wh0gy~n5pxZ16kRFCWQQK6pE7GIRuuEcAfKs3o5khUgn~k7SuLLyO0hcodVBmVv5wK~j5qNE0cafHKazzLrHsEjb13hf3yqG6DlOzjd8meF2vxgbBF5LAzP2vqt-d7Dp6vT1HJ6MFrcLK5Ob8IUJAAqgheyDX-Daz~c1mHY8WPV60ze9GQyMmjmmHi0S408kkvVbnZbYCSOrjQayr43A__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/c911/6841/0dcfe4d267b32aaf7b21288f7b9656f2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X47gTnq7ktTOABKIxcILqKc07rSmVTQNroySnUnJEKFuNkMVfjRrg5eqE6CxCprf5LN7FOoj8goSpFbTKchj3yTnrrEjv2cluL1dsP-O12i~9Lw1askpLQYOURDnTebobNUS9nMi6hpZ4M91L9R9AbtNxbFdEI4tEwDa1a5W48DdIbPHRYF1f0sOFL4maK~WayTqMOlqzX6zc~4YAYwjMHSwNZanzXnUeTlsNeF~f~lgyLrFkcl~jjs4z0FRaGh236VHUI~iLJrjweWodfxpkKfiNc4ASM2NicJFWw5XpOQ~ECTGFACh4-FInwHt1De~TQefWXtZZrgE4StCMZrg~A__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
  ];
  return (
    <div className="max-w-[1920px] m-auto pb-20">
      <div className="max-w-[58%] m-auto flex flex-col items-center">
        <div className="text-center flex flex-col gap-[10px] py-20">
          <h4 className="text-xl font-mont font-normal tracking-[0.2px] text-aTag">
            Featured Products
          </h4>
          <h3 className="text-2xl font-mont text-categoryColor font-bold tracking-[1px]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-aTag font-mont tracking-[0.1px]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="max-w-[1350px]">
          <ProductList data={data} />
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
