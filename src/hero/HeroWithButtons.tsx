import type { ReactNode } from 'react';

type IHeroWithButtonsProps = {
  title: ReactNode;
  description: string;
  buttons: ReactNode;
};

const HeroWithButtons = (props: IHeroWithButtonsProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl">{props.description}</div>
    <div className="flex justify-center">{props.buttons}</div>
  </header>
);

export { HeroWithButtons };
