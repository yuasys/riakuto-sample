const greeter = (tartget) => {
    const sayHello = () => {
        console.log(`Hi, ${tartget}!}`);
    };
    return sayHello;
};

const greet = greeter( 'Step Jun');
greet();    //Hi, Step Jun!
