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
    <div
      className="bg-[#E3CEB9]"
      style={{
        backgroundImage: `url(${gazeteBg.src})`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex items-center justify-center">
        <audio
          className="mt-5 w-1/2"
          controls
          autoPlay
          loop={true}
          src="/assets//cumhuriyet/cumhuriyet-gazetecisi.mp3"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>

      {/* <Image
        src={gazeteBg}
        alt="Background of newspaper"
        layout="fill"
        style={{ objectFit: 'cover' }}
        className="z-0"
      /> */}
      <div className="z-1 relative">
        <div className=" container mx-auto flex justify-center md:pb-8">
          <div className="max-w-screen-lg">
            <div className="mb-2 grid grid-cols-12 gap-4 border-b-2 border-black py-4 md:pb-0">
              <div className="col-span-6 flex items-center justify-center">
                <h1 className=" text-l text-center  font-serif leading-loose sm:text-2xl md:text-3xl lg:text-5xl">
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
                  <h3 className="text-center font-mono text-[10px] md:text-sm lg:text-xl">
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
            <div className="md:mb-14">
              <h2 className=" mb-4 py-3 text-center  font-serif text-2xl font-extrabold  tracking-wide sm:text-3xl md:py-0 md:text-5xl lg:text-6xl">
                CUMHURİYET İLAN EDİLDİ!
              </h2>
              <div className="grid grid-cols-12 gap-6">
                <div className="relative col-span-12 md:col-span-7 ">
                  <Image
                    src={tbmmVeAtaturk}
                    alt="Atatürk ve TBMM"
                    layout="responsive"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <p className="col-span-12 p-4 text-justify font-serif text-base leading-6 md:col-span-5 md:p-0 md:text-lg md:leading-9 lg:text-[24px] lg:leading-[45px]">
                  Gazi Mustafa Kemal Atatürk liderliğindeki ulusal kurtuluş
                  savaşımızın zaferle sonuçlanmasının ardından, Türkiye
                  Cumhuriyeti resmi olarak ilan edildi.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 w-full md:col-span-7">
                <div className="flex h-full flex-col justify-between">
                  <div className="pb-4 md:border-b-2 md:border-black md:pb-6 lg:pb-10">
                    <p className="p-4 font-mono text-base leading-6 md:p-0 md:text-center md:text-lg md:leading-9 lg:text-[24px] lg:leading-[45px]">
                      “Ey yükselen yeni nesil! İstikbal sizsiniz. Cumhuriyeti
                      biz kurduk, onu yükseltecek ve yaşatacak sizlersiniz.”
                    </p>
                  </div>

                  <p className="p-4 text-justify font-serif text-base leading-6 md:p-0 md:text-lg md:leading-9 lg:text-[24px] lg:leading-[45px]">
                    Cumhuriyet, sadece bir yönetim biçimi değil, aynı zamanda
                    özgürlüğün, eşitliğin, adaletin ve demokrasinin simgesidir.
                    Türk milleti, artık kendi kaderini kendi elleriyle çizecek,
                    demokratik ilkelerle yönetilen bağımsız bir devletin
                    vatandaşları olarak hürriyetlerine kavuşmuştur.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
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
