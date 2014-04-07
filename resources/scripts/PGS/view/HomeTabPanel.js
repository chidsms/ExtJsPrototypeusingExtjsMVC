Ext.define('PGS.view.HomeTabPanel',{
	extend:'Ext.panel.Panel', 
	alias:'widget.homeTabPanel',
	layout:'border',
	plain: true, // remove bg image from tabs
	defaults: {
		collapsible: true,
		split: true,
		bodyStyle: 'padding:15px'
	},
	initComponent: function () {
		me.items = [{
			title: 'Navigation',
			region:'east',
			margins: '5 0 0 0',
			cmargins: '5 5 0 0',
			width: 175,
			minSize: 100,
			maxSize: 250
		}]
		
		this.callParent(arguments);
	}
});