$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage','3rdPage', '4thpage', 'lastPage'],
				slidesColor: ['#8FB98B', '#DE564B'],
				slidesNavigation: true,			
			});
			
			
			$('#box-links').localScroll({
		   target:'body'
		});
		
		// Scroll the content inside the #scroll-container div
		$('#small-box-links').localScroll({
		   target:'#small-box-container'
		});
		
		$('#small-box-links2').localScroll({
		   target:'#small-box-container2'
		});
		
		$('#small-box-links3').localScroll({
		   target:'#small-box-container3'
		});
		
		$('#small-box-links4').localScroll({
		   target:'#small-box-container4'
		});
		
		$('#small-box-links5').localScroll({
		   target:'#small-box-container5'
		});
			
			
			
			
		});