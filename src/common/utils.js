/**
 * 防抖动函数
 * @param {函数} func 
 * @param {延时时间} delay 
 * @returns 
 */
export function debounce(func,delay){
  let Timer = null
  return function(...args){
    if(Timer) clearTimeout(Timer)
    Timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}