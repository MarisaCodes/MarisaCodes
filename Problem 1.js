let a=0;
for (let i=0;i<1000;++i) {
    if(i%3==0 || i%5==0) {
        a=a+i;
    }
}

console.log(a); 