"use client"

import { PageInfo } from "@/typings";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
    pageInfo: PageInfo
}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}
function ContactMe({ pageInfo }: Props) {
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const { register, handleSubmit, formState: {  }, reset } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        if (!data.name) {
            setErrors({
                ...errors,
                name: "This field is required"
            })
            return;
        }
        if (!data.email) {
            setErrors({
                ...errors,
                email: "This field is required"
            })
            return;
        }
        if (!data.subject) {
            setErrors({
                ...errors,
                subject: "This field is required"
            })
            return;
        }
        if (!data.message) {
            setErrors({
                ...errors,
                message: "This field is required"
            })
            return;
        }

        await axios.post("/api/email", data);
        
reset()

    }

    console.log(errors)
  return (
      <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>CONTACTEZ-NOUS</h3>
          
          <div className="flex flex-col space-y-18">
              <div className="space-y-2 mt-4 mb-4">
                  <div className="flex items-center space-x-5 justify-center">
                      <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                      <p className="text-lg lg:text-2xl">{pageInfo.phoneNumber}</p>
                  </div>
                  <div className="flex items-center space-x-5 justify-center">
                      <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                      <p className="text-lg lg:text-2xl">{pageInfo.email}</p>
                  </div>
                  <div className="flex items-center space-x-5 justify-center">
                      <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                      <p className="text-lg lg:text-2xl">{pageInfo.address}</p>
                  </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                  <div className="flex flex-col lg:flex-row lg:space-x-2 gap-2 lg:gap-0">
                      <div className="flex flex-col">
                      <input {...register("name")} placeholder="Name" className="contactInput" type="text" onChange={() => {
                      setErrors({
                          ...errors,
                          name: ""
                      })
                  }}/>
                      {errors.name && <span>{errors.name}</span>}
                      </div>
                      <div className="flex flex-col">
                      <input {...register("email")} placeholder="Email" className="contactInput" type="email" onChange={() => {
                      setErrors({
                          ...errors,
                          email: ""
                      })
                  }}/>
                       {errors.email && <span>{errors.email }</span>}
                      </div>
                  </div>
                  <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" onChange={() => {
                      setErrors({
                          ...errors,
                          subject: ""
                      })
                  }}/>
                  {errors.subject && <span>{errors.subject }</span>}
                  <textarea {...register("message")} placeholder="Message" className="contactInput" onChange={() => {
                      setErrors({
                          ...errors,
                          message: ""
                      })
                  }}/>
                  {errors.message && <span>{errors.message }</span>}
                  <button className="bg-[#343332] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
              </form>
          </div>
    </div>
  )
}

export default ContactMe