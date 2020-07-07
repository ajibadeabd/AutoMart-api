
export default {

    mounted(){
        $(document).ready(function(){
            $('.collapsible').collapsible();
            $('select').formSelect();
            // $('.sidenav').sidenav();
            $(".dropdown-trigger").dropdown({ hover: false });
            $('.fixed-action-btn').floatingActionButton();
            $('.carousel').carousel();
              $('.materialboxed').materialbox();
            // $(".button-collapse").sideNav(); it is affecting couresel
            $('.carousel.carousel-slider').carousel();
        $(".parallax").parallax();
        $('.slider').slider({
        });
        $('.scrollspy').scrollSpy();
        $('.tabs').tabs({
            swipeable:true,
            responsiveThreshold:Infinity,
            duration:1
        });
        $('.tooltipped').tooltip();
        $(".modal").modal({
                dismissible: true,
                opacity: .5,
                inDuration: 350,
                outDuration: 250,
                startingTop: '1%',
                endingTop: '15%',
            }
        );
        $('.tap-target').tapTarget();
        $('.dropdown-trigger').dropdown();
        // $("select").material_select();
        $(".dropdown-button").dropdown({closeOnClick: false,stopPropagation: false});
        $("ul.tabs").tabs();
        $(".header-dropdown").dropdown({
            constrainWidth: false,
            hover: true,
            gutter: 6,
            belowOrigin: true,
            alignment: 'right',
            stopPropagation: false,
            closeOnClick: false,
        });

        // $('.datepicker').pickadate({
        //     labelMonthNext: 'След. Месяц',
        //     labelMonthPrev: 'Пред. Месяц',
        //     labelMonthSelect: 'Выберите Месяц',
        //     labelYearSelect: 'Select a year',
        //     monthsFull: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
        //     monthsShort: [ 'Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.' ],
        //     weekdaysFull: [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
        //     weekdaysShort: [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ],
        //     weekdaysLetter: [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ],
        //     today: 'Сегодня',
        //     clear: 'Сброс',
        //     close: '<i class="material-icons">done</i>',
        //     selectMonths: true,
        //     format: 'd mmmm, yyyy',
        //     formatSubmit: 'yyyy-mm-d',
        //     min: new Date(),
        // });

        // $('#delivery_time').pickatime({
        //     default: 'now',
        //     autoclose: true,
        //     donetext: '<i class="material-icons">done</i>',
        //     cleartext: 'Сброс', // text for clear-button
        //     canceltext: 'Отмена', // Text for cancel-button
        //     twelvehour: false,
        //     vibrate: true,
        // });
    
          });
    }

}