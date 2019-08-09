Vue.component('select-group', {
	props: {
		params: Object
	},
	template: '<optgroup :label="title"><option v-for="option in convertData" :value="option.data">{{ option.data }}</option></optgroup>',
	data: function(){
		return {

		}
	},
	computed: {
		title : function(){
			return this.params.g_title
		},
		convertData : function(){
			return this.params.g_datas
		}
	}
});
