import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';



export default class BasicAlertComponent extends Component {

    @tracked openState = true // Default closed

    @action baToggle(){
        this.openState = !this.openState
    }

}
