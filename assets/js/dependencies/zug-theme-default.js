function UGTheme_default(){function e(e,t){P=e,R=jQuery.extend(R,z),R=jQuery.extend(R,t),R=jQuery.extend(R,j),n(),P.setOptions(R),1==R.theme_load_panel&&(w=new UGStripPanel).init(e,R),1==R.theme_load_slider&&P.initSlider(R),x=e.getObjects(),v=jQuery(e),E=x.g_objWrapper,1==R.theme_load_slider&&(T=x.g_objSlider),1==R.theme_enable_text_panel&&(I=new UGTextPanel).init(P,R,"slider")}function t(){l(),i(),b()}function n(){var e={slider_textpanel_css_title:{},slider_textpanel_css_description:{}};switch(R=jQuery.extend(e,R),R.slider_textpanel_css_title["text-align"]=R.theme_text_align,R.slider_textpanel_css_description["text-align"]=R.theme_text_align,R.theme_text_type){case"title":R.slider_textpanel_enable_title=!0,R.slider_textpanel_enable_description=!1;break;case"both":R.slider_textpanel_enable_title=!0,R.slider_textpanel_enable_description=!0;break;default:case"description":}}function l(){E.addClass("ug-theme-default");var e="";e+="<div class='ug-theme-panel'>";var t="ug-default-button-fullscreen",n="ug-default-button-play",l=".ug-default-button-fullscreen",i=".ug-default-button-play";I||(t="ug-default-button-fullscreen-single",n="ug-default-button-play-single",l=".ug-default-button-fullscreen-single",i=".ug-default-button-play-single"),1==R.theme_enable_fullscreen_button&&(e+="<div class='"+t+"'></div>"),1==R.theme_enable_play_button&&(e+="<div class='"+n+"'></div>"),R.theme_enable_hidepanel_button&&(e+="<div class='ug-default-button-hidepanel'><div class='ug-default-button-hidepanel-bg'></div> <div class='ug-default-button-hidepanel-tip'></div></div>"),e+="</div>",E.append(e),O=E.children(".ug-theme-panel"),1==R.theme_enable_fullscreen_button&&(y=O.children(l)),1==R.theme_enable_play_button&&(S=O.children(i)),1==R.theme_enable_hidepanel_button&&(H=O.children(".ug-default-button-hidepanel")),w.setHtml(O),I&&I.appendHTML(O),T&&T.setHtml()}function i(){R.theme_load_panel&&(a(),d()),T&&(_(),T.run())}function a(){var e=P.getSize().width;w.setOrientation("bottom"),w.setWidth(e),w.run();var t=w.getSize().height;if(I){if(t+=j.slider_textpanel_height,H){var n=H.outerHeight();t+=n}}else{var l=0;H&&(l=Math.max(H.outerHeight(),l)),y&&(l=Math.max(y.outerHeight(),l)),S&&(l=Math.max(S.outerHeight(),l)),t+=l}C.setElementSize(O,e,t);var i=w.getElement();if(C.placeElement(i,"left","bottom"),H){var a=H.children(".ug-default-button-hidepanel-tip");if(C.placeElement(a,"center","middle"),I){var d=H.children(".ug-default-button-hidepanel-bg"),_=I.getOption("textpanel_bg_opacity");d.fadeTo(0,_);var o=I.getOption("textpanel_bg_color");d.css({"background-color":o})}}var r=0,u=0;if(H&&(u=n),y&&(C.placeElement(y,"right","top",0,u),r=y.outerWidth()),S){var s=u;I||s++,C.placeElement(S,"right","top",r,s),r+=S.outerWidth()}if(I){var p={};p.slider_textpanel_padding_right=R.theme_text_padding_right+r,p.slider_textpanel_padding_left=R.theme_text_padding_left,H&&(p.slider_textpanel_margin=n),I.setOptions(p),I.positionPanel(),I.run()}if(H)if(I)C.placeElement(H,"left","top");else{var h=i.outerHeight();C.placeElement(H,"left","bottom",0,h)}}function d(){if(A.isPanelHidden||1==o()){var e=h();C.placeElement(O,0,e),A.isPanelHidden=!0}else C.placeElement(O,0,"bottom")}function _(){var e=P.getHeight(),t=e;w&&0==s()&&(t=e-w.getSize().height);var n=P.getWidth();T.setSize(n,t),T.setPosition(0,0)}function o(){return!!R.theme_hide_panel_under_width&&jQuery(window).width()<=R.theme_hide_panel_under_width}function r(){if(!R.theme_hide_panel_under_width)return!1;1==o()?c(!0):g(!0)}function u(){i(),r()}function s(){return A.isPanelHidden}function p(e,t){var n={top:e+"px"};O.stop(!0).animate(n,{duration:300,easing:"easeInOutQuad",queue:!1,complete:function(){t&&t()}})}function h(){var e=E.height();return H&&(e-=C.getElementSize(H).bottom),e}function c(e){if(!e)var e=!1;if(1==s())return!1;var t=h();1==e?C.placeElement(O,0,t):p(t,_),H&&H.addClass("ug-button-hidden-mode"),A.isPanelHidden=!0}function g(e){if(!e)var e=!1;if(0==s())return!1;var t=E.height()-O.outerHeight();1==e?C.placeElement(O,0,t):p(t,_),H&&H.removeClass("ug-button-hidden-mode"),A.isPanelHidden=!1}function f(e){if(e.stopPropagation(),e.stopImmediatePropagation(),0==C.validateClickTouchstartEvent(e.type))return!0;1==s()?g():c()}function m(){P.showDisabledOverlay()}function b(){v.on(P.events.SIZE_CHANGE,u),v.on(P.events.GALLERY_BEFORE_REQUEST_ITEMS,m),S&&(C.addClassOnHover(S,"ug-button-hover"),P.setPlayButton(S)),y&&(C.addClassOnHover(y,"ug-button-hover"),P.setFullScreenToggleButton(y)),H&&(C.setButtonMobileReady(H),C.addClassOnHover(H,"ug-button-hover"),H.on("click touchstart",f)),v.on(P.events.SLIDER_ACTION_START,function(){O.css("z-index","1"),T.getElement().css("z-index","11")}),v.on(P.events.SLIDER_ACTION_END,function(){O.css("z-index","11"),T.getElement().css("z-index","1")})}var v,x,E,y,S,H,T,O,w,I,P=new UniteGalleryMain,C=new UGFunctions,R={theme_load_slider:!0,theme_load_panel:!0,theme_enable_fullscreen_button:!0,theme_enable_play_button:!0,theme_enable_hidepanel_button:!0,theme_enable_text_panel:!0,theme_text_padding_left:20,theme_text_padding_right:5,theme_text_align:"left",theme_text_type:"description",theme_hide_panel_under_width:480},z={slider_controls_always_on:!0,slider_zoompanel_align_vert:"top",slider_zoompanel_offset_vert:12,slider_textpanel_padding_top:0,slider_textpanel_enable_title:!1,slider_textpanel_enable_description:!0,slider_vertical_scroll_ondrag:!0,strippanel_background_color:"#232323",strippanel_padding_top:10},j={slider_enable_text_panel:!1,slider_enable_play_button:!1,slider_enable_fullscreen_button:!1,slider_enable_text_panel:!1,slider_textpanel_height:50,slider_textpanel_align:"top"},A={isPanelHidden:!1};this.destroy=function(){v.off(P.events.SIZE_CHANGE),v.off(P.events.GALLERY_BEFORE_REQUEST_ITEMS),S&&P.destroyPlayButton(S),y&&P.destroyFullscreenButton(y),H&&C.destroyButton(H),v.off(P.events.SLIDER_ACTION_START),v.off(P.events.SLIDER_ACTION_END),T&&T.destroy(),w&&w.destroy(),I&&I.destroy()},this.run=function(){t()},this.init=function(t,n){e(t,n)}}"undefined"!=typeof g_ugFunctions?g_ugFunctions.registerTheme("default"):jQuery(document).ready(function(){g_ugFunctions.registerTheme("default")});