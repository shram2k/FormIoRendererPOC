/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    // config.uiColor = '#AADC6E';
    config.toolbar = 'webToolbar';
    config.toolbar_webToolbar =
	[
		{ name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
		{ name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat', '-', 'TextColor', 'BGColor'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
        { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
		{ name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
        { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak'] }
	];
    config.toolbar = 'iPadToolbar';
    config.toolbar_iPadToolbar =
	[
		{ name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'TextColor', 'BGColor'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList'] },
        { name: 'styles', items: ['Font', 'FontSize'] }
	];
};
