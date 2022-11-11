import Input from "./view/Input.js";
import List from "./view/List.js";
import Stack from "./view/Stack.js";
import $ from "./utils/selector.js";
import api from "./utils/api/index.js";
import cache, { isCaching, setLocalStorage } from "./utils/cache.js";

const App = class {
  $root;
  constructor(root) {
    this.$root = root;
    this.setup();
  }

  setup() {
    this.inputView = new Input()
      .setup($(".SearchInput"))
      .on("@keyup", (e) => {
        this.fetchSearch(e.detail.query);
        this.listView.onChangeQuery(e.detail.query);
      })
      .on("@up", (e) => this.listView.onUp())
      .on("@down", (e) => this.listView.onDown())
      .on("@submit", (e) => this.listView.onSubmit());
    this.listView = new List()
      .setup($(".Suggestion"))
      .on("@store", (e) => this.stackView.onStore(e.detail.name));
    this.stackView = new Stack().setup($(".SelectedLanguage"));
  }

  async fetchSearch(query) {
    const searchResult = await api.getSearchResult(query);
    // if(isCaching(searchResult)) return;
    // setLocalStorage(searchResult);
    this.listView.setList(searchResult);
  }
};

export default App;
