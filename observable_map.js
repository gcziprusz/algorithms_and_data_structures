function map(transform) {
  return function(source) {
    return new Observable((subscriber) => {
      source.subscribe(value => {
        subscriber.next(transform(value));
      });
    });
  }
}
