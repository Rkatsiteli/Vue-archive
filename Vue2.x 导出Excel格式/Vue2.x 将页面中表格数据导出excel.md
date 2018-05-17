#### Vue2.x 将页面中表格数据导出excel

第一步：安装依赖
```
npm install -S file-saver xlsx

npm install -D script-loader
```

二、项目中新建一个文件夹：（excel---名字任取）

>里面放置两个文件**Blob.js**和 **Export2Excel.js**，文件 [ 在这里](https://github.com/Rkatsiteli/Vue-archive/tree/master/Vue2.x%20%E5%AF%BC%E5%87%BAExcel%E6%A0%BC%E5%BC%8F)。


三、在.vue文件中，写这两个方法：其中list是表格的内容


```
export2Excel() {
　　require.ensure([], () => {
　　　　const { export_json_to_excel } = require('../../vendor/Export2Excel');
　　　　const tHeader = ['序号', 'IMSI', 'MSISDN', '证件号码', '姓名'];
　　　　const filterVal = ['ID', 'imsi', 'msisdn', 'address', 'name'];
　　　　const list = this.tableData;
　　　　const data = this.formatJson(filterVal, list);
　　　　export_json_to_excel(tHeader, data, '列表excel');
　　})
},
formatJson(filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => v[j]))
}
```

[GitHub 在这里](https://github.com/Rkatsiteli/Vue-archive/tree/master/Vue2.x%20%E5%AF%BC%E5%87%BAExcel%E6%A0%BC%E5%BC%8F)

---

[参考地址，在这里](https://www.cnblogs.com/Mrfan217/p/6944238.html)

