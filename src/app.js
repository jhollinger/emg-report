var modals;

Vue.component('extremity', {
  props: ['title', 'color', 'form', 'modal'],
  template: '#extremity-template',
  methods: {
    open: function()  {
      modals.find(x => x.id === this.modal).open();
    },
  }
});

Vue.component('extremity-modal', {
  props: ['title', 'tag', 'form'],
  template: '#extremity-modal-template',
  methods: {
    save: function() {
      // TODO
      modals.find(x => x.id === this.tag).close();
    },
    cancel: function() {
      // TODO
      modals.find(x => x.id === this.tag).close();
    },
  }
});

var app = new Vue({
  el: '#app',
  data: {
    foo: "the data!!",
    forms: {lu: {}, ru: {}, ll: {}, rl: {}}
  },
  mounted: function() {
    var modalNodes = document.querySelectorAll('.modal');
    modals = M.Modal.init(modalNodes);

    var fabNodes = document.querySelectorAll('.fixed-action-btn');
    var fabs = M.FloatingActionButton.init(fabNodes, {direction: 'top', hoverEnabled: 'true'});
  }
});
