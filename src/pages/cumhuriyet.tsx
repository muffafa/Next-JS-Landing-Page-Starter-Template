import Image from 'next/image';
import yuzincuYilLogo from 'public/assets/cumhuriyet/100-yil-logo.png';
import ataturkKursude from 'public/assets/cumhuriyet/ataturk-kursude.png';
import ataturkVeBayrak from 'public/assets/cumhuriyet/ataturk-ve-bayrak.png';
import gazeteBg from 'public/assets/cumhuriyet/gazete-bg.png';
import tbmmVeAtaturk from 'public/assets/cumhuriyet/tbmm-ataturk.png';
import React from 'react';

function Cumhuriyet() {
  return (
    // make background image fill mode
    <div>
      <Image
        src={gazeteBg}
        alt="Background of newspaper"
        layout="fill"
        style={{ objectFit: 'cover' }}
        className="z-0"
      />
      <div className="z-1 relative">
        <div className=" container mx-auto flex justify-center pb-8">
          <div className="max-w-screen-lg">
            <div className="mb-2 grid grid-cols-12 gap-4 border-b-2 border-black">
              <div className="col-span-6 flex items-center justify-center">
                <h1 className=" text-center font-serif text-5xl leading-loose">
                  YAZILIM ÇUKUROVA HATIRA GAZETESİ
                </h1>
              </div>
              <div className="col-span-2 flex items-center justify-center ">
                <div className="w-full ">
                  <div className="flex w-full justify-center ">
                    <Image
                      src={yuzincuYilLogo}
                      alt="100. Yıl Logo"
                      layout="responsive"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h3 className="text-center font-mono text-xl">
                    30 EKİM 1923
                  </h3>
                </div>
              </div>
              <div className="col-span-4 flex items-center justify-center ">
                <Image
                  src={ataturkVeBayrak}
                  alt="Atatürk ve Türk Bayrağı"
                  layout="responsive"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className="mb-14">
              <h2 className=" mb-4 text-center font-serif text-6xl font-extrabold tracking-wide">
                CUMHURİYET İLAN EDİLDİ
              </h2>
              <div className="grid grid-cols-12 gap-6">
                <div className="relative col-span-7 ">
                  <Image
                    src={tbmmVeAtaturk}
                    alt="Atatürk ve TBMM"
                    layout="responsive"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <p className="col-span-5 text-justify font-serif text-[24px] leading-[45px]">
                  Gazi Mustafa Kemal Atatürk liderliğindeki ulusal kurtuluş
                  savaşımızın zaferle sonuçlanmasının ardından, Türkiye
                  Cumhuriyeti resmi olarak ilan edildi.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-7 w-full">
                <div className="flex h-full flex-col justify-between">
                  <div className="border-b-2 border-black pb-10">
                    <p className="  text-center font-mono text-[24px] leading-[45px]">
                      “Ey yükselen yeni nesil! İstikbal sizsiniz. Cumhuriyeti
                      biz kurduk, onu yükseltecek ve yaşatacak sizlersiniz.”
                    </p>
                  </div>

                  <p className="text-justify font-serif text-[24px] leading-[45px]">
                    Cumhuriyet, sadece bir yönetim biçimi değil, aynı zamanda
                    özgürlüğün, eşitliğin, adaletin ve demokrasinin simgesidir.
                    Türk milleti, artık kendi kaderini kendi elleriyle çizecek,
                    demokratik ilkelerle yönetilen bağımsız bir devletin
                    vatandaşları olarak hürriyetlerine kavuşmuştur.
                  </p>
                </div>
              </div>
              <div className="col-span-5">
                <Image
                  src={ataturkKursude}
                  alt="Atatürk Kürsüde"
                  layout="responsive"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cumhuriyet;
