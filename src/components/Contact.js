import React, { useMemo, useState } from "react";
import image from "../asset/announcement-pana.png";
import * as te from "tw-elements";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// countryList
import Select from "react-select";
import countryList from "react-select-country-list";

const Contact = () => {
  const [value, setValue] = useState();
  const [name, setName] = useState({});
  const [email, setemail] = useState({});
  // console.log(email.length);

  const [countryValue, setCountryValue] = useState();
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (countryValue) => {
    setCountryValue(countryValue);
  };

  const options1 = [
    { value: "I am still searching", label: "I am still searching" },
    {
      value: "I have booked but registration is not done",
      label: "I have booked but registration is not done",
    },
    {
      value: "I have registered and taken possession",
      label: "I have registered and taken possession",
    },
    {
      value: "I am interested in selling",
      label: "I am interested in selling",
    },
  ];
  const CustomStyle = {
    option: (base, state) => {
      let backgroundColor = "white";

      if (state.isSelected) {
        backgroundColor = "red";
      }

      if (state.isFocused) {
        backgroundColor = "blue";
      }

      return {
        ...base,
        backgroundColor,
      };
    },
  };
  const style = {
    control: (base, state) => ({
      ...base,
      // border: "null",
      border: "1.5px solid #888888",
      borderRedius: "5px",
      // This line disable the blue border
      boxShadow: "none",
      // outLine: "none",

      "&:hover": {
        border: "null",
        boxShadow: "null",
      },
      "&:focus": {
        border: "null",
        boxShadow: "null",
      },
    }),
  };

  const handelContactForm = (e) => {
    e.preventDefault();
    console.log("hello", e.target.fullName.value);
    console.log("hello", e.target.number.value);
    console.log("hello", e.target.stages.value);
    console.log("hello", countryValue.label);
  };

  return (
    <div className=" max-w-full lg:px-10 xl:px-[100px] 2xl:px-[200px] py-5 lg:py-7">
      <div className="shadow-lg px-4 lg:px-16 ">
        <div>
          {/* image and from  */}
          {/* <div className='flex flex-col-reverse lg:flex-row gap-5 lg:justify-between '> */}
          <div className="flex flex-col-reverse lg:flex-row gap-5  xl:gap-[60px] lg:py-10 lg:justify-between items-center ">
            {/* forms */}
            <div className=" mx-auto w-cal()">
              <div className="text-start">
                <h2 className=" text-[#1A1A1A] font-semibold text-xl pb-5 lg:text-2xl ">
                  Get In Touch With Us To Connect
                </h2>
                <p className="text-[#1A1A1A] font-semibold py-5 pt-0 hidden lg:block">
                  Contact Us
                </p>
              </div>

              <form
                onSubmit={handelContactForm}
                className="form max-w-full lg:flex flex-col  lg:flex-row gap-5"
              >
                {/* first cols */}
                <div className="text-center max-w-full  mx-auto">
                  <div>
                    <div>
                      <div class="flex justify-start">
                        <div class="relative opacity-60 min-w-full  w-[300px] md:w-[350px] lg:w-[280px] 2xl:w-[350px] h-[48px]">
                          <input
                            autocomplete="false"
                            type="text"
                            name="fullName"
                            class="peer  block min-h-[auto] w-full h-full  text-sm rounded border-[1.5px] border-[#888888] bg-transparent py-0 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#888888] dark:placeholder:text-[#888888] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                          <label class="pointer-events-none px-1 text-xs absolute -top-2.5 bg-white bg-transparent left-5 max-w-[350px]  leading-[1.6] text-[#888888] transition-all duration-200 ease-out">
                            Full name
                          </label>
                        </div>
                      </div>
                      <p
                        className={`mb-7 text-left text-blue opacity-40 ${
                          email?.length >= 5 &&
                          name?.length <= 50 &&
                          "lg:pb-[25px]"
                        }`}
                      >
                        {name?.length >= 50 && "Not more than 50 characters"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div class="numberinput flex justify-start mb-7">
                      <div class="relative  border-[1.5px] text-sm rounded border-[#888888] opacity-60 ps-2 mb-3 min-w-full w-[300px] md:w-[350px] lg:w-[280px] 2xl:w-[350px] h-[48px]">
                        <PhoneInput
                          autocomplete="false"
                          name="number"
                          className="phoneHeight text-sm flex justify-start h-full align-bottom focus:outline-none"
                          value={value}
                          onChange={setValue}
                        />
                        <label
                          for="exampleFormControlInputText"
                          class="pointer-events-none text-xs absolute -top-5 bg-white px-2 left-5  mb-0 max-w-[350px] origin-[0_0] truncate mt-[10px] leading-[1.6] text-[#888888] transition-all duration-200 ease-out peer-focus:-translate-y-[1.4rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#888888] dark:peer-focus:text-[#888888] dark:peer-focus:bg-white"
                        >
                          Mobile Number
                        </label>
                      </div>
                    </div>

                    <div class="flex stage justify-center min-w-full">
                      <div class="relative mb-3 min-w-full w-[300px] md:w-[350px] lg:w-[280px] 2xl:w-[350px] h-[48px]">
                        <Select
                          name="stages"
                          styles={style}
                          className="text-[#888888] h-[48px]   w-full hover:bg-white rounded border-[1.5px] border-[#888888]"
                          options={options1}
                          defaultValue={{
                            label: "I have booked but registration is not done",
                            value: "I have booked but registration is not done",
                          }}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: "5px",
                            colors: {
                              ...theme.colors,
                              primary25: "#F2F4F6",
                              // primary: "#f2f4f6",
                              primary: "#999",
                              // color: '#fff'
                              neutral80: "#707171", // active text color
                              neutral90: "#707171", // active text color
                            },
                          })}
                        />
                        <span className="absolute text-xs left-5 -top-2 bg-white px-2 text-[#888888]">
                          Stages
                        </span>
                      </div>
                    </div>

                    <div className="hidden lg:block ">
                      <div className="flex  justify-start my-7">
                        <input
                          value={"Submit"}
                          type="submit"
                          className="text-center cursor-pointer min-w-full w-[350px] md:w-[350px] lg:w-[280px] 2xl:w-[350px] h-[48px]  border bg-[#002550] rounded-md font-semibold text-white text-lg p-2"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  2nd cols */}
                <div className="mx-auto mt-5 lg:mt-0">
                  <div>
                    <div class="flex justify-centr">
                      <div class="relative opacity-60 min-w-full w-[300px] md:w-[350px] lg:w-[280px] 2xl:w-[350px] h-[48px]">
                        <input
                          autocomplete="false"
                          onChange={(e) => setemail(e.target.value)}
                          type="email"
                          name="email"
                          class=" text-sm bg-white bg-inherit  min-h-[auto] w-full h-full rounded border-[1.5px] border-[#888888]  py-0 px-3 leading-[1.6] outline-none transition-all duration-200  "
                        />
                        <label class="pointer-events-none  bg-transparent text-xs absolute px-2 -top-2.5  left-5  mb-0 max-w-[350px] origin-[0_0] truncate leading-[1.6] text-[#888888] transition-all duration-200 ease-out bg-white">
                          Email address
                        </label>
                      </div>
                    </div>
                    <p className="mb-7 text-left text-blue opacity-60">
                      {email?.length >= 5 &&
                        "Please enter a valid email address"}
                    </p>
                  </div>
                  <div class="flex justify-start mb-7">
                    <div class="relative rounded border-[#888888] mb-3 min-w-full w-[300px] md:w-[350px] lg:w-[280px] 2xl:w-[350px] h-[48px]">
                      <Select
                        styles={style}
                        type="text"
                        class="  text-white w-full h-full p-3 rounded bg-transparent py-5 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear "
                        options={options}
                        style={CustomStyle}
                        value={countryValue}
                        onChange={changeHandler}
                        defaultValue={{ label: "India", value: "India" }}
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: "5px",
                          colors: {
                            ...theme.colors,
                            primary25: "#F2F4F6",
                            primary: "#707171",
                            neutral80: "#707171", // active text color
                            neutral90: "#707171", // active text color
                          },

                          option: (provided, state) => ({
                            ...provided,
                            color: "#707171",
                            backgroundColor: state.isSelected ? "#707171" : "",
                            "&:hover": {
                              backgroundColor: state.isSelected
                                ? "#707171"
                                : "#707171",
                            },
                            option: (provided) => ({
                              ...provided,
                              color: "red",
                            }),
                            control: (provided) => ({
                              ...provided,
                              color: "red",
                            }),
                            singleValue: (provided) => ({
                              ...provided,
                              color: "black",
                            }),
                          }),
                        })}
                      />
                      <label class="pointer-events-none text-xs absolute -top-5  left-5  px-2 bg-white mb-0 max-w-[350px] origin-[0_0] truncate mt-[10px] leading-[1.6] text-[#888888] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.4rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#888888] dark:peer-focus:text-[#888888] dark:peer-focus:bg-white">
                        Country
                      </label>
                    </div>
                  </div>

                  <div className=" lg:hidden ">
                    <div className="flex  justify-start my-7">
                      <input
                        value={"Submit"}
                        type="submit"
                        className="text-center cursor-pointer  min-w-full w-[300px] md:w-[350px] lg:w-[280px] 2xl:w-[350px] h-[48px] border bg-[#002550] rounded-md font-semibold text-white text-lg p-2"
                      ></input>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* image */}
            <div className="max-w-full md:w-[350px] 2xl:w-[557px]">
              <img
                className="max-w-full rounded-md md:w-[300px] 2xl:w-[447px] mx-auto  lg:mb-0"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
