/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AddDocumentProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AddDocument extends SvelteComponentTyped<
  AddDocumentProps,
  {},
  {}
> {}
