import Image from "next/image";
import bgPic from "../../../public/hero/bgPic.png";
import Wave from "../../../public/hero/wave.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=''>
      <div className='m-8 shadow-2xl flex rounded-2xl'>
        <Link href='/Store'>
          <Image
            className='rounded-2xl '
            src={bgPic}
            alt='Picture of the author'
          />
        </Link>
      </div>
      <div className='m-8 shadow-2xl flex rounded-2xl'>
        <Link href='/Store'>
          <Image
            className='rounded-2xl '
            src={Wave}
            alt='Picture of the author'
          />
        </Link>
      </div>
    </div>
  );
};
export default Hero;
