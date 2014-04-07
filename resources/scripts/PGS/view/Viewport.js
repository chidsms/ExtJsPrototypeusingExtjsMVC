

Ext.define('PGS.view.Viewport', {
	extend: 'Ext.container.Viewport',
	alias:'widget.viewport',
	
	id:'mainView',
	baseCls:'mainViewport',
	autoScroll:true,
	layout: {
			type: 'anchor'
		},
	initComponent: function () {
		var me = this;
		me.items = [{
			height: 100,
			width:980,
			//html:'fjhkjdfhjdf jkfbkjf',
			region: 'north',
			//html:'', 
			
			loader: {
					url: 'header.html',
					renderer: 'html',
					scripts: true,
					autoLoad: true
				},
			
			listeners:{
				'afterrender':{
					fn:function(obj) {
						//alert('hii')
					},
					scope:this
				}
			}
		},{
			xtype: 'mainTabPanel',
			width:980,
			region: 'center'
		},{
			width:980,
			loader:{url:'footer.html',        renderer: 'html',
        scripts: true,
        autoLoad: true
}
		}];
		
		this.callParent(arguments);
		
		}
});