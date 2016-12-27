// 百度地图API功能
function baiduMap(_Point,_title,_contact){	
	var strs= new Array(); //定义一数组来分割坐标 
	strs=_Point.split(","); //字符分割		 	
	var map = new BMap.Map('baiduMap');    //根据id获取地图容器
	var poi = new BMap.Point(strs[0],strs[1]);   //获取坐标
	map.centerAndZoom(poi, 16);   //初始化地图并设置缩放级别
	map.enableScrollWheelZoom();  //鼠标滚轮缩放
	var content = '<div style="margin:0;line-height:22px;padding:4px 2px;">' + _contact + '</div>';  //设置提示字符	
	//创建检索信息窗口对象
	var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "<b>"+_title+"</b>",      //标题
			width  : 300,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
	var marker = new BMap.Marker(poi); //创建marker对象
	//marker.enableDragging(); //marker可拖拽
	map.addOverlay(marker); //在地图中添加marker	
	//关闭信息窗口后 点击marker再次显示
	marker.addEventListener("click", function(e){
		searchInfoWindow.open(marker);
	})	
	searchInfoWindow.open(marker);   //显示检索信息窗口对象
}