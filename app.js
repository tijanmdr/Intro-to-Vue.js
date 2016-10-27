var app = new Vue({
	el: '#events', 
	data: {
		event: {name: '', description: '', date: ''},
		events: []
	}, 
	mounted: function () {
		this.fetchEvents();
	}, 
	methods: {
		fetchEvents: function () {
			var events = [
				{
					id: 1,
					name: 'TIFF',
					description: 'Lorem Ipsum Dolores',
					date: '2015-09-02'
				},
				{
					id: 2,
					name: 'React.js',
					description: 'Tutorials',
					date: '2016-03-26'
				}, 
				{
					id: 3,
					name: 'Node.js',
					description: 'Backend Tutorials',
					date: '2015-12-02'
				}
			];

			this.events = events;
		},
		addEvent: function () {
			if (this.event.name) {
				this.events.push(this.event);
				this.event = {name: '', description: '', date: ''};
			}
		}, 
		deleteEvent: function (key) {
			if (confirm("Are you sure you want to delete")) {
				this.events.splice(key, 1);
			}
		}
	}
});
