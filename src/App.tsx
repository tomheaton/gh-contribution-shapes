import { createSignal, For } from "solid-js";
import { EditableContributionGrid } from "./contribution-grid";
import { borderRadii, modes, themes, type BorderRadius, type Mode, type Theme } from "./data";

export default function App() {
  const [theme, setTheme] = createSignal<Theme>('official');
  const [borderRadius, setBorderRadius] = createSignal<BorderRadius>('rounded-sm');
  const [mode, setMode] = createSignal<Mode>('Standard');

  return (
    <main class="flex flex-col items-center justify-center gap-y-4 h-screen">
      <h1 class="text-2xl font-bold tracking-tighter">My Contributions</h1>
      {/* TODO: make this a dropdown */}
      <div class="flex gap-x-2">
        <For each={Object.keys(themes)}>
          {(t) => (
            <button
              class="px-2 py-1 text-sm font-semibold capitalize"
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
      {/* TODO: make this a dropdown */}
      <div class="flex gap-x-2">
        <For each={Object.keys(borderRadii)}>
          {(r: BorderRadius) => (
            <button
              class="px-2 py-1 text-sm font-semibold"
              classList={{
                [r === borderRadius() ? 'bg-gray-200' : 'bg-gray-100']: true,
                [borderRadius()]: true,
              }}
              onClick={() => setBorderRadius(r)}
            >
              {borderRadii[r]}
            </button>
          )}
        </For>
      </div>
      {/* TODO: make this a dropdown */}
      <div class="flex gap-x-2">
        <For each={modes}>
          {(m) => (
            <button
              class="px-2 py-1 text-sm font-semibold"
              classList={{
                [m === mode() ? 'bg-gray-200' : 'bg-gray-100']: true,
                [borderRadius()]: true,
              }}
              onClick={() => setMode(m)}
            >
              {m}
            </button>
          )}
        </For>
      </div>
      <EditableContributionGrid theme={theme()} borderRadius={borderRadius()} editable={mode() !== 'Standard'} />
      {/* TODO: add game of life mode */}
    </main>
  );
};
