import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom"

function Trending1() {
    return (
        <div className=' relative h-screen w-screen'>
            {/* Wrapper div  */}
            <div className='flex justify-center items-center space-x-12'>
                <div className='space-y-4'>
                    <h1 className='text-2xl' style={{
                        fontFamily: 'Medium'
                    }}>Headlines</h1>
                    <NavLink
                        to={
                            '/article'
                        }

                        state={{
                            title: 'Tesla Recalls 3.6 Lakh Vehicles Over Self- Driving Software Glitch',
                            desc: `New York: Tesla is recalling nearly 363,000 electric vehicles because of problems with their driver-assistance technology that heighten crash risk, according to a US regulatory announcement seen by AFP Thursday.
                            The recall affects a range of Model S, Model X, Model 3 and Model Y Tesla autos from between 2016 and 2023, equipped with "Full Self-Driving Beta" technology, said a National Highway Traffic Safety Administration notice.
                            
                            To remedy the problem, Tesla will release a software update that can be implemented remotely.
                            
                            Problems with Tesla's FSD Beta system mean cars could undertake maneuvers that "could potentially infringe upon local traffic laws or customs, which could increase the risk of a collision if the driver does not intervene," said an NHTSA notice.
                            
                            The driver-assistance system "may allow the vehicle to act unsafe around intersections" by not coming to a complete stop at a stop sign, traveling straight in a turn-only lane or running an orange light, NHTSA said in a letter to Tesla.
                            
                            The system also "may respond insufficiently to changes in posted speed limits," the NHTSA letter said.
                            
                            Tesla shares fell around five percent following the announcement.
                            
                            The company's Chief Executive Elon Musk downplayed the setback on Twitter, agreeing with a user who said the term "recall" should not be used for problems that can be addressed without significant repair.
                            
                            "The word 'recall' for an over-the-air software update is anachronistic and just flat wrong!" Musk wrote.
                            
                            The action comes as US regulators investigate Tesla's driver assistance programs on a number of fronts.
                            
                            Last month, Tesla disclosed that the Department of Justice opened an investigation into its driver-assistance program. That is on top of an ongoing NHTSA review of Tesla's "Autopilot" following several safety incidents.
                            
                            Musk has aggressively touted Tesla's driver-assistance programs, which have not progressed as quickly as he said they would.`,
                            image: 'https://c.ndtvimg.com/2021-07/jfi112a8_tesla-generic_625x300_31_July_21.jpg'
                        }}>
                        <div className='flex flex-col justify-center items-center space-y-4'>
                            <img className='w-[500px] h-[250px] object-cover rounded-lg shadow-lg' src="https://c.ndtvimg.com/2021-07/jfi112a8_tesla-generic_625x300_31_July_21.jpg" alt="" />
                            <h1 className='' style={{
                                fontFamily: 'Medium'
                            }}>Tesla Recalls 3.6 Lakh Vehicles Over Self- Driving Software Glitch</h1>
                        </div>
                    </NavLink>

                    <NavLink
                        to={
                            '/article'
                        }
                        state={{
                            title: "Vasseur reveals 'adjustments' made after Ferrari strategy issues",
                            desc: `Frederic Vasseur admits that "small adjustments" have been made at Ferrari after looking into the team's strategy errors during 2022.

                            The Frenchman joined the squad from Alfa Romeo ahead of the 2023 season as their new Team Principal and General Manager, following Mattia Binotto's resignation in December.
                            
                            Having previously signalled an intention to investigate the reasons behind the Scuderia's much-publicised issues with strategy, Vasseur gave an update on the changes that have been made at the launch of Ferrari's 2023 car, the SF-23.
                            
                            "We make some small adjustments," Vasseur told media, including RacingNews365.com.
                            
                            "You see just the visible part of the iceberg. When you spoke about strategy, you're speaking about [the] strategist. Strategy is not just one person pushing on a button; it's software, it's the team at the factories.
                            
                            "It's a process [involving different] people, and so it's a complete picture, it's not about one person."
                            
                            How Ferrari will try to improve
Beyond the strategy, Vasseur feels that it is important for the team to continually focus on areas where they can improve.

"I think it's the DNA of the sport that you have to always try to improve on every single area," he explained.

"It's not linked to Ferrari or to another team. We always have to try to do a better job tomorrow than today.

"You spoke about strategy or tyre management, but it's true everywhere. Even if we fix the issue for the next five races, we'll be more than keen to continue to improve and to do a better job.

"If we win in Bahrain or if we lose in Bahrain, it won't be the end of the championship. I think that we have to keep this focus and to keep this mindset that the championship will be long.

"[We need to have the mindset to] improve on every single area, to be never happy with what you have. We have to keep this approach."
                            
                            `,
                            image: 'https://cdn.racingnews365.com/2022/Leclerc/_1125x633_crop_center-center_85_none/8143521/FiAtfG4XoAAlG5.webp?v=1668956734'
                        }}>


                        <div className='flex flex-col justify-center items-center space-y-4'>
                            <img className='w-[500px] h-[250px] object-cover rounded-lg  shadow-lg' src="https://cdn.racingnews365.com/2022/Leclerc/_1125x633_crop_center-center_85_none/8143521/FiAtfG4XoAAlG5.webp?v=1668956734" alt="" />
                            <h1 className='' style={{
                                fontFamily: 'Medium'
                            }}>Vasseur reveals 'adjustments' made after Ferrari strategy issues</h1>
                        </div>
                    </NavLink>

                </div>
                {/* First div */}

                <NavLink
                    to={
                        '/article'
                    }
                    state={{
                        title: "8 Things to consider for photography",
                        desc: `8 Portrait Photography Tips
                        A DSLR or mirrorless digital camera lets you manipulate the different aspects of your photo compositions. Once you know how to operate your camera, you can adjust the ISO and exposure compensation to alter the light, or change the shutter speed depending on whether your portrait is still or moving. You can adjust your depth of field to increase the sharp focus on your model’s facial features and blur a distracting background, or use a deeper depth with a wide-angle lens for a more environmental portrait.
                        
                        Below are a few photography techniques you can use to enhance your shots and turn your good portraits into great portraits:
                        
                        1. Diffuse your light source. When selecting an environment, consider that a soft, diffused natural light from an indirect source is best for shooting portraits. Direct, harsh light or a full sun can cast unwanted dark shadows or create unnatural skin colors. Use a diffuser like a soft box or a white sheet to help soften the light and produce a more flattering effect.
                        2. Use a longer lens. A 50mm lens is considered a mid-range telephoto lens, and a standard length many portrait photographers like to use. However, this length creates a familiar and ordinary scene. Use a longer lens, like one in the 85mm to 200mm range, to produce better image compression without distorting the pixels. A longer focal length can bring your background closer to your subject, increasing the bokeh (background blur), and creating a more dynamic image.
                        3. Find a different position. You can bring new perspective to your photos by breaking the rule of thirds and shooting at angles that aren't so neatly composed, or even at your subject's eye level. Try taking shots at different angles and distances around your model. Shoot from an aerial viewpoint or from the side, change up your model’s poses, or even try a candid shot to figure out the most flattering angle for their portrait.
                        4. Bring your own lighting. The camera flash is an essential feature that brings light into your photos, but it doesn't always provide the light you need. Some flash, especially if used in a close-up headshot, can make a subject’s face appear washed out and disproportionate. Off-camera flash is useful for changing the lighting conditions to enhance contrast and control the shadows in your portraits, making them more visually interesting and dynamic. While natural light can be great for outdoor portrait photography, direct sunlight can sometimes be overpowering. You can use external strobe lighting to underexpose the available light and use your own to create the perfectly lit shot.
                        5. Alter the aperture. A wide aperture will produce a shallow depth of field, blurring the background and making your subject the main focus. However, if you have more than one subject (like a family portrait), a smaller aperture will keep everyone in focus.
                        6. Try props. Shoot through objects in your foreground, like foliage or architecture, for a more dynamic element to your composition. A longer lens can help blur the objects in front, centering the focus on your subjects, adding an interesting aesthetic component to your shot. Shooting through transparent objects can produce unique patterns or reflections, while shooting through something like a fence can provide interesting framing around your subject. Capture your subject through store windows or between branches for a more dynamic composition.
                        7. Use gels. Gels can help change the mood or alter the color temperature of your portraiture. If your photo shoot is producing unnatural skin tones or odd color casts, you may have to adjust your light temperatures. If you’re shooting on an overcast day, you might want a color temperature orange (CTO) gel to make the environment warmer. Conversely, if your images appear too warm, you might want to apply a color temperature blue (CTB) gel to cool it down. The type of shot you’re going for will determine the temperature you need, so plan for your environment accordingly.
                        8. Finish with editing and post-processing. Retouching and enhancing your photos with editing software can give your scene the final look it needs. Whether you need to crop an unwanted edge, lighten a distracting shadow, or tweak the background of your shot, become familiar with editing programs and their functions in order to bring your portrait photography to the next level.
                            `,
                        image: 'https://images.unsplash.com/photo-1676624765470-98b4544df2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                    }}>
                    <div className='flex flex-col  justify-center relative '>
                        <h1 className='text-sm text-left p-2' style={{
                            fontFamily: 'Medium'
                        }}>♦Lifestyle</h1>
                        <h1 className='text-4xl bg-white text-black p-2 rounded-lg absolute z-10 ' style={{
                            fontFamily: 'Medium',
                            top: '30px'
                        }}>8 Things to consider
                        </h1>

                        <h1 className='text-4xl bg-white text-black p-2 rounded-lg absolute z-10 ' style={{
                            fontFamily: 'Medium',
                            top: '80px',
                            left: '-5px'
                        }}>
                            for photography</h1>
                        <img className='rounded-lg h-[670px] w-full object-cover  shadow-lg' src="https://images.unsplash.com/photo-1676624765470-98b4544df2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="img1" />
                    </div>

                </NavLink>

                {/* Second div */}

                <div className='space-y-3'>
                    <NavLink
                        to={
                            '/article'
                        }
                        state={{
                            title: "Unique architectures in the world",
                            desc: `8 Portrait Photography Tips
                        A DSLR or mirrorless digital camera lets you manipulate the different aspects of your photo compositions. Once you know how to operate your camera, you can adjust the ISO and exposure compensation to alter the light, or change the shutter speed depending on whether your portrait is still or moving. You can adjust your depth of field to increase the sharp focus on your model’s facial features and blur a distracting background, or use a deeper depth with a wide-angle lens for a more environmental portrait.
                        
                        Below are a few photography techniques you can use to enhance your shots and turn your good portraits into great portraits:
                        
                        1. Diffuse your light source. When selecting an environment, consider that a soft, diffused natural light from an indirect source is best for shooting portraits. Direct, harsh light or a full sun can cast unwanted dark shadows or create unnatural skin colors. Use a diffuser like a soft box or a white sheet to help soften the light and produce a more flattering effect.
                        2. Use a longer lens. A 50mm lens is considered a mid-range telephoto lens, and a standard length many portrait photographers like to use. However, this length creates a familiar and ordinary scene. Use a longer lens, like one in the 85mm to 200mm range, to produce better image compression without distorting the pixels. A longer focal length can bring your background closer to your subject, increasing the bokeh (background blur), and creating a more dynamic image.
                        3. Find a different position. You can bring new perspective to your photos by breaking the rule of thirds and shooting at angles that aren't so neatly composed, or even at your subject's eye level. Try taking shots at different angles and distances around your model. Shoot from an aerial viewpoint or from the side, change up your model’s poses, or even try a candid shot to figure out the most flattering angle for their portrait.
                        4. Bring your own lighting. The camera flash is an essential feature that brings light into your photos, but it doesn't always provide the light you need. Some flash, especially if used in a close-up headshot, can make a subject’s face appear washed out and disproportionate. Off-camera flash is useful for changing the lighting conditions to enhance contrast and control the shadows in your portraits, making them more visually interesting and dynamic. While natural light can be great for outdoor portrait photography, direct sunlight can sometimes be overpowering. You can use external strobe lighting to underexpose the available light and use your own to create the perfectly lit shot.
                        5. Alter the aperture. A wide aperture will produce a shallow depth of field, blurring the background and making your subject the main focus. However, if you have more than one subject (like a family portrait), a smaller aperture will keep everyone in focus.
                        6. Try props. Shoot through objects in your foreground, like foliage or architecture, for a more dynamic element to your composition. A longer lens can help blur the objects in front, centering the focus on your subjects, adding an interesting aesthetic component to your shot. Shooting through transparent objects can produce unique patterns or reflections, while shooting through something like a fence can provide interesting framing around your subject. Capture your subject through store windows or between branches for a more dynamic composition.
                        7. Use gels. Gels can help change the mood or alter the color temperature of your portraiture. If your photo shoot is producing unnatural skin tones or odd color casts, you may have to adjust your light temperatures. If you’re shooting on an overcast day, you might want a color temperature orange (CTO) gel to make the environment warmer. Conversely, if your images appear too warm, you might want to apply a color temperature blue (CTB) gel to cool it down. The type of shot you’re going for will determine the temperature you need, so plan for your environment accordingly.
                        8. Finish with editing and post-processing. Retouching and enhancing your photos with editing software can give your scene the final look it needs. Whether you need to crop an unwanted edge, lighten a distracting shadow, or tweak the background of your shot, become familiar with editing programs and their functions in order to bring your portrait photography to the next level.
                    `,
                            image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        }}>
                        <div className='space-y-2'>
                            <img className=' rounded-lg w-[220px] h-[280px] object-cover shadow-lg' src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img2" />
                            <h1 className='text-sm' style={{
                                fontFamily: 'Medium'
                            }}>♦Property</h1>
                            <h1 className='' style={{
                                fontFamily: 'Medium'
                            }}>Unique architectures in the world</h1>
                        </div>
                    </NavLink>
                    <NavLink
                        to={
                            '/article'
                        }
                        state={{
                            title: `NAPPY ROOTS RAPPER SCALES
                            SHOT, ROBBED & KIDNAPPED...
                            At His Own Restaurant`,
                            desc: `Nappy Roots rapper Fish Scales is lucky to be alive after he was shot, robbed and kidnapped outside an Atlanta brewery he co-owns.

                            Police say two suspects first robbed a customer in the parking lot before entering Atlantucky Brewery and forcing Scales into his car at gunpoint. The robbers then drove Scales up the road to his home in a neighboring suburb where he was able to escape, but not before being shot in the leg during a struggle.
                            
                            Scales, who is one-fourth of the Grammy-nominated rap group, is now resting in the hospital -- Nappy Roots put out a statement saying, "We are so thankful our brother is safe and on the road to recovery."

                            Police were able to recover Scales' vehicle ... but as of now, no arrests have been made.
                            
                            The rap group says Scales is both eager to return to work and to get in the studio.


                    `,
                            image: 'https://images.unsplash.com/photo-1618537993538-0690d0976a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhpcGhvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                        }}>
                        <div className='space-y-2'>
                            <img className='w-56 rounded-lg  shadow-lg' src="https://images.unsplash.com/photo-1618537993538-0690d0976a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhpcGhvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="img2" />
                            <h1 className='text-sm' style={{
                                fontFamily: 'Medium'
                            }}>♦Music</h1>
                            <h1 className='' style={{
                                fontFamily: 'Medium'
                            }}>This Rapper got kidnapped</h1>
                        </div>
                    </NavLink>

                </div>

            </div>
    

        </div>

    )
}

export default Trending1