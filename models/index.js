const S = require("sequelize")
const db = require("../config/index")

const Page = db.define("page",{
	title: {
		type: S.STRING,
		allowNull: false,
		unique: true
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
		type: S.ENUM("open","close")
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
    }},
    {
    	hooks:{
    		beforeValidate: function(page){
    			page.urltitle = page.title.replace(/ /gi, "_")
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
		unique: true
	},
});

module.exports = {
	Page: Page,
	User: User,
	db: db
};

