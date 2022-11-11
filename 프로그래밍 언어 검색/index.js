import App from "./src/App.js";
import $ from "./src/utils/selector.js";

window.onload = () => {
  new App($(".App"));
};
