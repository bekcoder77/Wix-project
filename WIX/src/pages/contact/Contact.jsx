import React from "react";

function Contact() {
  return (
    <div>
      <div class="header-2 flex justify-between py-[100px] px-[150px] max-[1440px]:px-3 max-[1440px]:flex-wrap">
        <div class="header-contact">
          <h2 className="text-[48px] py-[20px]">Contact</h2>
          <p className="text-[18px] ">Looking forward to hearing from you</p>

          <h4 className="text-[24px] py-[20px]">phone</h4>
          <p className="text-[18px] ">123-456-7890</p>

          <h4 className="text-[24px] py-[20px]">E-mail</h4>

          <p>perfectstaremail.com</p>
        </div>
        <div class="header-inputs">
          <div class="inputs max-[1440px]:flex-col flex gap-[30px] mt-[20px]">
            <div class="input">
              <p className="text-[22px] ">First name1</p>
              <input
                className="py-3 px-12 bg-white text-black outline-none border-2 rounded-lg"
                type="text"
              />
            </div>
            <div class="input">
              <p className="text-[22px] ">Last name *</p>

              <input
                className="py-3 px-12 bg-white text-black outline-none border-2 rounded-lg"
                type="text"
              />
            </div>
          </div>
          <div class="inputs max-[1440px]:flex-col flex gap-[30px] mt-[20px]">
            <div class="input">
              <p className="text-[22px] ">Subject</p>
              <input
                className="py-3 px-12 bg-white text-black outline-none border-2 rounded-lg"
                type="text"
              />
            </div>
            <div class="input">
              <p className="text-[22px] ">Email *</p>
              <input
                className="py-3 px-12 bg-white text-black outline-none border-2 rounded-lg"
                type="text"
              />
            </div>
          </div>
          <p className="text-[22px] ">Message *</p>

          <div  className="flex gap-7 max-[1440px]:flex-col" >
            <textarea className="bg-white rounded-md py-2 px-3 text-black outline-none" id="t-area" cols="40" rows="5"></textarea>
            <div class="submit transition-all duration-[.5s] ease-in-out  cursor-pointer	 w-[180px] h-[180px] flex items-center justify-center font-medium text-[22px] rounded-[50%] bg-[#E3A63A] border-2 hover:bg-white ">
              <div>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
