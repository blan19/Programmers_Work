import View from "./View.js";

const List = class extends View {
  query = "";
  list = null;
  index = 0;
  setup(el) {
    this.init(el);
    this.$ul = this.$el.querySelector("ul");
    this.onHide();

    this.event();

    return this;
  }

  render() {
    if (!this.list || !this.list.length) {
      this.onHide();
      return;
    }
    this.onShow();
    this.$ul.innerHTML = this.template();
  }

  template() {
    const template = `${this.list
      .map(
        (data, index) =>
          `<li data-name=${data} class=${
            this.index === index ? "Suggestion__item--selected" : ""
          }>${data.replace(
            this.query,
            `<span class="Suggestion__item--matched" >${this.query}</span>`
          )}</li>`
      )
      .join("")}`;
    return template;
  }

  event() {
    this.$el.addEventListener("click", (e) => this.onClick(e));
  }

  setList(data) {
    this.list = data;
    this.render();
  }

  onClick(e) {
    const li = e.target.closest("li");
    if (!li) return;
    const name = li.dataset.name;
    this.emit("@store", { name });
    alert(name);
  }

  onSubmit() {
    const name = this.list[this.index];
    this.emit("@store", { name });
    alert(name);
  }

  onChangeQuery(query) {
    this.query = query;
  }

  onHide() {
    this.$el.style.display = "none";
  }

  onShow() {
    this.$el.style.display = "block";
  }

  onUp() {
    if (this.index - 1 < 0) {
      this.index = this.list.length - 1;
      this.render();
      return;
    }
    this.index -= 1;
    this.render();
  }

  onDown() {
    if (this.index + 1 > this.list.length - 1) {
      this.index = 0;
      this.render();
      return;
    }
    this.index += 1;
    this.render();
  }
};

export default List;
