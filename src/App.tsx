import { createSignal, For } from "solid-js";

type Theme = 'official' | 'normal' | 'halloween' | 'winter';

const daysInYear: number = 364;

function generateContributionData(length: number = daysInYear): number[] {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 5)
  );
};

const colours = {
  official: {
    // 0: '#0d1117',
    0: '#ebedf0',
    1: '#9be9a8',
    2: '#40c463',
    3: '#30a14e',
    4: '#216e39',
    // default: '#0d1117',
    default: '#ebedf0',
  },
  normal: {
    0: '#ebedf0',
    1: '#c6e48b',
    2: '#7bc96f',
    3: '#239a3b',
    4: '#196127',
    default: '#ebedf0',
  },
  halloween: {
    0: '#ebedf0',
    1: '#fde3cf',
    2: '#fcb07e',
    3: '#f7803a',
    4: '#d15600',
    default: '#ebedf0',
  },
  winter: {
    0: '#ebedf0',
    1: '#c7e9ff',
    2: '#64c4ed',
    3: '#3490dc',
    4: '#2779bd',
    default: '#ebedf0',
  }
} as const;

function getColour(count: number, theme: Theme): string {
  return colours[theme][count] || colours[theme].default;
};

function ContributionSquare(props: { count: number, theme: Theme }) {
  return (
    <div
      class="size-3 rounded-sm"
      style={{ 'background-color': getColour(props.count, props.theme) }}
    />
  );
}

function ContributionGrid(props: { theme: Theme }) {
  const contributions = generateContributionData();

  return (
    <div class="square-grid">
      <For each={contributions}>
        {(count) => (
          <ContributionSquare count={count} theme={props.theme} />
        )}
      </For>
    </div>
  );
};

function EditableContributionSquare(props: { count: number, theme: Theme, setCount: (count: number) => void }) {
  return (
    <button
      class="size-3 rounded-sm"
      style={{ 'background-color': getColour(props.count, props.theme) }}
      onClick={() => {
        const newCount = (props.count + 1) % 5;
        props.setCount(newCount);
      }}
    />
  );
}

function EditableContributionGrid(props: { theme: Theme }) {
  const [contributions, setContributions] = createSignal(generateContributionData(52 * 52));

  return (
    <div class="square-grid">
      <For each={contributions()}>
        {(count, index) => (
          <EditableContributionSquare
            count={count}
            theme={props.theme}
            setCount={(newCount) => {
              setContributions((contributions) => {
                const newContributions = [...contributions];
                newContributions[index()] = newCount;
                return newContributions;
              });
            }}
          />
        )}
      </For>
    </div>
  )
};

export default function App() {
  return (
    <main class="flex flex-col items-center justify-center gap-y-4 h-screen">
      <h1 class="text-2xl font-bold tracking-tighter">My Contributions</h1>
      {/* <ContributionGrid theme="official" /> */}
      {/* <ContributionGrid theme="normal" /> */}
      {/* <ContributionGrid theme="halloween" /> */}
      {/* <ContributionGrid theme="winter" /> */}
      <EditableContributionGrid theme="official" />
    </main>
  );
};
