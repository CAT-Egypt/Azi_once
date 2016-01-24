/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         
         isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));              
         
         
         if(isDevice) {
         
           interactionUp = "touchend";
           interactionDown = "touchstart";
           interactionOver = interactionDown;
           interactionMove = 'touchmove';
         
         } else {
         
           interactionUp = "click";
           interactionDown = "mousedown";
           interactionOver = "mouseover";
           interactionMove = 'mousemove';
         
         };
         
         //main content
         //@symbolName - the name of the symbol
         //@topText - the text (if any) for the top title (in purple)
         //@indexImage - the thumbnail image used in the index list
         //@indexTitle - the title for the index item
         //@indexBody - the bosy for the index item
         
         var pagesArray = [
         {symbolName:"Slide_00", indexImage:"index_pic_00.png", indexTitle:"Azi Once", indexBody:"Cover"},
         {symbolName:"Slide_01", indexImage:"index_pic_01.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_02", indexImage:"index_pic_02.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_03", indexImage:"index_pic_03.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_04", indexImage:"index_pic_04.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_05", indexImage:"index_pic_05.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_06", indexImage:"index_pic_06.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_07", indexImage:"index_pic_07.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_08", indexImage:"index_pic_08.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_09", indexImage:"index_pic_09.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_10", indexImage:"index_pic_10.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_11", indexImage:"index_pic_11.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_12", indexImage:"index_pic_12.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_13", indexImage:"index_pic_13.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_14", indexImage:"index_pic_14.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_15", indexImage:"index_pic_15.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_16", indexImage:"index_pic_16.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_17", indexImage:"index_pic_17.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_18", indexImage:"index_pic_18.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_19", indexImage:"index_pic_19.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_20", indexImage:"index_pic_20.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_21", indexImage:"index_pic_21.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_22", indexImage:"index_pic_22.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_23", indexImage:"index_pic_23.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_24", indexImage:"index_pic_24.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_25", indexImage:"index_pic_25.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_26", indexImage:"index_pic_26.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_27", indexImage:"index_pic_27.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_28", indexImage:"index_pic_28.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_29", indexImage:"index_pic_29.png", indexTitle:"Azi Once", indexBody:"Slide"},
         {symbolName:"Slide_30", indexImage:"index_pic_30.png", indexTitle:"Azi Once", indexBody:"Slide"}
         ];
         
         //number of pages
         var numPages = pagesArray.length;
         //ref to stage
         var stage = $('#Stage');
         //ref to the container that holds the pages
         var pageContainer = sym.$('pageContainer');
         //ref to the index slide out symbol
         var indexSymbol = sym.getSymbol('index');
         //..and its element
         var indexElement = indexSymbol.getSymbolElement();
         //ref to the container that holds the index items
         var indexListContainer = indexSymbol.$('indexListContainer');
         //the top purple text
         //refs to next and prev buttons
         var nextBtn = 		sym.$('nextBtn');
         var prevBtn = 		sym.$('prevBtn');
         
         //your original button refs
         var plyIndex = 	sym.$('plyIndex');
         var plyHome = 		sym.$('plyHome');
         var sec02 = sym.getSymbol("Sections_Bar").$('sec02');
         var sec18 = sym.getSymbol("Sections_Bar").$('sec18');
         var sec24 = sym.getSymbol("Sections_Bar").$('sec24');
         var sec27 = sym.getSymbol("Sections_Bar").$('sec27');
         var sec28 = sym.getSymbol("Sections_Bar").$('sec28');
         var sec29 = sym.getSymbol("Sections_Bar").$('sec29');
         var sec30 = sym.getSymbol("Sections_Bar").$('sec30');
         
         // btns of the menus.
         var M1 = sym.getSymbol("Sections_Bar").$('M1');
         var M1Copy2 = sym.getSymbol("Sections_Bar").$('M1Copy2');
         var M2 = sym.getSymbol("Sections_Bar").$('M2');
         var M3 = sym.getSymbol("Sections_Bar").$('M3');
         var M4 = sym.getSymbol("Sections_Bar").$('M4');
         var M5 = sym.getSymbol("Sections_Bar").$('M5');
         var M6 = sym.getSymbol("Sections_Bar").$('M6');
         var M6Copy2 = sym.getSymbol("Sections_Bar").$('M6Copy2');
         var M7 = sym.getSymbol("Sections_Bar").$('M7');
         var M8 = sym.getSymbol("Sections_Bar").$('M8');
         var M8Copy2 = sym.getSymbol("Sections_Bar").$('M8Copy2');
         var M9 = sym.getSymbol("Sections_Bar").$('M9');
         var M10 = sym.getSymbol("Sections_Bar").$('M10');
         var M11 = sym.getSymbol("Sections_Bar").$('M11');
         var M12 = sym.getSymbol("Sections_Bar").$('M12');
         var M12Copy2 = sym.getSymbol("Sections_Bar").$('M12Copy2');
         var M13 = sym.getSymbol("Sections_Bar").$('M13');
         var M14 = sym.getSymbol("Sections_Bar").$('M14');
         var M15 = sym.getSymbol("Sections_Bar").$('M15');
         var M15Copy2 = sym.getSymbol("Sections_Bar").$('M15Copy2');
         
         var M16 = sym.getSymbol("Sections_Bar").$('M16');
         var M17 = sym.getSymbol("Sections_Bar").$('M17');
         var M18 = sym.getSymbol("Sections_Bar").$('M18');
         var M19 = sym.getSymbol("Sections_Bar").$('M19');
         
         
         //various refs to variables
         var isDevice;
         var stageWidth = stage.width();
         var stageHeight = stage.height();
         var touchPos = {initPosX:0, threshold:98};
         var pageTweenDuration = 1;
         var isAnimating = false;
         
         var currentPageId = 0;
         var currentPageSymbol, currentPageElement, oldPageSymbol, oldPageElement, indexDragger;
         
         
         function init(){
         
            //build the index menu
            buildIndexMenu();
         
            //build the top nav
            buildNav();
         }
         
         function buildNav(){
         
         
            nextBtn.bind(interactionUp, {dir:'next'} ,clickArrow);
            prevBtn.bind(interactionUp, {dir:'prev'},clickArrow);
            plyHome.bind(interactionUp, clickHome);
         
            sec02.bind(interactionUp, clickSec02);
            sec18.bind(interactionUp, clickSec18);
            sec24.bind(interactionUp, clickSec24);
            sec27.bind(interactionUp, clickSec27);
            sec28.bind(interactionUp, clickSec28);
            sec29.bind(interactionUp, clickSec29);
            sec30.bind(interactionUp, clickSec30);
         
            M1.bind(interactionUp, clickM1);
            M1Copy2.bind(interactionUp, clickM1Copy2);
            M2.bind(interactionUp, clickM2);
            M3.bind(interactionUp, clickM3);
            M4.bind(interactionUp, clickM4);
            M5.bind(interactionUp, clickM5);
            M6.bind(interactionUp, clickM6);
            M6Copy2.bind(interactionUp, clickM6Copy2);
            M7.bind(interactionUp, clickM7);
            M8.bind(interactionUp, clickM8);
            M8Copy2.bind(interactionUp, clickM8Copy2);
            M9.bind(interactionUp, clickM9);
            M10.bind(interactionUp, clickM10);
            M11.bind(interactionUp, clickM11);
            M12.bind(interactionUp, clickM12);
            M12Copy2.bind(interactionUp, clickM12Copy2);
            M13.bind(interactionUp, clickM13);
            M14.bind(interactionUp, clickM14);
            M15.bind(interactionUp, clickM15);
            M15Copy2.bind(interactionUp, clickM15Copy2);
            M16.bind(interactionUp, clickM16);
            M17.bind(interactionUp, clickM17);
            M18.bind(interactionUp, clickM18);
            M19.bind(interactionUp, clickM19);
         
         
         }
         
         function clickHome(e){ 
         
         			var dest = 0;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         		sym.getSymbol("Sections_Bar").$("Group1").hide();
         		sym.getSymbol("Sections_Bar").$("Group2").hide();
            //make it glow when clicked
         }
         
         function clickSec02(e){ 
         			var dest = 1;  
         			if(currentPageId > dest){ sym.stop(); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         		sym.getSymbol("Sections_Bar").$("Group1").slideToggle("");
         		sym.getSymbol("Sections_Bar").$("Group2").hide();
         
         glowButton(e);
         }
         
         //clicked the btns 2 menu
         function clickM1(e){ 	var dest = 1;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM1Copy2(e){ 	var dest = 1;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM2(e){ 	var dest = 2;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM3(e){ 	var dest = 3;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM4(e){ 	var dest = 4;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM5(e){ 	var dest = 5;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM6(e){ 	var dest = 7;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM6Copy2(e){ 	var dest = 7;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM7(e){ 	var dest = 8;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM8(e){ 	var dest = 9;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM8Copy2(e){ 	var dest = 9;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM9(e){ 	var dest = 10;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM10(e){ 	var dest = 11;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM11(e){ 	var dest = 12;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM12(e){ 	var dest = 13;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM12Copy2(e){ 	var dest = 14;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM13(e){ 	var dest = 15;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM14(e){ 	var dest = 16;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM15(e){ 	var dest = 17;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM15Copy2(e){ 	var dest = 17;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM16(e){ 	var dest = 18;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM17(e){ 	var dest = 19;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM18(e){ 	var dest = 20;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickM19(e){ 	var dest = 22;  if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         else if(currentPageId < dest){currentPageId = dest; addPage('next'); } glowButton(e); }
         
         function clickSec18(e){ 
         			var dest = 18;  
         			if(currentPageId > dest){ sym.stop(); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         		sym.getSymbol("Sections_Bar").$("Group1").hide();
         		sym.getSymbol("Sections_Bar").$("Group2").slideToggle("");
         glowButton(e);
         }
         
         
         function clickSec24(e){ 
         			var dest = 24;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         		sym.getSymbol("Sections_Bar").$("Group1").hide();
         		sym.getSymbol("Sections_Bar").$("Group2").hide();
         glowButton(e);
         }
         
         function clickSec27(e){ 
         			var dest = 27;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         		sym.getSymbol("Sections_Bar").$("Group1").hide();
         		sym.getSymbol("Sections_Bar").$("Group2").hide();
         
         
         glowButton(e);
         }
         
         function clickSec28(e){ 
         			var dest = 28;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         		sym.getSymbol("Sections_Bar").$("Group1").hide();
         		sym.getSymbol("Sections_Bar").$("Group2").hide();
         
         
         glowButton(e);
         }
         
         function clickSec29(e){ 
         			var dest = 29;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         		sym.getSymbol("Sections_Bar").$("Group1").hide();
         		sym.getSymbol("Sections_Bar").$("Group2").hide();
         
         
         glowButton(e);
         }
         
         function clickSec30(e){ 
         			var dest = 30;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
         		sym.getSymbol("Sections_Bar").$("Group1").hide();
         		sym.getSymbol("Sections_Bar").$("Group2").hide();
         
         glowButton(e);
         }
         
         function clickArrow(e){
         
            //if the whole app is animating then don't do anything until it's stopped
         	if(isAnimating){return};
         
            var dir = e.data.dir;
         
            currentPageId = checkPageId(dir);
         
            addPage(dir);
         }
         
         function buildIndexMenu(){
         
            var indexItemSymbol, indexItemElement;
         
            for(var i = 0; i < numPages; i++){
         
               indexItemSymbol = sym.createChildSymbol('IndexItemSymbol', indexListContainer);
               indexItemElement = indexItemSymbol.getSymbolElement();
         
               TweenMax.set(indexItemElement, {
                  position:'absolute',
                  y:(i * indexItemElement.height()),
                  cursor:'pointer'
               });
         
               //indexItemSymbol.$('imageHolder').attr('src', 'images/index_default.jpg');
               TweenMax.set(indexItemSymbol.$('imageHolder'), {
                  backgroundImage:'url(images/' + pagesArray[i].indexImage + ')' 
               });
         
         
               indexItemSymbol.$('titleText').html(pagesArray[i].indexTitle)
               indexItemSymbol.$('bodyText').html(pagesArray[i].indexBody + '<br>' + i)
         
         
               indexItemElement.bind(interactionUp, {itemId:i}, clickIndexItem);
         
               //console.log(indexItemSymbol.$('imageHolder'))
         
            }
         
            //indexListContainer[0].style.height = numPages * indexItemElement.height() + 'px';
         
            pageContainer.bind('swipeleft', function(){
         
         	var dest = 30;
               if (currentPageId !==dest) {currentPageId = checkPageId('next');      addPage('next');
               }
               else if (currentPageId = dest) {currentPageId = checkPageId('next');
         		}
         
         		toggleSectionsBtn();
         		audio01.play(0);
         
         		 })
         
         
            pageContainer.bind('swiperight', function(){
         
         		var dest = 0;
               if (currentPageId !==dest) {currentPageId = checkPageId('prev');      addPage('prev');
               }
               else if (currentPageId = dest) {currentPageId = checkPageId('prev');
         		}
         		toggleSectionsBtn();
         		audio01.play(0);
         
            })
         
            initIndex();
         
            initPages();
         
            checkArrows();
         
         }
         
         function initPages(){
         
            currentPageSymbol = sym.createChildSymbol(pagesArray[currentPageId].symbolName, pageContainer);
            currentPageElement = currentPageSymbol.getSymbolElement();
         
            currentPageSymbol.play(0);
         
         
         
         }
         
         function addPage(dir){
         
            //if the whole app is animating then don't do anything until it's stopped
         	if(isAnimating){return};
         
            oldPageSymbol = currentPageSymbol;
            oldPageElement = currentPageElement;
            oldPageSymbol.stopAll();
            currentPageSymbol = sym.createChildSymbol(pagesArray[currentPageId].symbolName, pageContainer);
            currentPageElement = currentPageSymbol.getSymbolElement();
         
            //set the old and new one to absolute
            TweenMax.set([oldPageElement, currentPageElement], {
               position:'absolute',
            })
         
          /*  TweenMax.set(oldPageElement, {
              zIndex:1
            });
            //avoids a flash as the new one comes on to the stage
            TweenMax.set(currentPageElement, {
              zIndex:-1,
              autoAlpha:0
            })
         */
            //if we hit next then slide the old page to the left
            TweenMax.to(oldPageElement, pageTweenDuration, {
               x:(dir == 'next') ? -stageWidth : stageWidth,
               onStart:function(){
               		isAnimating = true;
               },
               ease:Power2.easeInOut,
               onComplete:removePage,
               onCompleteParams:[oldPageSymbol]
         
            })
         
         
            //if we hit next then slide the new page from the right
            TweenMax.fromTo(currentPageElement, pageTweenDuration, {
               x:(dir == 'next') ? stageWidth : -stageWidth,
               autoAlpha:0
         
            },{
         
            	x:0,
            	autoAlpha:1,
               force3D:'auto',
               ease:Power2.easeInOut,
               onComplete:function(){
         
                  currentPageSymbol.play(0);
             //     setTopText();
                  isAnimating = false;
                  checkArrows();
         
         
               }
            })
         
         
         
         }
         
         function removePage(s){
         
            s.deleteSymbol();
         }
         
         /*function setTopText(){
         
            topText.html(pagesArray[currentPageId].topText);
         
         }
         */
         
         function initIndex() {
         
            plyIndex.bind(interactionUp, toggleIndex);
            indexElement.bind('swipeleft', toggleIndex);
            indexElement.bind(interactionDown, setInteractionDownPos)
            indexSymbol.$('closeBtn').bind(interactionDown, toggleIndex);
            TweenMax.set(indexElement, {
               position:'absolute',
               alpha:1,
               x:-indexElement.width()
            })
         
            //set the webkit scrolling on a touch device only
            if(isDevice){
         
               TweenMax.set('.scroll', {
                     'overflow-y': 'scroll',
                     'overflow-x': 'hidden',
                     webkitOverflowScrolling: 'touch'
               })
            } else {
         
              TweenMax.set('.scroll', {
                 'overflow-x': 'hidden',
                  overflow: 'scroll'
         
            })
         
            }
         
         
         }
         
         function setInteractionDownPos(e){
         
            touchPos.initPosX = (!isDevice) ? e.originalEvent.pageX : e.originalEvent.changedTouches[0].pageX ;
            touchPos.initPosY = (!isDevice) ? e.originalEvent.screenY : e.originalEvent.changedTouches[0].screenY;
         }
         
         
         
         function clickIndexItem(e){
         
            //if the whole app is animating then don't do anything until it's stopped
            audio02.play(0);
         	if(isAnimating){return};
         
            var itemId = e.data.itemId, dir;
         
            touchPos.endPosX = (!isDevice) ? e.originalEvent.pageX : e.originalEvent.changedTouches[0].pageX;
            touchPos.endPosY =  (!isDevice) ? e.originalEvent.screenY : e.originalEvent.changedTouches[0].screenY;
         
            //if you tapped and moved your finger too much then it's probably a swipe
            if((Math.abs(touchPos.initPosX - touchPos.endPosX) > touchPos.threshold) || (Math.abs(touchPos.initPosY - touchPos.endPosY) > touchPos.threshold)) {
         
               return;
            }
         
         
            if(itemId > currentPageId){
         
               currentPageId = itemId;
               addPage('next');
         
            } else if(itemId < currentPageId){
         
               currentPageId = itemId;
               addPage('prev');
         
            } else {
         
               //do nothing as it's the same page
            }
         toggleSectionsBtn();
         
         }
         
         
         function toggleIndex(e){
         
            //avoids the index button glowing when the index list is swiped
         	if(e.type === 'click'){
         
         	}
         
            if(indexElement[0]._gsTransform.x < 0){
         
               TweenMax.to(indexElement, 0.4, {
                  x:0,
                  ease:Power3.easeOut
               })
            } else {
               TweenMax.to(indexElement, 0.4, {
                  x:-367,
                  ease:Power3.easeOut
               })
         
            }
         
         
         }
         
         function checkPageId(dir){
         
            var id;
         
            switch(dir){
         
               case 'next':
         
                  id = ((currentPageId + 1) < numPages) ? currentPageId + 1 : currentPageId;
         
               break;
               case 'prev':
         
                  id = ((currentPageId - 1) > -1) ? currentPageId - 1 : 0;
         
               break;
         
         
         		}
         
         
            return id;
         
         
         }
         
         function checkArrows(){
         
            TweenMax.to(nextBtn, 0.3, {
            	autoAlpha:(currentPageId == numPages-1) ? 0 : 1
            })
            TweenMax.to(prevBtn, 0.3, {
            	autoAlpha:(currentPageId == 0) ? 0 : 1
            })
         toggleSectionsBtn();
         
         }
         
         
         function glowButton(e){
         
            TweenMax.fromTo(e.target, 0.3, {
         
               alpha:0
            }, 
            {
               alpha:1,
               repeat:0,
               yoyo:true
            })
         
         }
         
         function toggleSectionsBtn() {
         
         	if (currentPageId == 0) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         	}
         	else if (currentPageId == 1) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         	}
         	else if (currentPageId == 2) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         	}
         		else if (currentPageId == 3) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 4) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 5) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 6) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 7) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 8) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 9) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 10) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 11) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 12) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 13) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 14) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 15) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 16) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 17) { 
         
         		sec02.animate({opacity:1});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 18) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:1});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 19) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:1});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 20) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:1});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 21) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:1});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 22) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:1});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 23) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:1});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 24) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:1});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         
         		else if (currentPageId == 25) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:1});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 26) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:1});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 27) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:1});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 28) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:1});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 29) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:1});
         		sec30.animate({opacity:0});
         
         }
         		else if (currentPageId == 30) { 
         
         		sec02.animate({opacity:0});
         		sec18.animate({opacity:0});
         		sec24.animate({opacity:0});
         		sec27.animate({opacity:0});
         		sec28.animate({opacity:0});
         		sec29.animate({opacity:0});
         		sec30.animate({opacity:1});
         
         }
         
         }
         init();
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${plyHome}", "click", function(sym, e) {
         sym.$("Home").animate({opacity:0},100).animate({opacity:1},100);
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${plyIndex}", "click", function(sym, e) {
         audio03.play(0);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${nextBtn}", "click", function(sym, e) {
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         yepnope({load:['js/buzz.js'], complete: init}); function init(){
                  audio01 = new buzz.sound("sounds/Sliding", {formats: ["mp3"]});
                  audio02 = new buzz.sound("sounds/Next_Previous_mainButtons_ref", {formats: ["mp3"]});
                  audio03 = new buzz.sound("sounds/Index", {formats: ["mp3"]});
                  audio04 = new buzz.sound("sounds/Graph_Zoom", {formats: ["mp3"]});
                  audio05 = new buzz.sound("sounds/empty-bullet-shell-fall-02", {formats: ["mp3"]});
                  audio06 = new buzz.sound("sounds/gun-gunshot", {formats: ["mp3"]});
         
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${prevBtn}", "click", function(sym, e) {
         audio02.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Slide_00'
   (function(symbolName) {   
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         audio05.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         audio05.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         audio05.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         audio06.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         audio06.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         audio06.play(0);

      });
      //Edge binding end

   })("Slide_00");
   //Edge symbol end:'Slide_00'

   //=========================================================
   
   //Edge symbol: 'Slide_01'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${play_ref}", "click", function(sym, e) {
         sym.$("S1_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_Zoom}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S1_Zoom").slideToggle("");
         
         audio04.play(0);

      });
      //Edge binding end
      
      

   })("Slide_01");
   //Edge symbol end:'Slide_01'

   //=========================================================
   
   //Edge symbol: 'Slide_02'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S2_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_ref}", "click", function(sym, e) {
         sym.$("S2_re").slideToggle("");
         audio02.play(0);
         
         
         

      });
      //Edge binding end
      
      

   })("Slide_02");
   //Edge symbol end:'Slide_02'

   //=========================================================
   
   //Edge symbol: 'Slide_03'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S3_Zoom").slideToggle("");
      audio04.play(0);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S3_re").slideToggle("");
      audio02.play(0);
      
      });
      //Edge binding end
      
      

   })("Slide_03");
   //Edge symbol end:'Slide_03'

   //=========================================================
   
   //Edge symbol: 'Slide_04'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy4}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S4_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy4}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S4_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_04");
   //Edge symbol end:'Slide_04'

   //=========================================================
   
   //Edge symbol: 'Slide_05'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy5}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S5_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy5}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S5_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_05");
   //Edge symbol end:'Slide_05'

   //=========================================================
   
   //Edge symbol: 'Slide_06'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy6}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S6_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy7}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S6_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_06");
   //Edge symbol end:'Slide_06'

   //=========================================================
   
   //Edge symbol: 'Slide_07'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy6}", "click", function(sym, e) {
         sym.$("S7_re").slideToggle("");
          audio02.play(0);
         
         

      });
      //Edge binding end
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy7}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S7_Zoom").slideToggle("");
          audio04.play(0);
         

      });
      //Edge binding end
      
      

   })("Slide_07");
   //Edge symbol end:'Slide_07'

   //=========================================================
   
   //Edge symbol: 'Slide_08'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy8}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S8_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy8}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S8_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_08");
   //Edge symbol end:'Slide_08'

   //=========================================================
   
   //Edge symbol: 'Slide_09'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy9}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S9_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy9}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S9_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_09");
   //Edge symbol end:'Slide_09'

   //=========================================================
   
   //Edge symbol: 'Slide_10'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy10}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S10_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy11}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S10_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_10");
   //Edge symbol end:'Slide_10'

   //=========================================================
   
   //Edge symbol: 'Slide_11'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy11}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S11_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy12}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S11_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_11");
   //Edge symbol end:'Slide_11'

   //=========================================================
   
   //Edge symbol: 'Slide_12'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy12}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S12_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy13}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S12_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
      
      });
      //Edge binding end
      
      

   })("Slide_12");
   //Edge symbol end:'Slide_12'

   //=========================================================
   
   //Edge symbol: 'Slide_13'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy13}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S13_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy14}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S13_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_13");
   //Edge symbol end:'Slide_13'

   //=========================================================
   
   //Edge symbol: 'Slide_14'
   (function(symbolName) {   
      
      

   })("Slide_14");
   //Edge symbol end:'Slide_14'

   //=========================================================
   
   //Edge symbol: 'Slide_15'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy15}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S15_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy15}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S15_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_15");
   //Edge symbol end:'Slide_15'

   //=========================================================
   
   //Edge symbol: 'Slide_16'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy16}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S16_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy16}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S16_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_16");
   //Edge symbol end:'Slide_16'

   //=========================================================
   
   //Edge symbol: 'Slide_17'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy17}", "click", function(sym, e) {
         sym.$("S17_re").slideToggle("");
          audio02.play(0);
      
      
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy17}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S17_lens").slideToggle("");
      audio04.play(0);
      
      });
      //Edge binding end
      
      

   })("Slide_17");
   //Edge symbol end:'Slide_17'

   //=========================================================
   
   //Edge symbol: 'Slide_18'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy18}", "click", function(sym, e) {
      
         sym.$("S18_re").slideToggle("");
          audio02.play(0);
      
      
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy18}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S18_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_18");
   //Edge symbol end:'Slide_18'

   //=========================================================
   
   //Edge symbol: 'Slide_19'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy19}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S19_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy19}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S19_re").slideToggle("");
      
      
      });
      //Edge binding end
      
      

   })("Slide_19");
   //Edge symbol end:'Slide_19'

   //=========================================================
   
   //Edge symbol: 'Slide_20'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy20}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S20_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy20}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S20_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_20");
   //Edge symbol end:'Slide_20'

   //=========================================================
   
   //Edge symbol: 'Slide_21'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy21}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S21_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy21}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S21_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_21");
   //Edge symbol end:'Slide_21'

   //=========================================================
   
   //Edge symbol: 'Slide_22'
   (function(symbolName) {   
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy28}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S22_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy22}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S22_re").slideToggle("");
          audio02.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_22");
   //Edge symbol end:'Slide_22'

   //=========================================================
   
   //Edge symbol: 'Slide_23'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${play_reCopy23}", "click", function(sym, e) {
         sym.$("S23_re").slideToggle("");
          audio02.play(0);
         
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy23}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S23_Zoom").slideToggle("");
          audio04.play(0);
      
      
      });
      //Edge binding end
      
      

   })("Slide_23");
   //Edge symbol end:'Slide_23'

   //=========================================================
   
   //Edge symbol: 'Slide_24'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy24}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S24_Zoom").slideToggle("");
          audio04.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${play_reCopy24}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S24_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

      

   })("Slide_24");
   //Edge symbol end:'Slide_24'

   //=========================================================
   
   //Edge symbol: 'Slide_25'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy25}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S25_lens").slideToggle("");
          audio04.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${play_reCopy25}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S25_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

      

   })("Slide_25");
   //Edge symbol end:'Slide_25'

   //=========================================================
   
   //Edge symbol: 'Slide_26'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${play_ZoomCopy26}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S26_Zoom").slideToggle("");
          audio04.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${play_reCopy26}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("S26_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

      

   })("Slide_26");
   //Edge symbol end:'Slide_26'

   //=========================================================
   
   //Edge symbol: 'Slide_27'
   (function(symbolName) {   
   
      

   })("Slide_27");
   //Edge symbol end:'Slide_27'

   //=========================================================
   
   //Edge symbol: 'Slide_28'
   (function(symbolName) {   
   
      

   })("Slide_28");
   //Edge symbol end:'Slide_28'

   //=========================================================
   
   //Edge symbol: 'Slide_29'
   (function(symbolName) {   
   
      

   })("Slide_29");
   //Edge symbol end:'Slide_29'

   //=========================================================
   
   //Edge symbol: 'Slide_30'
   (function(symbolName) {   
   
      

   })("Slide_30");
   //Edge symbol end:'Slide_30'

   //=========================================================
   
   //Edge symbol: 'S_re'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${S1_re}", "click", function(sym, e) {
         audio02.play(0);
         sym.getParentSymbol().$("S1_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lens}", "click", function(sym, e) {
         audio02.play(0);
         sym.getParentSymbol().$("S1_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

   })("S_re");
   //Edge symbol end:'S_re'

   //=========================================================
   
   //Edge symbol: 'S2_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S2_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S2_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lens}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S2_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

   })("S2_re");
   //Edge symbol end:'S2_re'

   //=========================================================
   
   //Edge symbol: 'S3_re'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${lensCopy}", "click", function(sym, e) {
         sym.getParentSymbol().$("S3_re").slideToggle("");
          audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S3_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S3_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S3_re");
   //Edge symbol end:'S3_re'

   //=========================================================
   
   //Edge symbol: 'S4_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S4_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S4_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S4_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S4_re");
   //Edge symbol end:'S4_re'

   //=========================================================
   
   //Edge symbol: 'S5_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S5_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S5_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S5_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S5_re");
   //Edge symbol end:'S5_re'

   //=========================================================
   
   //Edge symbol: 'S7_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S7_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S7_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy4}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S7_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S7_re");
   //Edge symbol end:'S7_re'

   //=========================================================
   
   //Edge symbol: 'S6_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S6_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S6_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy5}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S6_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S6_re");
   //Edge symbol end:'S6_re'

   //=========================================================
   
   //Edge symbol: 'S8_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S8_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S8_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy6}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S8_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S8_re");
   //Edge symbol end:'S8_re'

   //=========================================================
   
   //Edge symbol: 'S9_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S9_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S9_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy7}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S9_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S9_re");
   //Edge symbol end:'S9_re'

   //=========================================================
   
   //Edge symbol: 'S10_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S10_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S10_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy8}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S10_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S10_re");
   //Edge symbol end:'S10_re'

   //=========================================================
   
   //Edge symbol: 'S11_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S11_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S11_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy9}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S11_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S11_re");
   //Edge symbol end:'S11_re'

   //=========================================================
   
   //Edge symbol: 'S12_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S12_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S12_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy10}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S12_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S12_re");
   //Edge symbol end:'S12_re'

   //=========================================================
   
   //Edge symbol: 'S13_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S13_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S13_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy11}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S13_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S13_re");
   //Edge symbol end:'S13_re'

   //=========================================================
   
   //Edge symbol: 'S15_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S15_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S15_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy12}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S15_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S15_re");
   //Edge symbol end:'S15_re'

   //=========================================================
   
   //Edge symbol: 'S16_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S16_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S16_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy13}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S16_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S16_re");
   //Edge symbol end:'S16_re'

   //=========================================================
   
   //Edge symbol: 'S17_re'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${S17_re}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S17_re").slideToggle("");
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy14}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S17_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

   })("S17_re");
   //Edge symbol end:'S17_re'

   //=========================================================
   
   //Edge symbol: 'S18_re'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${S18_re}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S18_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy16}", "click", function(sym, e) {
         
         sym.getParentSymbol().$("S18_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

   })("S18_re");
   //Edge symbol end:'S18_re'

   //=========================================================
   
   //Edge symbol: 'S19_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S19_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S19_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy17}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S19_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

   })("S19_re");
   //Edge symbol end:'S19_re'

   //=========================================================
   
   //Edge symbol: 'S20_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S20_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S20_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy18}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S20_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

   })("S20_re");
   //Edge symbol end:'S20_re'

   //=========================================================
   
   //Edge symbol: 'S21_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S21_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S21_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy19}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S21_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

   })("S21_re");
   //Edge symbol end:'S21_re'

   //=========================================================
   
   //Edge symbol: 'S22_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S22_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S22_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy20}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S22_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S22_re");
   //Edge symbol end:'S22_re'

   //=========================================================
   
   //Edge symbol: 'S23_re'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${S23_re}", "click", function(sym, e) {
         sym.getParentSymbol().$("S23_re").slideToggle("");
          audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy21}", "click", function(sym, e) {
         sym.getParentSymbol().$("S23_re").slideToggle("");
          audio02.play(0);
         
         

      });
      //Edge binding end

   })("S23_re");
   //Edge symbol end:'S23_re'

   //=========================================================
   
   //Edge symbol: 'S24_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S24_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S24_re").slideToggle("");
          audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy22}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S24_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S24_re");
   //Edge symbol end:'S24_re'

   //=========================================================
   
   //Edge symbol: 'S25_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S25_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S25_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy23}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S25_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S25_re");
   //Edge symbol end:'S25_re'

   //=========================================================
   
   //Edge symbol: 'S26_re'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${S26_re}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S26_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lensCopy24}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S26_re").slideToggle("");
         audio02.play(0);

      });
      //Edge binding end

   })("S26_re");
   //Edge symbol end:'S26_re'

   //=========================================================
   
   //Edge symbol: 'G1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${S1_04}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text2}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         
         

      });
      //Edge binding end

   })("G1");
   //Edge symbol end:'G1'

   //=========================================================
   
   //Edge symbol: 'G2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group2}", "dblclick", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text3}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         
         

      });
      //Edge binding end

   })("G2");
   //Edge symbol end:'G2'

   //=========================================================
   
   //Edge symbol: 'G3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text4}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group3}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
        audio02.play(0); 
         
         

      });
      //Edge binding end

   })("G3");
   //Edge symbol end:'G3'

   //=========================================================
   
   //Edge symbol: 'G4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group4}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text5}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         
         

      });
      //Edge binding end

   })("G4");
   //Edge symbol end:'G4'

   //=========================================================
   
   //Edge symbol: 'G5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group5}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text6}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

   })("G5");
   //Edge symbol end:'G5'

   //=========================================================
   
   //Edge symbol: 'G7'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group6}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         

      });
      //Edge binding end

   })("G7");
   //Edge symbol end:'G7'

   //=========================================================
   
   //Edge symbol: 'G6'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text8}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group7}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         

      });
      //Edge binding end

   })("G6");
   //Edge symbol end:'G6'

   //=========================================================
   
   //Edge symbol: 'G8'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group8}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text9}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

   })("G8");
   //Edge symbol end:'G8'

   //=========================================================
   
   //Edge symbol: 'G9'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group9}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text10}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

   })("G9");
   //Edge symbol end:'G9'

   //=========================================================
   
   //Edge symbol: 'G10'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group11}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text11}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

   })("G10");
   //Edge symbol end:'G10'

   //=========================================================
   
   //Edge symbol: 'G11'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group12}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text12}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

   })("G11");
   //Edge symbol end:'G11'

   //=========================================================
   
   //Edge symbol: 'G12'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group13}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text13}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

   })("G12");
   //Edge symbol end:'G12'

   //=========================================================
   
   //Edge symbol: 'G13'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group14}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text14}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         
         

      });
      //Edge binding end

   })("G13");
   //Edge symbol end:'G13'

   //=========================================================
   
   //Edge symbol: 'G15'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group15}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         
         audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text15}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
        audio02.play(0); 
         
         

      });
      //Edge binding end

   })("G15");
   //Edge symbol end:'G15'

   //=========================================================
   
   //Edge symbol: 'G16'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group16}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text16}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         
        audio02.play(0); 
         

      });
      //Edge binding end

   })("G16");
   //Edge symbol end:'G16'

   //=========================================================
   
   //Edge symbol: 'G18'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group17}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         
         audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text18}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
       audio02.play(0);  
         
         

      });
      //Edge binding end

   })("G18");
   //Edge symbol end:'G18'

   //=========================================================
   
   //Edge symbol: 'G19'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group18}", "click", function(sym, e) {
         // insert code for mouse click here
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text20}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         
        audio02.play(0); 
         

      });
      //Edge binding end

   })("G19");
   //Edge symbol end:'G19'

   //=========================================================
   
   //Edge symbol: 'G20'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group19}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text21}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
        audio02.play(0); 
         
         

      });
      //Edge binding end

   })("G20");
   //Edge symbol end:'G20'

   //=========================================================
   
   //Edge symbol: 'G21'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group20}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
        audio02.play(0); 
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text22}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         
         audio02.play(0);
         

      });
      //Edge binding end

   })("G21");
   //Edge symbol end:'G21'

   //=========================================================
   
   //Edge symbol: 'G22'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group21}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         audio02.play(0);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text23}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
        audio02.play(0); 
         
         

      });
      //Edge binding end

   })("G22");
   //Edge symbol end:'G22'

   //=========================================================
   
   //Edge symbol: 'G23'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group22}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text24}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

   })("G23");
   //Edge symbol end:'G23'

   //=========================================================
   
   //Edge symbol: 'G24'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group23}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text25}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
        audio02.play(0); 
         
         

      });
      //Edge binding end

   })("G24");
   //Edge symbol end:'G24'

   //=========================================================
   
   //Edge symbol: 'G26'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${Text26}", "click", function(sym, e) {
         if        (sym.getPosition()<=0){sym.play();}
         else if   (sym.getPosition()>0){sym.playReverse();}
         
         audio02.play(0);
         
         

      });
      //Edge binding end

   })("G26");
   //Edge symbol end:'G26'

   //=========================================================
   
   //Edge symbol: 'S1_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S1_Zoom").slideToggle("");
         
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S1_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S1_Zoom").slideToggle("");
         
         audio04.play(0);

      });
      //Edge binding end

   })("S1_Zoom");
   //Edge symbol end:'S1_Zoom'

   //=========================================================
   
   //Edge symbol: 'S2_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${S2_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S2_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S2_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

   })("S2_Zoom");
   //Edge symbol end:'S2_Zoom'

   //=========================================================
   
   //Edge symbol: 'S3_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text4}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S3_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S3_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S3_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

   })("S3_Zoom");
   //Edge symbol end:'S3_Zoom'

   //=========================================================
   
   //Edge symbol: 'S4_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text5}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S4_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S4_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S4_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S4_Zoom");
   //Edge symbol end:'S4_Zoom'

   //=========================================================
   
   //Edge symbol: 'S5_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text6}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S5_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S5_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S5_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S5_Zoom");
   //Edge symbol end:'S5_Zoom'

   //=========================================================
   
   //Edge symbol: 'S6_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S6_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S6_G}", "click", function(sym, e) {
         sym.getParentSymbol().$("S6_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S6_Zoom");
   //Edge symbol end:'S6_Zoom'

   //=========================================================
   
   //Edge symbol: 'S8_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S8_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S8_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S8_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S8_Zoom");
   //Edge symbol end:'S8_Zoom'

   //=========================================================
   
   //Edge symbol: 'S7_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S7_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S7_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S7_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

   })("S7_Zoom");
   //Edge symbol end:'S7_Zoom'

   //=========================================================
   
   //Edge symbol: 'S9_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy4}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S9_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S9_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S9_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S9_Zoom");
   //Edge symbol end:'S9_Zoom'

   //=========================================================
   
   //Edge symbol: 'S10_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy5}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S10_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S10_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S10_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S10_Zoom");
   //Edge symbol end:'S10_Zoom'

   //=========================================================
   
   //Edge symbol: 'S11_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy6}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S11_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S11_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S11_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S11_Zoom");
   //Edge symbol end:'S11_Zoom'

   //=========================================================
   
   //Edge symbol: 'S12_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy7}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S12_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S12_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S12_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S12_Zoom");
   //Edge symbol end:'S12_Zoom'

   //=========================================================
   
   //Edge symbol: 'S13_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy8}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S13_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S13_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S13_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S13_Zoom");
   //Edge symbol end:'S13_Zoom'

   //=========================================================
   
   //Edge symbol: 'S15_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy9}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S15_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S15_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S15_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S15_Zoom");
   //Edge symbol end:'S15_Zoom'

   //=========================================================
   
   //Edge symbol: 'S16_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy10}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S16_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S16_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S16_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S16_Zoom");
   //Edge symbol end:'S16_Zoom'

   //=========================================================
   
   //Edge symbol: 'S17_lens'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy11}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S17_lens").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S17_lENS}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S17_lens").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S17_lens");
   //Edge symbol end:'S17_lens'

   //=========================================================
   
   //Edge symbol: 'S18_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy12}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S18_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S18_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S18_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S18_Zoom");
   //Edge symbol end:'S18_Zoom'

   //=========================================================
   
   //Edge symbol: 'S19_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy13}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S19_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S19_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S19_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S19_Zoom");
   //Edge symbol end:'S19_Zoom'

   //=========================================================
   
   //Edge symbol: 'S20_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy14}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S20_Zoom").slideToggle("");
          audio04.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S20_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S20_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S20_Zoom");
   //Edge symbol end:'S20_Zoom'

   //=========================================================
   
   //Edge symbol: 'S21_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy15}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S21_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S21_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S21_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S21_Zoom");
   //Edge symbol end:'S21_Zoom'

   //=========================================================
   
   //Edge symbol: 'S22_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy16}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S22_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S22_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S22_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S22_Zoom");
   //Edge symbol end:'S22_Zoom'

   //=========================================================
   
   //Edge symbol: 'S23_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy17}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S23_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S23_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S23_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S23_Zoom");
   //Edge symbol end:'S23_Zoom'

   //=========================================================
   
   //Edge symbol: 'S24_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy18}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S24_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S24_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S24_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S24_Zoom");
   //Edge symbol end:'S24_Zoom'

   //=========================================================
   
   //Edge symbol: 'S25_lens'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy19}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S25_lens").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S25_LENS}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S25_lens").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S25_lens");
   //Edge symbol end:'S25_lens'

   //=========================================================
   
   //Edge symbol: 'S26_Zoom'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7Copy20}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S26_Zoom").slideToggle("");
         audio04.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S26_G}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getParentSymbol().$("S26_Zoom").slideToggle("");
          audio04.play(0);

      });
      //Edge binding end

   })("S26_Zoom");
   //Edge symbol end:'S26_Zoom'

   //=========================================================
   
   //Edge symbol: 'index'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${closeBtn}", "click", function(sym, e) {
         audio03.play(0);

      });
      //Edge binding end

   })("index");
   //Edge symbol end:'index'

   //=========================================================
   
   //Edge symbol: 'IndexItemSymbol'
   (function(symbolName) {   
   
   })("IndexItemSymbol");
   //Edge symbol end:'IndexItemSymbol'

   //=========================================================
   
   //Edge symbol: 'Sections_Bar'
   (function(symbolName) {   
   
      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_Btn_01}", "click", function(sym, e) {
         sym.stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_sub_01_Btn1}", "click", function(sym, e) {
         sym.stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_sub_01_Btn1_1}", "click", function(sym, e) {
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_sub_01_Btn2}", "click", function(sym, e) {
         sym.stop(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_sub_01_Btn2_1}", "click", function(sym, e) {
         sym.stop(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_sub_01_Btn2_2}", "click", function(sym, e) {
         sym.stop(1250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_Btn_02}", "click", function(sym, e) {
         sym.stop(1500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_sub_02_Btn1}", "click", function(sym, e) {
         sym.stop(1500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_sub_02_Btn2}", "click", function(sym, e) {
         sym.stop(1750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_Btn_03}", "click", function(sym, e) {
         sym.stop(2000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_sub_03_Btn1}", "click", function(sym, e) {
         sym.stop(2000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_01_sub_03_Btn2}", "click", function(sym, e) {
         sym.stop(2250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M1}", "click", function(sym, e) {
         sym.stop(250);
         sym.$("M1Copy2").show();
         sym.$("M2").show();
         sym.$("M3").show();
         sym.$("M4").show();
         sym.$("M5").show();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M3}", "click", function(sym, e) {
         sym.stop(750);
         sym.$("M1Copy2").show();
         sym.$("M2").show();
         sym.$("M3").show();
         sym.$("M4").show();
         sym.$("M5").show();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M2}", "click", function(sym, e) {
         sym.stop(500);
         sym.$("M1Copy2").show();
         sym.$("M2").show();
         sym.$("M3").show();
         sym.$("M4").show();
         sym.$("M5").show();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M4}", "click", function(sym, e) {
         sym.stop(1000);
         sym.$("M1Copy2").show();
         sym.$("M2").show();
         sym.$("M3").show();
         sym.$("M4").show();
         sym.$("M5").show();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M5}", "click", function(sym, e) {
         sym.stop(1250);
         sym.$("M1Copy2").show();
         sym.$("M2").show();
         sym.$("M3").show();
         sym.$("M4").show();
         sym.$("M5").show();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M6}", "click", function(sym, e) {
         sym.stop(1500);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").show();
         sym.$("M7").show();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M7}", "click", function(sym, e) {
         sym.stop(1750);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").show();
         sym.$("M7").show();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M8}", "click", function(sym, e) {
         sym.stop(2000);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").show();
         sym.$("M9").show();
         sym.$("M10").show();
         sym.$("M11").show();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M9}", "click", function(sym, e) {
         sym.stop(2250);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").show();
         sym.$("M9").show();
         sym.$("M10").show();
         sym.$("M11").show();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M10}", "click", function(sym, e) {
         sym.stop(2500);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").show();
         sym.$("M9").show();
         sym.$("M10").show();
         sym.$("M11").show();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M11}", "click", function(sym, e) {
         sym.stop(2750);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").show();
         sym.$("M9").show();
         sym.$("M10").show();
         sym.$("M11").show();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M12}", "click", function(sym, e) {
         sym.stop(3000);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").show();
         sym.$("M13").show();
         sym.$("M14").show();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M13}", "click", function(sym, e) {
         sym.stop(3250);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").show();
         sym.$("M13").show();
         sym.$("M14").show();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M14}", "click", function(sym, e) {
         sym.stop(3500);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").show();
         sym.$("M13").show();
         sym.$("M14").show();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M15}", "click", function(sym, e) {
         sym.stop(3750);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").show();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M16}", "click", function(sym, e) {
         sym.stop(4000);
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M17}", "click", function(sym, e) {
         sym.stop(4250);
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M18}", "click", function(sym, e) {
         sym.stop(4500);
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M19}", "click", function(sym, e) {
         sym.stop(4750);
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M1Copy2}", "click", function(sym, e) {
         sym.stop(250);
         sym.$("M1Copy2").show();
         sym.$("M2").show();
         sym.$("M3").show();
         sym.$("M4").show();
         sym.$("M5").show();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M6Copy2}", "click", function(sym, e) {
         sym.stop(1500);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").show();
         sym.$("M7").show();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M8Copy2}", "click", function(sym, e) {
         sym.stop(2000);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").show();
         sym.$("M9").show();
         sym.$("M10").show();
         sym.$("M11").show();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M12Copy2}", "click", function(sym, e) {
         sym.stop(3000);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").show();
         sym.$("M13").show();
         sym.$("M14").show();
         sym.$("M15Copy2").hide();
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${M15Copy2}", "click", function(sym, e) {
         sym.stop(3750);
         sym.$("M1Copy2").hide();
         sym.$("M2").hide();
         sym.$("M3").hide();
         sym.$("M4").hide();
         sym.$("M5").hide();
         sym.$("M6Copy2").hide();
         sym.$("M7").hide();
         sym.$("M8Copy2").hide();
         sym.$("M9").hide();
         sym.$("M10").hide();
         sym.$("M11").hide();
         sym.$("M12Copy2").hide();
         sym.$("M13").hide();
         sym.$("M14").hide();
         sym.$("M15").show();
         
         audio02.play(0);

      });
      //Edge binding end

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${sec02}", "click", function(sym, e) {
         sym.$("sec02").animate({opacity:1});
         sym.$("sec18").animate({opacity:0});
         sym.$("sec24").animate({opacity:0});
         sym.$("sec27").animate({opacity:0});
         sym.$("sec28").animate({opacity:0});
         sym.$("sec29").animate({opacity:0});
         sym.$("sec30").animate({opacity:0});
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sec30}", "click", function(sym, e) {
         sym.$("sec02").animate({opacity:0});
         sym.$("sec18").animate({opacity:0});
         sym.$("sec24").animate({opacity:0});
         sym.$("sec27").animate({opacity:0});
         sym.$("sec28").animate({opacity:0});
         sym.$("sec29").animate({opacity:0});
         sym.$("sec30").animate({opacity:1});
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sec29}", "click", function(sym, e) {
         sym.$("sec02").animate({opacity:0});
         sym.$("sec18").animate({opacity:0});
         sym.$("sec24").animate({opacity:0});
         sym.$("sec27").animate({opacity:0});
         sym.$("sec28").animate({opacity:0});
         sym.$("sec29").animate({opacity:1});
         sym.$("sec30").animate({opacity:0});
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sec28}", "click", function(sym, e) {
         sym.$("sec02").animate({opacity:0});
         sym.$("sec18").animate({opacity:0});
         sym.$("sec24").animate({opacity:0});
         sym.$("sec27").animate({opacity:0});
         sym.$("sec28").animate({opacity:1});
         sym.$("sec29").animate({opacity:0});
         sym.$("sec30").animate({opacity:0});
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sec27}", "click", function(sym, e) {
         sym.$("sec02").animate({opacity:0});
         sym.$("sec18").animate({opacity:0});
         sym.$("sec24").animate({opacity:0});
         sym.$("sec27").animate({opacity:1});
         sym.$("sec28").animate({opacity:0});
         sym.$("sec29").animate({opacity:0});
         sym.$("sec30").animate({opacity:0});
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sec24}", "click", function(sym, e) {
         sym.$("sec02").animate({opacity:0});
         sym.$("sec18").animate({opacity:0});
         sym.$("sec24").animate({opacity:1});
         sym.$("sec27").animate({opacity:0});
         sym.$("sec28").animate({opacity:0});
         sym.$("sec29").animate({opacity:0});
         sym.$("sec30").animate({opacity:0});
         
         audio02.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sec18}", "click", function(sym, e) {
         sym.$("sec02").animate({opacity:0});
         sym.$("sec18").animate({opacity:1});
         sym.$("sec24").animate({opacity:0});
         sym.$("sec27").animate({opacity:0});
         sym.$("sec28").animate({opacity:0});
         sym.$("sec29").animate({opacity:0});
         sym.$("sec30").animate({opacity:0});
         
         audio02.play(0);

      });
      //Edge binding end

   })("Sections_Bar");
   //Edge symbol end:'Sections_Bar'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1824918922");