var shopper = {
        name : 'ABV',
        uuid : 1232,
        age : 15,
        premiumUser : false,
        over18 : function(){
            return (this.age>18 ? true : false);
            },
        grocerycart: ['eggs','flour']
        }

s1 =shopper;

if ('valve'==NaN){
    console.log('yes');
}
else{
    console.log('no')
}