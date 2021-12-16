const DB = require('./database');
const bcrypt = require('bcrypt');
const Schema = DB.Schema;


const UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    book_read_count: {type: Number},
    books: { type: Object},
    role: {type: Boolean,default: false},
});

const BookShema = new Schema ({
    book_name: { type: String, required: true},
    book_author: {type: String, required: true},
    year_of_release: {type: Number, required: true},
    description: {type: String, required: true},

})

const AuthorSchema = new Schema({
    author_name: {type: String, required: true},
    author_surname: {type: String, required: true},
    author_patronymic: {type: String, required: true},
    year_of_birth: {type: Number, required: true},
    description: {type: String, required: false, default:"This is a temporary description, the author's descriptions will appear soon."},
})

module.exports = {UserSchema,BookShema,AuthorSchema};