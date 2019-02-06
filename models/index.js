const S = require("sequelize")
const db = require("../config/index")

const Page = db.define("page",{
	title: {
		type: S.STRING,
		allowNull: false,
	},
	urltitle : {
		type: S.STRING,
		isUrl: true,
		allowNull: false,
	},
	content : {
		type: S.TEXT,
		allowNull: false,
	},
	status : {
		type: S.ENUM("open","close"),
		allowNull: false
	},
	date: {
        type: S.DATE,
        defaultValue: S.NOW
    },
    route: {
    	type: S.VIRTUAL,
    	get() {
    	return "/wiki/" + this.getDataValue(urltitle)
    	}
    }
});

const User = db.define("user", {
	name:{
		type: S.STRING,	
		allowNull: false,
	},
	email: {
		type: S.STRING,
		validate: {
		isEmail: true,
		},
		allowNull: false,
	},
});

module.exports = {
	Page: Page,
	User: User,
	db: db
};

