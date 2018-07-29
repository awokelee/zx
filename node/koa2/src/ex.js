export const name = 'Luke'
export const getName = () => {
  return name
}

// 导出默认
const age = 19
export default age

// 批量导出
export {
  name as name2,
  getName as getName2,
  age
}