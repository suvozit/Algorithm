if(!this.JSON){this.JSON={};JSON.parse=function(t){return eval("("+t+")")}}CFG={ajaxlogin:"/login.do",ckssn:"ssn29",ckvis:"vis29",ckal:"rel29",ssnttl:14400,ssnmax:84600};function bindFunction(a,b){return function(){return b.apply(a,arguments)}}function T(a){if((typeof(ST)!="undefined")&&(ST[a])){return ST[a]}else{return a}}function When(b){var c=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");var a=new Date(b*1000);document.write(c[a.getMonth()]+" "+a.getDate()+", "+(a.getYear()+(a.getYear()<1900?1900:0)));document.write(" at "+((a.getHours()%12)==0?12:a.getHours()%12)+":"+(a.getMinutes()<10?"0":"")+a.getMinutes()+(a.getHours()<12?"am":"pm"))}function WhenId(b){var c=document.getElementById(b);var e=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");var d=new Date(Date.parse(c.title));var a=e[d.getMonth()]+" "+d.getDate()+", "+(d.getYear()+(d.getYear()<1900?1900:0));a+=" at "+((d.getHours()%12)==0?12:d.getHours()%12)+":"+(d.getMinutes()<10?"0":"")+d.getMinutes()+(d.getHours()<12?"am":"pm");c.innerHTML=a}function WhenAll(){var b=document.getElementsByTagName("span");for(var a=0;a<b.length;a++){if(b[a].id.substr(0,6)=="CH_zTm"){WhenId(b[a].id)}}}function fmtButton(f,e,d,b,c){var a=(d?'<img src="'+d+'" width="16" height="16" alt="ico">':"");if(!c){c="100"}if(b){return'<a href="'+b+'" class="C_b'+c+'"'+(e?' title="'+(e)+'"':"")+">"+a+f+"</a>"}else{return'<span class="C_b'+c+'off"'+(e?' title="'+(e)+'"':"")+">"+a+f+"</span>"}}function domButton(e,g,f,d,c){el=document.createElement("span");var b=(d?'<img src="'+d+'" width="16" height="16" alt="ico">':"");var a=new String;if(c){a='<a href="'+c+'" class="'+e+'"'+(f?' title="'+(f)+'"':"")+">"+b+g+"</a>"}else{a='<span class="'+e+'"'+(f?' title="'+(f)+'"':"")+">"+b+g+"</span>"}el.innerHTML=a;return el}function urlUser(a){return httpprofile+a.replace(" ","_")+"/"}function cookieGet(c){var b=document.cookie;var e=c+"=";var d=b.indexOf("; "+e);if(d==-1){d=b.indexOf(e);if(d!=0){return null}}else{d+=2}var a=document.cookie.indexOf(";",d);if(a==-1){a=b.length}var g=unescape(b.substring(d+e.length,a));var f=g.split("+");g=f.join(" ");return g}function cookieSet(a,b){document.cookie=a+"="+escape(b)+"; path=/"}function xhrRequest(){var a;if(window.XMLHttpRequest){a=new XMLHttpRequest()}else{if(window.ActiveXObject){try{a=new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(b){try{a=new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(b){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}}}}return a}function xhrAsync(c,f,g){var e=xhrRequest();if(e){e.open(g?"POST":"GET",c,true);e.onreadystatechange=function(){if(e.readyState==4){if(e.status==200){f(e.responseText)}}};if(g){var b=new Array();for(var d=0;d<g.length;d++){if(((g[d].type=="checkbox")||(g[d].type=="radio"))&&(!g[d].checked)){}else{if(g[d]){b.push(escape(g[d].name)+"="+encodeURIComponent(g[d].value))}}}var a=b.join("&");e.setRequestHeader("Content-type","application/x-www-form-urlencoded");e.send(a)}else{e.send()}}return e}function domIdContent(a,b){if(document.getElementById(a)){document.getElementById(a).innerHTML=b;return true}else{return false}}function domByClass(d,f){if(d.getElementsByClassName){return d.getElementsByClassName(f)}var a=new Array();var e=" "+f+" ";if(d.hasChildNodes){for(var b=0;b<d.childNodes.length;++b){var g=" "+d.childNodes[b].className+" ";if(g.indexOf(e)!=-1){a.push(d.childNodes[b])}else{if(d.childNodes[b].hasChildNodes){a=a.concat(domByClass(d.childNodes[b],f))}}}}return a}function domByClassFirst(d,f){if(d.getElementsByClassName){return d.getElementsByClassName(f)[0]}var e=" "+f+" ";if(d.hasChildNodes){for(var b=0;b<d.childNodes.length;++b){var g=" "+d.childNodes[b].className+" ";if(g.indexOf(e)!=-1){return d.childNodes[b]}else{if(d.childNodes[b].hasChildNodes){var a=domByClassFirst(d.childNodes[b],f);if(a){return a}}}}}return null}function bbTag(b,c){if(b.setSelectionRange){b.value=b.value.substring(0,b.selectionStart)+"["+c+"]"+b.value.substring(b.selectionStart,b.selectionEnd)+"[/"+c+"]"+b.value.substring(b.selectionEnd,b.value.length)}else{if(document.selection&&document.selection.createRange){b.focus();var a=document.selection.createRange();a.text="["+c+"]"+a.text+"[/"+c+"]"}else{b.value+="["+c+"][/"+c+"]"}}}function BBEdit(elParent,fields,action,hiddens,onOk,onCancel){this.action=action;this.onOk=onOk;this.onCancel=(typeof(onCancel)!="undefined"?onCancel:onOk);if(!BBEdit.count){BBEdit.count=0}BBEdit.count++;this.objName="editbox"+BBEdit.count;eval(this.objName+"=this;");var txt=new String();txt+='<form name="CH_fedit" action="'+action+'" method="post" onsubmit="return false;"><table>';txt+='<tr><td><textarea name="content" cols="100" rows="15" onfocus="'+this.objName+'.editCount()" onkeydown="'+this.objName+'.editCount()" onkeyup="'+this.objName+'.editCount()"></textarea></td>';txt+="<td><i>"+T("Format")+":</i><br><br>";txt+='<a href="javascript:'+this.objName+'.editTag(\'code\')"><img src="/ico/text_code.png" width="16" height="16" alt="code" title="'+T("Source code")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'output\')"><img src="/ico/text_output.png" width="16" height="16" alt="output" title="'+T("Program output")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'quote\')"><img src="/ico/text_quote.png" width="16" height="16" alt="quote" title="'+T("Quotation")+'"></a>';txt+="<br>";txt+='<a href="javascript:'+this.objName+'.editTag(\'b\')"><img src="/ico/text_b.png" width="16" height="16" alt="bold" title="'+T("Bold")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'i\')"><img src="/ico/text_i.png" width="16" height="16" alt="italics" title="'+T("Italics")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'u\')"><img src="/ico/text_u.png" width="16" height="16" alt="underline" title="'+T("Underline")+'"></a>';txt+="<br>";txt+='<a href="javascript:'+this.objName+'.editTag(\'center\')"><img src="/ico/text_center.png" width="16" height="16" alt="center" title="'+T("Center")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'s\')"><img src="/ico/text_s.png" width="16" height="16" alt="striketrhough" title="'+T("Strikethrough")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'tt\')"><img src="/ico/text_tt.png" width="16" height="16" alt="teletype" title="'+T("Teletype (fixed font)")+'"></a>';txt+="<br>";txt+='<a href="javascript:'+this.objName+'.editTag(\'small\')"><img src="/ico/text_small.png" width="16" height="16" alt="small" title="'+T("Small font")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'sub\')"><img src="/ico/text_sub.png" width="16" height="16" alt="subscript" title="'+T("Subscript")+'"></a>';txt+='<a href="javascript:'+this.objName+'.editTag(\'sup\')"><img src="/ico/text_sup.png" width="16" height="16" alt="superscript" title="'+T("Superscript")+'"></a>';txt+="<br>";txt+="</td>";txt+="</tr>";txt+='<tr><td colspan="2">Length: <input readonly type="text" name="CH_edtCount" size="4" maxlength="4" style="text-align:right; background-color:#E0E0E0" value=""> '+T("(max=8192)");txt+=' &nbsp; &nbsp; <a href="javascript:'+this.objName+'.editPreview()" class="C_b75" title="'+T("Preview message")+'"><img src="/ico/16eye.png" width="16" height="16" alt="eye">'+T("Preview")+"</a>";txt+=' <a href="javascript:'+this.objName+'.editSend()" class="C_b75" title="'+T("Submit")+'"><img src="/ico/16ok.png" width="16" height="16" alt="ok">'+T("Submit")+"</a>";txt+=' <a href="javascript:'+this.objName+'.editCancel()" class="C_b75" title="'+T("Cancel")+'"><img src="/ico/16cancel.png" width="16" height="16" alt="X">'+T("Cancel")+"</a>";for(var k in hiddens){txt+='<input type="hidden" name="'+k+'" value="'+hiddens[k]+'">'}txt+=' <input type="hidden" name="y" value="1">';txt+="</td></tr></table></form>";txt+='<form name="CH_prevpost" action="'+action+'" target="previewing" method="post"><input type="hidden" name="content" value=""><input type="hidden" name="w" value="preview"></form>';this.el=document.createElement("div");this.el.innerHTML=txt;elParent.appendChild(this.el);this.elForm=this.el.firstChild;this.elContent=this.elForm.getElementsByTagName("textarea")[0];this.elCount=this.elForm.getElementsByTagName("input")[0];this.elPrevForm=this.el.getElementsByTagName("form")[1];this.elPrevContent=this.elPrevForm.getElementsByTagName("input")[0];this.elContent.focus();if(typeof(fields.content)!="undefined"){this.elContent.value=fields.content}}BBEdit.prototype.editCount=function(){this.elCount.value=this.elContent.value.length};BBEdit.prototype.editTag=function(c){var b=this.elContent;if(b.setSelectionRange){b.value=b.value.substring(0,b.selectionStart)+"["+c+"]"+b.value.substring(b.selectionStart,b.selectionEnd)+"[/"+c+"]"+b.value.substring(b.selectionEnd,b.value.length)}else{if(document.selection&&document.selection.createRange){b.focus();var a=document.selection.createRange();a.text="["+c+"]"+a.text+"[/"+c+"]"}else{b.value+="["+c+"][/"+c+"]"}}};BBEdit.prototype.editCancel=function(){this.el.parentNode.removeChild(this.el);this.onCancel()};BBEdit.prototype.editPreview=function(){this.elPrevContent.value=this.elContent.value;this.elPrevForm.submit()};BBEdit.prototype.editSend=function(){var a=bindFunction(this,function(b){this.el.parentNode.removeChild(this.el);this.onOk(b)});xhrAsync(this.action,a,this.elForm.elements);this.el.innerHTML="Sending. Please wait..."};function onPrint(b,d,a){if(typeof(onPrint.register)=="undefined"){onPrint.register=new Array()}var c=new onPrint_Callback(b,d);if(a){c.args=Array.prototype.slice.call(arguments,2)}onPrint.register.push(c);c.invoke();return c}onPrint.print=function(){onPrint.printed=true;if(typeof(onPrint.register)!="undefined"){for(var a=0;a<onPrint.register.length;a++){onPrint.register[a].invoke()}}};function onPrint_Callback(a,b){this.fn=a;this.obj=b}onPrint_Callback.prototype.invoke=function(){if(typeof(onPrint.printed)=="undefined"){return}if(this.args){this.fn.apply(this.obj,this.args)}else{if(this.obj){this.fn.call(this.obj)}else{this.fn()}}};function onSession(b,d,a){if(typeof(onSession.register)=="undefined"){onSession.register=new Array()}var c=new onSession_Callback(b,d);if(a){c.args=Array.prototype.slice.call(arguments,2)}onSession.register.push(c);c.invoke();return c}onSession.imbue=function(b){onSession.session=b;if(typeof(onSession.register)!="undefined"){for(var a=0;a<onSession.register.length;a++){onSession.register[a].invoke()}}};function onSession_Callback(a,b){this.fn=a;this.obj=b}onSession_Callback.prototype.invoke=function(){if(typeof(onSession.session)=="undefined"){return}if(this.args){var a=this.args;a.splice(0,0,onSession.session);this.fn.apply(this.obj,a)}else{if(this.obj){this.fn.call(this.obj,onSession.session)}else{this.fn(onSession.session)}}};function Session(){this.sessionid="";this.userid=0;this.access=0;this.visited=0;this.seen=0;this.last=0;this.npms=0;this.uniqid="";this.user="";this.ok=false;this.autoArray=new Array();this.setFromCookie(CFG.ckssn,CFG.ckal,CFG.ssnttl,CFG.ssnmax);global_session=this}Session.prototype.doInit=function(){var a=this;onSession.imbue(a)};Session.prototype.setFromCookie=function(f,e,c,a){var d=cookieGet(f);if((typeof d=="string")&&(d.length>0)){var g=new Array();var b=0;this.sessionid=d.substring(b,b+=16);this.userid=parseInt(d.substring(b,b+=8),16);this.access=parseInt(d.substring(b,b+=8),16);this.visited=parseInt(d.substring(b,b+=8),16);this.seen=parseInt(d.substring(b,b+=8),16);this.last=parseInt(d.substring(b,b+=8),16);this.npms=parseInt(d.substring(b,b+=8),16);this.uniqid=d.substring(b,b+=8);this.user=new String();while(b<d.length-1){if(d.substring(b,b+2)=="00"){break}else{this.user+=unescape("%"+d.substring(b,b+=2))}}this.ok=(this.user.length>0)}if(!this.ok){d=cookieGet(e);if((typeof d=="string")&&(d.length>0)){xhrAsync(CFG.ajaxlogin+"?w=auto",bindFunction(this,this.setFromCookieXHR));return}}this.doInit()};Session.prototype.setFromCookieXHR=function(c){var a=new Object();try{a=JSON.parse(c)}catch(b){a.success=false}if(a.success){this.set(a)}};Session.prototype.set=function(a){if(a.user){this.sessionid=a.sessionid;this.userid=a.userid;this.access=a.access;this.visited=a.visited;this.seen=a.seen;this.last=a.last;this.uniqid=a.uniqid;this.user=a.user;this.npms=a.npms}else{this.sessionid="";this.userid=0;this.access=0;this.visited=0;this.seen=0;this.last=0;this.uniqid="";this.user="";this.npms=0}this.ok=(a.user.length>0);this.doInit()};Session.prototype.auth=function(c,a){if((typeof(a)!="undefined")&&(a==this.userid)){return true}if(typeof(c)=="string"){var b={admin:32768,member:2,post:64,report:32,filter:512,approve:1024};bm=b[c]}else{bm=c}if((bm)&&((this.access&bm)==bm)){return true}else{return false}};function LoginBox(elid,bAjax,redirto){this.elid=elid;this.ajax=bAjax;this.timeout=null;this.redirto=(redirto)?redirto:window.location.href;this.objName="el"+elid;eval(this.objName+"=this;");this.cb_drawBox=onSession(this.drawBox,this)}LoginBox.prototype.httpaccess="/user/access.cgi";LoginBox.prototype.drawBox=function(b){this.session=b;if(this.timeout){clearTimeout(this.timeout);this.timeout=null}var a=new String();a+='<div class="C_LoginBox">';if(b.ok){a+='<form name="CH_frmLogin" id="CH_frmLogin" action="'+this.httpaccess+'"'+(this.ajax?' onsubmit="'+this.objName+'.send(); return false;"':"")+' method="post">';a+="<table>";a+='<tr><td colspan="2">Logged in as: <b>'+b.user+"</b></td></tr>";a+='<tr><td class="right"><input type="hidden" name="w" value="logout"><input type="hidden" name="y" value="1"><input type="hidden" name="to" value="'+this.redirto.replace('"',"")+'"><input class="btn" value="log out" type="submit"></td>';a+='<td>[<b><a href="/user/">user cp</a></b>]';if((b.npms>0)&&(b.npms!=1000000)){a+='[<a href="/user/pm.cgi">'+b.npms+'<img src="/img/newmail.gif" alt="You have '+b.npms+' new PMs" title="You have '+b.npms+' new PMs"></a>]'}a+="</td></tr>";a+="</table>";a+="</form>";a+='<div id="CH_insLogin"></div>'}else{a+='<form name="CH_frmLogin" id="CH_frmLogin" action="'+this.httpaccess+'"'+(this.ajax?' onsubmit="'+this.objName+'.send(); return false;"':"")+' method="post">';a+="<table>";a+="<tr><td></td>";a+='<td class="right"><b>login:</b></td><td><input type="hidden" name="w" value="login"><input type="hidden" name="y" value="1"><input type="hidden" name="to" value="'+this.redirto.replace('"',"")+'"><input class="txt" name="l" size="4" type="text" title="Type user name"></td><td><input class="txt" name="p" size="4" type="password" title="Type password"></td><td><input class="btn" value="sign in" type="submit"></td></tr>';a+='<tr><td>sign in using:<a href="'+this.httpaccess+"?w=login&y=1&pr=google&to="+encodeURIComponent(window.location.pathname)+'" title="Sign in using your google account"><img src="/ico/16google.png" width="16" height="16"></a><a href="'+this.httpaccess+"?w=login&y=1&pr=yahoo&to="+encodeURIComponent(window.location.pathname)+'" title="Sign in using your Yahoo! account"><img src="/ico/16yahoo.png" width="16" height="16"></a></td>';a+='<td colspan="4" class="right"><label for="rememberme">remember me<input class="chk" name="rememberme" id="rememberme" value="1" type="checkbox"> &nbsp; [<a href="'+this.httpaccess+'?w=signup">register</a>]</td></tr>';a+="</table>";a+="</form>";a+='<div id="CH_insLogin"></div>'}document.getElementById(this.elid).innerHTML=a;a+="</div>";document.getElementById("CH_frmLogin").style.display="block"};LoginBox.prototype.send=function(){var a;var b;args=document.getElementById("CH_frmLogin").elements;if((args[0].name=="w")&&(args[0].value=="logout")){ltext="Logging out"}else{ltext="Logging in"}document.getElementById("CH_frmLogin").style.display="none";document.getElementById("CH_insLogin").innerHTML='<table class="loginmessage"><tr><td><b>'+ltext+'</b><br><img src="/img/waitblue.gif"><br>please wait</td></tr></table>';this.timeout=setTimeout(this.objName+'.error("Login timeout")',30000);var c=this;a=bindFunction(this,function(g){var d=new Object();try{d=JSON.parse(g)}catch(f){d.success=false}if(d.success){c.session.set(d)}else{this.error("login failed")}});xhrAsync(CFG.ajaxlogin,a,args);return false};LoginBox.prototype.error=function(a){document.getElementById("CH_frmLogin").style.display="none";document.getElementById("CH_insLogin").innerHTML='<table class="loginmessage"><tr><td>'+a+"</td></tr></table>";if(this.timeout){clearTimeout(this.timeout)}this.timeout=setTimeout(this.objName+".cb_drawBox.invoke()",3000)};function usr_Menu(b,d,a,c){this.elid=b;this.scr=d;this.httpuser=a;this.accessuseradmin=c;onSession(this.drawUBox,this)}usr_Menu.prototype.drawUBox=function(a){st='<table class="box">';if(a.ok){st+='<tr><th><a href="'+this.httpuser+'account.cgi">'+a.user+"</a></th></tr>";if(this.scr=="account.cgi"){st+='<tr><td class="selected">My account</td></tr>'}else{st+='<tr><td><a href="'+this.httpuser+'account.cgi">My account</a></td></tr>'}if(this.scr=="profile.cgi"){st+='<tr><td class="selected">My profile</td></tr>'}else{st+='<tr><td><a href="'+this.httpuser+'profile.cgi">My profile</a></td></tr>'}if(this.scr=="pm.cgi"){st+='<tr><td class="selected">Private Messages ('+a.npms+")</td></tr>"}else{st+='<tr><td><a href="'+this.httpuser+'pm.cgi">Private Messages</a> ('+a.npms+")</td></tr>"}if(a.auth(this.accessuseradmin)){st+='<tr><td class="folder">Admin options:</td></tr>';if(this.scr=="admin.cgi"){st+='<tr><td class="indent selected">Admin</td></tr>'}else{st+='<tr><td class="indent"><a href="'+this.httpuser+'admin.cgi">Admin</a></td></tr>'}}}else{st+='<tr><th><a href="'+this.httpuser+'">Users</a></th></tr>';if(this.scr=="signup.cgi"){st+='<tr><td class="selected">Create account</td></tr>'}else{st+='<tr><td><a href="'+this.httpuser+'signup.cgi">Create account</a></td></tr>'}if(this.scr=="lostpass.cgi"){st+='<tr><td class="selected">Lost password</td></tr>'}else{st+='<tr><td><a href="'+this.httpuser+'lostpass.cgi">Lost password</a></td></tr>'}}st+="</table>";document.getElementById(this.elid).innerHTML=st};function Score(parentid,httpscore,unique){this.parentid=parentid;this.httpscore=httpscore;this.unique=unique;this.el=document.createElement("div");this.el.className="C_Score";this.elTop=document.createElement("div");this.elTop.className="top";this.el.appendChild(this.elTop);this.elBot=document.createElement("div");this.elBot.className="bot";this.el.appendChild(this.elBot);this.elVote=document.createElement("div");this.elVote.className="vote";this.el.appendChild(this.elVote);this.objName="score"+unique;eval(this.objName+"=this;");document.getElementById(this.parentid).appendChild(this.el);onSession(this.onSession,this)}Score.prototype.alts=new Array("not rated","poor","weak","normal","great","recommended");Score.prototype.onSession=function(a){this.session=a;xhrAsync(this.httpscore+"?w=get&uq="+this.unique,bindFunction(this,this.drawVoteXHR))};Score.prototype.drawVoteXHR=function(f){try{ret=JSON.parse(f)}catch(g){return}var h;if(ret.success){h=ret.score}if(isNaN(h)){h=0}var b,d;if(h){if((this.session.ok)&&(h!=-1)){b="Change your rating:";d="You rated this with "+h+" star"+(h!=1?"s":"")+" ("+this.alts[h]+")"}else{b="Rate this article";d="You have already rated this."}}else{b="Rate this";d="Please, choose stars to award:"}this.elTop.innerHTML=b;this.elBot.innerHTML=d;if((this.session.ok)||(!h)){var a=new String();for(var c=1;c<=5;c++){a+='<img src="/ico/24star.png" alt="*" width="24" height="24" id="CH_Star'+this.unique+"_"+c+'" title="'+c+" star"+(c!=1?"s":"")+": "+this.alts[c]+'" onmouseover="'+this.objName+".updateStars("+c+',true)" onmouseout="'+this.objName+".updateStars("+h+',false)" onclick="'+this.objName+".submitVote("+c+')">'}this.elVote.innerHTML=a+"<br>(hover mouse and click)"}else{this.elVote.innerHTML="Please, log in to change your current rating, or sign up to create a new account."}this.updateStars(h,false)};Score.prototype.submitVote=function(a){this.elBot.innerHTML="Thanks for your feedback";this.elVote.innerHTML='<img src="/ico/progress.gif"><br>... Please wait ...';xhrAsync(this.httpscore+"?w=vote&uq="+this.unique+"&q="+a,bindFunction(this,this.drawVoteXHR))};Score.prototype.updateStars=function(c,a){for(var b=1;b<=5;b++){if(elStar=document.getElementById("CH_Star"+this.unique+"_"+b)){if(b<=c){if(a){elStar.src="/ico/24star.png"}else{elStar.src="/ico/24star-gray.png"}}else{elStar.src="/ico/24star-empty.png"}}}};function doc_Page(elid,httpdoc,itemid,folder,haschildren,accessadmin){this.elid=elid;this.httpdoc=httpdoc,this.itemid=itemid;this.folder=folder;this.haschildren=haschildren;this.accessadmin=accessadmin;this.objName="page"+itemid;eval(this.objName+"=this;");this.drawButtons=function(us){el=document.getElementById(this.elid);el.innerHTML="";if(us.auth(this.accessadmin)&&this.folder){el.appendChild(domButton("C_b100","New Page","New Page","/ico/16new.png",this.httpdoc+"?w=new&parent="+this.itemid))}if(us.auth(this.accessadmin)){el.appendChild(domButton("C_b100","Edit Page","Edit Page","/ico/16edit.png",this.httpdoc+"?w=edit&id="+this.itemid))}if(us.auth(this.accessadmin)&&(!this.haschildren)){el.appendChild(domButton("C_b100","Delete Page","Delete Page","/ico/16delete.png","javascript:"+this.objName+".del()"))}};onSession(this.drawButtons,this);this.del=function(us){if(confirm("WARNING: You are about to delete this page. Confirm?")){window.location=this.httpdoc+"?w=del&id="+this.itemid}}}function art_List(elid,httpart,unique,accesspublish,accessadmin){this.elid=elid;this.httpart=httpart;this.unique=unique;this.accesspublish=accesspublish;this.accessadmin=accessadmin;this.objName="art"+unique;eval(this.objName+"=this;");this.drawButtons=function(us){el=document.getElementById(this.elid);el.innerHTML="";if(us.auth(this.accessadmin)){el.appendChild(domButton("C_b100","Edit this","Edit this","/ico/16edit.png",this.httpart+"?w=edit&uq="+this.unique));el.appendChild(domButton("C_b100","New label","New label","/ico/16tag.png",this.httpart+"?w=new&type=l"))}if(us.auth(this.accesspublish)){el.appendChild(domButton("C_b100","New article","New article","/ico/16docnew.png",this.httpart+"?w=new"))}else{el.innerHTML="Registered users can publish here."}};onSession(this.drawButtons,this)}function art_Show(elid,eliddraft,httpart,unique,authoruniqid,itype,accesspublish,accessadmin){this.elid=elid;this.eliddraft=eliddraft;this.httpart=httpart;this.unique=unique;this.authoruniqid=authoruniqid,this.itype=itype;this.accesspublish=accesspublish;this.accessadmin=accessadmin;this.objName="art"+unique;eval(this.objName+"=this;");this.drawButtons=function(us){var el=document.getElementById(this.elid);el.innerHTML="";var eldraft=document.getElementById(this.eliddraft);eldraft.innerHTML="";if((!us.auth(this.accessadmin))&&((us.uniqid!=this.authoruniqid)||(!us.auth(this.accesspublish)))){return}el.appendChild(domButton("C_b100","Edit article","Edit this version of the article","/ico/16edit.png",httpart+"?w=edit&uq="+this.unique));if(us.uniqid==this.authoruniqid){if(this.itype=="d"){eldraft.appendChild(domButton("C_b100","Submit article","Submit article for approval","/ico/16envelopesend.png",httpart+"?w=type&type=w&uq="+this.unique))}else{if((this.itype=="w")||(this.itype=="r")){eldraft.appendChild(domButton("C_b100","Redraft article","Bring back to draft ststus","/ico/16recycle.png",httpart+"?w=type&type=d&uq="+this.unique))}}}if(us.auth(this.accessadmin)){if(this.itype=="a"){el.appendChild(domButton("C_b100","Delete article","Delete this article","/ico/16delete.png","javascript:"+this.objName+".del()"))}else{el.appendChild(domButton("C_b100","Approve","Approve article","/ico/16docok.png",httpart+"?w=ok&uq="+this.unique));el.appendChild(domButton("C_b100","Reject","Reject article","/ico/16doccancel.png",httpart+"?w=type&type=r&uq="+this.unique))}}if(this.itype!="a"){el.appendChild(domButton("C_b100","Drop version","This will delete this version of the article forever","/ico/16delete.png","javascript:"+this.objName+".del()"))}};this.del=function(us){if(confirm("WARNING: You are about to delete this page. Confirm?")){window.location=this.httpart+"?w=del&uq="+this.unique}};onSession(this.drawButtons,this)}function for_ThreadList(elid,cookiename,now,httpbookmark){this.threadlistcookiename=cookiename;this.now=now;this.httpbookmark=httpbookmark;this.thids=new Array();this.thtms=new Array();this.objName="threadlist";eval(this.objName+"=this;");var el=document.getElementById(elid);if((el)&&(el.hasChildNodes)){for(var i=0;i<el.childNodes.length;++i){if((" "+el.childNodes[i].className+" ").indexOf("C_forThread")!=-1){if(el.childNodes[i].hasChildNodes()){var data=el.childNodes[i].firstChild.title.split(",");this.thids.push(data[0]);this.thtms.push(data[1])}}}}if(cookiename){this.cb_drawNewLabels=onSession(this.drawNewLabels,this)}if(httpbookmark){onSession(this.drawBookmarks,this)}}for_ThreadList.prototype.drawNewLabels=function(c){this.vids=new Array();this.vtms=new Array();var d=cookieGet(this.threadlistcookiename);if(d){for(b=0;b<d.length-15;b+=16){this.vids.push(parseInt(d.substring(b,b+8),16));this.vtms.push(parseInt(d.substring(b+8,b+16),16))}}for(var b=0;b<this.thids.length;++b){seen=true;if((c.ok)&&(c.visited>0)&&(this.thtms[b]>c.last)){seen=false;for(var a=0;a<this.vids.length;a++){if((this.thids[b]==this.vids[a])&&(this.vtms[a]>=this.thtms[b])){seen=true}}}document.getElementById("CH_new"+this.thids[b]).innerHTML=(seen?"":'<img src="/img/new.gif" border="0" alt="New post! (click to mark as read)" title="New post! (click to mark as read)" onclick="'+this.objName+".mark("+this.thids[b]+')">')}};for_ThreadList.prototype.mark=function(b){var d=cookieGet(this.threadlistcookiename);if(!d){d=""}var c=b.toString(16);while(c.length<8){c="0"+c}var a=this.now.toString(16);while(a.length<8){a="0"+a}d+=c+a;cookieSet(this.threadlistcookiename,d);this.cb_drawNewLabels.invoke()};for_ThreadList.prototype.drawBookmarks=function(a){xhrAsync(this.httpbookmark+"?w=get&tt="+this.thids.join("+"),bindFunction(this,this.drawBookmarksXHR))};for_ThreadList.prototype.drawBookmarksXHR=function(b){try{var a=JSON.parse(b)}catch(c){return}if(a.success){for(i=0;i<a.data.length;i++){this.drawOneBookmark(a.data[i])}}else{for(i=0;i<this.thids.length;++i){this.drawOneBookmark({threadid:this.thids[i]})}}return};for_ThreadList.prototype.drawOneBookmark=function(a){document.getElementById("CH_thread"+a.threadid).className=a.participated?"box participated":"box";document.getElementById("CH_icos"+a.threadid).innerHTML="";document.getElementById("CH_bm"+a.threadid).innerHTML="";icos="";el=document.getElementById("CH_bm"+a.threadid);if(a.participated){icos+='<img src="/ico/16userpencil.png" width="16" height="16" title="You have participated in this topic"> ';document.getElementById("CH_thread"+a.threadid).className="box participated"}if(a.notify){icos+='<img src="/ico/16mailreceive.png" width="16" height="16" title="You are subscribed to this topic"> ';el.appendChild(domButton("c_b100","Unsubscribe","Remove subscription","/ico/16mailno.png","javascript:"+this.objName+".bookmark("+a.threadid+",-1)"))}if(a.bookmark){icos+='<img src="/ico/16bookmark.png" width="16" height="16" title="You have bookmarked this topic"> ';el.appendChild(domButton("c_b100","Remove","Remove bookmark","/ico/16bookmarkno.png","javascript:"+this.objName+".bookmark("+a.threadid+",-1)"))}document.getElementById("CH_icos"+a.threadid).innerHTML=icos};for_ThreadList.prototype.bookmark=function(b,a){document.getElementById("CH_bm"+b).innerHTML="Please wait...";xhrAsync(this.httpbookmark+"?w=bookmark&t="+b+"&q="+a,bindFunction(this,this.drawBookmarksXHR))};function for_PostList(threadid,threadarchived,threadauthor,threadsolved,elidPosts,elidSubscription,elidReply,elidInsNew,elidAuthor,httpthreads,httpposts,httpbookmark,accesspost,accessreport,accessfilter,accesstrusted,accessmod,accessbookmark){this.threadid=threadid;this.threadarchived=threadarchived;this.threadauthor=threadauthor;this.threadsolved=threadsolved;this.elidPosts=elidPosts;this.elidSubscription=elidSubscription;this.elidReply=elidReply;this.elidInsNew=elidInsNew;this.elidAuthor=elidAuthor;this.httpthreads=httpthreads;this.httpposts=httpposts;this.httpbookmark=httpbookmark;this.accesspost=accesspost;this.accessfilter=accessfilter;this.accesstrusted=accesstrusted;this.accessmod=accessmod;this.accessbookmark=accessbookmark;this.objName="thread"+threadid;eval(this.objName+"=this;");if(elidPosts){var elPosts=new Array();var el=document.getElementById(elidPosts);if((el)&&(el.hasChildNodes)){for(var i=0;i<el.childNodes.length;++i){if((" "+el.childNodes[i].className+" ").indexOf("C_forPost")!=-1){elPosts.push(el.childNodes[i])}}}for(i=0;i<elPosts.length;i++){if((i==elPosts.length-1)&&(elidReply)){new for_Post(elPosts[i],httpposts,accesspost,accessreport,accessfilter,accesstrusted,accessmod,threadarchived,true)}else{new for_Post(elPosts[i],httpposts,accesspost,accessreport,accessfilter,accesstrusted,accessmod,threadarchived)}}}if(elidSubscription){this.elSubscription=document.getElementById(elidSubscription);onSession(this.drawSubscription,this)}if(elidReply){this.elReply=document.getElementById(this.elidReply);this.originalReply=this.elReply.innerHTML;this.cb_drawReply=onSession(this.drawReply,this)}if((!this.threadarchived)&&(this.elidAuthor)){this.cb_drawAuthorOptions=onSession(this.drawAuthorOptions,this)}}for_PostList.prototype.drawAuthorOptions=function(b){var a=document.getElementById(this.elidAuthor);if(!a){return}while(a.hasChildNodes()){a.removeChild(a.lastChild)}if((this.threadarchived)&&(!b.auth(this.accessmod))){return}if(b.auth(this.accessmod)||(b.userid==this.threadauthor)){a.appendChild(domButton("C_b100","Edit topic","Edit this topic","/ico/16edit.png",this.httpthreads+"?w=edit&t="+this.threadid));if(this.threadsolved){a.appendChild(domButton("C_b100","Remove solved","Removed solved mark","/ico/16delete.png","javascript:"+this.objName+".solved(0)"))}else{a.appendChild(domButton("C_b100","Mark as solved","Mark this topic as solved","/ico/forum_solved.png","javascript:"+this.objName+".solved(1)"))}}};for_PostList.prototype.solved=function(a){xhrAsync(this.httpthreads+"?w=solved&t="+this.threadid+"&n="+a,bindFunction(this,this.solvedXHR))};for_PostList.prototype.solvedXHR=function(c){try{var a=JSON.parse(c)}catch(b){alert(c);return}if(a.success){this.threadsolved=a.solved;this.cb_drawAuthorOptions.invoke();window.location.href=window.location.href}};for_PostList.prototype.drawReply=function(a){if((!this.threadarchived)&&(a.auth(this.accesspost))){while(this.elReply.hasChildNodes()){this.elReply.removeChild(this.elReply.lastChild)}this.elButton=this.elReply.appendChild(domButton("C_b100","Reply","Post a new reply","/ico/16postreply.png","javascript:"+this.objName+".reply()"))}else{this.elReply.innerHTML=this.originalReply}};for_PostList.prototype.reply=function(){if(this.elButton){this.elButton.parentNode.removeChild(this.elButton);this.elButton=null}new BBEdit(this.elReply,{content:""},this.httpposts,{w:"reply",t:this.threadid},bindFunction(this,this.replyXHR))};for_PostList.prototype.replyXHR=function(b){if(b){if(b.substr(0,5).toLowerCase()=="error"){alert(b);return}var a=document.createElement("div");a.innerHTML=b;a=document.getElementById(this.elidInsNew).appendChild(a);if(a.hasChildNodes){new for_Post(a.firstChild,this.httpposts,this.accesspost,this.accessreport,this.accessfilter,this.accesstrusted,this.accessmod,this.threadarchived,true)}}this.cb_drawReply.invoke();WhenAll()};for_PostList.prototype.drawSubscription=function(a){if((a.ok)&&(a.auth(this.accessbookmark))){this.elSubscription.innerHTML="Loading tracking options...";xhrAsync(this.httpbookmark+"?w=get&tt="+this.threadid,bindFunction(this,this.drawSubscriptionXHR))}else{this.elSubscription.innerHTML=""}};for_PostList.prototype.drawSubscriptionXHR=function(b){try{var a=JSON.parse(b)}catch(c){alert(b);return}if(a.success){data=a.data[0];tx='<form name="fm">Tracking options for this topic: <select name="bmk" onchange="'+this.objName+'.bookmark(fm.bmk.options[fm.bmk.selectedIndex].value,fm.bmk.options[fm.bmk.selectedIndex].text)">';tx+='<option value=""></option>';if(data.bookmark){tx+='<option value="-1">Remove bookmark</option>'}else{tx+='<option value="0">Bookmark (Add to "my topics" list)</option>'}if(data.notify){tx+='<option value="-1">Unsubscribe</option>'}else{if(!this.threadarchived){tx+='<option value="1">Subscribe (Receive an email on new replies)</option>'}}tx+="</select></form>";this.elSubscription.innerHTML=tx}};for_PostList.prototype.bookmark=function(b,a){if(confirm("Are you sure do you want to "+a+"?")){this.elSubscription.innerHTML="Please wait...";xhrAsync(this.httpbookmark+"?w=bookmark&t="+this.threadid+"&q="+b,bindFunction(this,this.drawSubscriptionXHR))}};function for_Post(el,httpcgi,accesspost,accessreport,accessfilter,accesstrusted,accessmod,threadarchived,lastpostinthread){this.el=el;this.httpcgi=httpcgi;this.accesspost=accesspost;this.accessreport=accessreport;this.accessfilter=accessfilter;this.accesstrusted=accesstrusted;this.accessmod=accessmod;this.threadarchived=threadarchived;this.lastpostinthread=lastpostinthread;this.parseHTML();this.objName="post"+this.postid;eval(this.objName+"=this;");this.cb_onSession=onSession(this.onSession,this)}for_Post.prototype.parseHTML=function(){if(this.el.hasChildNodes()){var a=this.el.firstChild.title.split(",");this.postid=a[0];this.author=a[1];this.authoraccess=a[2];this.authornposts=a[3];this.poststatus=a[4];this.eledtEdit=document.getElementById("CH_i"+this.postid);this.elButtons=document.getElementById("CH_btn"+this.postid)}};for_Post.prototype.onSession=function(c){var a=this.elButtons;if(a){while(a.hasChildNodes()){a.removeChild(a.lastChild)}if((this.threadarchived)&&(!c.auth(this.accessmod))){return}if(c.ok){if((c.auth(this.accessmod))||((c.auth(this.accesspost))&&(c.userid==this.author))){a.appendChild(domButton("C_b75","Edit","Edit post","/ico/16edit.png","javascript:"+this.objName+".edit()"))}if(this.poststatus==-1){if(c.auth(this.accessmod)){a.appendChild(domButton("C_b75","Approve","Approve post","/ico/16stamp.png","javascript:"+this.objName+".approve()"))}else{a.appendChild(domButton("C_b75off","Reported","This message has been reported","/ico/16reported.png"))}}if(((this.authoraccess&this.accesstrusted)!=this.accesstrusted)&&(c.auth(this.accessfilter))&&(!c.auth(this.accessmod))){a.appendChild(domButton("C_b75","Report","Report post as abusive (this will delete the post)","/ico/16report.png","javascript:"+this.objName+".filter()"))}else{if((this.poststatus==0)&&(c.auth(this.accessreport))){a.appendChild(domButton("C_b75","Report","Report post as abusive","/ico/16report.png","javascript:"+this.objName+".report()"))}}if((c.auth(this.accessmod))||(this.lastpostinthread&&(c.userid==this.author))){a.appendChild(domButton("C_b75","Delete","Delete post","/ico/16delete.png","javascript:"+this.objName+".del()"))}}}};for_Post.prototype.edit=function(){this.backup=this.eledtEdit.innerHTML;this.eledtEdit.innerHTML=T("Loading data. Please wait...");this.elButtons.style.display="none";var a=bindFunction(this,function(b){this.eledtEdit.innerHTML="";new BBEdit(this.eledtEdit,{content:b},this.httpcgi,{w:"edit",p:this.postid},bindFunction(this,this.editXHR))});xhrAsync(this.httpcgi+"?w=text&p="+this.postid,a)};for_Post.prototype.editXHR=function(a){if((!a)||(!this.redraw(a))){this.eledtEdit.innerHTML=this.backup;this.elButtons.style.display=""}};for_Post.prototype.report=function(){var a=prompt(T("REPORTING ABUSE: Please, describe the problem with this message:"),"");if(a){xhrAsync(this.httpcgi+"?w=report&p="+this.postid+"&why="+escape(a),bindFunction(this,this.redraw))}};for_Post.prototype.approve=function(){var a=prompt(T("APPROVE MESSAGE: Please, enter the reason (optional):"),"");xhrAsync(this.httpcgi+"?w=approve&p="+this.postid+"&why="+escape(a),bindFunction(this,this.redraw))};for_Post.prototype.filter=function(){var a=prompt(T("WARNING: This action will remove this post from the forum until a moderator can check at the issue.\n\n Please, describe the problem with this message:"),"");if(a){xhrAsync(this.httpcgi+"?w=filter&p="+this.postid+"&why="+escape(a),bindFunction(this,this.redraw))}};for_Post.prototype.del=function(){if(confirm("You are about to delete a post")){xhrAsync(this.httpcgi+"?w=del&p="+this.postid,bindFunction(this,this.redraw))}};for_Post.prototype.redraw=function(c){if(c){if(c.substr(0,5).toLowerCase()=="error"){alert(c);return false}else{var b=document.createElement("div");b.innerHTML=c;var a=b.firstChild;this.el.parentNode.replaceChild(a,this.el);this.el=a;this.parseHTML();this.cb_onSession.invoke();WhenAll();return true}}};