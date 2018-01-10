/*!
	Colorbox v1.4.26 - 2013-06-30
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=et+o),n&&(r.style.cssText=n),e(r)}function n(){return i.innerHeight?i.innerHeight:e(i).height()}function r(e){var t=E.length,i=(j+e)%t;return 0>i?t+i:i}function l(e,t){return Math.round((/%/.test(e)?("x"===t?H.width():n())/100:1)*parseInt(e,10))}function a(e,t){return e.photo||e.photoRegex.test(t)}function h(e,t){return e.retinaUrl&&i.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function s(e){"contains"in v[0]&&!v[0].contains(e.target)&&(e.stopPropagation(),v.focus())}function d(){var t,i=e.data(A,Z);null==i?(O=e.extend({},Y),console&&console.log&&console.log("Error: cboxElement missing settings object")):O=e.extend({},i);for(t in O)e.isFunction(O[t])&&"on"!==t.slice(0,2)&&(O[t]=O[t].call(A));O.rel=O.rel||A.rel||e(A).data("rel")||"nofollow",O.href=O.href||e(A).attr("href"),O.title=O.title||A.title,"string"==typeof O.href&&(O.href=e.trim(O.href))}function c(i,o){e(t).trigger(i),ht.trigger(i),e.isFunction(o)&&o.call(A)}function u(){var e,t,i,o,n,r=et+"Slideshow_",l="click."+et;O.slideshow&&E[1]?(t=function(){clearTimeout(e)},i=function(){(O.loop||E[j+1])&&(e=setTimeout(J.next,O.slideshowSpeed))},o=function(){R.html(O.slideshowStop).unbind(l).one(l,n),ht.bind(nt,i).bind(ot,t).bind(rt,n),v.removeClass(r+"off").addClass(r+"on")},n=function(){t(),ht.unbind(nt,i).unbind(ot,t).unbind(rt,n),R.html(O.slideshowStart).unbind(l).one(l,function(){J.next(),o()}),v.removeClass(r+"on").addClass(r+"off")},O.slideshowAuto?o():n()):v.removeClass(r+"off "+r+"on")}function p(i){G||(A=i,d(),E=e(A),j=0,"nofollow"!==O.rel&&(E=e("."+tt).filter(function(){var t,i=e.data(this,Z);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===O.rel}),j=E.index(A),-1===j&&(E=E.add(A),j=E.length-1)),g.css({opacity:parseFloat(O.opacity),cursor:O.overlayClose?"pointer":"auto",visibility:"visible"}).show(),V&&v.add(g).removeClass(V),O.className&&v.add(g).addClass(O.className),V=O.className,O.closeButton?P.html(O.close).appendTo(x):P.appendTo("<div/>"),$||($=q=!0,v.css({visibility:"hidden",display:"block"}),W=o(st,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(x),_=b.height()+k.height()+x.outerHeight(!0)-x.height(),D=T.width()+C.width()+x.outerWidth(!0)-x.width(),N=W.outerHeight(!0),z=W.outerWidth(!0),O.w=l(O.initialWidth,"x"),O.h=l(O.initialHeight,"y"),J.position(),u(),c(it,O.onOpen),B.add(S).hide(),v.focus(),O.trapFocus&&t.addEventListener&&(t.addEventListener("focus",s,!0),ht.one(lt,function(){t.removeEventListener("focus",s,!0)})),O.returnFocus&&ht.one(lt,function(){e(A).focus()})),w())}function f(){!v&&t.body&&(X=!1,H=e(i),v=o(st).attr({id:Z,"class":e.support.opacity===!1?et+"IE":"",role:"dialog",tabindex:"-1"}).hide(),g=o(st,"Overlay").hide(),L=e([o(st,"LoadingOverlay")[0],o(st,"LoadingGraphic")[0]]),y=o(st,"Wrapper"),x=o(st,"Content").append(S=o(st,"Title"),M=o(st,"Current"),K=e('<button type="button"/>').attr({id:et+"Previous"}),I=e('<button type="button"/>').attr({id:et+"Next"}),R=o("button","Slideshow"),L),P=e('<button type="button"/>').attr({id:et+"Close"}),y.append(o(st).append(o(st,"TopLeft"),b=o(st,"TopCenter"),o(st,"TopRight")),o(st,!1,"clear:left").append(T=o(st,"MiddleLeft"),x,C=o(st,"MiddleRight")),o(st,!1,"clear:left").append(o(st,"BottomLeft"),k=o(st,"BottomCenter"),o(st,"BottomRight"))).find("div div").css({"float":"left"}),F=o(st,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),B=I.add(K).add(M).add(R),e(t.body).append(g,v.append(y,F)))}function m(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),p(this))}return v?(X||(X=!0,I.click(function(){J.next()}),K.click(function(){J.prev()}),P.click(function(){J.close()}),g.click(function(){O.overlayClose&&J.close()}),e(t).bind("keydown."+et,function(e){var t=e.keyCode;$&&O.escKey&&27===t&&(e.preventDefault(),J.close()),$&&O.arrowKey&&E[1]&&!e.altKey&&(37===t?(e.preventDefault(),K.click()):39===t&&(e.preventDefault(),I.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+et,"."+tt,i):e("."+tt).live("click."+et,i)),!0):!1}function w(){var n,r,s,u=J.prep,p=++dt;q=!0,U=!1,A=E[j],d(),c(at),c(ot,O.onLoad),O.h=O.height?l(O.height,"y")-N-_:O.innerHeight&&l(O.innerHeight,"y"),O.w=O.width?l(O.width,"x")-z-D:O.innerWidth&&l(O.innerWidth,"x"),O.mw=O.w,O.mh=O.h,O.maxWidth&&(O.mw=l(O.maxWidth,"x")-z-D,O.mw=O.w&&O.w<O.mw?O.w:O.mw),O.maxHeight&&(O.mh=l(O.maxHeight,"y")-N-_,O.mh=O.h&&O.h<O.mh?O.h:O.mh),n=O.href,Q=setTimeout(function(){L.show()},100),O.inline?(s=o(st).hide().insertBefore(e(n)[0]),ht.one(at,function(){s.replaceWith(W.children())}),u(e(n))):O.iframe?u(" "):O.html?u(O.html):a(O,n)?(n=h(O,n),U=t.createElement("img"),e(U).addClass(et+"Photo").bind("error",function(){O.title=!1,u(o(st,"Error").html(O.imgError))}).one("load",function(){var t;p===dt&&(U.alt=e(A).attr("alt")||e(A).attr("data-alt")||"",O.retinaImage&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),O.scalePhotos&&(r=function(){U.height-=U.height*t,U.width-=U.width*t},O.mw&&U.width>O.mw&&(t=(U.width-O.mw)/U.width,r()),O.mh&&U.height>O.mh&&(t=(U.height-O.mh)/U.height,r())),O.h&&(U.style.marginTop=Math.max(O.mh-U.height,0)/2+"px"),E[1]&&(O.loop||E[j+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){u(U)},1))}),setTimeout(function(){U.src=n},1)):n&&F.load(n,O.data,function(t,i){p===dt&&u("error"===i?o(st,"Error").html(O.xhrError):e(this).contents())})}var g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,N,z,A,j,U,$,q,G,Q,J,V,X,Y={transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,trapFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0},Z="colorbox",et="cbox",tt=et+"Element",it=et+"_open",ot=et+"_load",nt=et+"_complete",rt=et+"_cleanup",lt=et+"_closed",at=et+"_purge",ht=e("<a/>"),st="div",dt=0,ct={};e.colorbox||(e(f),J=e.fn[Z]=e[Z]=function(t,i){var o=this;if(t=t||{},f(),m()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,Z,e.extend({},e.data(this,Z)||Y,t))}).addClass(tt),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&p(o[0])}return o},J.position=function(t,i){function o(){b[0].style.width=k[0].style.width=x[0].style.width=parseInt(v[0].style.width,10)-D+"px",x[0].style.height=T[0].style.height=C[0].style.height=parseInt(v[0].style.height,10)-_+"px"}var r,a,h,s=0,d=0,c=v.offset();if(H.unbind("resize."+et),v.css({top:-9e4,left:-9e4}),a=H.scrollTop(),h=H.scrollLeft(),O.fixed?(c.top-=a,c.left-=h,v.css({position:"fixed"})):(s=a,d=h,v.css({position:"absolute"})),d+=O.right!==!1?Math.max(H.width()-O.w-z-D-l(O.right,"x"),0):O.left!==!1?l(O.left,"x"):Math.round(Math.max(H.width()-O.w-z-D,0)/2),s+=O.bottom!==!1?Math.max(n()-O.h-N-_-l(O.bottom,"y"),0):O.top!==!1?l(O.top,"y"):Math.round(Math.max(n()-O.h-N-_,0)/2),v.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:O.w+z+D,height:O.h+N+_,top:s,left:d},t){var u=0;e.each(r,function(e){return r[e]!==ct[e]?(u=t,void 0):void 0}),t=u}ct=r,t||v.css(r),v.dequeue().animate(r,{duration:t||0,complete:function(){o(),q=!1,y[0].style.width=O.w+z+D+"px",y[0].style.height=O.h+N+_+"px",O.reposition&&setTimeout(function(){H.bind("resize."+et,J.position)},1),i&&i()},step:o})},J.resize=function(e){var t;$&&(e=e||{},e.width&&(O.w=l(e.width,"x")-z-D),e.innerWidth&&(O.w=l(e.innerWidth,"x")),W.css({width:O.w}),e.height&&(O.h=l(e.height,"y")-N-_),e.innerHeight&&(O.h=l(e.innerHeight,"y")),e.innerHeight||e.height||(t=W.scrollTop(),W.css({height:"auto"}),O.h=W.height()),W.css({height:O.h}),t&&W.scrollTop(t),J.position("none"===O.transition?0:O.speed))},J.prep=function(i){function n(){return O.w=O.w||W.width(),O.w=O.mw&&O.mw<O.w?O.mw:O.w,O.w}function l(){return O.h=O.h||W.height(),O.h=O.mh&&O.mh<O.h?O.mh:O.h,O.h}if($){var s,d="none"===O.transition?0:O.speed;W.empty().remove(),W=o(st,"LoadedContent").append(i),W.hide().appendTo(F.show()).css({width:n(),overflow:O.scrolling?"auto":"hidden"}).css({height:l()}).prependTo(x),F.hide(),e(U).css({"float":"none"}),s=function(){function i(){e.support.opacity===!1&&v[0].style.removeAttribute("filter")}var n,l,s=E.length,u="frameBorder",p="allowTransparency";$&&(l=function(){clearTimeout(Q),L.hide(),c(nt,O.onComplete)},S.html(O.title).add(W).show(),s>1?("string"==typeof O.current&&M.html(O.current.replace("{current}",j+1).replace("{total}",s)).show(),I[O.loop||s-1>j?"show":"hide"]().html(O.next),K[O.loop||j?"show":"hide"]().html(O.previous),O.slideshow&&R.show(),O.preloading&&e.each([r(-1),r(1)],function(){var i,o,n=E[this],r=e.data(n,Z);r&&r.href?(i=r.href,e.isFunction(i)&&(i=i.call(n))):i=e(n).attr("href"),i&&a(r,i)&&(i=h(r,i),o=t.createElement("img"),o.src=i)})):B.hide(),O.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),p in n&&(n[p]="true"),O.scrolling||(n.scrolling="no"),e(n).attr({src:O.href,name:(new Date).getTime(),"class":et+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",l).appendTo(W),ht.one(at,function(){n.src="//about:blank"}),O.fastIframe&&e(n).trigger("load")):l(),"fade"===O.transition?v.fadeTo(d,1,i):i())},"fade"===O.transition?v.fadeTo(d,0,function(){J.position(0,s)}):J.position(d,s)}},J.next=function(){!q&&E[1]&&(O.loop||E[j+1])&&(j=r(1),p(E[j]))},J.prev=function(){!q&&E[1]&&(O.loop||j)&&(j=r(-1),p(E[j]))},J.close=function(){$&&!G&&(G=!0,$=!1,c(rt,O.onCleanup),H.unbind("."+et),g.fadeTo(O.fadeOut||0,0),v.stop().fadeTo(O.fadeOut||0,0,function(){v.add(g).css({opacity:1,cursor:"auto"}).hide(),c(at),W.empty().remove(),setTimeout(function(){G=!1,c(lt,O.onClosed)},1)}))},J.remove=function(){v&&(v.stop(),e.colorbox.close(),v.stop().remove(),g.remove(),G=!1,v=null,e("."+tt).removeData(Z).removeClass(tt),e(t).unbind("click."+et))},J.element=function(){return e(A)},J.settings=Y)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
/**
 * @file
 * Some basic behaviors and utility functions for Views.
 */
(function ($) {

Drupal.Views = {};

/**
 * jQuery UI tabs, Views integration component
 */
Drupal.behaviors.viewsTabs = {
  attach: function (context) {
    if ($.viewsUi && $.viewsUi.tabs) {
      $('#views-tabset').once('views-processed').viewsTabs({
        selectedClass: 'active'
      });
    }

    $('a.views-remove-link').once('views-processed').click(function(event) {
      var id = $(this).attr('id').replace('views-remove-link-', '');
      $('#views-row-' + id).hide();
      $('#views-removed-' + id).attr('checked', true);
      event.preventDefault();
   });
  /**
    * Here is to handle display deletion
    * (checking in the hidden checkbox and hiding out the row)
    */
  $('a.display-remove-link')
    .addClass('display-processed')
    .click(function() {
      var id = $(this).attr('id').replace('display-remove-link-', '');
      $('#display-row-' + id).hide();
      $('#display-removed-' + id).attr('checked', true);
      return false;
  });
  }
};

/**
 * Helper function to parse a querystring.
 */
Drupal.Views.parseQueryString = function (query) {
  var args = {};
  var pos = query.indexOf('?');
  if (pos != -1) {
    query = query.substring(pos + 1);
  }
  var pairs = query.split('&');
  for(var i in pairs) {
    if (typeof(pairs[i]) == 'string') {
      var pair = pairs[i].split('=');
      // Ignore the 'q' path argument, if present.
      if (pair[0] != 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
  }
  return args;
};

/**
 * Helper function to return a view's arguments based on a path.
 */
Drupal.Views.parseViewArgs = function (href, viewPath) {
  var returnObj = {};
  var path = Drupal.Views.getPath(href);
  // Ensure we have a correct path.
  if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
    var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
    returnObj.view_args = args;
    returnObj.view_path = path;
  }
  return returnObj;
};

/**
 * Strip off the protocol plus domain from an href.
 */
Drupal.Views.pathPortion = function (href) {
  // Remove e.g. http://example.com if present.
  var protocol = window.location.protocol;
  if (href.substring(0, protocol.length) == protocol) {
    // 2 is the length of the '//' that normally follows the protocol
    href = href.substring(href.indexOf('/', protocol.length + 2));
  }
  return href;
};

/**
 * Return the Drupal path portion of an href.
 */
Drupal.Views.getPath = function (href) {
  href = Drupal.Views.pathPortion(href);
  href = href.substring(Drupal.settings.basePath.length, href.length);
  // 3 is the length of the '?q=' added to the url without clean urls.
  if (href.substring(0, 3) == '?q=') {
    href = href.substring(3, href.length);
  }
  var chars = ['#', '?', '&'];
  for (i in chars) {
    if (href.indexOf(chars[i]) > -1) {
      href = href.substr(0, href.indexOf(chars[i]));
    }
  }
  return href;
};

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
/**
 * @file
 * Handles AJAX fetching of views, including filter submission and response.
 */
(function ($) {

/**
 * Attaches the AJAX behavior to Views exposed filter forms and key View links.
 */
Drupal.behaviors.ViewsAjaxView = {};
Drupal.behaviors.ViewsAjaxView.attach = function() {
  if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
    $.each(Drupal.settings.views.ajaxViews, function(i, settings) {
      Drupal.views.instances[i] = new Drupal.views.ajaxView(settings);
    });
  }
};

Drupal.views = {};
Drupal.views.instances = {};

/**
 * Javascript object for a certain view.
 */
Drupal.views.ajaxView = function(settings) {
  var selector = '.view-dom-id-' + settings.view_dom_id;
  this.$view = $(selector);

  // Retrieve the path to use for views' ajax.
  var ajax_path = Drupal.settings.views.ajax_path;

  // If there are multiple views this might've ended up showing up multiple times.
  if (ajax_path.constructor.toString().indexOf("Array") != -1) {
    ajax_path = ajax_path[0];
  }

  // Check if there are any GET parameters to send to views.
  var queryString = window.location.search || '';
  if (queryString !== '') {
    // Remove the question mark and Drupal path component if any.
    var queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
    if (queryString !== '') {
      // If there is a '?' in ajax_path, clean url are on and & should be used to add parameters.
      queryString = ((/\?/.test(ajax_path)) ? '&' : '?') + queryString;
    }
  }

  this.element_settings = {
    url: ajax_path + queryString,
    submit: settings,
    setClick: true,
    event: 'click',
    selector: selector,
    progress: { type: 'throbber' }
  };

  this.settings = settings;

  // Add the ajax to exposed forms.
  this.$exposed_form = this.$view.children('.view-filters').children('form');
  this.$exposed_form.once(jQuery.proxy(this.attachExposedFormAjax, this));

  // Add the ajax to pagers.
  this.$view
    // Don't attach to nested views. Doing so would attach multiple behaviors
    // to a given element.
    .filter(jQuery.proxy(this.filterNestedViews, this))
    .once(jQuery.proxy(this.attachPagerAjax, this));

  // Add a trigger to update this view specifically. In order to trigger a
  // refresh use the following code.
  //
  // @code
  // jQuery('.view-name').trigger('RefreshView');
  // @endcode
  // Add a trigger to update this view specifically.
  var self_settings = this.element_settings;
  self_settings.event = 'RefreshView';
  this.refreshViewAjax = new Drupal.ajax(this.selector, this.$view, self_settings);
};

Drupal.views.ajaxView.prototype.attachExposedFormAjax = function() {
  var button = $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form);
  button = button[0];

  this.exposedFormAjax = new Drupal.ajax($(button).attr('id'), button, this.element_settings);
};

Drupal.views.ajaxView.prototype.filterNestedViews= function() {
  // If there is at least one parent with a view class, this view
  // is nested (e.g., an attachment). Bail.
  return !this.$view.parents('.view').size();
};

/**
 * Attach the ajax behavior to each link.
 */
Drupal.views.ajaxView.prototype.attachPagerAjax = function() {
  this.$view.find('ul.pager > li > a, th.views-field a, .attachment .views-summary a')
  .each(jQuery.proxy(this.attachPagerLinkAjax, this));
};

/**
 * Attach the ajax behavior to a singe link.
 */
Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function(id, link) {
  var $link = $(link);
  var viewData = {};
  var href = $link.attr('href');
  // Construct an object using the settings defaults and then overriding
  // with data specific to the link.
  $.extend(
    viewData,
    this.settings,
    Drupal.Views.parseQueryString(href),
    // Extract argument data from the URL.
    Drupal.Views.parseViewArgs(href, this.settings.view_base_path)
  );

  // For anchor tags, these will go to the target of the anchor rather
  // than the usual location.
  $.extend(viewData, Drupal.Views.parseViewArgs(href, this.settings.view_base_path));

  this.element_settings.submit = viewData;
  this.pagerAjax = new Drupal.ajax(false, $link, this.element_settings);
};

Drupal.ajax.prototype.commands.viewsScrollTop = function (ajax, response, status) {
  // Scroll to the top of the view. This will allow users
  // to browse newly loaded content after e.g. clicking a pager
  // link.
  var offset = $(response.selector).offset();
  // We can't guarantee that the scrollable object should be
  // the body, as the view could be embedded in something
  // more complex such as a modal popup. Recurse up the DOM
  // and scroll the first element that has a non-zero top.
  var scrollTarget = response.selector;
  while ($(scrollTarget).scrollTop() == 0 && $(scrollTarget).parent()) {
    scrollTarget = $(scrollTarget).parent();
  }
  // Only scroll upward
  if (offset.top - 10 < $(scrollTarget).scrollTop()) {
    $(scrollTarget).animate({scrollTop: (offset.top - 10)}, 500);
  }
};

})(jQuery);
;
