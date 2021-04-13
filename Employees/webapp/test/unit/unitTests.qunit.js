/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns_logaligroup/Employees/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
