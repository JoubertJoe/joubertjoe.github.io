$(document).ready(function() {
    $("#loadbutton").click(function() {

        $.ajax({
            url: "arq.csv",
            success: function(result) {
                //$("#results").html(result);
                var lines = result.split(/\r\n|\n/);

                //Set up the data arrays
                var time = [];
                var data1 = [];
                var data2 = [];
                var data3 = [];
                var str = "";

                var headings = lines[0].split(','); // Splice up the first row to get the headings

                for (var j = 1; j < lines.length; j++) {
                    var values = lines[j].split(','); // Split up the comma seperated values
                    // We read the key,1st, 2nd and 3rd rows 
                    time.push(values[0]); // Read in as string
                    // Recommended to read in as float, since we'll be doing some operations on this later.
                    data1.push((values[1]));
                    data2.push((values[2]));
                    data3.push((values[3]));

                }

                // For display
                var x = 2;
                console.log(headings[0] + " : " + time[x] + headings[1] + " : " + data1[x] + headings[2] + " : " + data2[x] + headings[4] + " : " + data2[x]);

                //Aqui você escolhe qual dado quer imprimir.
                for (var k = 0; k < data2.length; k++) {
                    //$("#results").html(time[k] + ", ");
                    str += data2[k] + " | ";
                    $("#results").html(str);
                }
            }
        });
    });

})