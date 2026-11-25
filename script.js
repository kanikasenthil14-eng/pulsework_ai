    
alert("Welcome to System Status Checker!");

const updateBanner = (message, color) => {
    document.getElementById("banner").innerHTML = message;
    document.getElementById("banner").style.backgroundColor = color;
};

const checkStatus = () => {
    return new Promise((resolve, reject) => {

        updateBanner("System is Checking...", "orange");

        setTimeout(() => {

            let status = Math.random() > 0.5;

            if (status) {
                resolve("System is Online");
            }
            else {
                reject("System is Offline");
            }

        }, 2000);

    });
};

const checkSystemStatus = () => {

    checkStatus()
        .then((message) => {
            updateBanner(message, "green");
        })
        .catch((message) => {
            updateBanner(message, "red");
        });

};

checkSystemStatus();
