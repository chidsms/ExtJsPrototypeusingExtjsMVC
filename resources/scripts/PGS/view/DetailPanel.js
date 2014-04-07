Ext.define('PGS.view.DetailPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.detailPanel',
	bodyBorder:false,
	layout:'fit',
    initComponent: function() {
        this.callParent();
    },
    addPanel: function(title, url){
		this.removeAll();
		this.add(this.createFormPanel(title,url));
    },
	createFormPanel:function(title,url){
	var formpan;
	if(title=='Requestor Info'){

		formpan = Ext.create('widget.requestorInfo',{title:title,url:url});
	}else{
		 formpan ={title:title};
	}
	return formpan;
	}
});