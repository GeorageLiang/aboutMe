/**
 * Created by Administrator on 2017/2/10.
 */
seajs.config({
    charset: 'utf-8',
    base: './',
    paths: {
        'js': 'js',
        'dep': 'js/dep'
    },
    alias: {
        'jquery':'http://ov2f52i4q.bkt.clouddn.com/jquery-1.10.1.min',
        'raphael':'http://ov2f52i4q.bkt.clouddn.com/raphael.js',
        'eve':'dep/eve',
        'particle':'dep/particle',
        'skroll':'dep/skroll'
    }
});


seajs.use('./js/main');

