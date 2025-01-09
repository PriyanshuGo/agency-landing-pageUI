import { Star } from 'lucide-react';

function HeroSection() {
  return (
    <div className="mx-5 py-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-950 rounded-3xl flex flex-col box-border text-white overflow-auto">
      
        <div>
        
          <h1 className="color-white font-extrabold mx-5 text-5xl space-y-0 sm:text-6xl md:mx-16 lg:text-8xl lg:mx-20 !leading-tight">
          <span>WE CREATE</span>                      <br />
          <span className='italic'>AWESOME</span>     <br />
          <span>DESIGN</span>
          </h1>

        </div>
      
        <div className="flex flex-col mx-5 my-8 space-y-8 sm:m-15 sm:my-15 sm:space-y-6 sm:text-lg md:space-x-6 md:mx-16 lg:flex-row lg:items-end lg:mx-20 lg:space-x-12">
        
          <div className="space-x-4">
            <button className="rounded-full bg-orange-600 font-bold p-2 px-4  text-black lg:p-3 lg:px-5 ">↗</button>
            <button className="rounded-full bg-orange-600 font-bold p-2 px-10 text-black lg:p-4 lg:px-8 lg:text-sm">LET'A TALK</button>
          </div>

          <div>
          
            <div className='flex space-x-2 space-y-0 h-7'>

              <span className='text-lg'>5.0</span>
              <div className='flex text-orange-500 size-12 items-start m-0'>
                {Array(5).fill(null).map((_, index) => (
                <Star key={index} className='fill-current' />
                 ))}
              </div>

            </div>
              <span className='text-sm text-white mt-0 flex items-start'>Based on Webflow Rating</span>
          </div>

          <div>
            <span><span className='font-bold'>Next Zone</span> is  A Full Service <span className='font-bold'>Digital Agency</span> Working</span> <br />
            <span>At The Intersection Of <span className='font-bold'>Design</span>.</span>
          </div>

        </div>
      
    </div>
  )
}

export default HeroSection
