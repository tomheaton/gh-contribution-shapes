import { createSignal, For } from "solid-js";
import { EditableContributionGrid } from "./contribution-grid";
import { borderRadii, modes, themes, type BorderRadius, type Mode, type Theme } from "./data";

export default function App() {
  const [theme, setTheme] = createSignal<Theme>("official");
  const [borderRadius, setBorderRadius] = createSignal<BorderRadius>("rounded-sm");
  const [mode, setMode] = createSignal<Mode>("Standard");

  return (
    <main class="flex flex-col items-center justify-center gap-y-4 h-screen">
      <h1 class="text-2xl font-bold tracking-tighter">My Contributions</h1>

      <div class="flex gap-x-4">
        <select
          class="flex gap-x-2 px-2 py-1 text-sm font-semibold bg-gray-200 cursor-pointer"
          classList={{
            [borderRadius()]: true,
          }}
          onChange={(e) => setTheme(e.currentTarget.value as Theme)}
        >
          <For each={Object.keys(themes)}>
            {(t) => <option value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>}
          </For>
        </select>

        <select
          class="flex gap-x-2 px-2 py-1 text-sm font-semibold bg-gray-200 cursor-pointer"
          classList={{
            [borderRadius()]: true,
          }}
          onChange={(e) => setBorderRadius(e.currentTarget.value as BorderRadius)}
        >
          <For each={Object.keys(borderRadii)}>
            {(r: BorderRadius) => <option value={r}>{borderRadii[r]}</option>}
          </For>
        </select>

        <select
          class="flex gap-x-2 px-2 py-1 text-sm font-semibold bg-gray-200 cursor-pointer"
          classList={{
            [borderRadius()]: true,
          }}
          onChange={(e) => setMode(e.currentTarget.value as Mode)}
        >
          <For each={modes}>{(m) => <option value={m}>{m}</option>}</For>
        </select>
      </div>

      <EditableContributionGrid
        theme={theme()}
        borderRadius={borderRadius()}
        editable={mode() !== "Standard"}
      />
      {/* TODO: add game of life mode */}
    </main>
  );
}
