/**
 * @generated SignedSource<<e8eaa3ea01ff5ee9000328c9d48e4878>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlogListItem$data = {
  readonly Title: string;
  readonly " $fragmentType": "BlogListItem";
};
export type BlogListItem = BlogListItem$data;
export type BlogListItem$key = {
  readonly " $data"?: BlogListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"BlogListItem">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlogListItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "Title",
      "storageKey": null
    }
  ],
  "type": "Blog",
  "abstractKey": null
};

(node as any).hash = "84cd144421c5be7a8ad8ed9749c0bd12";

export default node;
