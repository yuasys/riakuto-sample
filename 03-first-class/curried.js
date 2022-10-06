// カリー化前
{
    const multiply = (n, m) => n * m;
    console.log(multiply(2, 4));    //8
}

// カリー化
{
    const withMultiply = (n) => {
        return(m) => n * m;
    };
    console.log(withMultiply(2)(4));    //8
}

// アロー関数式でカリー化
{
    const withMultiply = (n) => (m) => n * m;
    console.log(withMultiply(2)(4)) //8
}
