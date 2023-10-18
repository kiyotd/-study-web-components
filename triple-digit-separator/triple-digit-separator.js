class TripleDigitSeparator extends HTMLElement {

  constructor() {
    super();
    this.value = "";
  }

  // 監視する属性を指定する
  static get observedAttributes() {
    console.log("observedAttributes");
    return ["value"];
  }

  // 属性が追加、削除、変更されたときに呼び出される
  attributeChangedCallback(prop, oldValue, newValue) {
    console.log("attributeChangedCallback");

    // 値が変わっていない場合は何もしない
    if (oldValue === newValue) return;

    // value属性が変更された場合は、valueプロパティを更新する
    if (prop === "value") {
      console.log("attributeChangedCallback: value changed");

      // newValue から , を削除
      let newValueNumber = Number(newValue.replace(/,/g, ""));

      // newValueNumber が 数値かどうか
      if (isNaN(newValueNumber)) {
        console.log("attributeChangedCallback: value is not number");
        return;
      }

      // 3桁区切りにして、valueプロパティを更新
      this.value = newValueNumber.toLocaleString();
    }
  }

  // 要素が最初にDOMに接続されたときに呼び出される
  connectedCallback() {
    console.log("connectedCallback");
    this.innerText = this.value;
  }

}

customElements.define("triple-digit-separator", TripleDigitSeparator);
