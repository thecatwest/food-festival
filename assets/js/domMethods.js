// create an htmlString element
function createEl(htmlString, attrs, ...children) {
  // check if htmlString is a string
  if (typeof htmlString !== "string") {
    // if it is not a string, throw error
    throw Error("Argument 'htmlString' is required and must be a string");
  }
  // else, create htmlString element and set as variable
  const el = document.createElement(htmlString);

  // if the type of attributes are objects
  if (typeof attrs === "object") {
    for (let key in attrs) {
      if (key.substring(0, 2) === "on") {
        el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
      } else {
        el.setAttribute(key, attrs[key]);
      }
    }
  }

  children.forEach(function (child) {
    let node;

    if (child.constructor.name.includes("Element")) {
      node = child;
    } else {
      node = document.createTextNode(child);
    }

    el.appendChild(node);
  });

  return el;
};

module.exports = createEl;