'use client'
import Input from "@/components/FormElements/InputComponent";
import Select from "@/components/FormElements/SelectComponent";
import { registrationFormControls } from "@/utils";
const isRegistered = false;
const Register = () => {
  return (
        <div className="bg-white relative">
            <div className="flex flex-col items-center justify-between pt-0 pr-6 pb-0 pl-6 mt-8 mr-auto xl:px-5 lg:flex-row">
                <div className="flex flex-col justify-center items-center w-full pr-8 pl-8 lg:flex-row">
                <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 ">
                    <div className="flex flex-col items-center justify-start pt-6 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                    <p className="w-full text-2xl font-medium text-center font-serif">
                        {isRegistered
                        ? "Registration Successfull !"
                        : "Sign up for an account"}
                    </p>
                    {isRegistered ? (
                        <button
                        className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg rounded
                        text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                        "
                        >
                        Login
                        </button>
                    ):(
                        <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                            {
                                registrationFormControls.map(controlItem => (
                                    <div key={controlItem.id} >
                                        {
                                            controlItem.componentType === 'input' ? 
                                            <Input 
                                                type={controlItem.type}
                                                placeholder={controlItem.placeholder}
                                                label={controlItem.label}
                                            /> : controlItem.componentType === 'select'?
                                            <Select
                                                option={controlItem.options}
                                                label={controlItem.label}
                                            />: null
        
                                        }
                                    </div>
                                    

                                ))
                            }
                        </div>
                    )}
                    <button
                        className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg rounded
                        text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                        "
                        >
                        Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
