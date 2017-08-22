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
        'jquery':'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
        'raphael':'dep/raphael',
        'eve':'dep/eve',
        'particle':'dep/particle',
        'skroll':'dep/skroll'
    }
});


seajs.use('./js/main');

