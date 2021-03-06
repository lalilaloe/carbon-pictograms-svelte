/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IntegrationProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Integration extends SvelteComponentTyped<
  IntegrationProps,
  {},
  {}
> {}
