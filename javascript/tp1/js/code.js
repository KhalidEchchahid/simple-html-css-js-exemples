
function afficher() {
    var nb = window.document.forms[0].elements['nb'].value;
    var rows= window.document.forms[0].elements['rows'].value;
    document.write("<table>");
    for (i = 1; i <= rows; i++) {
        document.write("<tr>");
        document.write("<td>" + i + "</td");
        document.write("<td>*</td");
        document.write("<td>" + nb + "</td>");
        document.write("<td>=</td>");
        document.write("<td>" + i * nb + "</td>");
        document.write("</td>");
    }
    document.write("</table>");

}


