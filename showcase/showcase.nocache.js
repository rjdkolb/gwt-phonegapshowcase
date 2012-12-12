function showcase(){
  var $wnd_0 = window;
  var $doc_0 = document;
  sendStats('bootstrap', 'begin');
  function isHostedMode(){
    var query = $wnd_0.location.search;
    return query.indexOf('gwt.codesvr.showcase=') != -1 || query.indexOf('gwt.codesvr=') != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd_0.__gwtStatsEvent) {
      $wnd_0.__gwtStatsEvent({moduleName:'showcase', sessionId:$wnd_0.__gwtStatsSessionId, subSystem:'startup', evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  showcase.__sendStats = sendStats;
  showcase.__moduleName = 'showcase';
  showcase.__errFn = null;
  showcase.__moduleBase = 'DUMMY';
  showcase.__softPermutationId = 0;
  showcase.__computePropValue = null;
  var __gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  var __gwt_getMetaProperty = function(){
    return null;
  }
  ;
  __propertyErrorFunction = null;
  function installScript(filename){
    var frameDoc;
    function getInstallLocationDoc(){
      setupInstallLocation();
      return frameDoc;
    }

    function getInstallLocation(){
      setupInstallLocation();
      return frameDoc.getElementsByTagName('body')[0];
    }

    function setupInstallLocation(){
      if (frameDoc) {
        return;
      }
      var scriptFrame = $doc_0.createElement('iframe');
      scriptFrame.src = 'javascript:""';
      scriptFrame.id = 'showcase';
      scriptFrame.style.cssText = 'position:absolute; width:0; height:0; border:none; left: -1000px; top: -1000px; !important';
      scriptFrame.tabIndex = -1;
      $doc_0.body.appendChild(scriptFrame);
      frameDoc = scriptFrame.contentDocument;
      if (!frameDoc) {
        frameDoc = scriptFrame.contentWindow.document;
      }
      frameDoc.open();
      frameDoc.write('<html><head><\/head><body><\/body><\/html>');
      frameDoc.close();
      var frameDocbody = frameDoc.getElementsByTagName('body')[0];
      var script = frameDoc.createElement('script');
      script.language = 'javascript';
      var temp = 'var $wnd = window.parent;';
      script.text = temp;
      frameDocbody.appendChild(script);
    }

    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc_0.readyState == 'undefined') {
          return typeof $doc_0.body != 'undefined' && $doc_0.body != null;
        }
        return /loaded|complete/.test($doc_0.readyState);
      }

      var bodyDone = false;
      if (isBodyLoaded()) {
        bodyDone = true;
        callback();
      }
      var onBodyDoneTimerId;
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc_0.removeEventListener) {
            $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc_0.addEventListener) {
        $doc_0.addEventListener('DOMContentLoaded', function(){
          onBodyDone();
        }
        , false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , 50);
    }

    function installCode(code){
      var docbody = getInstallLocation();
      var script = getInstallLocationDoc().createElement('script');
      script.language = 'javascript';
      script.text = code;
      docbody.appendChild(script);
    }

    showcase.onScriptDownloaded = function(code){
      setupWaitForBodyLoad(function(){
        installCode(code);
      }
      );
    }
    ;
    sendStats('moduleStartup', 'moduleRequested');
    var script_0 = $doc_0.createElement('script');
    script_0.src = filename;
    $doc_0.getElementsByTagName('head')[0].appendChild(script_0);
  }

  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc_0.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_1 = meta.getAttribute('name'), content_0;
      if (name_1) {
        name_1 = name_1.replace('showcase::', '');
        if (name_1.indexOf('::') >= 0) {
          continue;
        }
        if (name_1 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value_0, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_1 = content_0.substring(0, eq);
              value_0 = content_0.substring(eq + 1);
            }
             else {
              name_1 = content_0;
              value_0 = '';
            }
            metaProps[name_1] = value_0;
          }
        }
         else if (name_1 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_1 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value = metaProps[name_0];
      return value == null?null:value;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    showcase.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    function ensureAbsoluteUrl(url){
      if (url.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc_0.createElement('img');
        img.src = url + 'clear.cache.gif';
        url = getDirectoryOfFile(img.src);
      }
      return url;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty('baseUrl');
      if (metaVal != null) {
        return metaVal;
      }
      return '';
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc_0.getElementsByTagName('script');
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf('showcase.nocache.js') != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return '';
    }

    function tryBaseTag(){
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return '';
    }

    var tempBase = tryMetaTag();
    if (tempBase == '') {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == '') {
      tempBase = tryBaseTag();
    }
    if (tempBase == '') {
      tempBase = getDirectoryOfFile($doc_0.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return showcase.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId;
    function unflattenKeylistIntoAnswers(propValArray, value){
      var answer = answers;
      for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value = providers[propName](), allowedValuesMap = values[propName];
      if (value in allowedValuesMap) {
        return value;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunc) {
        __propertyErrorFunc(propName, allowedValuesList, value);
      }
      throw null;
    }

    providers['mgwt.os'] = function(){
      {
        var mgwt_os = function(){
          var ua = window.navigator.userAgent.toLowerCase();
          if (ua.indexOf('android') != -1) {
            if (ua.indexOf('mobile') != -1) {
              return 'android';
            }
             else {
              return 'android_tablet';
            }
          }
          if (ua.indexOf('ipad') != -1) {
            if (window.devicePixelRatio >= 2) {
              return 'ipad_retina';
            }
            return 'ipad';
          }
          if (ua.indexOf('iphone') != -1 || ua.indexOf('ipod') != -1) {
            if (window.devicePixelRatio >= 2) {
              return 'retina';
            }
            return 'iphone';
          }
          if (ua.indexOf('blackberry') != -1) {
            return 'blackberry';
          }
          return 'desktop';
        }
        ();
        return mgwt_os;
      }
    }
    ;
    values['mgwt.os'] = {android:0, android_tablet:1, blackberry:2, desktop:3, ipad:4, ipad_retina:5, iphone:6, retina:7};
    providers['mobile.user.agent'] = function(){
      {
        var user_agent = function(){
          var ua = window.navigator.userAgent.toLowerCase();
          if (ua.indexOf('android') != -1) {
            return 'mobilesafari';
          }
          if (ua.indexOf('iphone') != -1) {
            return 'mobilesafari';
          }
          if (ua.indexOf('ipod') != -1) {
            return 'mobilesafari';
          }
          if (ua.indexOf('ipad') != -1) {
            return 'mobilesafari';
          }
          if (ua.indexOf('blackberry') != -1) {
            return 'not_mobile';
          }
          return 'not_mobile';
        }
        ();
        return user_agent;
      }
    }
    ;
    values['mobile.user.agent'] = {mobilesafari:0, not_mobile:1};
    providers['phonegap.env'] = function(){
      {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.indexOf('android') != -1 || (ua.indexOf('ipad') != -1 || (ua.indexOf('ipod') != -1 || (ua.indexOf('iphone') != -1 || ua.indexOf('blackberry') != -1)))) {
          var url = document.location.href;
          if (url.indexOf('file://') === 0) {
            return 'yes';
          }
        }
        return 'no';
      }
    }
    ;
    values['phonegap.env'] = {no:0, yes:1};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    showcase.__computePropValue = computePropValue;
    sendStats('bootstrap', 'selectingPermutation');
    if (isHostedMode()) {
      return computeUrlForResource('showcase.devmode.js');
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers(['iphone', 'mobilesafari', 'no'], '0536983F9867093E563D4705148B36F6');
      unflattenKeylistIntoAnswers(['android', 'mobilesafari', 'no'], '0C2CC2EC65D5B80DA917DF3023CB5B2B');
      unflattenKeylistIntoAnswers(['android_tablet', 'mobilesafari', 'yes'], '12C684A847366A9A6C6BB777A40390D7');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'yes'], '1EC52E69295B8AB17D17E22D0258F104');
      unflattenKeylistIntoAnswers(['ipad_retina', 'mobilesafari', 'yes'], '2A6D61259E8F4974DA6D7D6BB0EF5848');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'no'], '2AB540EC3409DD1E17E285A6B348C305');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'no'], '2B9F75DB1F77174E50522343B71881DB');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'no'], '35AA27A7581E9E7BAF37C7FDE30DFF3D');
      unflattenKeylistIntoAnswers(['android', 'mobilesafari', 'yes'], '36420FDF10CDB40320B581E0B5305A97');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'yes'], '382AFDF1E9882A3DC20968A98F178C6D');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'no'], '3FDBEAB478609A816947CA07E45DD163');
      unflattenKeylistIntoAnswers(['ipad_retina', 'not_mobile', 'no'], '45CCFD5548A9BDED5213D528F1D33B5B');
      unflattenKeylistIntoAnswers(['ipad_retina', 'mobilesafari', 'no'], '48959457B0A77A7DDF01F60483370266');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'no'], '4E4BCB4ADA2D852E679EEA25587E461E');
      unflattenKeylistIntoAnswers(['blackberry', 'mobilesafari', 'no'], '569345E60656977C5A3294795867391C');
      unflattenKeylistIntoAnswers(['ipad_retina', 'not_mobile', 'yes'], '62C572B214605FC03268D71AEBF6BF1B');
      unflattenKeylistIntoAnswers(['iphone', 'mobilesafari', 'yes'], '73AED389AA4E7555D83C53D27EC239C9');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'no'], '79BCD99987C0100A2AF2CA3A54C73BED');
      unflattenKeylistIntoAnswers(['retina', 'mobilesafari', 'yes'], '7A717983349C5691C5710473B089B955');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'yes'], '93831B021691A5F950F73E62426D4B3B');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'yes'], '98E2A570356F7260142C9C3C03C067DB');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'yes'], '99BEDCE845FDFEAECE596C4047EE8627');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'yes'], '9D1169B56CD9518E68409F02D0F5E0A7');
      unflattenKeylistIntoAnswers(['ipad', 'mobilesafari', 'yes'], 'AAA2957CD50C73021D9682714D244026');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'no'], 'BFB364C1BA44D798F808D194A6519FE7');
      unflattenKeylistIntoAnswers(['blackberry', 'mobilesafari', 'yes'], 'C84D1CE2B012FE6B4D6CA33C14324A12');
      unflattenKeylistIntoAnswers(['desktop', 'mobilesafari', 'no'], 'CBC960DF95DDE4F1B009E4702E68B315');
      unflattenKeylistIntoAnswers(['ipad', 'mobilesafari', 'no'], 'D4B85F358967A4196D68AB814A4793FF');
      unflattenKeylistIntoAnswers(['retina', 'mobilesafari', 'no'], 'D827DC96818D37E49C1EC4827D6E786F');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'yes'], 'DEF059395A9BE7DEB54008D72F2938EF');
      unflattenKeylistIntoAnswers(['android_tablet', 'mobilesafari', 'no'], 'E3B99A9EE3B64E6278AA74A67A67CEBF');
      unflattenKeylistIntoAnswers(['desktop', 'mobilesafari', 'yes'], 'FDB388B06488B342678813F9E2E63454');
      strongName = answers[computePropValue('mgwt.os')][computePropValue('mobile.user.agent')][computePropValue('phonegap.env')];
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = strongName.substring(idx + 1);
        strongName = strongName.substring(0, idx);
      }
    }
     catch (e) {
    }
    showcase.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + '.cache.js');
  }

  function loadExternalStylesheets(){
    if (!$wnd_0.__gwt_stylesLoaded) {
      $wnd_0.__gwt_stylesLoaded = {};
    }
    sendStats('loadExternalRefs', 'begin');
    sendStats('loadExternalRefs', 'end');
  }

  processMetas();
  showcase.__moduleBase = computeScriptBase();
  var filename_0 = getCompiledCodeFilename();
  loadExternalStylesheets();
  sendStats('bootstrap', 'end');
  installScript(filename_0);
}

showcase();
