class SimpleText extends HTMLElement {

  constructor() {
    super();
    this.text = "default value from constructor";
  }

  // 監視する属性を指定する
  static get observedAttributes() {
    console.log("observedAttributes");
    return ["text"];
  }

  // 属性が追加、削除、変更されたときに呼び出される
  attributeChangedCallback(prop, oldValue, newValue) {
    console.log("attributeChangedCallback");

    // 値が変わっていない場合は何もしない
    if (oldValue === newValue) return;

    // text属性が変更された場合は、textプロパティを更新する
    if (prop === "text") {
      console.log("attributeChangedCallback: text changed");
      this.text = newValue
    }
  }

  // 要素が最初にDOMに接続されたときに呼び出される
  connectedCallback() {
    console.log("connectedCallback");
    this.innerText = this.text;
  }

}

customElements.define("simple-text", SimpleText);
