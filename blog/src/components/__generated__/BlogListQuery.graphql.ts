/**
 * @generated SignedSource<<8b951da915cc0c56f3f536029cf1e6a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BlogListQuery$variables = {};
export type BlogListQueryVariables = BlogListQuery$variables;
export type BlogListQuery$data = {
  readonly blogs: {
    readonly data: ReadonlyArray<{
      readonly id: string | null;
      readonly attributes: {
        readonly Title: string;
      } | null;
    }>;
  } | null;
};
export type BlogListQueryResponse = BlogListQuery$data;
export type BlogListQuery = {
  variables: BlogListQueryVariables;
  response: BlogListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BlogEntityResponseCollection",
    "kind": "LinkedField",
    "name": "blogs",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BlogEntity",
        "kind": "LinkedField",
        "name": "data",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Blog",
            "kind": "LinkedField",
            "name": "attributes",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "Title",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BlogListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BlogListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "08004a207c32a32523bde7814fc30f3a",
    "id": null,
    "metadata": {},
    "name": "BlogListQuery",
    "operationKind": "query",
    "text": "query BlogListQuery {\n  blogs {\n    data {\n      id\n      attributes {\n        Title\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "099006534d97d5c1cae1b1f42129f67c";

export default node;
