import Sequelize from "sequelize";

let sequelize = null;

export const getSequelize = () => {

  if(sequelize) {
    return sequelize
  } else {
    sequelize = new Sequelize(
      'voting',
      'root',
      'Password#1',
       {
         host: 'localhost',
         dialect: 'mysql'
       }
     );

     return sequelize;
  }

}

export async function connectDB () {
  try {
    await getSequelize().authenticate()
    console.log('Connection has been established successfully.');
  } catch (e) {
    console.error('Unable to connect to the database: ', e);
  }
}