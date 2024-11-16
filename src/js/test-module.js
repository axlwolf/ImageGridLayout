export const AppBase = (() => {
  console.log("AppBase");
  /*
   *   DOM refs
   *
   * */

  const init = () => {
    console.log("Init AppBase");
    eventHandlers();
  };

  const eventHandlers = () => {};

  return {
    init,
  };
})();
