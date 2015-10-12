function LowestFilter() {
  return function (value) {
    if (!Array.isArray(value)) value = [value];

    let lowest = Math.min.apply(null, value.map((price) => price.discount_price));

    if (lowest) {
      return lowest.toFixed(0).replace(/./g, function (c, i, a) {
        return i && ((a.length - i) % 3 === 0) ? ' ' + c : c;
      });
    }
  };
}

export default LowestFilter;