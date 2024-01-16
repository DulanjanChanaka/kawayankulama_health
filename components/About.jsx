import React from 'react'
import Image from 'next/image';
import Headline from './Headline';
import aboutus from '../public/assets/aboutus.jpg'
const About = () => {
  return (
    <div className='bg-purple-100 mt-[-41px]'>
      <Headline title="About" />
      <div id='about' className='  lg:px-10  px-3 '>

        <div className='w-full  lg:grid grid-cols-2   bg-purple-300  '>

          <div className=' px-3 lg:pt-[50px] '>

            
            <p className='py-2 text-gray-600 text-center text-2xl'>
            නිරෝගිමත් මව්වරුන් හා දූ දරු පිරිසක් බිහිකිරීම සදහා පුද්ගලානුරෝපිත සත්කාර සැපයීම , සෞඛ්‍ය අධ්‍යාපනය ,උපදේශනය ,සහ සහයෝගය තුලින් ඔවුන්ගේ සමස්ත සෞඛ්‍ය හා යහපැවැත්ම ප්‍රවර්ධනය කිරීම.
            </p>
            <p className='text-3xl font-bold text-center '>අරමුණු</p>
            <div>
            </div>
            <ul className='text-lg pb-3 justify-start list-disc pl-5 '>
            <li className=''>සෞඛ්‍ය සම්පන්න ගර්භණී භාවයන් සදහා සෞඛ්‍ය ප්‍රවර්ධනය හා පුලුල් පූර්ව ප්‍රසව සත්කාර ලබා දීම.</li>
            <li>පසු ප්‍රසව කාන්තාවන් සහ පවුල සදහා සහයෝගය හා පසු විපරම් සේවා සැපයීම මගින් රැකවරණය අඛණ්ඩව  පවත්වාගෙන යාම.</li>
            <li>නිවැරදි කාලය තුලම දරුවන්ගේ එන්නත් ලබාදීම තුලින් ඔවුන්ගේ ප්‍රතිශක්තිකරණය සහතික කිරීම.</li>
            <li>වර්ධන සුපරීක්ෂණය මගින් දරුවන්ගේ පෝෂණ ගැටලු හදුනා ගැනීම,අවශ්‍ය විට මැදිහත් වීම හා යොමු කිරීම මගින් නිරෝගී දරු පරපුරක් බිහි කිරීමට දායක වීම.</li>
            <li>කාන්තාවන්ගේ ප්‍රජනක සෞඛ්‍ය පිළිබඳ දැනුවත් තීරන ගැනීමට කාන්තාවන් සවිබල ගැන්වීම.</li>
            </ul></div>
          <div className=' '>
            <Image className=' lg:h-[500px] w-full' src={aboutus} width='1028' height='440' alt="about" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About