var $ = jQuery;
$(function() {
  $('#calBrollats').gCalFlow({
    calid: '2t19lasf5uhd47sqor0fo0f6ss@group.calendar.google.com',
    apikey:'AIzaSyAogaGhmMOHtCBCR5CjR4S4vEdsx09mtuQ',
    link_title: false,
    link_item_title: false,
    maxitem: 20,
    mode:'upcoming',
    auto_scroll: false,
    date_formatter: function(d, allday_p) { 
      function pad(n) { return n < 10 ? "0"+n : n; }
      return pad(d.getDate()) + "/" + pad((d.getMonth()+1)) + "/" + pad(d.getYear().toString().substr(-2))
    },//dia
    daterange_formatter: function (start_date, end_date, allday_p) {
      function pad(n) { return n < 10 ? "0"+n : n; }
      if (allday_p) return "(Tot el dia)";
      if (start_date.getHours()<12) return "(Matí)";
      else return "(Tarda)";
      //return "(" + pad(start_date.getHours()) + ":" + pad(start_date.getMinutes()) + "-" + pad(end_date.getHours()) + ":" + pad(end_date.getMinutes()) + ")";
      /*pad(start_date.getDate()) + "/" + pad(start_date.getMonth()+1) + "/" + pad(start_date.getYear().toString().substr(-2)) + " - " + */
    }//hores
  })   
});

setTimeout(function(){
          var item_links = document.getElementsByClassName("link-desc-based");
            for (var i = 0; i < item_links.length; i++) {
              item_links[i].href = "" + item_links[i].children[0].innerText;
            }
        }, 500);