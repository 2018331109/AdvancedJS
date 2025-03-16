function outer() {
    let cnt=0;

    function inner() {
        cnt++;
        console.log(cnt);
    }
    inner();
}
outer();
outer();