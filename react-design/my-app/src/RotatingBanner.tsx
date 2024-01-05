interface Props {
  items: string[];
}

export function RotatingBanner({ items }: Props) {
  return (
    <>
      <Banner word={items[0]} />
      <Prev />
      <Indicators items={items} />
      <Next />
    </>
  );
}

interface BannerProps {
  word: string;
}

function Banner({ word }: BannerProps) {
  return <h1>{word}</h1>;
}

function Prev() {
  return <button>Prev</button>;
}

function Next() {
  return <button>Next</button>;
}

interface IndicatorsProps {
  items: Props['items'];
}
function Indicators({ items }: IndicatorsProps) {
  console.log('items from indicator', items);
  return (
    <>
      {items.map((item, index) => (
        <button>{index}</button>
      ))}
    </>
  );
}
