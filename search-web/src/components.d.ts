/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SearchQuery {
        "search": (query: any) => Promise<void>;
    }
}
declare global {
    interface HTMLSearchQueryElement extends Components.SearchQuery, HTMLStencilElement {
    }
    var HTMLSearchQueryElement: {
        prototype: HTMLSearchQueryElement;
        new (): HTMLSearchQueryElement;
    };
    interface HTMLElementTagNameMap {
        "search-query": HTMLSearchQueryElement;
    }
}
declare namespace LocalJSX {
    interface SearchQuery {
    }
    interface IntrinsicElements {
        "search-query": SearchQuery;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "search-query": LocalJSX.SearchQuery & JSXBase.HTMLAttributes<HTMLSearchQueryElement>;
        }
    }
}