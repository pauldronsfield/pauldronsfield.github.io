function UGTheme_tiles(){function e(e,n){g=e,T=jQuery.extend(T,E),T=jQuery.extend(T,n),t(),g.setOptions(T),g.setFreestyleMode(),d=e.getObjects(),u=jQuery(e),_=d.g_objWrapper,c.init(e,T),f.init(e,T),y=c.getObjTileDesign()}function t(){switch(1==T.theme_enable_preloader&&(v.showPreloader=!0),T.theme_appearance_order){default:case"normal":break;case"shuffle":g.shuffleItems();break;case"keep":T.tiles_keep_order=!0}}function n(){_.addClass("ug-theme-tiles"),_.append("<div class='ug-tiles-wrapper' style='position:relative'></div>"),1==v.showPreloader&&(_.append("<div class='ug-tiles-preloader ug-preloader-trans'></div>"),(h=_.children(".ug-tiles-preloader")).fadeTo(0,0)),p=_.children(".ug-tiles-wrapper"),T.theme_gallery_padding&&_.css({"padding-left":T.theme_gallery_padding+"px","padding-right":T.theme_gallery_padding+"px"}),c.setHtml(p),f.putHtml()}function i(){h&&(h.fadeTo(0,1),_.height(T.theme_preloading_height),m.placeElement(h,"center",T.theme_preloader_vertpos)),s(),c.run(),f.run()}function r(){n(),i()}function o(e,t){t=jQuery(t);var n=y.getItemByTile(t).index;f.open(n)}function a(){if(p.hide(),h){h.show();var e=m.getElementSize(h).bottom+30;_.height(e)}}function l(){null!==T.theme_auto_open&&(f.open(T.theme_auto_open),T.theme_auto_open=null)}function s(){h&&jQuery(c).on(c.events.TILES_FIRST_PLACED,function(){_.height("auto"),h.hide()}),jQuery(y).on(y.events.TILE_CLICK,o),u.on(g.events.GALLERY_BEFORE_REQUEST_ITEMS,a),jQuery(f).on(f.events.LIGHTBOX_INIT,l)}var u,d,_,h,p,g=new UniteGalleryMain,c=new UGTiles,f=new UGLightbox,m=new UGFunctions,y=new UGTileDesign,T={theme_enable_preloader:!0,theme_preloading_height:200,theme_preloader_vertpos:100,theme_gallery_padding:0,theme_appearance_order:"normal",theme_auto_open:null},E={gallery_width:"100%"},v={showPreloader:!1};this.destroy=function(){jQuery(y).off(y.events.TILE_CLICK),jQuery(c).off(c.events.TILES_FIRST_PLACED),u.off(g.events.GALLERY_BEFORE_REQUEST_ITEMS),jQuery(f).off(f.events.LIGHTBOX_INIT),c.destroy(),f.destroy()},this.run=function(){r()},this.init=function(t,n){e(t,n)}}"undefined"!=typeof g_ugFunctions?g_ugFunctions.registerTheme("tiles"):jQuery(document).ready(function(){g_ugFunctions.registerTheme("tiles")});