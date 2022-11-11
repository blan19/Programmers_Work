const View = class {
  $el;
  init(el) {
    if (!el) throw new Error("need elemnt");
    this.$el = el;
    return this;
  }

  setup(el) {
    this.init(el);
    return this;
  }

  on(event, handler) {
    this.$el.addEventListener(event, handler);
    return this;
  }

  emit(event, data) {
    const _event = new CustomEvent(event, { detail: data });
    this.$el.dispatchEvent(_event);
    return this;
  }

  render() {
    return this;
  }

  template() {
    return "";
  }
};

export default View;
