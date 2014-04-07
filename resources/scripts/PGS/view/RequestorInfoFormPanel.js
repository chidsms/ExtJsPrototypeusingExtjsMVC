Ext.define('PGS.view.DispatcherRequestPanel', {
	extend:'Ext.form.Panel',
	alias:'widget.dispatcherrequestpanel',
	bodyBorder:false,
    title: 'DispatcherrequestForm',
	id:'dispatcherrequestpanel',
	bodyPadding: '15',
	fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side',
        labelWidth: 75,
		labelSeparator : ''	
    },
    url:'',
    layout: 'form',
	
    defaults: {
        anchor: '50%'
    },
	bodyStyle: {
			background: '#fff',
			padding: '10px'
	},
    defaultType: 'textfield',
    
			items:[
					{
							xtype: 'container',
							anchor: '100%',
							layout: 'hbox',
							defaultType: 'textfield',
							collapsed: false,
							collapsible: true,
							defaults: {
							width: 280
							},
							items:[
									{
									xtype: 'container',
									flex: 1,
									layout: 'anchor',
									items: [{
										xtype:'textfield',
										fieldLabel: 'Model ID',
										allowBlank: false,
										name: 'modelid',
										anchor:'95%'
										},{
										xtype:'textfield',
										fieldLabel: 'Business Tier 1',
										name: 'bt1',
										anchor:'95%'
										}]
									},
									{
									xtype: 'container',
									flex: 1,
									layout: 'anchor',
									items: [{
										xtype:'textfield',
										fieldLabel: 'Offering ID',
										allowBlank: false,
										name: 'oid',
										anchor:'100%'
									},{
										xtype:'textfield',
										fieldLabel: 'Business Tier 2',
										allowBlank: false,
										name: 'bt2',
										anchor:'100%'
									}]
									}
							]
						},
						{
						name: 'model_title',
						fieldLabel: 'Model Title',
						beforeLabelTextTpl: requiredLabel,
						//height: 100,
						anchor: '100%',
						allowBlank:false
						},
						{
							xtype: 'container',
							anchor: '100%',
							layout: 'hbox',
							items:[
										{
										xtype: 'container',
										flex: 1,
										layout: 'anchor',
										
										items: [{
											xtype:'combo',
											fieldLabel: 'Version Type',
											beforeLabelTextTpl: requiredLabel,
											allowBlank: false,
											emptyText : 'Select Version Type',
											name: 'versiontype',
											anchor:'95%',
											store: Ext.create('Ext.data.Store', {
													fields: ['abbr', 'name'],
													data : [
														{"abbr":"1.0", "name":"1.0"},
														{"abbr":"2.0", "name":"2.0"},
														{"abbr":"3.0", "name":"3.0"}
													]
												}),
											queryMode: 'local',
											valueField: 'abbr',	
											tpl: Ext.create('Ext.XTemplate',
												'<tpl for=".">',
												'<div class="x-boundlist-item">{name}</div>',
												'</tpl>'
											),
											displayTpl: Ext.create('Ext.XTemplate',
											'<tpl for=".">',
											'{name}',
											'</tpl>'
											)
											}]
										},
										{
											xtype: 'container',
											flex: 1,
											layout: 'anchor',
											items: [{
												xtype:'textfield',
												fieldLabel: 'Version Name',
												beforeLabelTextTpl: requiredLabel,
												allowBlank: false,
												name: 'versionname',
												anchor:'100%'
											}]
										}
									]
						},
						{
						xtype:'textarea',
						name: 'desc',
						fieldLabel: 'Description',
						anchor: '100%'
						}
				],
			
			bbar:['->',{
            text: 'Save',
            handler: function() {
                this.up('form').getForm().isValid();
            }
        },{
            text: 'Cancel',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }]
});