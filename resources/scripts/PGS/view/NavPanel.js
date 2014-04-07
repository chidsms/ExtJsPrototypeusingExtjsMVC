Ext.define('PGS.view.NavPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.navpanel',
    animCollapse: true,
    layout: 'fit',
    title: 'Initiation',
	titleAlign:'center',
	//header:false,
	bodyStyle: {
    background: '#3D3C38'
	},
    initComponent: function(){
        Ext.apply(this, {
            items: this.createView()
        });

        this.addEvents(
            'itemselect'
        );

        this.callParent(arguments);
    },

    createView: function(){
	
        this.view = Ext.create('widget.dataview', {
            store: Ext.create('Ext.data.Store', {
                model: 'Feed',
                data: this.lists
            }),
            selModel: {
                mode: 'SINGLE',
                listeners: {
                    scope: this,
                    selectionchange: this.onSelectionChange
                }
            },
            listeners: {
                scope: this,
                viewready: this.onViewReady
            },
            trackOver: true,
            cls: 'feed-list',
            itemSelector: '.feed-list-item',
            overItemCls: 'feed-list-item-hover',
            tpl: '<tpl for="."><div class="feed-list-item" style="color:#FFF">{title}</div></tpl>'
        });
        return this.view;
    },

    onViewReady: function(){
       //*** this.view.getSelectionModel().select(this.view.store.first());
    },


    onSelectionChange: function(){
        var selected = this.getSelectedItem();
        //this.toolbar.getComponent('remove').setDisabled(!selected);
        this.loadFeed(selected);
    },
    loadFeed: function(rec){
        if (rec) {
            this.fireEvent('itemselect', this, rec.get('title'), rec.get('url'));
        }
    },

    getSelectedItem: function(){
        return this.view.getSelectionModel().getSelection()[0] || false;
    }
});
