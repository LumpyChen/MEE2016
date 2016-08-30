/**
 * Created by Lumpychen on 16/2/21.
 */
var Header = function (bg) {

    self = this;

    //this.$logo = $('#'+logoId);
    this.$bg = $('#'+bg);
    //this.$header = $('header')

    Header.prototype.addWhite = function () {
        self.$bg.animate({'opacity':0.3},1)
        console.log('add')
    }

    Header.prototype.fadeWhite = function () {
        self.$bg.animate({'opacity':0},1)
        console.log('fade')
    }

}