import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return (
    <header className="top-0 min-h-50 flex w-full bg-blue-900 shadow-2">
      <div className="flex flex-grow items-center justify-between px-4 py-4  md:px-6 2xl:px-11 h-20">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link className="block flex-shrink-0" href="/">
            <Image
              width={112}
              height={112}
              style={{
                width: "auto",
                height: "auto",
              }}
              src={"/images/logo/logo.png"}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex gap-3 2xsm:gap-7 float-right">
        
          <Link href="#"  className="flex items-center gap-4">
            <span className="h-12 w-12 rounded-full">
              <Image
                width={112}
                height={112}
                src={"/images/user/user.png"}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                alt="User"
              />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
