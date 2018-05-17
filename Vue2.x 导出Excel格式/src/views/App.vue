<template>
	<div>
		<button @click="export2Excel">导出数据</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				columns: [{
					key: "搜索APP",
					value: "KPI",
				}, {
					key: "value0",
					value: "信息流",
				}, {
					key: "value1",
					value: "今日十大",
				}, {
					key: "value2",
					value: "数据5",
				}, {
					key: "value3",
					value: "数据4",
				}, {
					key: "value4",
					value: "数据3",
				}, {
					key: "value5",
					value: "数据2",
				}, , {
					key: "value6",
					value: "数据1",
				}],
				dataList: [{
					"id": "1",
					"name": "DAU（日均）",
					"value": null,
					"order": 1,
					"isEdit": false,
					"remark": null,
					"value0": 333.3827,
					"isEdit0": false,
					"value3": 445.2123,
					"isEdit3": false,
					"value1": 0,
					"isEdit1": false,
					"value2": 55.877,
					"isEdit2": false,
					"value5": 36001.156,
					"isEdit5": false,
					"value4": 457.167,
					"isEdit4": false,
					"value6": 351.8943,
					"isEdit6": false
				}, {
					"id": "6",
					"name": "新增7日留存",
					"value": null,
					"order": 30,
					"isEdit": false,
					"remark": null,
					"value0": 12.01,
					"isEdit0": false,
					"value3": 0,
					"isEdit3": false,
					"value1": 0,
					"isEdit1": false,
					"value2": 0.1104,
					"isEdit2": false,
					"value5": 0.6417,
					"isEdit5": false,
					"value4": 0.071,
					"isEdit4": false,
					"value6": 0.2069,
					"isEdit6": false
				}, {
					"id": "7",
					"name": "新增7日留存-外购",
					"value": null,
					"order": 31,
					"isEdit": false,
					"remark": null,
					"value0": 0,
					"isEdit0": false,
					"value3": 0,
					"isEdit3": false,
					"value1": 0,
					"isEdit1": false,
					"value2": 0,
					"isEdit2": false,
					"value5": 0.6417,
					"isEdit5": false,
					"value4": 0,
					"isEdit4": false,
					"value6": 0.1903,
					"isEdit6": false
				}, {
					"id": "16",
					"name": "单DAU收入",
					"value": null,
					"order": 120,
					"isEdit": false,
					"remark": null,
					"value0": 0,
					"isEdit0": false,
					"value3": 0,
					"isEdit3": false,
					"value1": 0,
					"isEdit1": false,
					"value2": 0,
					"isEdit2": false,
					"value5": 0,
					"isEdit5": false,
					"value4": 0,
					"isEdit4": false,
					"value6": 0,
					"isEdit6": false
				}, {
					"id": "17",
					"name": "单个DAU成本",
					"value": null,
					"order": 130,
					"isEdit": false,
					"remark": null,
					"value0": 0,
					"isEdit0": false,
					"value3": 0,
					"isEdit3": false,
					"value1": 0,
					"isEdit1": false,
					"value2": 0,
					"isEdit2": false,
					"value5": 62.69,
					"isEdit5": false,
					"value4": 0,
					"isEdit4": false,
					"value6": 0,
					"isEdit6": false
				}, {
					"id": "18",
					"name": "单个DAU成本-外购",
					"value": null,
					"order": 131,
					"isEdit": false,
					"remark": null,
					"value0": 58.9,
					"isEdit0": false,
					"value3": 0,
					"isEdit3": false,
					"value1": 0,
					"isEdit1": false,
					"value2": 38131.95,
					"isEdit2": false,
					"value5": 655.89,
					"isEdit5": false,
					"value4": 0,
					"isEdit4": false,
					"value6": 0,
					"isEdit6": false
				}, {
					"id": "19",
					"name": "LTV/CPA",
					"value": null,
					"order": 140,
					"isEdit": true,
					"remark": null,
					"value0": 600,
					"isEdit0": false,
					"value3": 50,
					"isEdit3": false,
					"value1": 0,
					"isEdit1": false,
					"value2": 30,
					"isEdit2": false,
					"value5": 888,
					"isEdit5": false,
					"value4": 8888888,
					"isEdit4": false,
					"value6": 0,
					"isEdit6": false
				}, {
					"id": "20",
					"name": "总收入",
					"value": null,
					"order": 150,
					"isEdit": false,
					"remark": null,
					"value0": 0,
					"isEdit0": false,
					"value3": 0,
					"isEdit3": false,
					"value1": 0,
					"isEdit1": false,
					"value2": 0,
					"isEdit2": false,
					"value5": 0,
					"isEdit5": false,
					"value4": 0,
					"isEdit4": false,
					"value6": 0,
					"isEdit6": false
				}, {
					"id": "21",
					"name": "总推广成本【EOI取数】",
					"value": null,
					"order": 160,
					"isEdit": false,
					"remark": null,
					"value0": 0,
					"isEdit0": false,
					"value3": 0,
					"isEdit3": false,
					"value1": 0,
					"isEdit1": false,
					"value2": 0,
					"isEdit2": false,
					"value5": 0,
					"isEdit5": false,
					"value4": 0,
					"isEdit4": false,
					"value6": 0,
					"isEdit6": false
				}, {
					"id": "22",
					"name": "总推广成本（调整项）",
					"value": null,
					"order": 170,
					"isEdit": true,
					"remark": null,
					"value0": 900,
					"isEdit0": false,
					"value3": 0,
					"isEdit3": false,
					"value1": 100,
					"isEdit1": false,
					"value2": 123456,
					"isEdit2": false,
					"value5": 6666,
					"isEdit5": false,
					"value4": 0,
					"isEdit4": false,
					"value6": 0,
					"isEdit6": false
				}, {
					"id": "23",
					"name": "总推广成本",
					"value": null,
					"order": 180,
					"isEdit": false,
					"remark": null,
					"value0": 900,
					"isEdit0": false,
					"value3": 0,
					"isEdit3": false,
					"value1": 100,
					"isEdit1": false,
					"value2": 123456,
					"isEdit2": false,
					"value5": 6666,
					"isEdit5": false,
					"value4": 0,
					"isEdit4": false,
					"value6": 0,
					"isEdit6": false
				}]
			}
		},
		methods: {
			export2Excel() {
				const {
					columns,
					dataList
				} = this;
				require.ensure([], () => {　　　　　　　　
					const {
						export_json_to_excel
					} = require('views/excel/Export2Excel'); //  ---require 括号里面是相对路径其实是引用  Export2Excel.js
					const tHeader = []; //  ----tHeader 数组里面放的是字段的对应名
					const filterVal = [];　　 //　-----filterVal  字段对应的值
					columns && columns.map(data => {
						tHeader.push(data.value)
						filterVal.push(data.key);
					})
					debugger
					const list = dataList; //                  ----对应的json数组
					const data = this.formatJson(filterVal, list);　　　　　　　　
					export_json_to_excel(tHeader, data, '数据管理');　　　　　　
				})　　　　
			},
			formatJson(filterVal, jsonData) {　　　　　　
				return jsonData.map(v => filterVal.map(j => v[j]))　　　　
			}
		}
	}
</script>