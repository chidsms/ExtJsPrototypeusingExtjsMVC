Ext.define('PGS.view.CViewport', {
	extend: 'Ext.container.Viewport',
	alias:'widget.cviewport',
	id:'cView',
	baseCls:'mainViewport',
	autoScroll:true,
	
	initComponent: function () {
		var me = this;
		
		 Ext.apply(this, {
            layout: {
                type: 'border',
                padding: 0
            },
            items: [this.createHeaderPanel(),this.createCenterPanel(),this.createFooterPanel()]
        });
       
		this.callParent(arguments);
		
		},
		
		createHeaderPanel: function(){
		
			this.headerPanel = Ext.create('widget.panel', {
				region: 'north',
				width:980,
				layout:'anchor',
				items:[
						{
						xtype:'panel',
						loader: {
								url: 'header.html',
								renderer: 'html',
								scripts: true,
								autoLoad: true
							}
						},
					{xtype:'MainTabView',height:30}
				]
			});
			return this.headerPanel;
		},
		
	
	    createCenterPanel: function(){
			this.centerPanel = Ext.create('widget.centerpanel', {
				region: 'center',
				width:980
			});
			return this.centerPanel;
		},
		
		createFooterPanel: function(){
			this.footerPanel = Ext.create('widget.panel', {
				region: 'south',
				width:980,
				loader:{url:'footer.html',renderer: 'html',
				scripts: true,
				autoLoad: true
				}
			});
			return this.footerPanel;
		}
		
});