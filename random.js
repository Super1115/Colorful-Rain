class random{
    static arr(arr){
        return arr[ Math.floor( Math.random() * arr.length)]
    }
}
export { random }