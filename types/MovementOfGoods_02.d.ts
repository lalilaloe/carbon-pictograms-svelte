/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MovementOfGoods_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MovementOfGoods_02 extends SvelteComponentTyped<
  MovementOfGoods_02Props,
  {},
  {}
> {}
