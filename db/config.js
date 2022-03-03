const mongoose  = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CNN);


    console.log('DB connected...')

  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar DB");
  }

};


module.exports =  {
    dbConnection
}


