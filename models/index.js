const S = require("sequelize")
const db = require("../config/index")

const Page = db.define("page",{
	title: {
		type: S.STRING,
	},
	urltitle : {
		type: S.STRING,
		isUrl: true,
	},
	content : {
		type: S.TEXT,
		allowNull: false,
	},
	status : {
		type: S.ENUM("open","close"),
	},
});

const User = db.define("user", {
	name:{
		type: S.STRING,	
	} 
	email: {
		type: S.STRING,
		validate: {
		isEmail: true,
		}
	},
});

module.exports = {
	Page: Page,
	User: User
};

