import {Sequelize} from "sequelize"

const db = new Sequelize('app', '', '', {
 storage:"./listingdatabase.sqlite",
 dialect:"sqlite",
 logging:false
})
export default db