"use client"
import React, { useState } from "react";

const page = () => {
    const [selectedColor, setSelectedColor] = useState(5);

    const colorVariants = [
        { id: 0, colorCode: "#00C12B" },
        { id: 1, colorCode: "#F50606" },
        { id: 2, colorCode: "#F5DD06" },
        { id: 3, colorCode: "#F57906" },
        { id: 4, colorCode: "#06CAF5" },
        { id: 5, colorCode: "#063AF5" },
        { id: 6, colorCode: "#7D06F5" },
        { id: 7, colorCode: "#F506A4" },
        { id: 8, colorCode: "#FFFFFF" },
        { id: 9, colorCode: "#000000" },
    ];

    return (
        <>
            <div className='flex w-full mb-10'>

                <div className="left border hidden md:block border-gray-300 p-3 w-[25%] h-265 ml-20 mt-5 rounded-3xl ">
                    <div className="box flex gap-53 px-4">
                        <p className="font-bold">Filters</p>
                        <div className="img "><span className=" text-gray-600 material-symbols-outlined">
                            instant_mix
                        </span></div>
                    </div>
                    <div className="box bg-gray-300 h-px w-[98%] mt-3 "></div>
                    <ul className="mt-5 ml-3 text-gray-600">
                        <li className=" flex pb-3 ">
                            <p>T-Shirts</p> <span className="material-symbols-outlined ml-53">
                                keyboard_arrow_right
                            </span>
                        </li>
                        <li className=" flex pb-3">
                            <p>Shorts</p> <span className="material-symbols-outlined ml-55.5">
                                keyboard_arrow_right
                            </span>
                        </li>
                        <li className=" flex pb-3 ">
                            <p>Shirts </p><span className="material-symbols-outlined ml-56.75">
                                keyboard_arrow_right
                            </span>
                        </li>
                        <li className=" flex pb-3 ">
                            <p>Hoodie</p><span className="material-symbols-outlined ml-53.5">
                                keyboard_arrow_right
                            </span>
                        </li>
                        <li className=" flex pb-3 ">
                            <p>Jeans</p><span className="material-symbols-outlined ml-56.5">
                                keyboard_arrow_right
                            </span>
                        </li>
                    </ul>
                    <div className="box bg-gray-300 h-px w-[98%] mt-3 "></div>
                    <div className="price-box mt-1">
                        <div className="box flex gap-53 px-4">
                            <p className="font-bold">Price</p>
                            <span className="material-symbols-outlined">keyboard_arrow_up</span>
                        </div>
                        <div className="w-66 mx-auto mt-6">
                            <div className="relative h-2 bg-gray-200 rounded-full">
                                <div className="absolute left-[20%] right-[20%] h-2 bg-black rounded-full"></div>
                                <div className="absolute w-5 h-5 bg-black rounded-full -top-2 left-[18%]"></div>
                                <div className="absolute w-5 h-5 bg-black rounded-full -top-2 right-[18%]"></div>
                            </div>

                            <div className="flex justify-between mt-4 text-xl font-medium">
                                <span>$50</span>
                                <span>$200</span>
                            </div>
                        </div>
                    </div>

                    <div className="box bg-gray-300 h-px w-[98%] mt-3 "></div>

                    {/* --- UPDATED COLORS SECTION --- */}
                    <div className="colors-box mt-4 px-4">
                        <div className="flex justify-between items-center mb-4">
                            <p className="font-bold text-lg">Colors</p>
                            <span className="material-symbols-outlined">keyboard_arrow_up</span>
                        </div>

                        <div className="grid grid-cols-5 gap-3 place-items-center">
                            {colorVariants.map((variant, index) => (
                                <div
                                    key={variant.id}
                                    onClick={() => setSelectedColor(index)}
                                    style={{ backgroundColor: variant.colorCode }}
                                    className={`w-9 h-9 rounded-full cursor-pointer flex items-center justify-center transition-transform hover:scale-105 ${
                                        variant.colorCode.toUpperCase() === "#FFFFFF"
                                            ? "border border-gray-300"
                                            : ""
                                    }`}
                                >
                                    {selectedColor === index && (
                                        <span
                                            className={`text-sm font-bold ${
                                                variant.colorCode.toUpperCase() === "#FFFFFF"
                                                    ? "text-black"
                                                    : "text-white"
                                            }`}
                                        >
                                            ✓
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="box bg-gray-300 h-px w-[98%] mt-5 "></div>

                    <div className="size mt-3">
                        <div className="box flex gap-53 px-4">
                            <p className="font-bold">Size</p>
                            <span className="material-symbols-outlined">keyboard_arrow_up</span>
                        </div>
                        <div className="boxes">
                            <box className="flex mt-2 gap-3.5"> <button
                                className="bg-[#F0F0F0] w-fit p-2 text-gray-600 rounded-full px-5 py-1">XX-Small</button><button
                                    className="bg-[#F0F0F0] w-fit p-2 text-gray-600 rounded-full px-5 py-1">X-Small</button>
                            </box>
                            <box className="flex mt-2 gap-3.5"><button
                                className="bg-[#F0F0F0] w-fit p-2 text-gray-600 rounded-full px-5 py-2">Small</button><button
                                    className="bg-[#F0F0F0] w-fit p-2 text-gray-600 rounded-full px-5 py-2">Medium</button>
                            </box>
                            <box className="flex mt-2 gap-3.5"><button
                                className="bg-black w-fit p-2 text-gray-100 rounded-full px-5 py-2">Large</button><button
                                    className="bg-[#F0F0F0] w-fit p-2 text-gray-600 rounded-full px-5 py-2">X-Large</button>
                            </box>
                            <box className="flex mt-2 gap-3.5"><button
                                className="bg-[#F0F0F0] w-fit p-2 text-gray-600 rounded-full px-5 py-2">XX-Large</button><button
                                    className="bg-[#F0F0F0] w-fit p-2 text-gray-600 rounded-full px-5 py-2">3X-Large</button>
                            </box>
                            <box><button
                                className="bg-[#F0F0F0] mt-2 gap-3.5 w-fit p-2 text-gray-600 rounded-full px-5 py-2">4X-Large</button>
                            </box>
                        </div>
                    </div>
                    <div className="box bg-gray-300 h-px w-[98%] mt-3 "></div>
                    <div className="style mt-3">
                        <div className="box flex gap-42 px-4">
                            <p className="font-bold">Dress Style</p>
                            <span className="material-symbols-outlined">keyboard_arrow_up</span>
                        </div>
                        <ul className="mt-2 ml-3 text-gray-600">
                            <li className=" flex pb-2 ">
                                <p>Casual</p> <span className="material-symbols-outlined ml-53">
                                    keyboard_arrow_right
                                </span>
                            </li>
                            <li className=" flex pb-2">
                                <p>formal</p> <span className="material-symbols-outlined ml-53.5">
                                    keyboard_arrow_right
                                </span>
                            </li>
                            <li className=" flex pb-2 ">
                                <p>Party </p><span className="material-symbols-outlined ml-55.5">
                                    keyboard_arrow_right
                                </span>
                            </li>
                            <li className=" flex pb-2">
                                <p>Gym</p><span className="material-symbols-outlined ml-56.5">
                                    keyboard_arrow_right
                                </span>
                            </li>
                        </ul>
                    </div>
                    <button className="w-64.25 bg-black rounded-full h-10 text-white ml-6 mt-2">Apply Filter</button>

                </div>

                <div className="right px-3 w-[70%]">
                    <div className="uportion gap-109 text-[13px] mt-2.5">
                        <h1 className="text-3xl font-bold ">Casual</h1>
                        <p className="text-gray-500 ml-130 hidden md:block -mt-8">Showing 1-10 of 100 Products Sort by: <span
                            className="text-black "> Most
                            Popular</span></p> <a href="left.html">
                            <div className="img block md:hidden -ml-66 "><span className=" text-gray-600 material-symbols-outlined">
                                instant_mix
                            </span></div>
                        </a>
                    </div>

                    <div className="arrivals bg-white">
                        <div className="lists flex gap-0 md:gap-19 ml-3 w-fit -mt-12 md:mt-9.5">
                            <div className="box pt-10 w-39 md:w-fit "><img className="h-52 w-52 rounded-2xl" src="img.svg" alt="" />
                                <h1>T-SHIRT WITH TAPE DETAILS</h1>
                                <div className="imgs flex w-10"><img src="star.svg" alt="" /><img src="star.svg" alt="" /><img
                                    src="star.svg" alt="" /><img src="star.svg" alt="" /><img src="halfstar.svg" alt="" />
                                </div>
                                <p>$120</p>
                            </div>
                            <div className="box relative pt-10 md:w-fit w-39 left-9 md:left-8 "><img
                                className="h-52 w-52 rounded-2xl" src="img2.svg" alt="" />
                                <h1>SKINNY FIT JEANS</h1>
                                <div className="imgs flex w-10"><img src="star.svg" alt="" /><img src="star.svg" alt="" /><img
                                    src="star.svg" alt="" /><img src="halfstar.svg" alt="" /></div>
                                <p>$240</p>
                            </div>
                            <div className="box hidden md:block">
                                <div className="box relative pt-10 left-16 "><img className="h-52 w-52 rounded-2xl" src="img3.svg"
                                    alt="" />
                                    <h1>CHECKERED SHIRT</h1>
                                    <div className="imgs flex w-10"><img src="star.svg" alt="" /><img src="star.svg" alt="" /><img
                                        src="star.svg" alt="" /><img src="star.svg" alt="" /><img src="halfstar.svg" alt="" />
                                    </div>
                                    <p>$180</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="arrivals bg-white">
                        <div className="lists flex gap-0 md:gap-19 ml-3 w-fit -mt-12 md:mt-9.5">
                            <div className="box pt-10 w-39 md:w-fit "><img className="h-52 w-52 rounded-2xl" src="img.svg" alt="" />
                                <h1>T-SHIRT WITH TAPE DETAILS</h1>
                                <div className="imgs flex w-10"><img src="star.svg" alt="" /><img src="star.svg" alt="" /><img
                                    src="star.svg" alt="" /><img src="star.svg" alt="" /><img src="halfstar.svg" alt="" />
                                </div>
                                <p>$120</p>
                            </div>
                            <div className="box relative pt-10 md:w-fit w-39 left-9 md:left-8 "><img
                                className="h-52 w-52 rounded-2xl" src="img2.svg" alt="" />
                                <h1>SKINNY FIT JEANS</h1>
                                <div className="imgs flex w-10"><img src="star.svg" alt="" /><img src="star.svg" alt="" /><img
                                    src="star.svg" alt="" /><img src="halfstar.svg" alt="" /></div>
                                <p>$240</p>
                            </div>
                            <div className="box hidden md:block">
                                <div className="box relative pt-10 left-16 "><img className="h-52 w-52 rounded-2xl" src="img3.svg"
                                    alt="" />
                                    <h1>CHECKERED SHIRT</h1>
                                    <div className="imgs flex w-10"><img src="star.svg" alt="" /><img src="star.svg" alt="" /><img
                                        src="star.svg" alt="" /><img src="star.svg" alt="" /><img src="halfstar.svg" alt="" />
                                    </div>
                                    <p>$180</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="arrivals bg-white">
                        <div className="lists flex gap-0 md:gap-19 ml-3 w-fit -mt-12 md:mt-9.5">
                            <div className="box pt-10 w-39 md:w-fit "><img className="h-52 w-52 rounded-2xl" src="img.svg" alt="" />
                                <h1>T-SHIRT WITH TAPE DETAILS</h1>
                                <div className="imgs flex w-10"><img src="star.svg" alt="" /><img src="star.svg" alt="" /><img
                                    src="star.svg" alt="" /><img src="star.svg" alt="" /><img src="halfstar.svg" alt="" />
                                </div>
                                <p>$120</p>
                            </div>
                            <div className="box relative pt-10 md:w-fit w-39 left-9 md:left-8 "><img
                                className="h-52 w-52 rounded-2xl" src="img2.svg" alt="" />
                                <h1>SKINNY FIT JEANS</h1>
                                <div className="imgs flex w-10"><img src="star.svg" alt="" /><img src="star.svg" alt="" /><img
                                    src="star.svg" alt="" /><img src="halfstar.svg" alt="" /></div>
                                <p>$240</p>
                            </div>
                            <div className="box hidden md:block">
                                <div className="box relative pt-10 left-16 "><img className="h-52 w-52 rounded-2xl" src="img3.svg"
                                    alt="" />
                                    <h1>CHECKERED SHIRT</h1>
                                    <div className="imgs flex w-10"><img src="star.svg" alt="" /><img src="star.svg" alt="" /><img
                                        src="star.svg" alt="" /><img src="star.svg" alt="" /><img src="halfstar.svg" alt="" />
                                    </div>
                                    <p>$180</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default page