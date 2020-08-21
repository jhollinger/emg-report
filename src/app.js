Vue.component('extremity', {
  props: ['title', 'color', 'form'],
  template: '#extremity-template',
  data: function() {
    return {
      modal: null,
      isOpen: false,
    };
  },
  methods: {
    open: function() {
      this.isOpen = true;
    },
    update: function(form) {
      this.isOpen = false;
      this.$emit('update:form', form);
    },
    remove: function() {
      this.$emit('update:form', {added: false});
    }
  }
});

Vue.component('extremity-modal', {
  props: ['title', 'form'],
  template: '#extremity-modal-template',
  mounted: function() {
    this.modal = M.Modal.init(this.$el, {dismissible: false});
    this.modal.open();
  },
  destroyed: function() {
    this.modal.close();
  },
  data: function() {
    return {
      modal: null,
      tmpForm: Object.assign({}, this.form),
    };
  },
  methods: {
    save: function() {
      this.tmpForm.added = true;
      this.$emit('update:form', this.tmpForm);
    },
    cancel: function() {
      this.$emit('cancel');
    },
  }
});

var app = new Vue({
  el: '#app',
  data: {
    foo: "the data!!",
    forms: {cn: {added: false}, lu: {added: false}, ru: {added: false}, ll: {added: false}, rl: {added: false}}
  },
  methods: {
    clear: function() {
      this.forms = {cn: {added: false}, lu: {added: false}, ru: {added: false}, ll: {added: false}, rl: {added: false}};
    }
  },
  mounted: function() {
    var modalNode = document.getElementById('modal-final');
    var modal = M.Modal.init(modalNode);

    var fabNodes = document.querySelectorAll('.fixed-action-btn');
    var fabs = M.FloatingActionButton.init(fabNodes, {direction: 'top', hoverEnabled: 'true'});
  }
});
