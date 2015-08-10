function RubleFilter() {
  return function (value) {
    if (value) {
      return value.toFixed(0).replace(/./g, function (c, i, a) {
        return i && ((a.length - i) % 3 === 0) ? ' ' + c : c;
      });
    }
  };
}

export default RubleFilter;