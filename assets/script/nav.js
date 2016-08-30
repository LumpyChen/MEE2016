/**
 * Created by Lumpychen on 16/2/20.
 */
var PageNav = function(a$PosId,s$NavClass,Header){

    if($('.'+s$NavClass).length!=a$PosId.length){
        console.error('Not eq!')
    }else {

        var self = this;

        this.positionNow = 0;
        this.aPosition = [];
        this.hoverNumber = null;


        this.aNav = $('.'+s$NavClass).map(function(){
            return $(this);
        });
        this.aCircle = $('.curve').map(function () {
            return $(this);
        })

        // Circle$对象和Nav$对象的数组
        console.log(a$PosId)
        a$PosId.forEach(function ($id) {
            self.aPosition.push($('#' + $id).offset().top-404)
        })


        //aPosition 是所有版块位置的数组

        PageNav.prototype.circleChange = function(className,num){

            $($('.' + className)[num]).addClass('active');

        }

        // 圆的填充

        PageNav.prototype.circleReturn = function(className,num){

            $($('.' + className)[num]).removeClass('active');
        }

        // 圆的还原

        PageNav.prototype.checkHoverReturn = function () {

            [0,1,2,3,4].forEach(function (val,index) {

                    if(val!=self.hoverNumber) {
                        self.circleReturn('curve',index)
                    }

                }
            )
        }

        PageNav.prototype.checkAdd = function () {
            var pos = self.positionNow = $(window).scrollTop();
            //console.log(pos,self.aPosition);
            self.checkHoverReturn();

            switch (true){



                //case true:

                //
                //    //self.checkHoverReturn();
                //
                //    console.log(pos<self.aPosition[2])
                //    //console.log(self.aPosition[2])

                case pos<self.aPosition[1]:

                    self.circleChange('curve',0)
                    Header.fadeWhite();
                    break;
                case pos<self.aPosition[2]:
                    self.circleChange('curve',1)
                    Header.fadeWhite();
                    break;
                case pos<self.aPosition[3]:
                    self.circleChange('curve',2)
                    Header.addWhite();
                    break;
                case pos<self.aPosition[4]:
                    self.circleChange('curve',3)
                    Header.fadeWhite();
                    break;
                case pos>=self.aPosition[4]:
                    self.circleChange('curve',4)
                    Header.addWhite();
                    break;

            }

        }


        self.aNav.each(function (index,ele) {
            ele.click(function () {
                $('window').trigger('scroll');
                $('html,body').animate({scrollTop:self.aPosition[index]+"px"},1000, function () {

                    self.checkAdd();
                })

            })


        })
        // 绑定点击事件


        $(window).scroll(function () {
            self.checkAdd();
        })
        
        // 绑定滚动事件


        self.aNav.each(function (index,ele) {
            ele.hover(function () {
                self.hoverNumber = index;
                self.circleChange('curve',index);

            }, function () {
                self.hoverNumber = null;
                self.circleReturn('curve',index)
                self.checkAdd();
            })
        })

        // 绑定滑过事件

        self.circleChange('curve',0)


    }
}