var app = new Vue({
	  el: '#app',
	  data: {
		message: 'Hello Vue!'
	  }
	})
	
	var app2 = new Vue({
	el: '#app-2',
	  data: {
		message: 'You loaded this page on ' + new Date()
	  }
	})
	
	
	var autre = new Vue({
		el: '#app-3',
		data: {
			seen: false,
			autre: 'val'
		},
		methods: { inverse:function() {
				this.seen = !this.seen;
				console.log("seen", this.seen);
			}
		}
	})