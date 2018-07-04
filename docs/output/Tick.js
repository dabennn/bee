Ext.data.JsonP.Tick({"tagname":"class","name":"Tick","autodetected":{},"files":[{"filename":"z.js","href":"z.html#Tick"}],"params":[{"tagname":"params","doc":"<p>同Date类接受的参数\n@example\nnew Tick(Date.now()).format('YYYY-MM-DD')\nnew Tick(Date.now()).getMap()\nnew Tick(Date.now()).getDiff()</p>\n"}],"members":[{"name":"format","tagname":"method","owner":"Tick","id":"method-format","meta":{}},{"name":"getDiff","tagname":"method","owner":"Tick","id":"method-getDiff","meta":{}},{"name":"getMap","tagname":"method","owner":"Tick","id":"method-getMap","meta":{}},{"name":"isBefore","tagname":"method","owner":"Tick","id":"method-isBefore","meta":{}},{"name":"isLeapYear","tagname":"method","owner":"Tick","id":"method-isLeapYear","meta":{}},{"name":"offset","tagname":"method","owner":"Tick","id":"method-offset","meta":{}},{"name":"versionCompare","tagname":"method","owner":"Tick","id":"method-versionCompare","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Tick","short_doc":"Tick 日期处理 ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/z.html#Tick' target='_blank'>z.js</a></div></pre><div class='doc-contents'><p>Tick 日期处理</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'></span> : <div class='sub-desc'><p>同Date类接受的参数\n@example\nnew Tick(Date.now()).format('YYYY-MM-DD')\nnew Tick(Date.now()).getMap()\nnew Tick(Date.now()).getDiff()</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-format' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tick'>Tick</span><br/><a href='source/z.html#Tick-method-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tick-method-format' class='name expandable'>format</a>( <span class='pre'>timeTpl</span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>格式化时间 ...</div><div class='long'><p>格式化时间</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timeTpl</span> : string<div class='sub-desc'><p>日期格式化模板字符串 Y-年 M-月 D-日 h-时 m-分 s-秒</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>格式化后的字符串</p>\n</div></li></ul></div></div></div><div id='method-getDiff' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tick'>Tick</span><br/><a href='source/z.html#Tick-method-getDiff' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tick-method-getDiff' class='name expandable'>getDiff</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>多久前 用于评论等显示 \"多久前\" ...</div><div class='long'><p>多久前 用于评论等显示 \"多久前\"</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>多久前的字符串 \"刚刚\" \"2天前\"</p>\n</div></li></ul></div></div></div><div id='method-getMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tick'>Tick</span><br/><a href='source/z.html#Tick-method-getMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tick-method-getMap' class='name expandable'>getMap</a>( <span class='pre'></span> ) : object<span class=\"signature\"></span></div><div class='description'><div class='short'>获取对象形式的时间解析结果 ...</div><div class='long'><p>获取对象形式的时间解析结果</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>object</span><div class='sub-desc'><p>包含具体时间解析的对象</p>\n</div></li></ul></div></div></div><div id='method-isBefore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tick'>Tick</span><br/><a href='source/z.html#Tick-method-isBefore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tick-method-isBefore' class='name expandable'>isBefore</a>( <span class='pre'>date</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>比较时间的三个方法\n@Author   daben&#x64;&#x61;&#98;&#x65;&#110;&#110;&#x6e;&#48;&#55;&#x40;&#x67;&#x6d;&#x61;&#x69;&#108;&#x2e...</div><div class='long'><p>比较时间的三个方法\n@Author   daben<a href=\"&#109;&#97;&#105;&#108;&#116;&#x6f;&#58;&#100;&#x61;&#x62;&#x65;&#110;&#110;&#x6e;&#48;&#55;&#64;&#x67;&#109;&#x61;&#105;&#108;&#x2e;&#99;&#x6f;&#109;\">&#x64;&#x61;&#98;&#x65;&#110;&#110;&#x6e;&#48;&#55;&#x40;&#x67;&#x6d;&#x61;&#x69;&#108;&#x2e;&#x63;&#111;&#109;</a>\n@DateTime 2018-05-21T23:22:08+0800</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : String|Number<div class='sub-desc'><p>任何可以被Date对象解析的时间</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isLeapYear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tick'>Tick</span><br/><a href='source/z.html#Tick-method-isLeapYear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tick-method-isLeapYear' class='name expandable'>isLeapYear</a>( <span class='pre'>year</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>判断是否是闰年\n@Author   daben&#x64;&#x61;&#x62;&#x65;&#x6e;&#x6e;&#110;&#48;&#55;&#x40;&#103;&#x6d;&#x61;&#x69;&#x6c;&#46;&...</div><div class='long'><p>判断是否是闰年\n@Author   daben<a href=\"&#109;&#x61;&#105;&#x6c;&#x74;&#111;&#x3a;&#x64;&#x61;&#x62;&#x65;&#x6e;&#x6e;&#110;&#x30;&#55;&#64;&#x67;&#x6d;&#x61;&#105;&#x6c;&#46;&#x63;&#111;&#x6d;\">&#x64;&#x61;&#x62;&#x65;&#x6e;&#x6e;&#110;&#48;&#55;&#x40;&#103;&#x6d;&#x61;&#x69;&#x6c;&#46;&#x63;&#111;&#109;</a>\n@DateTime 2018-05-22T00:06:59+0800</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>year</span> : Number<div class='sub-desc'><p>年份</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-offset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tick'>Tick</span><br/><a href='source/z.html#Tick-method-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tick-method-offset' class='name expandable'>offset</a>( <span class='pre'>offset</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>计算多久之前或后一段时间 ...</div><div class='long'><p>计算多久之前或后一段时间</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>offset</span> : string<div class='sub-desc'><p>之前或之后多少时间</p>\n</div></li></ul></div></div></div><div id='method-versionCompare' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Tick'>Tick</span><br/><a href='source/z.html#Tick-method-versionCompare' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Tick-method-versionCompare' class='name expandable'>versionCompare</a>( <span class='pre'>v1, symbol, v2</span> ) : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>版本号比较 ...</div><div class='long'><p>版本号比较</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v1</span> : String<div class='sub-desc'><p>版本号</p>\n</div></li><li><span class='pre'>symbol</span> : String<div class='sub-desc'><p>比较符号 '=' '>' '&lt;' '>='  '&lt;='</p>\n</div></li><li><span class='pre'>v2</span> : String<div class='sub-desc'><p>版本号</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});