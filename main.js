/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
	"use strict";
	var keyBoardShortCutContainer = "Ctrl-Shift-Alt-F1";
	var keyBoardShortCutContainerFluid = "Ctrl-Shift-Alt-F2";
	var keyBoardShortCutRow = "Ctrl-Shift-Alt-F3";
	var keyBoardShortCutRowFluid = "Ctrl-Shift-Alt-F4";
	var keyBoardShortCutSection = "Ctrl-Shift-Alt-F5";
	
	var keyBoardShortCutColXS1 = "Ctrl-F1";
	var keyBoardShortCutColXS2 = "Ctrl-F2";
	var keyBoardShortCutColXS3 = "Ctrl-F3";
	var keyBoardShortCutColXS4 = "Ctrl-F4";
	var keyBoardShortCutColXS5 = "Ctrl-F5";
	var keyBoardShortCutColXS6 = "Ctrl-F6";
	var keyBoardShortCutColXS7 = "Ctrl-F7";
	var keyBoardShortCutColXS8 = "Ctrl-F8";
	var keyBoardShortCutColXS9 = "Ctrl-F9";
	var keyBoardShortCutColXS10 = "Ctrl-F10";
	var keyBoardShortCutColXS11 = "Ctrl-F11";
	var keyBoardShortCutColXS12 = "Ctrl-F12";
	
	var keyBoardShortCutColSM1 = "Ctrl-Alt-F1";
	var keyBoardShortCutColSM2 = "Ctrl-Alt-F2";
	var keyBoardShortCutColSM3 = "Ctrl-Alt-F3";
	var keyBoardShortCutColSM4 = "Ctrl-Alt-F4";
	var keyBoardShortCutColSM5 = "Ctrl-Alt-F5";
	var keyBoardShortCutColSM6 = "Ctrl-Alt-F6";
	var keyBoardShortCutColSM7 = "Ctrl-Alt-F7";
	var keyBoardShortCutColSM8 = "Ctrl-Alt-F8";
	var keyBoardShortCutColSM9 = "Ctrl-Alt-F9";
	var keyBoardShortCutColSM10 = "Ctrl-Alt-F10";
	var keyBoardShortCutColSM11 = "Ctrl-Alt-F11";
	var keyBoardShortCutColSM12 = "Ctrl-Alt-F12";
	
	var keyBoardShortCutColMD1 = "Ctrl-Shift-F1";
	var keyBoardShortCutColMD2 = "Ctrl-Shift-F2";
	var keyBoardShortCutColMD3 = "Ctrl-Shift-F3";
	var keyBoardShortCutColMD4 = "Ctrl-Shift-F4";
	var keyBoardShortCutColMD5 = "Ctrl-Shift-F5";
	var keyBoardShortCutColMD6 = "Ctrl-Shift-F6";
	var keyBoardShortCutColMD7 = "Ctrl-Shift-F7";
	var keyBoardShortCutColMD8 = "Ctrl-Shift-F8";
	var keyBoardShortCutColMD9 = "Ctrl-Shift-F9";
	var keyBoardShortCutColMD10 = "Ctrl-Shift-F10";
	var keyBoardShortCutColMD11 = "Ctrl-Shift-F11";
	var keyBoardShortCutColMD12 = "Ctrl-Shift-F12";
	
	var keyBoardShortCutColLG1 = "Shift-Alt-F1";
	var keyBoardShortCutColLG2 = "Shift-Alt-F2";
	var keyBoardShortCutColLG3 = "Shift-Alt-F3";
	var keyBoardShortCutColLG4 = "Shift-Alt-F4";
	var keyBoardShortCutColLG5 = "Shift-Alt-F5";
	var keyBoardShortCutColLG6 = "Shift-Alt-F6";
	var keyBoardShortCutColLG7 = "Shift-Alt-F7";
	var keyBoardShortCutColLG8 = "Shift-Alt-F8";
	var keyBoardShortCutColLG9 = "Shift-Alt-F9";
	var keyBoardShortCutColLG10 = "Shift-Alt-F10";
	var keyBoardShortCutColLG11 = "Shift-Alt-F11";
	var keyBoardShortCutColLG12 = "Shift-Alt-F12";
	
	var keyBoardShortCutColOffXS = "Ctrl-1";
	var keyBoardShortCutColOffSM = "Ctrl-2";
	var keyBoardShortCutColOffMD = "Ctrl-3";
	var keyBoardShortCutColOffLG = "Ctrl-4";
		
	var keyBoardShortCutPanel = "Ctrl-Shift-P";
	var keyBoardShortCutModal = "Ctrl-Shift-M";
	var keyBoardShortCutNav = "Ctrl-Shift-N";
	var keyBoardShortCutInputGroup = "Ctrl-Shift-I";
	var keyBoardShortCutHelp = "Ctrl-`";
	var CommandManager = brackets.getModule("command/CommandManager");
	var kbManager = brackets.getModule("command/KeyBindingManager");
	var edManager = brackets.getModule("editor/EditorManager");

//append a panel to current editor
	function appendPanel(){
		/*jQuery('<div/>', {
		  id: "foo",
		  text: "Get into Facebook"
		  }).appendTo("body");*/
		var panelSeklly = '<div class="panel panel-default">\n' +
				  '	<div class="panel-heading">\n' + 
				  '		<h3 class="panel-title">Panel title</h3>\n' + 
			  	  '	</div>\n' + 
	  			  '	<div class="panel-body">\n' + 
    				  '		Panel content\n' + 
  				  '	</div>\n' + 
				  '	<div class="panel-footer">Panel footer</div>\n' + 
				'</div>';
		//window.alert("Hello");
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}	
	}
//append a modal to the current editor
	function appendModal(){
		var panelSeklly = '<div class="modal fade">\n' + 
  '	<div class="modal-dialog">\n' + 
    '		<div class="modal-content">\n' +
      '			<div class="modal-header">\n' + 
        '				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' + 
        '				<h4 class="modal-title">Modal title</h4>\n' + 
      '			</div>\n' + 
      '			<div class="modal-body">\n' + 
        '				<p>One fine body&hellip;</p>\n' + 
      '			</div>\n' + 
      '			<div class="modal-footer">\n' + 
        '				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n' + 
        '				<button type="button" class="btn btn-primary">Save changes</button>\n' + 
      '			</div>\n' + 
    '		</div>\n' + 
  '	</div>\n' + 
'</div>';
		//			window.alert("Hello");
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}	
	}
//append a nav-menu to current editor
	function appendNav(){
		var panelSeklly = '<nav class="navbar navbar-default">\n'+
'	<div class="container-fluid">\n'+
'		<div class="navbar-header">\n'+
'			<a class="navbar-brand" href="#">WebSiteName</a>\n'+
'		</div>\n'+
'		<div>\n'+
'			<ul class="nav navbar-nav">\n'+
'				<li class="active"><a href="#">Home</a></li>\n'+
'				<li><a href="#">Page 1</a></li>\n'+
'				<li><a href="#">Page 2</a></li>\n' +
'				<li><a href="#">Page 3</a></li>\n' +
'			</ul>\n'+
'		</div>\n'+
'	</div>\n'+
'</nav>';		
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}
	}
//append a panel to current editor
	function appendInputGroup(){
		var panelSeklly = '<div class="input-group">\n' + 
'  <span class="input-group-addon">$</span>\n' + 
'  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">\n' + 
'  <span class="input-group-addon">.00</span>\n' + 
'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
//append a container to current editor
	function appendContainer(){
		var panelSeklly = '<div class="container">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
//append a fluid container to current editor
	function appendContainerFluid(){
		var panelSeklly = '<div class="container-fluid">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
//append a row to current editor
	function appendRow(){
		var panelSeklly = '<div class="row">\n' + 
					'	\n' + 
					'  </div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
//append a fluid row to current editor
	function appendRowFluid(){
		var panelSeklly = '<div class="row-fluid">\n' + 
					'  \n' + 
					'  </div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
//append a section to current editor
	function appendSection(){
		var panelSeklly = '<section>\n' + 
					'  \n' + 
					'</section>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
//append a Col-XS-{number} to current editor
	function appendColXS1(){
		var panelSeklly = '<div class="col-xs-1">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColXS2(){
		var panelSeklly = '<div class="col-xs-2">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColXS3(){
		var panelSeklly = '<div class="col-xs-3">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColXS4(){
		var panelSeklly = '<div class="col-xs-4">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColXS5(){
		var panelSeklly = '<div class="col-xs-5">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColXS6(){
		var panelSeklly = '<div class="col-xs-6">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColXS7(){
		var panelSeklly = '<div class="col-xs-7">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColXS8(){
		var panelSeklly = '<div class="col-xs-8">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColXS9(){
		var panelSeklly = '<div class="col-xs-9">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColXS10(){
		var panelSeklly = '<div class="col-xs-10">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColXS11(){
		var panelSeklly = '<div class="col-xs-11">\n' + 
					'  \n' + 
					'	</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColXS12(){
		var panelSeklly = '<div class="col-xs-12">\n' + 
					'  \n' + 
					'	</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
//append a Col-SM-{number} to current editor
	function appendColSM1(){
		var panelSeklly = '<div class="col-sm-1">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColSM2(){
		var panelSeklly = '<div class="col-sm-2">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColSM3(){
		var panelSeklly = '<div class="col-sm-3">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColSM4(){
		var panelSeklly = '<div class="col-sm-4">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColSM5(){
		var panelSeklly = '<div class="col-sm-5">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColSM6(){
		var panelSeklly = '<div class="col-sm-6">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColSM7(){
		var panelSeklly = '<div class="col-sm-7">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColSM8(){
		var panelSeklly = '<div class="col-sm-8">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColSM9(){
		var panelSeklly = '<div class="col-sm-9">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColSM10(){
		var panelSeklly = '<div class="col-sm-10">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColSM11(){
		var panelSeklly = '<div class="col-sm-11">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColSM12(){
		var panelSeklly = '<div class="col-sm-12">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
//append a Col-MD-{number} to current editor
	function appendColMD1(){
		var panelSeklly = '<div class="col-md-1">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColMD2(){
		var panelSeklly = '<div class="col-md-2">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColMD3(){
		var panelSeklly = '<div class="col-md-3">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColMD4(){
		var panelSeklly = '<div class="col-md-4">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColMD5(){
		var panelSeklly = '<div class="col-md-5">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColMD6(){
		var panelSeklly = '<div class="col-md-6">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColMD7(){
		var panelSeklly = '<div class="col-md-7">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColMD8(){
		var panelSeklly = '<div class="col-md-8">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColMD9(){
		var panelSeklly = '<div class="col-md-9">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColMD10(){
		var panelSeklly = '<div class="col-md-10">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColMD11(){
		var panelSeklly = '<div class="col-md-11">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColMD12(){
		var panelSeklly = '<div class="col-md-12">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
//append a Col-LG-{number} to current editor
	function appendColLG1(){
		var panelSeklly = '<div class="col-lg-1">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColLG2(){
		var panelSeklly = '<div class="col-lg-2">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColLG3(){
		var panelSeklly = '<div class="col-lg-3">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColLG4(){
		var panelSeklly = '<div class="col-lg-4">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColLG5(){
		var panelSeklly = '<div class="col-lg-5">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColLG6(){
		var panelSeklly = '<div class="col-lg-6">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColLG7(){
		var panelSeklly = '<div class="col-lg-7">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColLG8(){
		var panelSeklly = '<div class="col-lg-8">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColLG9(){
		var panelSeklly = '<div class="col-lg-9">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColLG10(){
		var panelSeklly = '<div class="col-lg-10">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColLG11(){
		var panelSeklly = '<div class="col-lg-11">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColLG12(){
		var panelSeklly = '<div class="col-lg-12">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
//append a Col-{size}-offset-{number} to current editor
	function appendColOffXS(){
		var panelSeklly = '<div class="col-xs-offset-{number}">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColOffSM(){
		var panelSeklly = '<div class="col-sm-offset-{number}">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColOffMD(){
		var panelSeklly = '<div class="col-md-offset-{number}">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	function appendColOffLG(){
		var panelSeklly = '<div class="col-lg-offset-{number}">\n' + 
					'  \n' + 
					'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	

	function showHelp(){
		window.alert("Ctrl-Alt-P : Panel\nCtrl-Alt-M: Modal\nCtrl-Alt-I: Input Groups\nCtrl-Alt-N: Navbar\nCtrl-Shift-C: Container\nCtrl-Alt-Shift-C: CopntainerFluid");		
	}
	
	var COMMAND_ID_P = "keystrap.getPanel";
	var COMMAND_ID_M = "keystrap.getModal";
	var COMMAND_ID_N = "keystrap.getNav";
	var COMMAND_ID_I = "keystrap.getInputGroup";
	var COMMAND_ID_H = "keystrap.help";
	var COMMAND_ID_BC = "keystrap.getContainer";
	var COMMAND_ID_BCF = "keystrap.getContainerFluid";
	var COMMAND_ID_BR = "keystrap.getRow";
	var COMMAND_ID_BRF = "keystrap.getRowFluid";
	var COMMAND_ID_BS = "keystrap.getSection";
	var COMMAND_ID_BCXS1 = "keystrap.getColXS1";
	var COMMAND_ID_BCXS2 = "keystrap.getColXS2";
	var COMMAND_ID_BCXS3 = "keystrap.getColXS3";
	var COMMAND_ID_BCXS4 = "keystrap.getColXS4";
	var COMMAND_ID_BCXS5 = "keystrap.getColXS5";
	var COMMAND_ID_BCXS6 = "keystrap.getColXS6";
	var COMMAND_ID_BCXS7 = "keystrap.getColXS7";
	var COMMAND_ID_BCXS8 = "keystrap.getColXS8";
	var COMMAND_ID_BCXS9 = "keystrap.getColXS9";
	var COMMAND_ID_BCXS10 = "keystrap.getColXS10";
	var COMMAND_ID_BCXS11 = "keystrap.getColXS11";
	var COMMAND_ID_BCXS12 = "keystrap.getColXS12";
	var COMMAND_ID_BCSM1 = "keystrap.getColSM1";
	var COMMAND_ID_BCSM2 = "keystrap.getColSM2";
	var COMMAND_ID_BCSM3 = "keystrap.getColSM3";
	var COMMAND_ID_BCSM4 = "keystrap.getColSM4";
	var COMMAND_ID_BCSM5 = "keystrap.getColSM5";
	var COMMAND_ID_BCSM6 = "keystrap.getColSM6";
	var COMMAND_ID_BCSM7 = "keystrap.getColSM7";
	var COMMAND_ID_BCSM8 = "keystrap.getColSM8";
	var COMMAND_ID_BCSM9 = "keystrap.getColSM9";
	var COMMAND_ID_BCSM10 = "keystrap.getColSM10";
	var COMMAND_ID_BCSM11 = "keystrap.getColSM11";
	var COMMAND_ID_BCSM12 = "keystrap.getColSM12";
	var COMMAND_ID_BCMD1 = "keystrap.getColMD1";
	var COMMAND_ID_BCMD2 = "keystrap.getColMD2";
	var COMMAND_ID_BCMD3 = "keystrap.getColMD3";
	var COMMAND_ID_BCMD4 = "keystrap.getColMD4";
	var COMMAND_ID_BCMD5 = "keystrap.getColMD5";
	var COMMAND_ID_BCMD6 = "keystrap.getColMD6";
	var COMMAND_ID_BCMD7 = "keystrap.getColMD7";
	var COMMAND_ID_BCMD8 = "keystrap.getColMD8";
	var COMMAND_ID_BCMD9 = "keystrap.getColMD9";
	var COMMAND_ID_BCMD10 = "keystrap.getColMD10";
	var COMMAND_ID_BCMD11 = "keystrap.getColMD11";
	var COMMAND_ID_BCMD12 = "keystrap.getColMD12";
	var COMMAND_ID_BCLG1 = "keystrap.getColLG1";
	var COMMAND_ID_BCLG2 = "keystrap.getColLG2";
	var COMMAND_ID_BCLG3 = "keystrap.getColLG3";
	var COMMAND_ID_BCLG4 = "keystrap.getColLG4";
	var COMMAND_ID_BCLG5 = "keystrap.getColLG5";
	var COMMAND_ID_BCLG6 = "keystrap.getColLG6";
	var COMMAND_ID_BCLG7 = "keystrap.getColLG7";
	var COMMAND_ID_BCLG8 = "keystrap.getColLG8";
	var COMMAND_ID_BCLG9 = "keystrap.getColLG9";
	var COMMAND_ID_BCLG10 = "keystrap.getColLG10";
	var COMMAND_ID_BCLG11 = "keystrap.getColLG11";
	var COMMAND_ID_BCLG12 = "keystrap.getColLG12";
	var COMMAND_ID_BCOXS = "keystrap.getColOffXS";
	var COMMAND_ID_BCOSM = "keystrap.getColOffSM";
	var COMMAND_ID_BCOMD = "keystrap.getColOffMD";
	var COMMAND_ID_BCOLG = "keystrap.getColOffLG";
	
	
	CommandManager.register("Panel", COMMAND_ID_P, appendPanel);
	kbManager.addBinding(COMMAND_ID_P, keyBoardShortCutPanel);

	CommandManager.register("Help", COMMAND_ID_H, showHelp);
	kbManager.addBinding(COMMAND_ID_H, keyBoardShortCutHelp);
	
	CommandManager.register("Modal", COMMAND_ID_M, appendModal);
	kbManager.addBinding(COMMAND_ID_M, keyBoardShortCutModal);	

	CommandManager.register("Nav", COMMAND_ID_N, appendNav);
	kbManager.addBinding(COMMAND_ID_N, keyBoardShortCutNav);
	
	CommandManager.register("InputGroup", COMMAND_ID_I, appendInputGroup);
	kbManager.addBinding(COMMAND_ID_I, keyBoardShortCutInputGroup);
//GRID	
	CommandManager.register("Container", COMMAND_ID_BC, appendContainer);
	kbManager.addBinding(COMMAND_ID_BC, keyBoardShortCutContainer);
	
	CommandManager.register("ContainerFluid", COMMAND_ID_BCF, appendContainerFluid);
	kbManager.addBinding(COMMAND_ID_BCF, keyBoardShortCutContainerFluid);
	
	CommandManager.register("Row", COMMAND_ID_BR, appendRow );
	kbManager.addBinding(COMMAND_ID_BR, keyBoardShortCutRow );
	
	CommandManager.register("RowFluid", COMMAND_ID_BRF, appendRowFluid );
	kbManager.addBinding(COMMAND_ID_BRF, keyBoardShortCutRowFluid );
	
	CommandManager.register("Section", COMMAND_ID_BS, appendSection );
	kbManager.addBinding(COMMAND_ID_BS, keyBoardShortCutSection );
//COL-XS
	CommandManager.register("ColXS1", COMMAND_ID_BCXS1, appendColXS1);
	kbManager.addBinding(COMMAND_ID_BCXS1, keyBoardShortCutColXS1);
	
	CommandManager.register("ColXS2", COMMAND_ID_BCXS2, appendColXS2);
	kbManager.addBinding(COMMAND_ID_BCXS2, keyBoardShortCutColXS2);
	
	CommandManager.register("ColXS3", COMMAND_ID_BCXS3, appendColXS3);
	kbManager.addBinding(COMMAND_ID_BCXS3, keyBoardShortCutColXS3);
	
	CommandManager.register("ColXS4", COMMAND_ID_BCXS4, appendColXS4);
	kbManager.addBinding(COMMAND_ID_BCXS4, keyBoardShortCutColXS4);
	
	CommandManager.register("ColXS5", COMMAND_ID_BCXS5, appendColXS5);
	kbManager.addBinding(COMMAND_ID_BCXS5, keyBoardShortCutColXS5);
	
	CommandManager.register("ColXS5", COMMAND_ID_BCXS5, appendColXS5);
	kbManager.addBinding(COMMAND_ID_BCXS5, keyBoardShortCutColXS5);
	
	CommandManager.register("ColXS6", COMMAND_ID_BCXS6, appendColXS6);
	kbManager.addBinding(COMMAND_ID_BCXS6, keyBoardShortCutColXS6);
	
	CommandManager.register("ColXS7", COMMAND_ID_BCXS7, appendColXS7);
	kbManager.addBinding(COMMAND_ID_BCXS7, keyBoardShortCutColXS7);
	
	CommandManager.register("ColXS8", COMMAND_ID_BCXS8, appendColXS8);
	kbManager.addBinding(COMMAND_ID_BCXS8, keyBoardShortCutColXS8);
	
	CommandManager.register("ColXS9", COMMAND_ID_BCXS8, appendColXS9);
	kbManager.addBinding(COMMAND_ID_BCXS9, keyBoardShortCutColXS9);
	
	CommandManager.register("ColXS10", COMMAND_ID_BCXS10, appendColXS10);
	kbManager.addBinding(COMMAND_ID_BCXS10, keyBoardShortCutColXS10);
	
	CommandManager.register("ColXS11", COMMAND_ID_BCXS11, appendColXS11);
	kbManager.addBinding(COMMAND_ID_BCXS11, keyBoardShortCutColXS11);
	
	CommandManager.register("ColXS12", COMMAND_ID_BCXS12, appendColXS12);
	kbManager.addBinding(COMMAND_ID_BCXS12, keyBoardShortCutColXS12);
//COL-SM	
	CommandManager.register("ColSM1", COMMAND_ID_BCSM1, appendColSM1);
	kbManager.addBinding(COMMAND_ID_BCSM1, keyBoardShortCutColSM1);
	
	CommandManager.register("ColSM2", COMMAND_ID_BCSM2, appendColSM2);
	kbManager.addBinding(COMMAND_ID_BCSM2, keyBoardShortCutColSM2);
	
	CommandManager.register("ColSM3", COMMAND_ID_BCSM3, appendColSM3);
	kbManager.addBinding(COMMAND_ID_BCSM3, keyBoardShortCutColSM3);
	
	CommandManager.register("ColSM4", COMMAND_ID_BCSM4, appendColSM4);
	kbManager.addBinding(COMMAND_ID_BCSM4, keyBoardShortCutColSM4);
	
	CommandManager.register("ColSM5", COMMAND_ID_BCSM5, appendColSM5);
	kbManager.addBinding(COMMAND_ID_BCSM5, keyBoardShortCutColSM5);
	
	CommandManager.register("ColSM5", COMMAND_ID_BCSM5, appendColSM5);
	kbManager.addBinding(COMMAND_ID_BCSM5, keyBoardShortCutColSM5);
	
	CommandManager.register("ColSM6", COMMAND_ID_BCSM6, appendColSM6);
	kbManager.addBinding(COMMAND_ID_BCSM6, keyBoardShortCutColSM6);
	
	CommandManager.register("ColSM7", COMMAND_ID_BCSM7, appendColSM7);
	kbManager.addBinding(COMMAND_ID_BCSM7, keyBoardShortCutColSM7);
	
	CommandManager.register("ColSM8", COMMAND_ID_BCSM8, appendColSM8);
	kbManager.addBinding(COMMAND_ID_BCSM8, keyBoardShortCutColSM8);
	
	CommandManager.register("ColSM9", COMMAND_ID_BCSM8, appendColSM9);
	kbManager.addBinding(COMMAND_ID_BCSM9, keyBoardShortCutColSM9);
	
	CommandManager.register("ColSM10", COMMAND_ID_BCSM10, appendColSM10);
	kbManager.addBinding(COMMAND_ID_BCSM10, keyBoardShortCutColSM10);
	
	CommandManager.register("ColSM11", COMMAND_ID_BCSM11, appendColSM11);
	kbManager.addBinding(COMMAND_ID_BCSM11, keyBoardShortCutColSM11);
	
	CommandManager.register("ColSM12", COMMAND_ID_BCSM12, appendColSM12);
	kbManager.addBinding(COMMAND_ID_BCSM12, keyBoardShortCutColSM12);
//COL-MD
	CommandManager.register("ColMD1", COMMAND_ID_BCMD1, appendColMD1);
	kbManager.addBinding(COMMAND_ID_BCMD1, keyBoardShortCutColMD1);
	
	CommandManager.register("ColMD2", COMMAND_ID_BCMD2, appendColMD2);
	kbManager.addBinding(COMMAND_ID_BCMD2, keyBoardShortCutColMD2);
	
	CommandManager.register("ColMD3", COMMAND_ID_BCMD3, appendColMD3);
	kbManager.addBinding(COMMAND_ID_BCMD3, keyBoardShortCutColMD3);
	
	CommandManager.register("ColMD4", COMMAND_ID_BCMD4, appendColMD4);
	kbManager.addBinding(COMMAND_ID_BCMD4, keyBoardShortCutColMD4);
	
	CommandManager.register("ColMD5", COMMAND_ID_BCMD5, appendColMD5);
	kbManager.addBinding(COMMAND_ID_BCMD5, keyBoardShortCutColMD5);
	
	CommandManager.register("ColMD5", COMMAND_ID_BCMD5, appendColMD5);
	kbManager.addBinding(COMMAND_ID_BCMD5, keyBoardShortCutColMD5);
	
	CommandManager.register("ColMD6", COMMAND_ID_BCMD6, appendColMD6);
	kbManager.addBinding(COMMAND_ID_BCMD6, keyBoardShortCutColMD6);
	
	CommandManager.register("ColMD7", COMMAND_ID_BCMD7, appendColMD7);
	kbManager.addBinding(COMMAND_ID_BCMD7, keyBoardShortCutColMD7);
	
	CommandManager.register("ColMD8", COMMAND_ID_BCMD8, appendColMD8);
	kbManager.addBinding(COMMAND_ID_BCMD8, keyBoardShortCutColMD8);
	
	CommandManager.register("ColMD9", COMMAND_ID_BCMD8, appendColMD9);
	kbManager.addBinding(COMMAND_ID_BCMD9, keyBoardShortCutColMD9);
	
	CommandManager.register("ColMD10", COMMAND_ID_BCMD10, appendColMD10);
	kbManager.addBinding(COMMAND_ID_BCMD10, keyBoardShortCutColMD10);
	
	CommandManager.register("ColMD11", COMMAND_ID_BCMD11, appendColMD11);
	kbManager.addBinding(COMMAND_ID_BCMD11, keyBoardShortCutColMD11);
	
	CommandManager.register("ColMD12", COMMAND_ID_BCMD12, appendColMD12);
	kbManager.addBinding(COMMAND_ID_BCMD12, keyBoardShortCutColMD12);
//COL-LG	
	CommandManager.register("ColLG1", COMMAND_ID_BCLG1, appendColLG1);
	kbManager.addBinding(COMMAND_ID_BCLG1, keyBoardShortCutColLG1);
	
	CommandManager.register("ColLG2", COMMAND_ID_BCLG2, appendColLG2);
	kbManager.addBinding(COMMAND_ID_BCLG2, keyBoardShortCutColLG2);
	
	CommandManager.register("ColLG3", COMMAND_ID_BCLG3, appendColLG3);
	kbManager.addBinding(COMMAND_ID_BCLG3, keyBoardShortCutColLG3);
	
	CommandManager.register("ColLG4", COMMAND_ID_BCLG4, appendColLG4);
	kbManager.addBinding(COMMAND_ID_BCLG4, keyBoardShortCutColLG4);
	
	CommandManager.register("ColLG5", COMMAND_ID_BCLG5, appendColLG5);
	kbManager.addBinding(COMMAND_ID_BCLG5, keyBoardShortCutColLG5);
	
	CommandManager.register("ColLG5", COMMAND_ID_BCLG5, appendColLG5);
	kbManager.addBinding(COMMAND_ID_BCLG5, keyBoardShortCutColLG5);
	
	CommandManager.register("ColLG6", COMMAND_ID_BCLG6, appendColLG6);
	kbManager.addBinding(COMMAND_ID_BCLG6, keyBoardShortCutColLG6);
	
	CommandManager.register("ColLG7", COMMAND_ID_BCLG7, appendColLG7);
	kbManager.addBinding(COMMAND_ID_BCLG7, keyBoardShortCutColLG7);
	
	CommandManager.register("ColLG8", COMMAND_ID_BCLG8, appendColLG8);
	kbManager.addBinding(COMMAND_ID_BCLG8, keyBoardShortCutColLG8);
	
	CommandManager.register("ColLG9", COMMAND_ID_BCLG8, appendColLG9);
	kbManager.addBinding(COMMAND_ID_BCLG9, keyBoardShortCutColLG9);
	
	CommandManager.register("ColLG10", COMMAND_ID_BCLG10, appendColLG10);
	kbManager.addBinding(COMMAND_ID_BCLG10, keyBoardShortCutColLG10);
	
	CommandManager.register("ColLG11", COMMAND_ID_BCLG11, appendColLG11);
	kbManager.addBinding(COMMAND_ID_BCLG11, keyBoardShortCutColLG11);
	
	CommandManager.register("ColLG12", COMMAND_ID_BCLG12, appendColLG12);
	kbManager.addBinding(COMMAND_ID_BCLG12, keyBoardShortCutColLG12);
//COL-OFFSET
	CommandManager.register("ColOffXS", COMMAND_ID_BCOXS, appendColOffXS);
	kbManager.addBinding(COMMAND_ID_BCOXS, keyBoardShortCutColOffXS);
	
	CommandManager.register("ColOffSM", COMMAND_ID_BCOSM, appendColOffSM);
	kbManager.addBinding(COMMAND_ID_BCOSM, keyBoardShortCutColOffSM);
	
	CommandManager.register("ColOffMD", COMMAND_ID_BCOMD, appendColOffMD);
	kbManager.addBinding(COMMAND_ID_BCOMD, keyBoardShortCutColOffMD);
	
	CommandManager.register("ColOffLG", COMMAND_ID_BCOLG, appendColOffLG);
	kbManager.addBinding(COMMAND_ID_BCOLG, keyBoardShortCutColOffLG);
	
});