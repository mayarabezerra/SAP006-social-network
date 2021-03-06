export const notFound = () => {
  const rootElement = document.createElement('div');
  const containerElement = ` <div class="container">
    <input type="checkbox" id="switch" />
    <div class="ellipse"></div>
    <div class="ray"></div>
    <div class="head"></div>
    <div class="neck"></div>
    <div class="body">
        <label for="switch"></label>
    </div>
    </div>
    <div class="container">
        <div class="msg msg_1">404</div>
        <div class="msg msg_2">Page Not Found</div>
    </div>`;

  rootElement.innerHTML = containerElement;

  return rootElement;
};
