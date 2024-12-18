import Image from 'next/image'
import React from 'react'

const Page = () => {
    return (
        <div>
            <div className="w-full">
                <Image
                    src="/images/main.png"
                    alt="a"
                    className="w-full h-full"
                    width={500}
                    height={500}
                />

            </div>

            <div className='py-10'>
                <div className="flex  gap-10 justify-evenly">
                    <div><Image src={"/images/Right.jpg"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Dandy chair</p>
                        <p className="mt-2">£250</p></div>
                    <div><Image src={"/images/bottles.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">Rustic Vase Set</p>
                        <p className="mt-2">£155</p></div>
                    <div><Image src={"/images/bottle.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Silky Vase</p>
                        <p className="mt-2">£125</p></div>
                    <div><Image src={"/images/bulb.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Lucy Lamp</p>
                        <p className="mt-2">£399</p></div>
                </div>
                <div className="flex gap-10 justify-evenly">
                    <div><Image src={"/images/bulbs.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Dandy chair</p>
                        <p className="mt-2">£250</p></div>
                    <div><Image src={"/images/mug.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">Rustic Vase Set</p>
                        <p className="mt-2">£155</p></div>
                    <div><Image src={"/images/table.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Silky Vase</p>
                        <p className="mt-2">£125</p></div>
                    <div><Image src={"/images/charis.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Lucy Lamp</p>
                        <p className="mt-2">£399</p></div>
                </div>
                <div className="flex gap-10  justify-evenly">
                    <div><Image src={"/images/Right.jpg"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Dandy chair</p>
                        <p className="mt-2">£250</p></div>
                    <div><Image src={"/images/bottles.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">Rustic Vase Set</p>
                        <p className="mt-2">£155</p></div>
                    <div><Image src={"/images/bottle.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Silky Vase</p>
                        <p className="mt-2">£125</p></div>
                    <div><Image src={"/images/bulb.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Lucy Lamp</p>
                        <p className="mt-2">£399</p></div>
                </div>
            </div>

            <div className='flex justify-center text-center py-10'>

                <button className='bg-gray-100 text-black px-10 py-3 rounded-md '>View Collection</button>
            </div>
        </div>
    )
}

export default Page