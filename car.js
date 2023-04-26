// Registering component in log-component.js
AFRAME.registerComponent('car', {
    schema: {
      message: {type: 'string', default: 'CARRR!'}
    },
    init: function () {
        console.log(this.data.message);
      }
  });

 