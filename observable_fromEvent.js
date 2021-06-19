function fromEvent(element, eventName, capture = false) {
  return new Observable((sub) => {
    element.addEventListener(eventName, (event) => {
      sub.next(event);
    }, capture)
  })
}
