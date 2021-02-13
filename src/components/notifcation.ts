import * as errorData from '../errorlist.json';
import {randArray, sleep} from './helper';

/**
 * notification webcomponent
 */
class Notif extends HTMLElement {
     async connectedCallback() {
        
        this.innerHTML = `<p class="notif">${ randArray(errorData.errortext)}</p>`
        this.classList.add('active')
        
        await sleep(3500)
        this.classList.remove('active')
        await sleep(400)
        if(this.parentNode != null) this.parentNode.removeChild(this);
        
    }
  }
 customElements.define('notif-box', Notif);
