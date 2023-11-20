const cancel = document.querySelectorAll('#cancel');
const AP = document.querySelectorAll('#AP');
const PS = document.querySelectorAll('#PS');
const OP = document.querySelectorAll('#OP');
const IT = document.querySelectorAll('#IT');
const D = document.querySelectorAll('#D');

cancel.forEach(button => { button.addEventListener('click', async (e) => {
        e.preventDefault();

        const id = button.dataset.index;
        //console.log(id);

        const jString = JSON.stringify({id});

        const response = await fetch('/cancelChange', {
            method: "POST",
            body: jString,
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(response.status == 200){
            location.reload(true);
        }else{
            console.log("error has occured");
        }


    })
})

AP.forEach(button => {
    button.addEventListener('click', async (e) => {
        const orderID = e.target.closest('#dropdownMenu').dataset.index;
        const status = "Awaiting Payment";

        const jString = JSON.stringify({orderID, status});

        const response = await fetch('/statusChange', {
            method: "POST",
            body: jString,
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(response.status == 200){
            location.reload(true);
        }else{
            console.log("error has occured");
        }
    });
});

PS.forEach(button => {
    button.addEventListener('click', async (e) => {
        const orderID = e.target.closest('#dropdownMenu').dataset.index;
        const status = "Payment Successful";

        const jString = JSON.stringify({orderID, status});

        const response = await fetch('/statusChange', {
            method: "POST",
            body: jString,
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(response.status == 200){
            location.reload(true);
        }else{
            console.log("error has occured");
        }
    });
});

OP.forEach(button => {
    button.addEventListener('click', async (e) => {
        const orderID = e.target.closest('#dropdownMenu').dataset.index;
        const status = "Order Packed";

        const jString = JSON.stringify({orderID, status});

        const response = await fetch('/statusChange', {
            method: "POST",
            body: jString,
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(response.status == 200){
            location.reload(true);
        }else{
            console.log("error has occured");
        }
    });
});

IT.forEach(button => {
    button.addEventListener('click', async (e) => {
        const orderID = e.target.closest('#dropdownMenu').dataset.index;
        const status = "In Transit";

        const jString = JSON.stringify({orderID, status});

        const response = await fetch('/statusChange', {
            method: "POST",
            body: jString,
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(response.status == 200){
            location.reload(true);
        }else{
            console.log("error has occured");
        }
    });
});

D.forEach(button => {
    button.addEventListener('click', async (e) => {
        const orderID = e.target.closest('#dropdownMenu').dataset.index;
        const status = "Delivered";

        const jString = JSON.stringify({orderID, status});

        const response = await fetch('/statusChange', {
            method: "POST",
            body: jString,
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(response.status == 200){
            location.reload(true);
        }else{
            console.log("error has occured");
        }
    });
});