import { createSignal, For } from "solid-js";

const daysInYear: number = 364;

function generateContributionData(length: number = daysInYear): number[] {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 5)
  );
};

const themes = {
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

type Theme = keyof typeof themes;

const borderRadii = ['rounded-none', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-full'] as const;

type BorderRadius = typeof borderRadii[number];

function getColour(count: number, theme: Theme): string {
  return themes[theme][count] || themes[theme].default;
};

function EditableContributionSquare(props: { count: number, setCount: (count: number) => void, theme: Theme, borderRadius: BorderRadius }) {
  return (
    <button
      class="size-3"
      classList={{
        [props.borderRadius]: true
      }}
      style={{ 'background-color': getColour(props.count, props.theme) }}
      onClick={() => {
        const newCount = (props.count + 1) % 5;
        props.setCount(newCount);
      }}
    />
  );
}

function EditableContributionGrid(props: { theme: Theme, borderRadius: BorderRadius }) {
  const [contributions, setContributions] = createSignal(generateContributionData(52 * 52));

  return (
    <div class="contribution-grid">
      <For each={contributions()}>
        {(count, index) => (
          <EditableContributionSquare
            count={count}
            setCount={(newCount) => {
              setContributions((contributions) => {
                const newContributions = [...contributions];
                newContributions[index()] = newCount;
                return newContributions;
              });
            }}
            theme={props.theme}
            borderRadius={props.borderRadius}
          />
        )}
      </For>
    </div>
  )
};

export default function App() {
  const [theme, setTheme] = createSignal<Theme>('official');
  const [borderRadius, setBorderRadius] = createSignal<BorderRadius>('rounded-sm');

  return (
    <main class="flex flex-col items-center justify-center gap-y-4 h-screen">
      <h1 class="text-2xl font-bold tracking-tighter">My Contributions</h1>
      <div class="flex gap-x-2">
        <For each={Object.keys(themes)}>
          {(t) => (
            <button
              class="px-2 py-1 text-sm font-semibold"
              classList={{
                [t === theme() ? 'bg-gray-200' : 'bg-gray-100']: true,
                [borderRadius()]: true,
              }}
              onClick={() => setTheme(t as Theme)}
            >
              {t}
            </button>
          )}
        </For>
      </div>
      <div class="flex gap-x-2">
        <For each={borderRadii}>
          {(r) => (
            <button
              class="px-2 py-1 text-sm font-semibold"
              classList={{
                [r === borderRadius() ? 'bg-gray-200' : 'bg-gray-100']: true,
                [borderRadius()]: true,
              }}
              onClick={() => setBorderRadius(r)}
            >
              {r}
            </button>
          )}
        </For>
      </div>
      <EditableContributionGrid theme={theme()} borderRadius={borderRadius()} />
    </main>
  );
};
