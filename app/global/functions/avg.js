const avg = (array) => {
    let total = 0;
    array.map(num => total += num);
    const result = total / array.length;
    return result.toFixed(1);
}
export default avg;