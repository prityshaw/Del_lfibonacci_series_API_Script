(function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
    var series, fibo1 = 0,
        fibo2 = 1,
        fibo3;
    var data = request.body.data;
	if (retError(data.number, "Please enter valid inreger value greater than 0")) return;
   
    response.setHttpTimeout(45000);
    if (typeof(data.number) == "string") {
        data.number = data.number.replace(/\s/g, '');
    }
    var number = parseInt(data.number);

    gs.log("PS> number : " + number);

    gs.log("PS> if condition 1 : " + parseFloat(data.number) + " condition 2 :" + parseFloat(data.number) % 1);
    if (parseFloat(data.number) !== 'NaN' && parseFloat(data.number) % 1 == 0) {

        if (number <= 0) {
            if (retError(false, "Please enter valid inreger value greater than 0")) return;
        }
        if (number === 1) {
            series = '0';
        } else if (number === 2) {
            series = '0 1';
        }
        gs.log("line 14 series : " + series);
        if (number >= '3') {
            series = '0 1';
            for (var i = 0; i < number - 2; i++) {
                gs.log('PS> line no 18 i = ' + i + ' series : ' + series);
                fibo3 = fibo1 + fibo2;
                series = series + ' ' + fibo3;
                fibo1 = fibo2;
                fibo2 = fibo3;
            }
        }
        gs.log("line 22 series : " + series);
        return {
            "Series": series
        };
    } else {
        if (retError(false, "Please enter valid inreger value greater than 0")) return;
    }

    function retError(condition, error) {
        if (!condition) {
            response.setBody({
                "error": error
            });
            response.setStatus(400);
            return true;
        }
    }

})(request, response);