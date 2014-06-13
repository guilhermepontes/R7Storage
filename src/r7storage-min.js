var R7Storage=function(){"use strict";var e={supportsLocalStorage:function(){try{return window.localStorage!=="undefined"}catch(e){return false}},set:function(e,t){if(!e||typeof t==="undefined"){throw new Error("R7Storage.set(key, value): You need to enter the {key} and the {value}!")}if(this.has(e)){this.delete(e)}if(!this.supportsLocalStorage()){document.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"}else{localStorage.setItem(e,t)}return true},get:function(e){if(!e){throw new Error("R7Storage.get(key): You need to enter the {key}!")}if(!this.has(e)){return false}var t;if(!this.supportsLocalStorage()){t=unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1"))}else{t=localStorage.getItem(e)}return t},"delete":function(e){if(!e){throw new Error("R7Storage.delete(key): You need to enter the {key}!")}if(!this.has(e)){return false}if(!this.supportsLocalStorage()){document.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"}else{localStorage.removeItem(e)}return true},has:function(e){if(!e){throw new Error("R7Storage.has(key): You need to enter the {key}!")}var t;if(!this.supportsLocalStorage()){t=(new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie)}else{t=localStorage.hasOwnProperty(e)}return t}};return e}()