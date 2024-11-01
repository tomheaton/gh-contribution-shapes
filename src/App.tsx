type Theme = 'normal' | 'halloween';

const daysInYear = 364;

function generateContributionData() {
  return Array.from({ length: daysInYear }, () =>
    // Random contribution count (0-4)
    Math.floor(Math.random() * 5)
  );
};

const colours = {
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
} as const;

function getColour(count: number, theme: Theme) {
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
      {contributions.map((count, index) => (
        <ContributionSquare count={count} theme={props.theme} />
      ))}
    </div>
  );
};


export default function App() {
  return (
    <main class="flex flex-col items-center justify-center gap-y-4 h-screen">
      <h1 class="text-2xl font-bold tracking-tighter">My Contributions</h1>
      <ContributionGrid theme="normal" />
    </main>
  );
};
