const format = (score, par = null) => {
  if (par === null) {
    // formatting avg diff
    const res = score;
    if (res > 0) {
      return `+${res}`;
    }
    if (res < 0) {
      return `${res}`;
    }
    return `E`;
  } else if (par !== null) {
    // formatting lowest score diff
    const res = score - par;
    if (res > 0) {
      return `${score} (+${res})`;
    }
    if (res < 0) {
      return `${score} (${res})`;
    }
    return `${score} (E)`;
  }
}

export default format;