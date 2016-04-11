define(function (require) {
    return {
    	test:function(){
    		$("#sidebar").html("Here comes the sideBa/ from home");
    	},
    	sayHome:function(){
    		console.log("say Home Again");
    		$('#log').html("This is text content from \"Home\" module ");
    	}
    }
});