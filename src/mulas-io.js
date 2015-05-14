(function(){
  "use script";

  var interval = 3*1000;
  if(window.MulasIO && MulasIO.interval)
    interval = MulasIO.interval
  setInterval(startFun, interval);


  function startFun(){
    var i;
    var links = document.getElementsByTagName("a");
    var hrefs = [];
    for (i = 0; i < links.length; i++) {
      hrefs.push(links[i].href);
    }
    hrefs = shuffle(hrefs);
    for (i = 0; i < links.length; i++) {
      links[i].href = hrefs[i];
    }
  }

  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

})()