import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroWithButtons } from '../hero/HeroWithButtons';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className="hidden md:block">
          <Link href="http://bit.ly/ycukurova" target="_blank">
            Hadi Aramıza Katıl! 🤩
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroWithButtons
        title={
          <>
            {'Yazılıma İlgi Duyuyorsan,\n'}
            <span className="text-primary-800">Doğru Yerdesin! 🚀</span>
          </>
        }
        description="Geleceği kodlayan, inovasyona yön veren bir topluluk..."
        buttons={
          <div>
            <div>
              <Link href="https://bit.ly/ycsunum" target="_blank">
                <Button xl>Tanıtım Sunumumuz 👀</Button>
              </Link>
            </div>

            <div className="mt-5 md:hidden">
              <Link href="http://bit.ly/ycukurova" target="_blank">
                <Button xl>Hadi Aramıza Katıl! 🤩</Button>
              </Link>
            </div>
          </div>
        }
      />
    </Section>
  </Background>
);

export { Hero };
