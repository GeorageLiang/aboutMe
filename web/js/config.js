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
        'jquery':'dep/jquery-1.10.1.min',
        'raphael':'dep/raphael',
        'eve':'dep/eve',
        'particle':'dep/particle',
        'skroll':'dep/skroll'
    }
});


seajs.use('./js/main');

