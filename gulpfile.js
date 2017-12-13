/**
 * Ornitorrinco - Gulp
 * 
 * Module compilador do projeto
 * 
 */

const gulp = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence');

require('./gulpTasks/app');
require('./gulpTasks/deps');

gulp.task('default', () => {
    sequence('deps', 'app');
});