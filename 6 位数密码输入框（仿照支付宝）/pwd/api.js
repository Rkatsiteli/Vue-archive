import "@/js/utils"; //公共方法
import '@/js/utils/ajax';
export default {
	getMobile(cb) {
		/*$.ajax({
			type: "POST",
			async: false,
			url: "/pub/sylla/phr-p/phr/second-auth/get-mobile",
			success: response => {
				debugger
				cb && cb(response);
			},
			error: error => {
				utils.toast(error);
			}
		});*/

		/***
		 * libUtils.ajax
		 */
		/*ajax.ajax({
			url: "/pub/sylla/phr-p/phr/second-auth/get-mobile",
			success: response => {
				debugger
				cb && cb(response);
			},
			error: error => {
				utils.toast(error);
			},
			data: {
				name1: 'value1',
				name2: 'value2'
			},
			method: "get"
		});*/

		ajax.post({
			async: false,
			url: "/pub/sylla/phr-p/phr/second-auth/get-mobile",
			success: response => {
				cb && cb(response);
			},
			error: error => {
				utils.toast(error);
			},
			data: {
				name1: 'value1',
				name2: 'value2'
			},
			method: "get"
		});
		
		
		console.log(1111)

	}

};