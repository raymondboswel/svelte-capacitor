import { modalController } from '@ionic/core';
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  @property()
 
  dismissModal() {
    modalController.dismiss();
  }

  render() {
    return html`<wc-header></wc-header>Header
               <div ><ion-button  @click="${this.dismissModal}">Dismiss</ion-button></div>
    `;
  }
}
