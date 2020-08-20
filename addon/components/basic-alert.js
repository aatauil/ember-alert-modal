import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BasicAlertComponent extends Component {

    @tracked modalState = true // Default closed


    @action
    toggleModalState(){
        this.modalState = !this.modalState
    }

}
