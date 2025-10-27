function numberOfBeams(bank) {
  let prev = 0;
  let ans = 0;

  for (const s of bank) {
    let count = 0;
    for (const c of s) {
      if (c === '1') count++;
    }

    if (count !== 0) {
      ans += prev * count;
      prev = count;
    }
  }

  return ans;
}
