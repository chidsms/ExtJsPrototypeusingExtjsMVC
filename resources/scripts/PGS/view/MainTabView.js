Ext.define('PGS.view.MainTabView',{
	extend:'Ext.view.View', 
	
	alias:'widget.MainTabView',
	//<!--border:1px solid #000;"-->
	tpl : new Ext.XTemplate(
		'<tpl for=".">',
			'<div class="x-maintab {[values.IsActive ? "x-maintab-selected" : ""]}" style="border-right-width:{[xindex === xcount ? "0" : "1"]}px;">',
				'<span style="width: 100px;{[values.Active !== true ? "color:#CCC;" : "color:#fff;"]}" class="x-tab-inner ">',
					'{Description}',
				'</span>',
			'</div>',
		'</tpl>'
	),
	style:'background-color:rgb(9, 165, 222);',
	bodyStyle:'background-color:rgb(9, 165, 222);',
	itemSelector: 'div.x-maintab',
	overCls:'x-maintab-over',
	store: 'MainTabStore'
});
