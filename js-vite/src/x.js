export function whereami() {
  if (globalThis.document) {
    return 'browser';
  } else {
    return 'node';
  }
}

export function ping () {
  return 'pong';
}

export function pong () {
  return 'ping'
}
