function example() {
  return Promise.resolve(1).then(() => {
    return Promise.resolve(2)
  }).then(value => {
    return Promise.reject(3)
  })
}