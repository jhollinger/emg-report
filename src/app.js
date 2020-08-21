var modals;

Vue.component('extremity', {
  props: ['title', 'color', 'form', 'modal'],
  template: '#extremity-template',
  methods: {
    open: function()  {
      var modal = modals.find(x => x.id === this.modal);
      if (modal) {
        modal.open();
      }
    },
  }
});

var app = new Vue({
  el: '#app',
  data: {
    foo: "the data!!",
    forms: {lu: {}, ru: {}, ll: {}, rl: {}}
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var modalNodes = document.querySelectorAll('.modal');
  modals = M.Modal.init(modalNodes);

  var fabNodes = document.querySelectorAll('.fixed-action-btn');
  var fabs = M.FloatingActionButton.init(fabNodes, {direction: 'top', hoverEnabled: 'true'});
});
