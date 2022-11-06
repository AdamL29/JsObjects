let company ={
    name: `DasNice`,
    yearRevenue: 12000000,
    ceo: `Adam`,
    numberEmployees: 50,
    managers: [
        {
            name: `Timothy`,
            salary: 70000,
            isSenior: false
        },
        {
            name: `Aaron`,
            salary: 100000,
            isSenior: false
        },
        {
            name: `Denise`,
            salary: 150000,
            isSenior: true
        }
    ]
}

// Managers and a Manager Object
//Timothy, Aaron, Denise
//let manager = {
//     name: `Timothy`,
//     salary: 7000,
//     isSenior: false
// }

if (company[`yearRevenue`] >= 1000000) {
    // Two ways of completing the change log below.
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

let counter = 0;
while (counter < company[`managers`].length) {
    console.log(company[`managers`][counter][`name`]);
    console.log(company[`managers`][counter][`salary`]);
    if (company[`managers`][counter][`isSenior`] === true) {
        console.log(`You won the manager game.`);
    }
    counter = counter + 1;
}

for (let counter = 0; counter < company[`managers`].length; counter++){
    console.log(company[`managers`][counter][`name`]);
    console.log(company[`managers`][counter][`salary`]);
    if (company[`managers`][counter][`isSenior`] === true)
    console.log(`You won the manager game.`);
}