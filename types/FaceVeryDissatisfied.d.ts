/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FaceVeryDissatisfiedProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FaceVeryDissatisfied extends SvelteComponentTyped<
  FaceVeryDissatisfiedProps,
  {},
  {}
> {}
