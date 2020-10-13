
// THIS OBJECT IS PASSED TO THE FRONT END FOR QUERYING DATA FROM THE BACKEND


const clientConfig = {
    mode : {
        development : true, 
        production : false,
    },
    url : {
        development: "http://localhost:8888/laboski-backend/dist/",
        production: "https://google.com",
    },
    selectedRoutes : ["pages", "posts"]
}
// This object is being exposed to the frontend to obtain the data. 
export const CONFIG = {
    url : {
        base: clientConfig.mode.production ? clientConfig.url.production : clientConfig.url.development,
        frontend: {
            development: "http://localhost:3000/"
        },
        selectedRoutes : clientConfig.selectedRoutes,
        apiRoute: "wp-json/wp/v2",
    }
}



