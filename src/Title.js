class AndiTitle extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this._template();
  }

  _template() {
    return `
        <style>
            h2 {
                color: red;
            }
        </style>
        <h2>${this.getAttribute("name")} ist doof</h2>
    `;
  }
}

window.customElements.define("andi-title", AndiTitle);
