Ext.define('PGS.view.ClassificationFormPanel',{
	extend:'Ext.form.Panel',
    title: 'ClassificationFormPanel',
	alias:'widget.classificationForm',
    bodyPadding: 5,
    width: 200,

    // The form will submit to this URL
    url: url,

    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Stage ',
        
    },{
        fieldLabel: 'Phone',
        name: 'phone',
        allowBlank: false
    },
	{
        fieldLabel: 'Cell',
        name: 'cell',
        allowBlank: false
    },
	{
        fieldLabel: 'Email',
        name: 'email',
        allowBlank: false
    }],

	var numberField = new Ext.form.ComboBox({
	items: [{
			fieldLabel: 'CPM',
			hiddenName: 'cpm',
			store: new Ext.data.SimpleStore({
				fields: ['string'],
				data : my_values 
			}),
			displayField: 'string',
			typeAhead: true,
			mode: 'local',
			triggerAction: 'all',
			emptyText:'Select option...',
			selectOnFocus:true
    },
	{
			fieldLabel: 'CVPM',
			hiddenName: 'cvm',
			store: new Ext.data.SimpleStore({
				fields: ['string'],
				data : my_values 
			}),
			displayField: 'string',
			typeAhead: true,
			mode: 'local',
			triggerAction: 'all',
			emptyText:'Select option...',
			selectOnFocus:true
    },
	{
			fieldLabel: 'CSA Director',
			hiddenName: 'csa',
			store: new Ext.data.SimpleStore({
				fields: ['string'],
				data : my_values 
			}),
			displayField: 'string',
			typeAhead: true,
			mode: 'local',
			triggerAction: 'all',
			emptyText:'Select option...',
			selectOnFocus:true
    }],
});
    
});