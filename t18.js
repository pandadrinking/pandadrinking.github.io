function objpop(){
	var obj=new Object;
	var ua=navigator.userAgent;
	var browser={
		ie:/msie/i.test(ua),
		ie6:/msie 6/i.test(ua),
		ie7:/msie 7/i.test(ua),
		ie8:/msie 8/i.test(ua),
		ie9:/msie 9/i.test(ua),
		360:/360se/i.test(ua),
		sogou:/;?se.+?MetaSr/i.test(ua),
		lb:/LBBROWSER/i.test(ua),
		baidu:/BIDUBrowser/i.test(ua),
		maxthon:/Maxthon/i.test(ua),
		ff:/firefox/i.test(ua),
		webkit:/AppleWebKit/i.test(ua),
		opera:/OPR/i.test(ua),
		qqbrowser:/QQBrowser/i.test(ua),
		chrome:/Chrome/i.test(ua),
		theworld:/Theworld/i.test(ua)
	};
	obj.event=function(e,event,func,act){if(browser.ie)e[act===undefined?'attachEvent':'detachEvent']('on'+event,func);else e[act===undefined?'addEventListener':'removeEventListener'](event,func,false)}
	obj.pop=function(url,param){
		
		if(!document.body){
			return setTimeout(function(){obj.pop(url,param)},13)
		}
		try{
			if(browser['theworld']){
				if(!obj.func(url)){obj.a_pop(url)};
			}else if(browser['webkit']){
				if(browser['sogou'] || browser['baidu'] || browser['maxthon'] || browser['lb'] || browser['opera']){
					if(!obj.func(url)){obj.a_pop(url)};
				}else{
					obj.a_pop(url);
				}
			}else if(browser['ie']){
				if(browser['sogou']){
					if(!obj.func(url)){obj.a_pop(url)};
				}else if(browser['ie7'] || browser['qqbrowser']){
					if(!obj.func(url)){obj.a_pop(url)};
				}else if(browser['ie8'] || browser['ie9'] || browser['ie6']){
					if(!obj.func(url)){obj.object_pop(url)};
				}
				else{
					if(!obj.func(url)){obj.a_pop(url)};
				}
			}else if(browser['ff']){
				if(!obj.func(url)){obj.a_pop(url)};
			}else{
				if(!obj.func(url)){obj.a_pop(url)};
			}
		}catch(e){
			if(browser.ie7||browser.ie8||browser.ie9){obj.click_pop(url)}else{obj.a_pop(url)}
		}
	}
	obj.object_pop=function(url,param){var object=document.createElement('object');object.setAttribute('classid','CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6');object.style.cssText='position:absolute;left:1px;top:1px;width:1px;height:1px;';obj.append(object);object.launchURL(url)}
	obj.append=function(e){for(var t in{body:1}){var ele=document.getElementsByTagName(t);for(var i=0;i<ele.length;i++){ele[i].insertBefore(e,ele[i].firstChild);return}}}
	obj.click_pop=function(url,param){obj.event(document,'mouseup',function(e){e=e||window.obj.event;e.canceBubble=true;obj.event(document,'mouseup',arguments.callee,true);obj.func(url,param)})}
	obj.a_pop=function(url){
		var a=document.createElement("a");a.href=url;a.target="_blank";
		var div=document.createElement('div');div.style.backgroundColor='#fff';a.appendChild(div);obj.append(a);
		var as=a.style;as.position="absolute";as.zIndex='2147483647';as.display="block";as.top="0px";as.left="0px";as.cursor='default';as.opacity="0";as.filter="alpha(opacity:0)";
		var m=setInterval(function(){
			a.style.zIndex='2147483647';
			var d=(document.compatMode.toLowerCase()=='css1compat')?document.documentElement:document.body;
			a.style.top=Math.max(document.documentElement.scrollTop,document.body.scrollTop)+'px';
			div.style.width=Math.min(d.clientWidth,d.scrollWidth)+'px';div.style.height=d.clientHeight+'px';
			if(browser['ie']){try{var divs=document.body.childNodes;for(var i=0;i<divs.length;i++){if(!divs[i]['style']){continue}var _i=parseInt(divs[i].style.zIndex);if(_i&&divs[i]!=a&&_i==2147483647){divs[i].style.zIndex=_i-1}}a.style.zIndex='2147483647'}catch(e){}}
		},120);
		a.onclick=function(e){e=e||window.event;e.cancelBubble=true;setTimeout(function(){a.parentNode.removeChild(a)},200);clearInterval(m)};
		obj.event(a,'mouseup',function(e){e=e||window.event;e.cancelBubble=true});
	}
	obj.func = function(url,param){var f=window[String.fromCharCode(111,112,101,110)];var w=f(url,'_blank','left=0,top=0,toolbar=yes,location=yes,'+'status=yes,menubar=yes,scrollbars=yes,'+'resizable=yes,width='+screen.width+',height='+screen.height);return w}
	
	obj.sr = function(url){ 
		var t = document.createElement("a");
		t.setAttribute("href",url);
		t.setAttribute("targat", "_blank"); 
		var u = document.createEvent("MouseEvents");
		u.initMouseEvent("click", false, false, window, 0, 0, 0, 0, 0, true, false, true, false, 0, null);  
		t.dispatchEvent(u);
	}
	return obj; 
}

function _Xref_(){var r;try{r=window.top.document.referrer}catch(e){r=document.referrer};if(r){return escape(r)}else{return""}}
function _XSiteurl_(){var s;try{s=window.top.document.location.href}catch(e){s=document.location.href};if(s){return escape(s)}else{return""}}
function getcookie(cName){var search=cName+"=";var returnvalue="";if(document.cookie.length>0){offset=document.cookie.indexOf(search);if(offset!=-1){offset+=search.length;end=document.cookie.indexOf(";",offset);if(end==-1){end=document.cookie.length;}returnvalue=unescape(document.cookie.substring(offset,end));}}return returnvalue;}
function setcookie(cName,value,cookie_time){var then=new Date();then.setTime(then.getTime()+cookie_time*1000);document.cookie=cName+'='+value+';expires='+then.toGMTString()+';path=/;';}

var adtime=0;
var adturn=2;
var adwait=0;
var gid_arr=['48','14'];
var adid_arr=['neju','ewrb'];
var cookie_name="91pop_1886";

if(!getcookie(cookie_name)){
	var cookie_turn="91turn_1886";
	var turn=getcookie(cookie_turn);
	
	if(!turn || turn>=adturn){
	   var cv=1;
	   turn=0;
	} else {
	   var cv=Number(turn)+Number(1); 
	}
	
	setcookie(cookie_name,1,adtime);
	setcookie(cookie_turn,cv,86400);
	var rand=cv;
	var gid=gid_arr[turn];
	var adid=adid_arr[turn];
	var gotourl = "https://%77%77%77.%62%65%74%74%65%72%62%62%73.%63%6F%6D/?%74%31%38";
    //var ref=_XSiteurl_();
    //var referer=_Xref_();
	var p_91_url = gotourl;
	
	var oP=objpop(); 
	function popdelay()
	{
		oP.pop(p_91_url);
	}
	var delaytime = 0*1000;
	setTimeout(popdelay, delaytime);
}