import React from 'react';
import Image, { StaticImageData } from 'next/image';
import '../../app/index.css';
import Background from '../../assets/auth/images/iaiieaBg.png'

type RegisterHomeBgProps = {
  title: string;
  subtitle: string;
};

const RegisterHomeBg: React.FC<RegisterHomeBgProps> = ({ title, subtitle }) => {
  return (
    <div className="relative top-0">
      <div className="min-h-[350px] md:min-h-[400px] w-full bg bg-[#0E1A3D] flex items-center justify-center">
        <div>
          <Image src={Background} alt="" />
        </div>
      </div>
      <div className="absolute flex flex-col items-center justify-center w-full top-[50%] transform translate-y-[-50%] px-5 md:px-0">
        <h1 className="text-white font-[500] lg:text-[60px] md:text-[45px] text-[30px] tracking-tighter">{title}</h1>
        <p className="text-[#fff] md:text-[21px] text-sm pt-3 md:pt-0 font-[400] tracking-tight">{subtitle}</p>
      </div>
    </div>
  );
};

export default RegisterHomeBg;
