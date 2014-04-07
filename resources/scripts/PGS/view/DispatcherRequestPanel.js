Ext.create('Ext.form.Panel', {
    title: 'DepartureRequestForm',
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
            xtype: 'textareafield',
            grow: true,
            name: 'specificdocumentmessage',
            fieldLabel: 'Describe specific document from which you are departing',
            anchor: '100%'
    },{
        xtype: 'textareafield',
        grow: true,
        name: 'proposeddeparturemessage',
        fieldLabel: 'Describe proposed departure',
        anchor: '100%'
    },
	{
        xtype: 'textareafield',
        grow: true,
        name: 'justificationmessage',
        fieldLabel: 'Explain rational and/or justification',
        anchor: '100%'
    },
	{
        xtype: 'textareafield',
        grow: true,
        name: 'rewardsmessage',
        fieldLabel: 'Decsribe the financial reward and expected benefits for executing departure on target unit',
        anchor: '100%'
    }],

	
    
});