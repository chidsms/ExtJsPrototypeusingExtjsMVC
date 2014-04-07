Ext.application({
	name: 'PGS',
	enableQuickTips: true,
	appFolder: 'resources/scripts/PGS',
	controllers : ['MainViewController'],
	
	Synonyms : {},
	mode : 1,
	launch: function () {
		
		Ext.QuickTips.init();
		Ext.create('PGS.view.CViewport', {});
		
	}
});
