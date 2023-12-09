import React from "react";

import { Button, Img, Input, Text } from "components";

const DaftarMasukPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-roboto gap-2 items-center mx-auto w-full">
        <div className="h-[1033px] md:h-[1567px] md:px-5 relative w-[49%] md:w-full">
          <div className="absolute bg-gray-50 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[247px] w-full">
            <div className="flex md:flex-col flex-row gap-[13px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[69px] items-center justify-start w-[49%] md:w-full">
                <Img
                  className="h-[416px] sm:h-auto object-cover w-full"
                  src="images/img_rectangle8.png"
                  alt="rectangleEight"
                />
                <Img
                  className="h-[150px]"
                  src="images/img_group218.svg"
                  alt="group218"
                />
              </div>
              <div className="flex md:flex-1 flex-col gap-[18px] items-center justify-start md:mt-0 mt-[42px] w-1/2 md:w-full">
                <div className="md:h-[234px] h-[277px] relative w-[92%]">
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[234px] items-center justify-start left-[0] w-[79%]"
                    style={{ backgroundImage: "url('images/img_group2.svg')" }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[234px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group4.svg')",
                      }}
                    >
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[234px] items-center justify-start w-full"
                        style={{
                          backgroundImage: "url('images/img_group2.svg')",
                        }}
                      >
                        <Img
                          className="h-[234px]"
                          src="images/img_group4.svg"
                          alt="left"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[86px] items-center justify-start right-[0] top-[0] w-[30%]"
                    style={{ backgroundImage: "url('images/img_group3.svg')" }}
                  >
                    <Img
                      className="h-[86px]"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  </div>
                </div>
                <Img
                  className="h-[449px] md:h-auto object-cover w-full"
                  src="images/img_rectangle9.png"
                  alt="rectangleNine"
                />
              </div>
            </div>
          </div>
          <Img
            className="absolute bottom-[5%] h-[150px] right-[0]"
            src="images/img_group218.svg"
            alt="group219"
          />
          <Img
            className="absolute bottom-[5%] h-[220px] left-[0] object-cover w-[49%]"
            src="images/img_rectangle10.png"
            alt="rectangleTen"
          />
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[109px] md:px-5 rounded-[12px] w-[51%] md:w-full">
          <div className="flex flex-col items-start justify-start mb-[218px] mt-[163px] w-full">
            <Text
              className="text-base text-black-900"
              size="txtRobotoRomanRegular16"
            >
              Enter E-mail address
            </Text>
            <Input
              name="emailaddress"
              placeholder="Type here..."
              className="leading-[normal] p-0 placeholder:text-gray-500 text-base text-left w-full"
              wrapClassName="mt-1 w-full"
            ></Input>
            <Text
              className="mt-3.5 text-base text-black-900"
              size="txtRobotoRomanRegular16"
            >
              Password
            </Text>
            <Input
              name="emailaddress_One"
              placeholder="Type here..."
              className="leading-[normal] p-0 placeholder:text-gray-500 text-base text-left w-full"
              wrapClassName="mt-1 w-full"
            ></Input>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[511px] sm:min-w-full mt-[38px] text-center text-xl"
              shape="round"
              size="sm"
            >
              Create account
            </Button>
            <Text
              className="mt-[9px] text-base text-black-900"
              size="txtRobotoRomanRegular16"
            >
              <span className="text-black-900 font-roboto text-left font-normal">
                Already an member ?{" "}
              </span>
              <span className="text-blue-A700 font-roboto text-left font-normal">
                Sign in.
              </span>
            </Text>
            <Text
              className="md:ml-[0] ml-[247px] mt-[11px] text-base text-black-900"
              size="txtRobotoRomanRegular16"
            >
              Or
            </Text>
            <div className="flex sm:flex-col flex-row gap-[17px] items-center justify-between mt-[38px] w-full">
              <Input
                name="signinwithgoogle"
                placeholder="Sign In with Google"
                className="!placeholder:text-indigo-500 !text-indigo-500 font-medium leading-[normal] p-0 text-base text-left w-full"
                wrapClassName="flex sm:flex-1 sm:w-full"
                prefix={
                  <Img
                    className="h-[35px] mr-2.5 my-auto"
                    src="images/img_logosgoogleicon.svg"
                    alt="logos:google-icon"
                  />
                }
                shape="round"
                size="xs"
              ></Input>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[247px] rounded"
                leftIcon={
                  <Img
                    className="h-[35px] mr-[9px]"
                    src="images/img_logosfacebook.svg"
                    alt="logos:facebook"
                  />
                }
                color="black_900"
                variant="outline"
              >
                <div className="font-medium leading-[normal] text-base text-left">
                  Sign In with Facebook
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarMasukPage;
