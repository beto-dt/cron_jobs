const cron =  require('node-cron');

const { db, http, signs }= require("./util");

class Main {
    static async getHoroscope(){

    }
}
 cron.schedule('0 0 * * * *', () => {
   Main.getHoroscope(); 
}); 