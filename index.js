let text1 = "Bạn đã tiêu thụ: ";

let text2 = "Số tiền điện phải trả là: ";

function cal() {
    let a = +document.getElementById("a").value;
    console.log(a);

    let textA = "Bạn đã tiêu thụ: ";
    let textB = "Số tiền điện phải trả là: ";
    let text1 = "Bao gồm:" + "<br>" + "* 50 số điện với giá 1600VND/ số";
    let text2 = "* 50 số điện với giá 1700VND/ số";
    let text3 = "* 100 số điện với giá 2000VND/ số";
    let text4 = "* 100 số điện với giá 2500VND/ số";
    let text5 = "* 100 số điện với giá 2800VND/ số";

    if(a < 50) {
        let money = a * 1600;
        document.getElementById("result").innerHTML
            = textA + " " + a + " " + "số điện với giá 1600VND/ số"
            + "<br>" + textB + " " + money + "VND";
    }
    else if (a >= 50 && a < 100) {
        let money = 50 * 1600 + (a - 50) * 1700;
        document.getElementById("result").innerHTML
            = textA + " " + a + " " + "số điện"
            + "<br>" + text1
            + "<br>" + "* " + (a - 50) + " " + "số điện với giá 1700 VND/ số"
            + "<br>" + textB + " " + money + "VND";
    }
    else if (a >= 100 && a < 200) {
        let money = 50 * 1600 + 50 * 1700 + (a - 100) * 2000;
        document.getElementById("result").innerHTML
            = textA + " " + a + " " + "số điện"
            + "<br>" + text1
            + "<br>" + text2
            + "<br>" + "* " + (a - 100) + " " + "số điện với giá 2000 VND/ số"
            + "<br>" + textB + " " + money + "VND";
    }
    else if (a >= 200 && a < 300) {
        let money = 50 * 1600 + 50 * 1700 + 100 * 200 + (a - 200) * 2500;
        document.getElementById("result").innerHTML
            = textA + " " + a + " " + "số điện"
            + "<br>" + text1
            + "<br>" + text2
            + "<br>" + text3
            + "<br>" + "* " + (a - 200) + " " + "số điện với giá 2500 VND/ số"
            + "<br>" + textB + " " + money + "VND";
    }
    else if (a >= 300 && a < 400) {
        let money = 50 * 1600 + 50 * 1700 + 100 * 200 + 100 * 2500 + (a - 300) * 2800;
        document.getElementById("result").innerHTML
            = textA + " " + a + " " + "số điện"
            + "<br>" + text1
            + "<br>" + text2
            + "<br>" + text3
            + "<br>" + text4
            + "<br>" + "* " + (a - 300) + " " + "số điện với giá 2800 VND/ số"
            + "<br>" + textB + " " + money + "VND";
    }
    else {
        let money = 50 * 1600 + 50 * 1700 + 100 * 200
                    + 100 * 2500 + 100 * 2800 + (a -400) * 2900
        document.getElementById("result").innerHTML
            = textA + " " + a + " " + "số điện"
            + "<br>" + text1
            + "<br>" + text2
            + "<br>" + text3
            + "<br>" + text4
            + "<br>" + text5
            + "<br>" + "* " + (a - 400) + " " + "số điện với giá 2900 VND/ số"
            + "<br>" + textB + " " + money + "VND";
    }
}
