/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TrustedUserProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TrustedUser extends SvelteComponentTyped<
  TrustedUserProps,
  {},
  {}
> {}
