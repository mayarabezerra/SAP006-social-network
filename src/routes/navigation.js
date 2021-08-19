export const navigateTo = (route) => {
  window.history.pushState({}, '', route);
  const popStateEvent = new PopStateEvent('popstate');
  dispatchEvent(popStateEvent);
};
