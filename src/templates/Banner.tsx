import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Aklındaki bir çok soru için,"
      subtitle="bizimle iletişime geç!"
      button={
        <Link href="https://usebiolink.com/yazilimcukurova" target="_blank">
          <Button>İletişim İçin Tıkla</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
