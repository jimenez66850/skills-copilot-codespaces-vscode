// create web server


// require the express module
const express = require('express');
// create a new instance of express
const app = express();
// require the database file
const db = require('./db');
// require the body-parser module
const bodyParser = require('body-parser');

// require the express-session module
const session = require('express-session');

// require the express-handlebars module
const exphbs = require('express-handlebars');

// require the express-fileupload module
const fileUpload = require('express-fileupload');

// require the express-fileupload module
const flash = require('connect-flash');

// require the express-fileupload module
const methodOverride = require('method-override');

// require the express-fileupload module
const moment = require('moment');

// require the express-fileupload module
const paginate = require('express-paginate');

// require the express-fileupload module
const {stripTags} = require('./helpers/hbs');

// require the express-fileupload module
const {select} = require('./helpers/hbs');

// require the express-fileupload module
const {formatDate} = require('./helpers/hbs');

// require the express-fileupload module
const {truncate} = require('./helpers/hbs');

// require the express-fileupload module
const {pagination} = require('./helpers/hbs');

// require the express-fileupload module
const {checkUser} = require('./helpers/hbs');

// require the express-fileupload module
const {checkAdmin} = require('./helpers/hbs');

// require the express-fileupload module
const {checkAdminUser} = require('./helpers/hbs');

// require the express-fileupload module
const {checkAdminUserPost} = require('./helpers/hbs');

// require the express-fileupload module
const {checkAdminUserComment} = require('./helpers/hbs');

// require the express-fileupload module
const {checkAdminUserPostComment} = require('./helpers/hbs');

// require the express-fileupload module
const {checkAdminUserPostCommentReply} = require('./helpers/hbs');

// require the express-fileupload module
const {checkAdminUserPostCommentReplyDelete} = require('./helpers/hbs');

// require the express-fileupload module
const {checkAdminUserPostCommentDelete} = require('./helpers/hbs');

// require the express-fileupload module
const {checkAdminUserPostDelete} = require('./helpers/hbs');

// require the express-file