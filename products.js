let tableContainer=document.getElementById("tables-container");
const data=[
    {
        Brand:"Wix",
        Description:"Develop a personalized..",
        Members:"6",
        Categories:"Automation",
        Tags:"#Digital",
        nxtMeeting:"In 30 minutes"
    },
    {
        Brand:"Shopify",
        Description:"Introduce a cloud based..",
        Members:"4",
        Categories:"E-commerce",
        Tags:"#OnlineShopping",
        nxtMeeting:"Tomorrow"
    },
    {
        Brand:"MailChimp",
        Description:"Develop a mobile app",
        Members:"4",
        Categories:"SAAS",
        Tags:"#Tech",
        nxtMeeting:"Tomorrow"
    },
    {
        Brand:"PayPal",
        Description:"Tihis program could include..",
        Members:"6",
        Categories:"MarketPlace",
        Tags:"#selOnline",
        nxtMeeting:"In 6 hours"
    },
    {
        Brand:"Disney",
        Description:"Introduce a B2B solution..",
        Members:"2",
        Categories:"B2B",
        Tags:"#Digital",
        nxtMeeting:"no contact"
    },
    {
        Brand:"Google",
        Description:"Offer a comprehensive..",
        Members:"7+",
        Categories:"Finance",
        Tags:"#Finance",
        nxtMeeting:"In 30 minutes"
    },
    {
        Brand:"Microsoft",
        Description:"Launch an advisory service..",
        Members:"5",
        Categories:"Publishing",
        Tags:"#Marketing",
        nxtMeeting:"No contact"
    },
    {
        Brand:"Invision",
        Description:"The tool would analyze..",
        Members:"2",
        Categories:"Web service",
        Tags:"#Marketing",
        nxtMeeting:"In month"
    }
]

function createTable(data){
    const table=document.createElement("table");
    const headerRow=document.createElement("tr");
    for(const key in data[0]){
        const th=document.createElement("th");
        th.textContent=key;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
    data.forEach(item=>{
        const row=document.createElement("tr");
        for(const key in item){
            const td=document.createElement("td");
            td.textContent=item[key];
            row.appendChild(td);
        }
        table.appendChild(row);
    });
    tableContainer.appendChild(table);
}
createTable(data);