import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class ApplicationController extends Controller {

  @tracked options = {
    title: 'This is an alert',
    description: 'some description',
    closeText: 'dismiss'
  }
  
}
