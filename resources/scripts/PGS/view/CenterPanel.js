Ext.define('PGS.view.CenterPanel', {
    extend: 'Ext.container.Container',
    alias:'widget.centerpanel',
    
	initComponent: function(){
      Ext.define('Feed', {extend: 'Ext.data.Model',fields: ['title', 'url']});
	  Ext.apply(this, {
      layout: {type: 'border',padding: 5},
      items: [
	  {
		  id:'breadcrum',
		  region:'north',
		  height:30,
		  layout:'anchor',
		  bodyBorder:false,
		  bodyStyle: 'background:#09A5DE;',

		  items:[{xtype:'image',src: 'resources/images/breadcrum.png',anchor:'100% 100%'}]
	  },
	  this.createNavPanel(), 
	  this.createDetailPanel()]
      });
      this.callParent(arguments);
    },
	createNavPanel: function(){
			navpanel = Ext.create('widget.navpanel', {
            width: 225,
            split: true,
            minWidth: 175,
            lists: [{
                title: 'Requestor Info',
                url: 'requestor.html'
			}, {
                title: 'Departure Request Justification',
                url: 'departure.html'
            }, {
                title: 'Contract Information',
                url: 'contractorinfo.html'
            },
			{
                title: 'Unit Information',
                url: 'unitinfo.html'
            },
			{
                title: 'Component Information',
                url: 'componentinfo.html'
            }],
            listeners: {
                scope: this,
                itemselect: this.onItemSelect
            }
        });
		
	
        this.leftpanel = Ext.create('widget.panel', {
            region: 'west',
            width: 225,
            split: true,
            minWidth: 175,
			bodyStyle: {
				background: '#3D3C38'
			},
			id: 'app-options',
			header:false,
			title: 'Navigation Panel',
            animCollapse: true,
            maxWidth: 400,
            collapsible: true,
            layout:{
                    type: 'accordion',
                    animate: true
            },
			defaults:{titleAlign:'center'},
			items:[
					navpanel,
					{title:'Commercial screening '},
					{title:'CS Tech'},
					{title:'Technical Screening'},
					{title:'Tech Risk Assessment   (TRA)'},
					{title:'Tech Recommend'},
					{title:'Finalize departure plan'},
					{title:'PGS Management acceptance'},
					{title:'Execution'},
					{title:'Closure'}
			]
        });
		return this.leftpanel;
    },
    
    createDetailPanel: function(){
        this.detailpan = Ext.create('widget.detailPanel', {
            region: 'center',
            minWidth: 300
        });
        return this.detailpan;
    },
    onItemSelect: function(feed, title, url){
		this.detailpan.addPanel(title, url);
    }
});
