FlowRouter.route('/', {
	name: 'home',
	action() {
		// if(Meteor.userId()){
		// 	FlowRouter.go('recipe-book');
		// }
		//add GA code to settings
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

// FlowRouter.route('/recipe-book', {
// 	name: 'recipe-book',
// 	action() {
// 		GAnalytics.pageview();
// 		BlazeLayout.render('MainLayout', {main: 'Recipes'});
// 	}
// });