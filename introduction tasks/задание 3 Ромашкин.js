function pow(a, b) {
    let result = a;
    let a=2;
    let b=3;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  }
  console.log();