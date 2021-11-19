import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  @property()
 

  render() {
    return html`<p>Hello!</p>`;
  }
}

// customElements.define('simple-greeting', SimpleGreeting);