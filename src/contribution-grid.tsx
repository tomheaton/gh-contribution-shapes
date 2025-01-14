import { createSignal, For } from "solid-js";
import type { BorderRadius, Theme } from "./data";
import { generateContributionData, getColour } from "./utils";

function EditableContributionSquare(props: { count: number, setCount: (count: number) => void, theme: Theme, borderRadius: BorderRadius, editable: boolean }) {
  return (
    <button
      class="size-3"
      classList={{
        [props.borderRadius]: true,
        [props.editable ? 'cursor-pointer' : 'cursor-default']: true,
      }}
      style={{ 'background-color': getColour(props.count, props.theme) }}
      onClick={() => {
        if (!props.editable) return;
        const newCount = (props.count + 1) % 5;
        props.setCount(newCount);
      }}
    />
  );
}

export function EditableContributionGrid(props: { theme: Theme, borderRadius: BorderRadius, editable: boolean }) {
  const [contributions, setContributions] = createSignal(generateContributionData(52 * 52));

  return (
    <div class="contribution-grid">
      <For each={contributions()}>
        {(count, index) => (
          <EditableContributionSquare
            count={count}
            editable={props.editable}
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
