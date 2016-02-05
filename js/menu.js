$(document).ready(function(){
	// Add p tags to the fitness class along with a href tags and add the class of dropdown.
	$("<a href='cardio.html'><p>Cardio</p></a>").appendTo(".fitness");
	$("<a href='weight.html'><p>Weight Training</p></a>").appendTo(".fitness");
	$("<a href='crossfit.html'><p>Cross-fit</p></a>").appendTo(".fitness");
	$("<a href='spin.html'><p>Spin Classes</p></a>").appendTo(".fitness");

	$("<a href='#'><p>Yoga</p></a>").appendTo(".alternative");
	$("<a href='#'><p>Pilates</p></a>").appendTo(".alternative");
	$("<a href='#'><p>Tai Chi</p></a>").appendTo(".alternative");

	// Add the class of dropdown to the appended p tags.
	$(".fitness p").addClass("dropdown");

	// Hide the appended p tags until the user clicks on the Fitness menu option.
	$(".fitness p").hide();	
	$(".alternative p").hide();

	// Make the dropdown menu appear when the user clicks on the Fitness menu option.
	$(".fitness").click(function(){
		$(".fitness p").slideToggle("slow");
	});

	$(".alternative").click(function(){
		$(".alternative p").slideToggle("slow");
	});
});