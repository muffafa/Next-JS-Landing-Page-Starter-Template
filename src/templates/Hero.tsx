import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className="hidden md:block">
          <Link href="http://bit.ly/ycukurova" target="_blank">
            Aramıza Katıl
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Yazılıma İlgi Duyuyorsan,\n'}
            <span className="text-primary-800">Doğru Yerdesin! 🚀</span>
          </>
        }
        description="Geleceği kodlayan, inovasyona yön veren bir topluluk..."
        button={
          <Link href="https://bit.ly/ycsunum" target="_blank">
            <Button xl>Tanıtım Sunumu 🤩</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
