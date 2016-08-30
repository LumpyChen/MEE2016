/**
 * Created by Lumpychen on 16/2/20.
 */
$(function(){
    var hbg = new Header('bg-shadow')
    new Sidebar('open','close','sidebar');
    new PageNav(['banner','one','two','three','four'],'page-nav',hbg)
})
