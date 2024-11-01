type Theme = 'normal' | 'halloween';

function generateContributionData() {
  const daysInYear = 364;
  const contributions = Array.from({ length: daysInYear }, () =>
    // Random contribution count (0-4)
    Math.floor(Math.random() * 5)
  );
  return contributions;
};

function getColour(count: number, theme: Theme) {
  if (theme === 'halloween') {
    switch (count) {
      case 0: return '#ebedf0'; // no contributions
      case 1: return '#fde3cf'; // low (light orange)
      case 2: return '#fcb07e'; // medium-low
      case 3: return '#f7803a'; // medium-high
      case 4: return '#d15600'; // high (dark orange)
      default: return '#ebedf0';
    }
  }

  switch (count) {
    case 0: return '#ebedf0'; // no contributions
    case 1: return '#c6e48b'; // low
    case 2: return '#7bc96f'; // medium-low
    case 3: return '#239a3b'; // medium-high
    case 4: return '#196127'; // high
    default: return '#ebedf0';
  }
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
