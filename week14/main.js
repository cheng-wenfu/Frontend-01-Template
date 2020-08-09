function createElement(Cls, attributes, ...children) {
  let o = new Cls({
    timer: {}
  });
  for(let name in attributes) {
    o.setAttribute(name,attributes[name])
  }
  console.log(children)
  for(child in children) {
    o.appendChild(child);
  }
  return o;
}

class Parent {
  constructor(config) {
    this.children = [];
    this.root = document.createElement('div');
    console.log("config:", config)
  } 

  mountTo(parent) {
    parent.appendChild(this.root)
  }
  // Attribute
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }

  appendChild(child) {
    this.root.appendChild(child)
  }

}
class Child {
  constructor(config) {
    this.children = [];
    this.root = document.createElement('div');
  } 

  mountTo(parent) {
    parent.appendChild(this.root)
  }
  // Attribute
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }

  appendChild(child) {
    this.root.appendChild(child)
  }

}

let component = <Parent id="a" class="b">
  <Child></Child>
  <Child></Child>
  <Child></Child>
</Parent>
console.log(component)