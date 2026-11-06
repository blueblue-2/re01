//动态二级菜单1.0
//by ycou
//2012-04-12
$(document).ready(function(){
		$("#main-nav li ul").hide(); 
		$("#main-nav li a.current").parent().find("ul").slideToggle("slow"); 
		$("#main-nav li a.nav-top-item").click( 
			function () {
				$(this).parent().siblings().find("ul").slideUp("normal"); 
				$(this).next().slideToggle("normal"); 
				$("#main-nav li a").removeClass("current");
				$(this).addClass("current");
				$('#main-nav li ul li a').removeClass("current");
				return false;
			}
		);
		
		$("#main-nav li a.no-submenu").click(
			function () {
				window.main.location.href=(this.href);
				return false;
			}
		); 
		$('#main-nav li ul li a').click(function(){
			$('#main-nav li ul li a').removeClass("current");
			$(this).addClass("current");
		});
});
  
  
  