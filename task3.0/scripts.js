document.addEventListener('DOMContentLoaded', function(){

  var XFooProto = Object.create(HTMLElement.prototype);
  XFooProto.createdCallback = function () {
    //for example add event listeners
    this.addEventListener('click', function (e) {
      console.log('Cool!');
    });
    this.addEventListener('mouseenter', function (e) {
      console.log('Coolffff!');
    });
    this.addEventListener('dblclick', function (e) {
      console.log('dudu!');
    });
    this.innerHTML = "<b>I'm an x-foo-with-markup!</b>";
  };


  // 1. Give x-foo a foo() method.
  XFooProto.foo = function() {
    console.log('foo() called');
  };

  // 2. Define a property read-only "bar".
  Object.defineProperty(XFooProto, "bar", {value: 5});

  // 3. Register x-foo's definition.
  var XFoo = document.registerElement('x-foo', {prototype: XFooProto});

  // 4. Instantiate an x-foo.
  var xfoo = document.createElement('x-foo');

  // 5. Add it to the page.
  document.body.appendChild(xfoo);


  // xfoo.innerHTML = "Surprice!";

  console.log(xfoo.bar);
  console.log(xfoo.foo());

});
