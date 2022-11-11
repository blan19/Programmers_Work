import View from "./View.js";
import constants from "../constants/index.js";

const Stack = class extends View {
  store = [];
  setup(el) {
    this.init(el);
    this.$ul = this.$el.querySelector("ul");
    return this;
  }

  render() {
    if (!this.store.length) {
      this.onHide();
      return;
    }
    this.onShow();
    this.$ul.innerHTML = this.template();
  }

  template() {
    const template = `${this.store.map((data) => `<li>${data}</li>`).join("")}`;
    return template;
  }

  fifoStack(name) {
    this.removeDuplicatedName(name);
    if (this.store.length >= constants.STACK_MAX_LENGTH) {
      this.store.shift();
      this.store.push(name);
      return;
    }
    this.store.push(name);
  }

  removeDuplicatedName(name) {
    const index = this.store.indexOf(name);
    if (index !== -1) this.store.splice(index, 1);
  }

  onStore(name) {
    this.fifoStack(name);
    this.render();
  }

  onHide() {
    this.$el.style.display = "none";
  }

  onShow() {
    this.$el.style.display = "flex";
  }
};

export default Stack;
