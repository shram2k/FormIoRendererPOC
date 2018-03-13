/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    //config.uiColor = '#AADC6E';
    config.readOnly = true;
    config.toolbar = 'webToolbar';
    config.toolbar_webToolbar =
	[
		{ name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
        { name: 'editing', items: ['Find', 'Replace', 'SelectAll', '-', 'Scayt'] },
		{ name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', '-', 'TextColor'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
        { name: 'styles', items: ['Font', 'FontSize'] }
	];
    config.toolbar = 'iPadToolbar';
    config.toolbar_iPadToolbar =
	[
		{ name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'TextColor', 'BGColor'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList'] },
        { name: 'styles', items: ['Font', 'FontSize'] }
	];
    config.readOnly = true;
};
