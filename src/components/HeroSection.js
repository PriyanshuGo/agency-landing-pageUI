import { Star } from 'lucide-react';
import ActionBtn from './ActionBtn';

function HeroSection() {
  return (
    <div className="mx-5 py-10 lg:py-16 lg:space-y-14 xl:py-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-950 rounded-3xl flex flex-col box-border text-white overflow-auto">
      
        <div className='mx-5 md:mx-16 lg:mx-20 '>
        
          <h1 className="color-white font-extrabold text-5xl sm:text-7xl lg:text-8xl !leading-tight">
          <span>WE CREATE</span>                      <br />
          <span className='italic'>AWESOME</span>     <br />
          <span>DESIGN</span>
          </h1>

        </div>
      
        <div className="flex flex-col mx-5 my-8 space-y-8 sm:text-lg md:space-x-6 md:mx-16 lg:flex-row lg:space-y-0 lg:mx-20 lg:space-x-12">
        
          <div className="space-x-4 lg:min-w-56">
            <ActionBtn className="rounded-full bg-orange-600 font-bold p-2 px-4  text-black lg:p-3 lg:px-5" label="↗" />
            <ActionBtn className="rounded-full bg-orange-600 font-bold p-2 px-10 text-black lg:p-4 lg:px-8 lg:text-sm" label="LET'A TALK" />
          </div>

          <div>
            <div className='flex space-x-2 h-7'>

              <span className='text-lg'>5.0</span>
              <div className='flex text-orange-500 size-12 items-start m-0'>
                {Array(5).fill(null).map((_, index) => (
                <Star key={index} className='fill-current' />
                 ))}
              </div>

            </div>
              <span className='text-sm text-white flex'>Based on Webflow Rating</span>
          </div>

          <div>
              <span><span className='font-bold'>Next Zone</span> is  A Full Service <span className='font-bold'>Digital Agency</span> Working</span> <br className='inline lg:block'/>
              <span>At The Intersection Of <span className='font-bold'>Design</span>.</span>
          </div>

        </div>
      
    </div>
  )
}

export default HeroSection
