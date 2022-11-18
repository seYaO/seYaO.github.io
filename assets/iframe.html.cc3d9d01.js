import{_ as a,o as n,c as e,e as s}from"./app.3b2d76f3.js";const t={},o=s(`<h1 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> iframe</h1><p><code>&lt;iframe&gt;</code>\u6807\u7B7E\u7528\u4E8E\u5728\u7F51\u9875\u91CC\u9762\u5D4C\u5165\u5176\u4ED6\u7F51\u9875\u3002</p><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h2><p><code>&lt;iframe&gt;</code>\u6807\u7B7E\u751F\u6210\u4E00\u4E2A\u6307\u5B9A\u533A\u57DF\uFF0C\u5728\u8BE5\u533A\u57DF\u4E2D\u5D4C\u5165\u5176\u4ED6\u7F51\u9875\u3002\u5B83\u662F\u4E00\u4E2A\u5BB9\u5668\u5143\u7D20\uFF0C\u5982\u679C\u6D4F\u89C8\u5668\u4E0D\u652F\u6301<code>&lt;iframe&gt;</code>\uFF0C\u5C31\u4F1A\u663E\u793A\u5185\u90E8\u7684\u5B50\u5143\u7D20\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.example.com<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">allowfullscreen</span> <span class="token attr-name">sandbox</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.example.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u51FB\u6253\u5F00\u5D4C\u5165\u9875\u9762<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u5728\u5F53\u524D\u7F51\u9875\u5D4C\u5165<code>https://www.example.com</code>\uFF0C\u663E\u793A\u533A\u57DF\u7684\u5BBD\u5EA6\u662F<code>100%</code>\uFF0C\u9AD8\u5EA6\u662F<code>500</code>\u50CF\u7D20\u3002\u5982\u679C\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301<code>&lt;iframe&gt;</code>\uFF0C\u5219\u4F1A\u663E\u793A\u4E00\u4E2A\u94FE\u63A5\uFF0C\u8BA9\u7528\u6237\u70B9\u51FB\u3002</p><p>\u6D4F\u89C8\u5668\u666E\u904D\u652F\u6301<code>&lt;iframe&gt;</code>\uFF0C\u6240\u4EE5\u5185\u90E8\u7684\u5B50\u5143\u7D20\u53EF\u4EE5\u4E0D\u5199\u3002</p><p><code>&lt;iframe&gt;</code>\u7684\u5C5E\u6027\u5982\u4E0B\u3002</p><ul><li><code>allowfullscreen</code>\uFF1A\u5141\u8BB8\u5D4C\u5165\u7684\u7F51\u9875\u5168\u5C4F\u663E\u793A\uFF0C\u9700\u8981\u5168\u5C4F API \u7684\u652F\u6301\uFF0C\u8BF7\u53C2\u8003\u76F8\u5173\u7684 JavaScript \u6559\u7A0B\u3002</li><li><code>frameborder</code>\uFF1A\u662F\u5426\u7ED8\u5236\u8FB9\u6846\uFF0C<code>0</code>\u4E3A\u4E0D\u7ED8\u5236\uFF0C<code>1</code>\u4E3A\u7ED8\u5236\uFF08\u9ED8\u8BA4\u503C\uFF09\u3002\u5EFA\u8BAE\u5C3D\u91CF\u5C11\u7528\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u800C\u662F\u5728 CSS \u91CC\u9762\u8BBE\u7F6E\u6837\u5F0F\u3002</li><li><code>src</code>\uFF1A\u5D4C\u5165\u7684\u7F51\u9875\u7684 URL\u3002</li><li><code>width</code>\uFF1A\u663E\u793A\u533A\u57DF\u7684\u5BBD\u5EA6\u3002</li><li><code>height</code>\uFF1A\u663E\u793A\u533A\u57DF\u7684\u9AD8\u5EA6\u3002</li><li><code>sandbox</code>\uFF1A\u8BBE\u7F6E\u5D4C\u5165\u7684\u7F51\u9875\u7684\u6743\u9650\uFF0C\u8BE6\u89C1\u4E0B\u6587\u3002</li><li><code>importance</code>\uFF1A\u6D4F\u89C8\u5668\u4E0B\u8F7D\u5D4C\u5165\u7684\u7F51\u9875\u7684\u4F18\u5148\u7EA7\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E09\u4E2A\u503C\u3002<code>high</code>\u8868\u793A\u9AD8\u4F18\u5148\u7EA7\uFF0C<code>low</code>\u8868\u793A\u4F4E\u4F18\u5148\u7EA7\uFF0C<code>auto</code>\u8868\u793A\u7531\u6D4F\u89C8\u5668\u81EA\u884C\u51B3\u5B9A\u3002</li><li><code>name</code>\uFF1A\u5185\u5D4C\u7A97\u53E3\u7684\u540D\u79F0\uFF0C\u53EF\u4EE5\u7528\u4E8E<code>&lt;a&gt;</code>\u3001<code>&lt;form&gt;</code>\u3001<code>&lt;base&gt;</code>\u7684<code>target</code>\u5C5E\u6027\u3002</li><li><code>referrerpolicy</code>\uFF1A\u8BF7\u6C42\u5D4C\u5165\u7F51\u9875\u65F6\uFF0CHTTP \u8BF7\u6C42\u7684<code>Referer</code>\u5B57\u6BB5\u7684\u8BBE\u7F6E\u3002\u53C2\u89C1<code>&lt;a&gt;</code>\u6807\u7B7E\u7684\u4ECB\u7ECD\u3002</li></ul><h2 id="sandbox-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#sandbox-\u5C5E\u6027" aria-hidden="true">#</a> sandbox \u5C5E\u6027</h2><p>\u5D4C\u5165\u7684\u7F51\u9875\u9ED8\u8BA4\u5177\u6709\u6B63\u5E38\u6743\u9650\uFF0C\u6BD4\u5982\u6267\u884C\u811A\u672C\u3001\u63D0\u4EA4\u8868\u5355\u3001\u5F39\u51FA\u7A97\u53E3\u7B49\u3002\u5982\u679C\u5D4C\u5165\u7684\u7F51\u9875\u662F\u5176\u4ED6\u7F51\u7AD9\u7684\u9875\u9762\uFF0C\u4F60\u4E0D\u4E86\u89E3\u5BF9\u65B9\u4F1A\u6267\u884C\u4EC0\u4E48\u64CD\u4F5C\uFF0C\u56E0\u6B64\u5C31\u5B58\u5728\u5B89\u5168\u98CE\u9669\u3002\u4E3A\u4E86\u9650\u5236<code>&lt;iframe&gt;</code>\u7684\u98CE\u9669\uFF0CHTML \u63D0\u4F9B\u4E86<code>sandbox</code>\u5C5E\u6027\uFF0C\u5141\u8BB8\u8BBE\u7F6E\u5D4C\u5165\u7684\u7F51\u9875\u7684\u6743\u9650\uFF0C\u7B49\u540C\u4E8E\u63D0\u4F9B\u4E86\u4E00\u4E2A\u9694\u79BB\u5C42\uFF0C\u5373\u201C\u6C99\u7BB1\u201D\u3002</p><p><code>sandbox</code>\u53EF\u4EE5\u5F53\u4F5C\u5E03\u5C14\u5C5E\u6027\u4F7F\u7528\uFF0C\u8868\u793A\u6253\u5F00\u6240\u6709\u9650\u5236\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.example.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">sandbox</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>sandbox</code>\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5177\u4F53\u7684\u503C\uFF0C\u8868\u793A\u9010\u9879\u6253\u5F00\u9650\u5236\u3002\u672A\u8BBE\u7F6E\u67D0\u4E00\u9879\uFF0C\u5C31\u8868\u793A\u4E0D\u5177\u6709\u8BE5\u6743\u9650\u3002</p><ul><li><code>allow-forms</code>\uFF1A\u5141\u8BB8\u63D0\u4EA4\u8868\u5355\u3002</li><li><code>allow-modals</code>\uFF1A\u5141\u8BB8\u63D0\u793A\u6846\uFF0C\u5373\u5141\u8BB8\u6267\u884C<code>window.alert()</code>\u7B49\u4F1A\u4EA7\u751F\u5F39\u51FA\u63D0\u793A\u6846\u7684 JavaScript \u65B9\u6CD5\u3002</li><li><code>allow-popups</code>\uFF1A\u5141\u8BB8\u5D4C\u5165\u7684\u7F51\u9875\u4F7F\u7528<code>window.open()</code>\u65B9\u6CD5\u5F39\u51FA\u7A97\u53E3\u3002</li><li><code>allow-popups-to-escape-sandbox</code>\uFF1A\u5141\u8BB8\u5F39\u51FA\u7A97\u53E3\u4E0D\u53D7\u6C99\u7BB1\u7684\u9650\u5236\u3002</li><li><code>allow-orientation-lock</code>\uFF1A\u5141\u8BB8\u5D4C\u5165\u7684\u7F51\u9875\u7528\u811A\u672C\u9501\u5B9A\u5C4F\u5E55\u7684\u65B9\u5411\uFF0C\u5373\u6A2A\u5C4F\u6216\u7AD6\u5C4F\u3002</li><li><code>allow-pointer-lock</code>\uFF1A\u5141\u8BB8\u5D4C\u5165\u7684\u7F51\u9875\u4F7F\u7528 Pointer Lock API\uFF0C\u9501\u5B9A\u9F20\u6807\u7684\u79FB\u52A8\u3002</li><li><code>allow-presentation</code>\uFF1A\u5141\u8BB8\u5D4C\u5165\u7684\u7F51\u9875\u4F7F\u7528 Presentation API\u3002</li><li><code>allow-same-origin</code>\uFF1A\u4E0D\u6253\u5F00\u8BE5\u9879\u9650\u5236\uFF0C\u5C06\u4F7F\u5F97\u6240\u6709\u52A0\u8F7D\u7684\u7F51\u9875\u90FD\u89C6\u4E3A\u8DE8\u57DF\u3002</li><li><code>allow-scripts</code>\uFF1A\u5141\u8BB8\u5D4C\u5165\u7684\u7F51\u9875\u8FD0\u884C\u811A\u672C\uFF08\u4F46\u4E0D\u521B\u5EFA\u5F39\u51FA\u7A97\u53E3\uFF09\u3002</li><li><code>allow-storage-access-by-user-activation</code>\uFF1A<code>sandbox</code>\u5C5E\u6027\u540C\u65F6\u8BBE\u7F6E\u4E86\u8FD9\u4E2A\u503C\u548C<code>allow-same-origin</code>\u7684\u60C5\u51B5\u4E0B\uFF0C\u5141\u8BB8<code>&lt;iframe&gt;</code>\u5D4C\u5165\u7684\u7B2C\u4E09\u65B9\u7F51\u9875\u901A\u8FC7\u7528\u6237\u53D1\u8D77<code>document.requestStorageAccess()</code>\u8BF7\u6C42\uFF0C\u7ECF\u7531 Storage Access API \u8BBF\u95EE\u7236\u7A97\u53E3\u7684 Cookie\u3002</li><li><code>allow-top-navigation</code>\uFF1A\u5141\u8BB8\u5D4C\u5165\u7684\u7F51\u9875\u5BF9\u9876\u7EA7\u7A97\u53E3\u8FDB\u884C\u5BFC\u822A\u3002</li><li><code>allow-top-navigation-by-user-activation</code>\uFF1A\u5141\u8BB8\u5D4C\u5165\u7684\u7F51\u9875\u5BF9\u9876\u7EA7\u7A97\u53E3\u8FDB\u884C\u5BFC\u822A\uFF0C\u4F46\u5FC5\u987B\u7531\u7528\u6237\u6FC0\u6D3B\u3002</li><li><code>allow-downloads-without-user-activation</code>\uFF1A\u5141\u8BB8\u5728\u6CA1\u6709\u7528\u6237\u6FC0\u6D3B\u7684\u60C5\u51B5\u4E0B\uFF0C\u5D4C\u5165\u7684\u7F51\u9875\u542F\u52A8\u4E0B\u8F7D\u3002</li></ul><p>\u6CE8\u610F\uFF0C\u4E0D\u8981\u540C\u65F6\u8BBE\u7F6E<code>allow-scripts</code>\u548C<code>allow-same-origin</code>\u5C5E\u6027\uFF0C\u8FD9\u5C06\u4F7F\u5F97\u5D4C\u5165\u7684\u7F51\u9875\u53EF\u4EE5\u6539\u53D8\u6216\u5220\u9664<code>sandbox</code>\u5C5E\u6027\u3002</p><h2 id="loading-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#loading-\u5C5E\u6027" aria-hidden="true">#</a> loading \u5C5E\u6027</h2><p><code>&lt;iframe&gt;</code>\u6307\u5B9A\u7684\u7F51\u9875\u4F1A\u7ACB\u5373\u52A0\u8F7D\uFF0C\u6709\u65F6\u8FD9\u4E0D\u662F\u5E0C\u671B\u7684\u884C\u4E3A\u3002<code>&lt;iframe&gt;</code>\u6EDA\u52A8\u8FDB\u5165\u89C6\u53E3\u4EE5\u540E\u518D\u52A0\u8F7D\uFF0C\u8FD9\u6837\u4F1A\u6BD4\u8F83\u8282\u7701\u5E26\u5BBD\u3002</p><p><code>loading</code>\u5C5E\u6027\u53EF\u4EE5\u89E6\u53D1<code>&lt;iframe&gt;</code>\u7F51\u9875\u7684\u61D2\u52A0\u8F7D\u3002\u8BE5\u5C5E\u6027\u53EF\u4EE5\u53D6\u4EE5\u4E0B\u4E09\u4E2A\u503C\u3002</p><ul><li><code>auto</code>\uFF1A\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4E0E\u4E0D\u4F7F\u7528<code>loading</code>\u5C5E\u6027\u6548\u679C\u76F8\u540C\u3002</li><li><code>lazy</code>\uFF1A<code>&lt;iframe&gt;</code>\u7684\u61D2\u52A0\u8F7D\uFF0C\u5373\u5C06\u6EDA\u52A8\u8FDB\u5165\u89C6\u53E3\u65F6\u5F00\u59CB\u52A0\u8F7D\u3002</li><li><code>eager</code>\uFF1A\u7ACB\u5373\u52A0\u8F7D\u8D44\u6E90\uFF0C\u65E0\u8BBA\u5728\u9875\u9762\u4E0A\u7684\u4F4D\u7F6E\u5982\u4F55\u3002</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://example.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lazy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4F1A\u542F\u7528<code>&lt;iframe&gt;</code>\u7684\u61D2\u52A0\u8F7D\u3002</p><p>\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\uFF0C\u5982\u679C<code>&lt;iframe&gt;</code>\u662F\u9690\u85CF\u7684\uFF0C\u5219<code>loading</code>\u5C5E\u6027\u65E0\u6548\uFF0C\u5C06\u4F1A\u7ACB\u5373\u52A0\u8F7D\u3002\u53EA\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u4EFB\u4E00\u4E2A\u6761\u4EF6\uFF0CChrome \u6D4F\u89C8\u5668\u5C31\u4F1A\u8BA4\u4E3A<code>&lt;iframe&gt;</code>\u662F\u9690\u85CF\u7684\u3002</p><blockquote><ul><li><code>&lt;iframe&gt;</code>\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u4E3A4\u50CF\u7D20\u6216\u66F4\u5C0F\u3002</li><li>\u6837\u5F0F\u8BBE\u4E3A<code>display: none</code>\u6216<code>visibility: hidden</code>\u3002</li><li>\u4F7F\u7528\u5B9A\u4F4D\u5750\u6807\u4E3A\u8D1F<code>X</code>\u6216\u8D1F<code>Y</code>\uFF0C\u5C06<code>&lt;iframe</code>&gt;\u653E\u7F6E\u5728\u5C4F\u5E55\u5916\u3002</li></ul></blockquote>`,24),c=[o];function l(p,d){return n(),e("div",null,c)}const u=a(t,[["render",l],["__file","iframe.html.vue"]]);export{u as default};
