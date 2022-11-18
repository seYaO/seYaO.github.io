import{_ as n,o as a,c as s,e}from"./app.3b2d76f3.js";const t={},c=e(`<h1 id="offline-\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#offline-\u5E94\u7528" aria-hidden="true">#</a> Offline \u5E94\u7528</h1><p>Web \u5E94\u7528\u4E0D\u4EC5\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u7F13\u5B58\u8D44\u6E90\u6587\u4EF6\uFF08HTML\u3001CSS\u3001JS \u811A\u672C\u3001\u56FE\u7247\u7B49\uFF09\uFF0C\u8FD8\u53EF\u4EE5\u628A\u5E94\u7528\u672C\u8EAB\u50A8\u5B58\u5230\u6D4F\u89C8\u5668\u3002</p><p>\u7F13\u5B58\u7684\u8D44\u6E90\u6587\u4EF6\u5FC5\u987B\u5728\u7EBF\u4F7F\u7528\uFF0C\u53EA\u6709\u5148\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u7F51\u9875\uFF0C\u7136\u540E\u624D\u80FD\u4F7F\u7528\u672C\u5730\u7F13\u5B58\uFF1B\u4F46\u662F\uFF0C\u5E94\u7528\u4E00\u65E6\u50A8\u5B58\uFF0C\u5C31\u53EF\u4EE5\u79BB\u7EBF\u4F7F\u7528\u3002\u53E6\u5916\uFF0C\u7528\u6237\u5E38\u89C4\u6027\u5730\u6E05\u9664\u6D4F\u89C8\u5668\u7F13\u5B58\uFF0C\u5E76\u4E0D\u4F1A\u6E05\u9664\u50A8\u5B58\u7684\u5E94\u7528\uFF0C\u9664\u975E\u7528\u6237\u663E\u5F0F\u5730\u5378\u8F7D\u6216\u5220\u9664\u5B83\u4EEC\u3002</p><p>\u4E3A\u4E86\u5F00\u542F\u79BB\u7EBF\u50A8\u5B58\uFF0C\u5FC5\u987B\u521B\u5EFA\u4E00\u4E2A manifest \u6587\u4EF6\u3002\u8BE5\u6587\u4EF6\u5217\u51FA\u4E86\u6240\u6709\u9700\u8981\u50A8\u5B58\u7684\u6587\u4EF6\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>CACHE MANIFEST
myapp.html
myapp.js
myapp.css
images/background.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Manifest \u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u5FC5\u987B\u662F<code>CACHE MANIFEST</code>\u3002\u7136\u540E\uFF0C\u6BCF\u4E00\u884C\u5217\u51FA\u4E00\u4E2A\u9700\u8981\u50A8\u5B58\u7684\u6587\u4EF6\uFF0C\u5B83\u4EEC\u7684\u4F4D\u7F6E\u90FD\u662F\u76F8\u5BF9\u4E8E Manifest \u6587\u4EF6\u7684\u4F4D\u7F6E\u3002\u7A7A\u884C\u4F1A\u88AB\u5FFD\u7565\uFF0C\u4EE5<code>#</code>\u5F00\u5934\u7684\u884C\u662F\u6CE8\u91CA\uFF0C\u4E5F\u4F1A\u88AB\u5FFD\u7565\u3002</p><p>\u8FD9\u4E2A\u6587\u4EF6\u7684\u540E\u7F00\u540D\u4E00\u822C\u662F<code>.appcache</code>\u3002\u5B83\u7684 MIME \u7C7B\u578B\u5FC5\u987B\u662F<code>text/cache-manifest</code>\uFF0C\u5982\u679C\u670D\u52A1\u5668\u5C06\u5176\u8BBE\u4E3A\u5176\u4ED6\u7C7B\u578B\uFF0C\u5C31\u4E0D\u4F1A\u88AB\u6D4F\u89C8\u5668\u7F13\u5B58\u3002</p><p>\u7F16\u5199\u5B8C\u8FD9\u4E2A\u6587\u4EF6\u4EE5\u540E\uFF0C\u8981\u5C06<code>&lt;html&gt;</code>\u5143\u7D20\u7684<code>manifest</code>\u5C5E\u6027\u6307\u5411\u5B83\u3002\u6D4F\u89C8\u5668\u52A0\u8F7D\u8FD9\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u8BFB\u53D6\u8FD9\u4E2A Manifest \u6587\u4EF6\uFF0C\u79BB\u7EBF\u50A8\u5B58\u8FD9\u4E2A\u7F51\u9875\u548C\u76F8\u5173\u7684\u8D44\u6E90\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">manifest</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myapp.appcache<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E00\u4E2A Web \u5E94\u7528\u6709\u591A\u4E2A\u7F51\u9875\u9700\u8981\u79BB\u7EBF\u50A8\u5B58\uFF0C\u90A3\u4E48\u6BCF\u4E2A\u7F51\u9875\u90FD\u5E94\u8BE5\u5C06<code>manifest</code>\u5C5E\u6027\u6307\u5411\u8FD9\u4E2A\u6587\u4EF6\u3002\u4E00\u65E6\u88AB\u50A8\u5B58\uFF0C\u4EE5\u540E\u52A0\u8F7D\u8BE5\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u4ECE\u7F13\u5B58\u91CC\u9762\u52A0\u8F7D\u3002\u8FD9\u65F6\uFF0C\u53EA\u6709 Manifest \u6587\u4EF6\u91CC\u9762\u5217\u51FA\u7684\u6587\u4EF6\u4F1A\u88AB\u52A0\u8F7D\uFF0C\u5176\u4ED6\u6587\u4EF6\u4E0D\u4F1A\u3002\u5982\u679C\u8FD9\u65F6\u6D4F\u89C8\u5668\u5728\u7EBF\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u53BB\u68C0\u67E5 Manifest \u6587\u4EF6\u662F\u5426\u6709\u65B0\u7248\u672C\uFF0C\u5982\u679C\u6709\u65B0\u7248\u672C\uFF0C\u5C31\u4F1A\u91CD\u65B0\u50A8\u5B58\u548C\u66F4\u65B0\u8BE5\u6587\u4EF6\u5217\u51FA\u7684\u8D44\u6E90\u3002\u6700\u65B9\u4FBF\u7684\u529E\u6CD5\u662F\u5728 Manifest \u6587\u4EF6\u91CC\u9762\u7528\u6CE8\u91CA\u5217\u51FA\u7248\u672C\u53F7\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>CACHE MANIFEST
# MyApp version 1
MyApp.html
MyApp.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u9700\u8981\u5220\u9664\u79BB\u7EBF\u50A8\u5B58\uFF0C\u53EA\u8981\u5220\u9664 Manifest \u6587\u4EF6\uFF0C\u8BA9\u5176\u8FD4\u56DE 404 \u72B6\u6001\u7801\u5373\u53EF\u3002</p><p>\u79BB\u7EBF\u50A8\u5B58\u66F4\u65B0\u5B8C\u6210\uFF0C\u4F1A\u89E6\u53D1\u6D4F\u89C8\u5668\u7684<code>updateready</code>\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u5BF9\u8FD9\u4E2A\u4E8B\u4EF6\u6307\u5B9A\u76D1\u542C\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>applicationCache<span class="token punctuation">.</span><span class="token function-variable function">onupdateready</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> reload <span class="token operator">=</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;\u65B0\u7248\u672C\u4E0B\u8F7D\u5B8C\u6210\u3002\u662F\u5426\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\uFF1F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>reload<span class="token punctuation">)</span> location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u811A\u672C\u53EF\u4EE5\u6CE8\u518C<code>online</code>\u548C<code>offline</code>\u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570\uFF0C\u901A\u8FC7<code>navigator.onLine</code>\u5C5E\u6027\uFF0C\u5224\u65AD\u6D4F\u89C8\u5668\u662F\u5426\u5728\u7EBF\u4ECE\u800C\u8FDB\u884C\u6570\u636E\u540C\u6B65\u3002</p><p>\u6BCF\u6B21\u6D4F\u89C8\u5668\u52A0\u8F7D\u4E00\u4E2A\u5177\u6709<code>manifest</code>\u5C5E\u6027\u7684\u7F51\u9875\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u89E6\u53D1\u4E00\u4E2A<code>checking</code>\u4E8B\u4EF6\uFF0C\u7136\u540E\u53BB\u52A0\u8F7D Manifest \u6587\u4EF6\u3002</p><ul><li>\u5982\u679C\u5E94\u7528\u5DF2\u7ECF\u50A8\u5B58\uFF0C\u5E76\u4E14 Manifest \u6587\u4EF6\u6CA1\u6709\u53D8\u5316\uFF0C\u90A3\u4E48\u89E6\u53D1<code>noupdate</code>\u4E8B\u4EF6\u3002</li><li>\u5982\u679C\u5E94\u7528\u5DF2\u7ECF\u50A8\u5B58\uFF0C\u5E76\u4E14 Manifest \u6587\u4EF6\u6709\u53D8\u5316\uFF0C\u90A3\u4E48\u89E6\u53D1<code>downloading</code>\u4E8B\u4EF6\uFF0C\u6D4F\u89C8\u5668\u91CD\u65B0\u4E0B\u8F7D\u6240\u6709\u79BB\u7EBF\u8D44\u6E90\u3002\u4E0B\u8F7D\u8FC7\u7A0B\u4E2D\uFF0C\u89E6\u53D1<code>progress</code>\u4E8B\u4EF6\uFF0C\u4E0B\u8F7D\u7ED3\u675F\u89E6\u53D1<code>updateready</code>\u4E8B\u4EF6\u3002</li><li>\u5982\u679C\u5E94\u7528\u6CA1\u6709\u50A8\u5B58\uFF0C\u4E0B\u8F7D\u7ED3\u675F\u5C06\u89E6\u53D1<code>cached</code>\u4E8B\u4EF6\u3002</li><li>\u5982\u679C\u79BB\u7EBF\uFF0C\u65E0\u6CD5\u68C0\u67E5 Manifest \u6587\u4EF6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u89E6\u53D1\u4E00\u4E2A<code>error</code>\u4E8B\u4EF6\u3002</li><li>\u5982\u679C\u6D4F\u89C8\u5668\u5728\u7EBF\uFF0C\u800C\u4E14\u5E94\u7528\u5DF2\u7ECF\u50A8\u5B58\uFF0C\u4F46\u662F Manifest \u6587\u4EF6\u8FD4\u56DE 404\uFF0C\u6D4F\u89C8\u5668\u89E6\u53D1<code>obsolete</code>\u4E8B\u4EF6\uFF0C\u5C06\u50A8\u5B58\u7684\u5E94\u7528\u79FB\u9664\u3002</li></ul><p>\u6240\u6709\u8FD9\u4E9B\u4E8B\u4EF6\u90FD\u662F\u53EF\u4EE5\u53D6\u6D88\u7684\u3002\u76D1\u542C\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE<code>false</code>\uFF0C\u53D6\u6D88\u8FD9\u4E9B\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u52A8\u4F5C\u3002</p><p><code>applicationCache. status</code>\u5C5E\u6027\u8FD4\u56DE\u79BB\u7EBF\u50A8\u5B58\u7684\u72B6\u6001\u3002</p><ul><li>ApplicationCache.UNCACHED (0) This application does not have a manifest attribute: it is not cached.</li><li>ApplicationCache.IDLE (1) The manifest has been checked and this application is cached and up to date.</li><li>ApplicationCache.CHECKING (2) The browser is checking the manifest file.</li><li>ApplicationCache.DOWNLOADING (3) The browser is downloading and caching files listed in the manifest.</li><li>ApplicationCache.UPDATEREADY (4) A new version of the application has been downloaded and cached.</li><li>ApplicationCache.OBSOLETE (5) The manifest no longer exists and the cache will be deleted.</li></ul>`,20),i=[c];function p(o,l){return a(),s("div",null,i)}const u=n(t,[["render",p],["__file","offline.html.vue"]]);export{u as default};
