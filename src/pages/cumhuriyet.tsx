import Image from 'next/image';
import React from 'react';

function Cumhuriyet() {
  return (
    // make background image fill mode
    <div>
      <Image
        src="/assets/cumhuriyet/gazete-bg.png"
        alt="Background of newspaper"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="z-1 relative bg-white bg-opacity-50">
        <div className="mt-5 text-center text-4xl font-bold text-red-600">
          Cumhuriyet Gazetesi Baskıda...
        </div>
      </div>
    </div>
  );
}

export default Cumhuriyet;
