fetch('https://api.covid19api.com/summary')
           .then((response) => {
               return response.json();  
           }).then((data) => {
            var x=data.Countries[77].TotalConfirmed
               document.write("The total confirmed cases are" + x)              
           }).catch((error) => {
                console.log(error);
           });


        