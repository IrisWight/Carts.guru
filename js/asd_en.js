$(function () {

        $(function() {
            var $document   = $(document),
                $inputRange = $('input[type="range"]'),
                smsOutput = $('.count-sms'),
                callOutput = $('.count-calls'),
                cartsOutput = $('.count-carts');

            function valueOutput(element) {
                var value = element.value,
                    output = element.parentNode.getElementsByTagName('output')[0];
                output.innerHTML = value;
                smsOutput.val(100 - (callOutput.val()));
            }
            for (var i = $inputRange.length - 1; i >= 0; i--) {
                valueOutput($inputRange[i]);
            }
            $document.on('input', 'input[type="range"]', function(e) {
                var smsPart, callPart, $count;
                valueOutput(e.target);
                smsOutput.val( 100 - (callOutput.val()));

                smsPart = (smsOutput.val())/100;
                callPart = (callOutput.val())/100;
                $count = (((cartsOutput.val() * 0.75) * 2) * callPart) + ((cartsOutput.val() * 0.75) * smsPart);
                console.log(smsPart,callPart,$count);
                if($count <= 1520){

                    $('.lite').addClass('suitable-pack')
                        .siblings()
                        .removeClass('suitable-pack');
                }else if($count > 1520&& $count <= 3610){
                    $('.startup').addClass('suitable-pack')
                        .siblings()
                        .removeClass('suitable-pack');
                }else if($count > 3610 && $count <= 10200){
                    $('.pro').addClass('suitable-pack')
                        .siblings()
                        .removeClass('suitable-pack');
                }else{
                    $('.business').addClass('suitable-pack')
                        .siblings()
                        .removeClass('suitable-pack');
                }
            });
            // end

            $inputRange.rangeslider({
                polyfill: false
            });
        });


});