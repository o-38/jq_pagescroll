$(function(){
  $('a[href^="#"]').click(function(){
    const speed = 600;
    let href =$(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    var position =target.offset().top;
    $("body,html").animate({ scrollTop: position },
      speed,"swing");
      return false;
  })
})