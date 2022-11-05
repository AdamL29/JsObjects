let company ={
    name: `DasNice`,
    yearRevenue: 12000000,
    ceo: `Adam`,
    numberEmployees: 50
}

if (company[`yearRevenue`] >= 1000000) {
    //console.log(`Congratulations on being a company with money`)
    //console.log(company[`name`])
    //console.log(company[`ceo`])
    //console.log(company[`numberEmployees`])
    // console.log(`Congratulations ${company["name"]}  
    // ${company["ceo"]} ${company["numberEmployees"]});
    console.log("Congratulations", company["name"], 
    company[`ceo`], company[`numberEmployees`]);    
} else{
    console.log(`You will learn to keep growing.`);
}