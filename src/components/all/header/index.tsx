import Image from "next/image";
import logo from "../../../../public/menu/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className=' h-12 w-full bg-blue-900 flex justify-between items-center p-4'>
      <div>
        <button> </button>
      </div>

      <Link href='/'>
        <Image
          className='rounded-2xl  '
          src={logo}
          alt='Picture of the author'
          width={40}
          height={40}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </Link>

      <div>0</div>
    </div>
  );
};
export default Header;
