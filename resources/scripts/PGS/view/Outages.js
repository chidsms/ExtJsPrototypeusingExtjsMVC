Ext.define('PGS.view.Outages', {
        extend:'Ext.grid.Panel',
        frame:true,
		columnLines: true,
		itemId:'OutagesGrid',
		id:'OutagesGrid',
		layout:'fit',
		autoScroll:true,
		alias: 'widget.Outages',
        initComponent: function () {
		me = this;
		
		
		this.columns= [
		{
            text: 'Select',
            flex: .2,
            sortable: true,
            dataIndex: 'childItemPrefix',
            align: 'center'
        },{
            text: '',
            flex: .5,
            sortable: true,
            dataIndex: 'itemQty',
            align: 'center'
        },{
            text: 'OFS Event ID/ Outage ID',
            flex: .5,
            dataIndex: 'childItem',
            sortable: true,
			align: 'left'
        },{
            text: 'Action Items',
            flex: 1,
            dataIndex: 'childDesc',
            sortable: true,
			align: 'left'
        },{
            text: 'Site Names',
            flex: 1,
            dataIndex: 'childDesc',
            sortable: true,
			align: 'left'
        },{
            text: 'ESN',
            flex: 1,
            dataIndex: 'childDesc',
            sortable: true,
			align: 'left'
        },{
            text: 'Planned Start Date',
            flex: 1,
            dataIndex: 'childDesc',
            sortable: true,
			align: 'left'
        },{
            text: 'Planned End Date',
            flex: 1,
            dataIndex: 'childDesc',
            sortable: true,
			align: 'left'
        }],
        this.callParent(arguments);
    }
});