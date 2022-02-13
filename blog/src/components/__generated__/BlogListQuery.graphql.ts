/**
 * @generated SignedSource<<40beb97a034791e76148e54278daa51b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlogListQuery$variables = {};
export type BlogListQueryVariables = BlogListQuery$variables;
export type BlogListQuery$data = {
  readonly blogs: {
    readonly data: ReadonlyArray<{
      readonly id: string | null;
      readonly attributes: {
        readonly " $fragmentSpreads": FragmentRefs<"BlogListItem">;
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BlogListQuery",
    "selections": [
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
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Blog",
                "kind": "LinkedField",
                "name": "attributes",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "BlogListItem"
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BlogListQuery",
    "selections": [
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
              (v0/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "44d6f97b78b80181d12c00012fe232c5",
    "id": null,
    "metadata": {},
    "name": "BlogListQuery",
    "operationKind": "query",
    "text": "query BlogListQuery {\n  blogs {\n    data {\n      id\n      attributes {\n        ...BlogListItem\n      }\n    }\n  }\n}\n\nfragment BlogListItem on Blog {\n  Title\n}\n"
  }
};
})();

(node as any).hash = "3bb74e93bba58cbbc4f773ed066d3c75";

export default node;
