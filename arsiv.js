var postTitle = new Array();<br />
var postUrl = new Array();<br />
var postYear = new Array();<br />
var postMonth = new Array();<br />
var postYearMonth = new Array();<br />
var postYearMonth2 = new Array();<br />
var postLabels = new Array();<br />
var postBaru = new Array();<br />
var sortBy = "titleasc";<br />
var tocLoaded = false;<br />
var numChars = 250;<br />
var postFilter = "";<br />
var month2 = ["Ocak", "Subat", "Mart", "Nisan", "Mayis", "Haziran", "Temmuz", "Agustos", "Eylul", "Ekim", "Kasim", "Aralik"];<br />
function loadtoc(a){<br />
    function b(){<br />
        if ("entry" in a.feed) {<br />
            var d = a.feed.entry.length;<br />
            numberfeed = d;<br />
            ii = 0;<br />
            for (var h = 0; h < d; h++) {
                var m = a.feed.entry[h];
                var e = m.title.$t;
                var l = m.published.$t.substring(0, 10);
                var p = m.published.$t.substring(5, 7);
                var g = m.published.$t.substring(8, 10);
                var n = month2[parseInt(p, 10) - 1] + " " + m.published.$t.substring(0, 4);
                var c = "http://webseyyahi.blogspot.com/" + m.published.$t.substring(0, 4) + "_" + p + "_01_archive.html";
                var j;
                for (var f = 0; f < m.link.length; f++) {
                    if (m.link[f].rel == "alternate") {
                        j = m.link[f].href;
                        break
                    }
                }
                var o = "";
                for (var f = 0; f < m.link.length; f++) {
                    if (m.link[f].rel == "enclosure") {
                        o = m.link[f].href;
                        break
                    }
                }
                postTitle.push(e);
                postUrl.push(j);
                postYearMonth.push(n);
                postYearMonth2.push(c);
            }
        }
    }
    b();
    displayToc2();
    document.write('')
}

function displayToc2(){
    var a = 0;
    var b = 0;
    while (b < postTitle.length) {
        temp1 = postYearMonth[b];
        document.write('<div class="toc"><h3>
<a href="' + postYearMonth2[b] + '">' + temp1 + "</a></h3>
<ul>");
        firsti = a;
        do {
            document.write("
<li>");<br />
            document.write('»   <a href="' + postUrl[a] + '">' + postTitle[a] + "</a>");<br />
            document.write("</li>
");
            a = a + 1
        }
        while (postYearMonth[a] == temp1);
        b = a;
        document.write("</ul>
</div>
");<br />
        if (b > postTitle.length) {<br />
            break<br />
        }<br />
    }<br />
};
