import Image from 'next/image'

const ImageComponent = () => {
  return (
    <div className="flex justify-center items-center w-full h-full pt-12 m-0 p-0">
      <Image
        src="/images/landing.png" // Replace with your image path
        alt="Descriptive text"
        width={1440}
        height={444}
        className="object-cover w-full" 
      />
    </div>
  )
}

export default ImageComponent