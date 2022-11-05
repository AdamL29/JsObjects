let company ={
    Name: `DasNice`,
    yearRevenue: 12000000,
    ceo: `Adam`,
    numberEmployees: 50
}

if (company[`yearRevenue`] >= 1000000) {
    console.log("Congratulations", company["companyName"], 
    company[`ceo`], company[`numberEmployees`]);    
} else{
    console.log(`You will learn to keep growing.`);
}