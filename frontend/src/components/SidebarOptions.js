import React from 'react'

function SidebarOptions({ title, desc, image, category }) {
    return (
        <div class="max-w-sm overflow-hidden h-[300px] shadow-lg  w-[350px] my-4 rounded-lg">

            <div className='flex justify-center items-center w-full'>
                <img class="w-[350px] h-[200px] object-cover" src={image ? image : 'https://source.unsplash.com/random/300x300?' + category} alt="Sunset in the mountains" />
            </div>
            <div class="px-6 py-4">
                <div
                    style={{
                        fontFamily: 'Medium'
                    }}
                    class=" text-xl mb-2">{title}</div>
            </div>

        </div>
    )
}

export default SidebarOptions