export {};

declare global {
  type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;
}
