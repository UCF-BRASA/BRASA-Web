import { type } from "os";
import { NextPage } from "next";
import Link from "next/link";
import { FormEvent, useState, useRef, useEffect } from 'react';

interface Props {
    windowWidth: number;
    windowHeight: number;
    isMobile : boolean;
}

const SignIn: NextPage<Props> = ({isMobile}) => {


    /*const [password, setPassword] = useState<string>('');
    const [confPassword, setConfPassword] = useState<string>('');
    const [compare, setCompare] = useState<boolean>(false);*/
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputFirstName = useRef<HTMLInputElement>(null);
    const inputLastName = useRef<HTMLInputElement>(null);
    const inputGender = useRef<HTMLSelectElement>(null);
    const inputDob = useRef<HTMLInputElement>(null);
    const inputCos = useRef<HTMLInputElement>(null);
    const inputGrade = useRef<HTMLSelectElement>(null);
    const inputCity = useRef<HTMLInputElement>(null);
    const inputPass = useRef<HTMLInputElement>(null);
    const inputConfPass = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: any) =>{

        e.preventDefault();
        /*if(password == confPassword){
            setCompare(true);
            console.log('Passwords match')
        } else {
            setCompare(false);
            console.log('Passwords do not match')
        }*/

        const emaill = inputEmail.current?.value;
        const firstname = inputFirstName.current?.value;
        const lastname = inputLastName.current?.value;
        const gender = inputGender.current?.value;
        const dateOfBirth = inputDob.current?.value;
        const course_of_study= inputCos.current?.value;
        const grade = inputGrade.current?.value;
        const city = inputCity.current?.value;
        const password = inputPass.current?.value;
        const confPassword = inputConfPass.current?.value;

        console.log(emaill)
        console.log(firstname)
        console.log(lastname)
        console.log(gender)
        console.log(dateOfBirth)
        console.log(course_of_study)
        console.log(grade)
        console.log(city)
        console.log(password)
        console.log(confPassword)

    }
    
    
    return(
        <section>
            {isMobile ? (
                <main></main>
            ) : (
                <main className="h-full w-full bg-[url('/static/sign_up/background_pic.jpg')] bg-cover bg-center opacity-90">
                    
                        <div className="pt-60 pb-60">
                        
                            <form onSubmit={handleSubmit} className="pt-6 h-full w-1/2 ml-[25%] container shadow-xl 
                            mt-auto rounded-[5rem] border-main-brasa-blue border-solid border-8 bg-white" >
                                <h3 className="pt-2 text-white font-bold text-center text-[3rem] tracking-[0.20em]">Sign-Up</h3>
                                <div className="flex flex-col m-12">
                                    <label htmlFor="email" className="pt-2 pl-4 text-white font-bold">Email</label>
                                    <input type="email" ref={inputEmail} placeholder={"Enter your email address"} className="text-xs
                                    bg-white placeholder-gray-500 rounded-full px-2 h-[3rem] w-full border-main-brasa-blue border-solid border-4"/>
                                </div>

                                <div className="flex flex-row w-full mx-12 space-x-[1rem]">
                                    <div className="flex flex-col">
                                        <label htmlFor="firstname" className="pt-2  text-white pl-4 font-bold">First Name</label>
                                        <input type="text" ref={inputFirstName} placeholder={"Enter your First Name"} className="text-xs placeholder-gray-500
                                        bg-white rounded-full px-2 h-[3rem] w-[18rem] border-main-brasa-blue border-solid border-4"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="lastname" className="pt-2 pl-4 text-white font-bold">Last Name</label>
                                        <input type="text" ref={inputLastName} placeholder={"Enter your Last Name"} className="text-xs placeholder-gray-500
                                        bg-white rounded-full px-2 h-[3rem] w-[18rem] border-main-brasa-blue border-solid border-4"/>
                                    </div>
                                </div>  

                                <div className="flex flex-row w-full m-12 space-x-[1rem]">
                                    <div className="flex flex-col">
                                        <h1 className="pt-2 pl-4 text-white font-bold">Gender</h1>
                                        <label htmlFor="gender"></label>
                                        <select ref={inputGender} className=" bg-white rounded-full font-bold px-2 h-[3rem] w-[18rem] 
                                        border-main-brasa-blue border-solid border-4 text-sm">
                                            <option value = "Man">Man</option>
                                            <option value = "Woman">Woman</option>
                                            <option value = "Non-binary">Non-Binary</option>
                                            <option value = "Other">Other</option>
                                            <option value = "Prefer Not to Say">Prefer Not to Say</option>
                                        </select> 
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="dob" className="pt-2 pl-4 text-white font-bold">Date of Birth</label>
                                        <input type="date" ref={inputDob} placeholder={"Enter your Last Name"} className="text-xs
                                        bg-white rounded-full px-2 h-[3rem] w-[18rem] border-main-brasa-blue border-solid border-4"/>
                                    </div>


                                </div>  

                                <div className="flex flex-col m-12">
                                    <label htmlFor="cos" className="pt-2 pl-4 text-white font-bold">Course of Study</label>
                                    <input type="text" ref={inputCos} placeholder={"Enter your course of study"} className="text-xs placeholder-gray-500
                                    bg-white rounded-full px-2 h-[3rem] w-full border-main-brasa-blue border-solid border-4"/>
                                </div>

                                <div className="flex flex-row w-full m-12 space-x-[1rem]">
                                    <div className="flex flex-col">
                                        <p className="pt-2 pl-4 text-white font-bold">School Year</p>
                                        <label htmlFor="grade"></label>
                                        <select ref={inputGrade} className=" bg-white rounded-full font-bold px-2 h-[3rem] w-[18rem]
                                        border-main-brasa-blue border-solid border-4 text-sm">
                                            <option value = "Freshman">Freshman</option>
                                            <option value = "Sophomore">Sophomore</option>
                                            <option value = "Junior">Junior</option>
                                            <option value = "Senior">Senior</option>
                                            <option value = "Grad">Graduate</option>
                                        </select> 
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="pt-2 text-white pl-4 font-bold">Origin City</p>
                                        <input type="text" ref={inputCity} placeholder={"Enter your origin city"} className="text-xs placeholder-gray-500
                                        bg-white rounded-full px-2 h-[3rem] w-[18rem] border-main-brasa-blue border-solid border-4"/>
                                    </div>
                                </div>  
                                
                                <div className="flex flex-col m-12">
                                    <p className="pt-2 pl-4 text-white font-bold">Password</p>
                                    <input type="password" ref={inputPass} /*onChange={(e)=> setPassword(e.target.value)} */ placeholder={"Enter your password"} className="text-xs
                                    placeholder-gray-500 bg-white rounded-full px-2 h-[3rem] w-full border-main-brasa-blue border-solid border-4"/>
                                </div>

                                <div className="flex flex-col m-12">
                                    <p className="pt-2 pl-4 text-white font-bold">Confirm Password</p>
                                    <input type="password" ref={inputConfPass}/*onChange={(e)=> setConfPassword(e.target.value)}*/ 
                                    placeholder={"Confirm your password"} className="text-xs placeholder-gray-500
                                    bg-white rounded-full px-2 h-[3rem] w-full border-main-brasa-blue border-solid border-4"/>
                                </div>

                                <input type="submit" className="button bg-main-brasa-blue text-xs text-white mb-8 py-3 px-6 
                                rounded-full ml-[18rem] hover:cursor-pointer" /> 
                            
                            </form>
                        </div>
                   

                </main>
            )}
        </section>
    );
};

export default SignIn;
