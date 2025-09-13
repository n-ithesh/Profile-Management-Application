import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 py-2 sm:py-4  sm:mb-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Always row, just resize on small screens */}
        <div className="flex justify-between items-center">
          
          {/* Left side - TAPMI Logo */}
          <div className="flex items-center">
            <Image
              src="/Assets/Asset 1 1.png"
              alt="TAPMI Logo"
              width={140}
              height={50}
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          {/* Right side - PRME & AACSB */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <Image
              src="/Assets/Asset 1@4x-8 1.png"
              alt="PRME Logo"
              width={90}
              height={35}
              className="h-6 sm:h-8 md:h-10 w-auto"
            />
            <Image
              src="/Assets/Asset 2@4x-8 1.png"
              alt="AACSB Logo"
              width={90}
              height={35}
              className="h-6 sm:h-8 md:h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
