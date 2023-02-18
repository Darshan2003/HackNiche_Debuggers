import React, { useEffect } from 'react'
import sports from "../assets/sports_logo.jpeg"
import business from "../assets/business.jpeg"
import entertainment from "../assets/entertainment.jpg"
import politics from "../assets/politics.jpg"
import food from "../assets/food.jpg"
import health from "../assets/health.jpg"
import science from "../assets/science.jpg"
import tech from "../assets/technology.jpg"
import world from "../assets/world.jpg"
import env from "../assets/environment.jpg"
import { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { backendUrl } from '../definition'

const Genre = () => {

   
    const navigate = useNavigate();
    let location = useLocation();
    
    if(!location.state)
    {
        if(!location.state.email)
        {
            navigate("/",{})
    }
    }

    const [sportsVar,setSportsVar] = useState(false);
    const [businessVar,setBusinessVar] = useState(false);
    const [entertainmentVar,setEntertainmentVar] = useState(false);
    const [politicsVar,setPoliticsVar] = useState(false);
    const [foodVar,setFoodVar] = useState(false);
    const [healthVar,setHealthVar] = useState(false);
    const [scienceVar,setScienceVar] = useState(false);
    const [technologyVar,setTechnologyVar] = useState(false);
    const [worldVar,setWorldVar] = useState(false);
    const [environmentVar,setEnvironmentVar] = useState(false);

    

    const submit = async () =>{
        let pref = []
        
        if(sportsVar)
        {
            pref.push("sports");
        }
        
        if(businessVar)
        {
            pref.push("business");
        }

        
        if(entertainmentVar)
        {
            pref.push("entertainment");
        }
        if(politicsVar)
        {
            pref.push("politics");
        }
        if(foodVar)
        {
            pref.push("food");
        }
        if(healthVar)
        {
            pref.push("health");
        }
        if(scienceVar)
        {
            pref.push("science");
        }
        if(technologyVar)
        {
            pref.push("technology");
        }
        if(worldVar)
        {
            pref.push("world");
        }

        if(environmentVar)
        {
            pref.push("environment");
        }

        const formData = {
            email : location.state.email,
            preference : pref
        }

         
        try {
            let res = await axios.post(
              `${backendUrl}/api/personalization/createuserpreference`,
              formData
            );

            console.log(res);
           if (res.data.SUCCESS == "TRUE") {
                      setTimeout( () => {
                      navigate('/',{state:{email:location.state.email}})
                  }, 1000 );
              }
              
            
          } catch (ex) {
              console.log(ex);
          }
        
    }
    
    return (
        <div

            style={{
                fontFamily: 'Medium'
            }}

            className='flex justify-center items-center '
        >

            <div className='mt-12 justify-center items-center space-y-5'>
                {/* <img
                        className='object-contain w-28 h-28 cursor-pointer rounded-full border border-black '
                        src={logo} alt="logo" /> */}
                <h1 className='text-center text-4xl mb-10'>Please select your preferences</h1>
                <div className='flex flex-col justify-center items-start space-y-5'>

                    <div className="flex flex-wrap justify-center">
                        <button >
                            <div id="sports" className={"block m-5 p-6 rounded-lg shadow-lg max-w-sm transform transition duration-500 hover:scale-110 hover:bg-gray-300 " + ( sportsVar?'bg-green-600':'')}
                          

                            onClick={(event) => {
                               setSportsVar(sportsVar?false:true);
                            }}
                            
                            >
                                <img
                                    className='w-28 object-contain h-28 cursor-pointer '
                                    src={sports} alt="logo"

                                />
                                <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Sports</h5>
                            </div>
                        </button>
                        <button>
                            <div id="business" className={"block m-5 p-6 rounded-lg shadow-lg max-w-sm transform transition duration-500 hover:scale-110 hover:bg-gray-300 "+ ( businessVar?'bg-green-600':'')}
                            onClick={(event) => {
                                setBusinessVar(businessVar?false:true);
                                }}
                            
                            >
                                <img
                                    className='w-28 object-contain w-28 h-28 cursor-pointer'
                                    src={business} alt="logo" />
                                <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Business</h5>
                            </div>
                        </button>
                        <button>
                            <div id="entertainment" className={"block m-5 p-6 rounded-lg shadow-lg max-w-sm transform transition duration-500 hover:scale-110 hover:bg-gray-300 " + (entertainmentVar?'bg-green-600':'')}
                            onClick={(event) => {
                                setEntertainmentVar(entertainmentVar?false:true)}}
                            
                            >
                                <img
                                    className='w-28 object-contain w-28 h-28 cursor-pointer'
                                    src={entertainment} alt="logo" />
                                <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Entertainment</h5>
                            </div>
                        </button>
                        <button>
                            <div id="politics" className={"block m-5 p-6 rounded-lg shadow-lg max-w-sm transform transition duration-500 hover:scale-110 hover:bg-gray-300 "+ (politicsVar ? 'bg-green-600' : '')}
                            onClick={(event) => {
                               setPoliticsVar(politicsVar?false:true)
                            }}
                            >
                                <img
                                    className='w-28 object-contain w-28 h-28 cursor-pointer'
                                    src={politics} alt="logo" />
                                <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Politics</h5>
                            </div>
                        </button>
                        <button>
                            <div id="food" className={"block m-5 p-6 rounded-lg shadow-lg max-w-sm transform transition duration-500 hover:scale-110 hover:bg-gray-300 "+(foodVar?'bg-green-600':'')}
                            onClick={(event) => {
                                setFoodVar(foodVar?false:true)}}
                            >
                                <img
                                    className='w-28 object-contain w-28 h-28 cursor-pointer'
                                    src={food} alt="logo" />
                                <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Food</h5>
                            </div>
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <button>
                            <div id="health" className={"block m-5 p-6 rounded-lg shadow-lg max-w-sm transform transition duration-500 hover:scale-110 hover:bg-gray-300 " + (healthVar?'bg-green-600':'')}
                            onClick={(event) => {
                                setHealthVar(healthVar?false:true)
                            }}
                            
                            >
                                <img
                                    className='w-28 object-contain w-28 h-28 cursor-pointer'
                                    src={health} alt="logo" />
                                <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Health</h5>
                            </div>
                        </button>
                        <button>
                            <div id="science" className={"block m-5 p-6 rounded-lg shadow-lg max-w-sm transform transition duration-500 hover:scale-110 hover:bg-gray-300 "+ (scienceVar?'bg-green-600':'')}
                            onClick={(event) => {
                                setScienceVar(scienceVar?false:true)    
                            }}
                            >
                                <img
                                    className='w-28 object-contain w-28 h-28 cursor-pointer '
                                    src={science} alt="logo" />
                                <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Science</h5>
                            </div>
                        </button>
                        <button>
                            <div id="tech" className={"block m-5 p-6 rounded-lg shadow-lg max-w-sm transform transition duration-500 hover:scale-110 hover:bg-gray-300 " + (technologyVar?'bg-green-600':'')}
                            onClick={(event) => {
                                setTechnologyVar(technologyVar?false:true)    
                            }}
                            >
                                <img
                                    className='w-28 object-contain w-28 h-28 cursor-pointer'
                                    src={tech} alt="logo" />
                                <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Technology</h5>
                            </div>
                        </button>
                        <button>
                            <div id="world" className={"block m-5 p-6 rounded-lg shadow-lg  max-w-sm transform transition duration-500 hover:scale-110 hover:bg-gray-300 " + (worldVar?'bg-green-600':'')}
                            onClick={(event) => {
                                setWorldVar(worldVar?false:true)
                            }}
                            >
                                <img
                                        className='w-28 object-contain w-28 h-28 cursor-pointer'
                                src={world} alt="logo" />
                                <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">World</h5>
                            </div>
                        </button>
                        <button>
                            <div id="env" className={"block m-5 p-6 rounded-lg shadow-lg  max-w-sm transform transition duration-500 hover:scale-110 hover:bg-gray-300 " + (environmentVar?'bg-green-600':'')}
                            onClick={(event) => {
                               setEnvironmentVar(environmentVar?false:true)}}
                            >
                                <img
                                    className='w-28 object-contain h-28 cursor-pointer'
                                    src={env} alt="logo" />
                                <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Environment</h5>
                            </div>
                        </button>
                    </div>

                    <div className="flex flex-wrap mx-auto justify-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded-full"
                    onClick={submit}
                    >
                    Submit
                    </button>
                    </div>



                    {/* Sign Up Link */}
                    {/* <h1 className='text-gray-500'><Link to="/signup">Not a member?</Link></h1> */}
                    {/* <h1 className='underline'> <Link to="/signup">Join us</Link></h1> */}
                </div>
            </div>
        </div>
    )
}

export default Genre