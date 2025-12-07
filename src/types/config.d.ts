declare module "config" {
  function get<T = any>(param: string): T;
  function has(param: string): boolean;

  export { get, has };
}
