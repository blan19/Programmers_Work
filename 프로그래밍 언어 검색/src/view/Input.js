import View from "./View.js";

const Input = class extends View {
  setup(el) {
    this.init(el);
    this.$el.focus();
    this.$input = this.$el.querySelector("input");

    this.$input.focus();

    this.event();

    return this;
  }

  render() {}

  event() {
    this.on("submit", (e) => e.preventDefault());
    this.$el.addEventListener("keyup", (e) => this.onKeyUp(e));
    this.$el.addEventListener("keydown", (e) => this.onArrow(e), false);
  }

  onKeyUp(e) {
    e.preventDefault();
    const query = e.target.value;
    if (e.keyCode === 13) this.onSubmit();
    this.emit("@keyup", { query });
  }

  onArrow(e) {
    if (e.keyCode === 38) this.onUp();
    if (e.keyCode === 40) this.onDown();
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  }

  onSubmit() {
    this.emit("@submit");
  }

  onUp() {
    this.emit("@up");
  }

  onDown() {
    this.emit("@down");
  }
};

export default Input;
