/**
 * Created by Lumpychen on 16/2/19.
 */
    var Sidebar = function(openId,delId,eId,phId) {

        var self = this;



    this.state = 'closed';
        this.$openElem = $('#' + openId);
        this.$delElem = $('#' + delId);
        this.$elem = $('#'+eId);
        this.$placeholder = $('#'+phId)

        var nElwidth = this.$elem.width();


        var sOpenVis = this.$openElem.css('visibility');
        var sDelVis = this.$delElem.css('visibility');


        this.$openElem.click(function(){
            if(self.state == 'closed') {
                self.open();
            }

        })

        this.$delElem.click(function(){

            if(self.$elem.state != 'closed'){
                self.close();
            }

        })



        Sidebar.prototype.close = function () {

            this.state = 'closed';


            this.$elem.animate({'right':'-'+nElwidth+'px'},1000);
            $('body').animate({'right':0+'px'},1000, function () {

                self.$openElem.fadeIn(1000);
                self.$delElem.fadeOut(1000);

                $('body').unbind('click');
            })
        }

        Sidebar.prototype.open = function () {

            self.state = 'opened';


            self.$elem.animate({'right': 0+'px'},1000);
            self.$openElem.fadeOut(1000);


            $('body').animate({'right':nElwidth+'px'},1000,function () {
                    self.$delElem.fadeIn(1000);

            });

            $('body').mousedown(function (eve) {
                if(self.$elem.state != 'closed'&&$(window).width()-eve.pageX>600){
                    self.close();
                }
            })

        }



    }



