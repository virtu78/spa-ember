import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tasksall');
  this.route('handbooks');
  this.route('tasksmytasks');
  this.route('tasksallnotcompleted');
  this.route('tasksallclosedasunnecessary');
  this.route('tasksallclosedonpaused');
  this.route('tasksmytasksnotcompleted');
  this.route('tasksmytasksclosedasunnecessary');
  this.route('tasksmytasksclosedonpause');
  this.route('tasksfrommeall');
  this.route('tasksfrommenotcompleted');
  this.route('tasksfrommeclosedasunnecessary');
  this.route('tasksfrommeclosedonpaused');
});

export default Router;
