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

  // const customStyles: StylesConfig = {
  //     control: (provided: Record<string, unknown>, state: any) => ({
  //       ...provided,
  //       height: 52,
  //       border: state.isFocused ? "1px solid #ff8b67" : "1px solid #cccccc",
  //       boxShadow: state.isFocused ? "0px 0px 6px #ff8b67" : "none",
  //       // "&": {
  //       //   border: "1px solid #cccccc",
  //       //   boxShadow: "none"
  //       // },
  //       "&:hover": {
  //         border: "1px solid #ff8b67",
  //         boxShadow: "0px 0px 6px #ff8b67"
  //       }
  //       // "&:focus": {
  //       //   border: "1px solid #ff8b67",
  //       //   boxShadow: "0px 0px 6px #ff8b67"
  //       // },
  //       // "&:acitve": {
  //       //   border: "1px solid #ff8b67",
  //       //   boxShadow: "0px 0px 6px #ff8b67"
  //       // }
  //     })
  //   };

  const handelContactForm = (e) => {
    e.preventDefault();
    // console.log('hello', e.target.fullName.value);
    // console.log('hello', e.target.number.value);
    // console.log('hello', e.target.stages.value);
    // console.log('hello', countryValue.label);
  };

  return (
    <div className="px-4 max-w-full px-lg:10 xl:px-[200px] py-5 lg:py-7">
      <div className="shadow-lg px-4 lg:px-16 ">
        <div>
          {/* image and from  */}
          {/* <div className='flex flex-col-reverse lg:flex-row gap-5 lg:justify-between '> */}
          <div className="flex flex-col-reverse lg:flex-row gap-5 py-5 lg:py-10 lg:justify-between items-center ">
            {/* forms */}
            <div className=" mx-auto ">
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
                className="flex flex-col lg:flex-row gap-5"
              >
                {/* first cols */}
                <div className="text-center max-w-full mx-auto">
                  <div>
                    <div>
                      <div class="flex justify-start">
                        <div class="relative max-w-full w-[320px] md:w-[350px] lg:w-[250px] xl:w-[350px] h-[48px]">
                          <input
                            type="text"
                            name="fullName"
                            class="peer  block min-h-[auto] w-full h-full  text-sm rounded border-[1.5px] border-[#888888] bg-transparent py-0 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#888888] dark:placeholder:text-[#888888] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                          <label class="pointer-events-none px-1 text-xs absolute -top-2.5 bg-white bg-transparent left-3 max-w-[350px]  leading-[1.6] text-[#888888] transition-all duration-200 ease-out">
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
                      <div class="relative  border-[1.5px] text-sm rounded border-[#888888] opacity-70 ps-2 mb-3 max-w-full w-[320px] sm:w-[350px] md:w-[350px] lg:w-[280px] xl:w-[350px] h-[48px]">
                        <PhoneInput
                          name="number"
                          className="phoneHeight text-sm flex justify-start h-full align-bottom focus:outline-none"
                          value={value}
                          onChange={setValue}
                        />
                        <label
                          for="exampleFormControlInputText"
                          class="pointer-events-none text-xs absolute -top-5 bg-white px-2 left-2  mb-0 max-w-[350px] origin-[0_0] truncate mt-[10px] leading-[1.6] text-[#888888] transition-all duration-200 ease-out peer-focus:-translate-y-[1.4rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#888888] dark:peer-focus:text-[#888888] dark:peer-focus:bg-white"
                        >
                          Mobile Number
                        </label>
                      </div>
                    </div>

                    <div class="flex justify-center max-w-fit">
                      <div class="relative mb-3 w-[320px] sm:w-[350px] md:w-[350px] lg:w-[280px] xl:w-[350px] h-[48px]">
                        <Select
                          name="stages"
                          styles={style}
                          className="text-[#888888] h-[48px]  w-full hover:bg-white rounded border border-[#888888]"
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
                        <span className="absolute text-xs left-2 -top-2 bg-white px-2 text-[#888888]">
                          Stages
                        </span>
                      </div>
                    </div>

                    <div className="hidden lg:block ">
                      <div className="flex  justify-start my-7">
                        <input
                          value={"Submit"}
                          type="submit"
                          className="text-center cursor-pointer w-[320px] sm:w-[350px] md:w-[350px] lg:w-[280px] xl:w-[350px]  border bg-[#002550] rounded-md font-semibold text-white text-lg p-2"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  2nd cols */}
                <div className="mx-auto">
                  <div>
                    <div class="flex justify-centr">
                      <div class="relative  w-[320px] sm:w-[350px] md:w-[350px] lg:w-[280px] xl:w-[350px] h-[48px]">
                        <input
                          onChange={(e) => setemail(e.target.value)}
                          type="email"
                          name="email"
                          class="peer text-sm block min-h-[auto] w-full h-full rounded border-[1.5px] border-[#888888] bg-transparent py-0 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#888888] dark:placeholder:text-[#888888] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInputText"
                          placeholder="Example label"
                        />
                        <label
                          for="exampleFormControlInputText"
                          class="pointer-events-none text-xs absolute px-2 -top-2.5  left-2  mb-0 max-w-[350px] origin-[0_0] truncate leading-[1.6] text-[#888888] transition-all duration-200 ease-out bg-white"
                        >
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
                    <div class="relative  rounded border-[#888888] mb-3 w-[320px] sm:w-[350px] md:w-[350px] lg:w-[280px] xl:w-[350px] h-[48px]">
                      <Select
                        styles={style}
                        type="text"
                        class="  text-white w-full h-full p-3 rounded  bg-transparent py-5 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear "
                        options={options}
                        value={countryValue}
                        onChange={changeHandler}
                        defaultValue={{ label: "India", value: "India" }}
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: "5px",
                          colors: {
                            ...theme.colors,
                            primary25: "#F2F4F6",
                            // primary: "#f2f4f6",
                            primary: "#F2F4F6",
                            // color: '#fff'
                            neutral80: "#707171", // active text color
                            neutral90: "#707171", // active text color
                          },
                        })}
                      />
                      <label class="pointer-events-none text-xs absolute -top-5 px-2 bg-white left-3  mb-0 max-w-[350px] origin-[0_0] truncate mt-[10px] leading-[1.6] text-[#888888] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.4rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#888888] dark:peer-focus:text-[#888888] dark:peer-focus:bg-white">
                        Country
                      </label>
                    </div>
                  </div>

                  <div className=" lg:hidden ">
                    <div className="flex  justify-start my-7">
                      <input
                        value={"Submit"}
                        type="submit"
                        className="text-center cursor-pointer w-[320px] sm:w-[350px] md:w-[350px] lg:w-[280px] xl:w-[350px]  border bg-[#002550] rounded-md font-semibold text-white text-lg p-2"
                      ></input>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* image */}
            <div className="">
              <img
                className=" w-[360px] xl:w-[447px] mx-auto  lg:mb-0"
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
