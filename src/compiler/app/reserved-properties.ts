
/**
 * Properties which must not be property renamed during minification
 */
export const RESERVED_PROPERTIES: string[] = [
  'addListener',
  'applyPolyfill',
  'attr',
  'color',
  'Context',
  'dom',
  'emit',
  'enableListener',
  'eventNameFn',
  'h',
  'hydratedCssClass',
  'initialized',
  'isClient',
  'isPrerender',
  'isServer',
  'loaded',
  'mode',
  'namespace',
  'Promise',
  'publicPath',
  'queue',
  'raf',
  'read',
  'ref',
  'resourcesUrl',
  'tick',
  'write',
  '$definedCmps',
  '$r',


  /**
   * App Global - window.App
   * Properties which get added to the app's global
   */
  'components',
  'loadBundle',
  'loadStyles',


  /**
   * Host Element
   * Properties set on the host element
   */
  '$',
  'componentOnReady',


  /**
   * Component Constructor static properties
   */
  'attr',
  'capture',
  'connect',
  'context',
  'disabled',
  'elementRef',
  'encapsulation',
  'events',
  'host',
  'is',
  'listeners',
  'method',
  'mutable',
  'passive',
  'properties',
  'scoped',
  'state',
  'style',
  'styleMode',
  'type',
  'watchCallbacks',

  /**
   * Component Instance
   * Methods set on the user's component
   */
  'componentWillLoad',
  'componentDidLoad',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentDidUnload',
  'forceUpdate',
  'hostData',
  'render',


  /**
   * Web Standards / DOM
   */
  'add',
  'addEventListener',
  'appendChild',
  'async',
  'attachShadow',
  'attributeChangedCallback',
  'body',
  'bubbles',
  'cancelable',
  'capture',
  'characterData',
  'charset',
  'childNodes',
  'children',
  'class',
  'classList',
  'className',
  'cloneNode',
  'closest',
  'composed',
  'connectedCallback',
  'content',
  'createComment',
  'createElement',
  'createElementNS',
  'createEvent',
  'createTextNode',
  'CSS',
  'customElements',
  'CustomEvent',
  'data',
  'defaultView',
  'define',
  'detail',
  'didTimeout',
  'disconnect',
  'disconnectedCallback',
  'dispatchEvent',
  'document',
  'documentElement',
  'Element',
  'error',
  'Event',
  'fetch',
  'firstElementChild',
  'getAttribute',
  'getAttributeNS',
  'getRootNode',
  'getStyle',
  'head',
  'hidden',
  'host',
  'href',
  'id',
  'initCustomEvent',
  'innerHTML',
  'insertBefore',
  'location',
  'log',
  'keyCode',
  'match',
  'matches',
  'matchesSelector',
  'matchMedia',
  'mozMatchesSelector',
  'msMatchesSelector',
  'navigator',
  'nextSibling',
  'nodeName',
  'nodeType',
  'now',
  'observe',
  'observedAttributes',
  'onerror',
  'onload',
  'onmessage',
  'ownerDocument',
  'ownerSVGElement',
  'parentElement',
  'parentNode',
  'passive',
  'pathname',
  'performance',
  'postMessage',
  'previousSibling',
  'querySelector',
  'querySelectorAll',
  'remove',
  'removeAttribute',
  'removeAttributeNS',
  'removeChild',
  'removeEventListener',
  'requestAnimationFrame',
  'requestIdleCallback',
  'search',
  'setAttribute',
  'setAttributeNS',
  'shadowRoot',
  'src',
  'style',
  'supports',
  'tagName',
  'text',
  'textContent',
  'timeRemaining',
  'warn',
  'webkitMatchesSelector',
  'window',
  'HTMLElement'
];
