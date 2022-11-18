import{_ as i,o as t,c as o,a as n,b as e,d as s,e as c,r as p}from"./app.3b2d76f3.js";const l={},d=c(`<h1 id="page-visibility-api" tabindex="-1"><a class="header-anchor" href="#page-visibility-api" aria-hidden="true">#</a> Page Visibility API</h1><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u6709\u65F6\u5019\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u77E5\u9053\uFF0C\u7528\u6237\u6B63\u5728\u79BB\u5F00\u9875\u9762\u3002\u5E38\u7528\u7684\u65B9\u6CD5\u662F\u76D1\u542C\u4E0B\u9762\u4E09\u4E2A\u4E8B\u4EF6\u3002</p><blockquote><ul><li><code>pagehide</code></li><li><code>beforeunload</code></li><li><code>unload</code></li></ul></blockquote><p>\u4F46\u662F\uFF0C\u8FD9\u4E9B\u4E8B\u4EF6\u5728\u624B\u673A\u4E0A\u53EF\u80FD\u4E0D\u4F1A\u89E6\u53D1\uFF0C\u9875\u9762\u5C31\u76F4\u63A5\u5173\u95ED\u4E86\u3002\u56E0\u4E3A\u624B\u673A\u7CFB\u7EDF\u53EF\u4EE5\u5C06\u4E00\u4E2A\u8FDB\u7A0B\u76F4\u63A5\u8F6C\u5165\u540E\u53F0\uFF0C\u7136\u540E\u6740\u6B7B\u3002</p><blockquote><ul><li>\u7528\u6237\u70B9\u51FB\u4E86\u4E00\u6761\u7CFB\u7EDF\u901A\u77E5\uFF0C\u5207\u6362\u5230\u53E6\u4E00\u4E2A App\u3002</li><li>\u7528\u6237\u8FDB\u5165\u4EFB\u52A1\u5207\u6362\u7A97\u53E3\uFF0C\u5207\u6362\u5230\u53E6\u4E00\u4E2A App\u3002</li><li>\u7528\u6237\u70B9\u51FB\u4E86 Home \u6309\u94AE\uFF0C\u5207\u6362\u56DE\u4E3B\u5C4F\u5E55\u3002</li><li>\u64CD\u4F5C\u7CFB\u7EDF\u81EA\u52A8\u5207\u6362\u5230\u53E6\u4E00\u4E2A App\uFF08\u6BD4\u5982\uFF0C\u6536\u5230\u4E00\u4E2A\u7535\u8BDD\uFF09\u3002</li></ul></blockquote><p>\u4E0A\u9762\u8FD9\u4E9B\u60C5\u51B5\uFF0C\u90FD\u4F1A\u5BFC\u81F4\u624B\u673A\u5C06\u6D4F\u89C8\u5668\u8FDB\u7A0B\u5207\u6362\u5230\u540E\u53F0\uFF0C\u7136\u540E\u4E3A\u4E86\u8282\u7701\u8D44\u6E90\uFF0C\u53EF\u80FD\u5C31\u4F1A\u6740\u6B7B\u6D4F\u89C8\u5668\u8FDB\u7A0B\u3002</p><p>\u4EE5\u524D\uFF0C\u9875\u9762\u88AB\u7CFB\u7EDF\u5207\u6362\uFF0C\u4EE5\u53CA\u7CFB\u7EDF\u6E05\u9664\u6D4F\u89C8\u5668\u8FDB\u7A0B\uFF0C\u662F\u65E0\u6CD5\u76D1\u542C\u5230\u7684\u3002\u5F00\u53D1\u8005\u60F3\u8981\u6307\u5B9A\uFF0C\u4EFB\u4F55\u4E00\u79CD\u9875\u9762\u5378\u8F7D\u60C5\u51B5\u4E0B\u90FD\u4F1A\u6267\u884C\u7684\u4EE3\u7801\uFF0C\u4E5F\u662F\u65E0\u6CD5\u505A\u5230\u7684\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5C31\u8BDE\u751F\u4E86 Page Visibility API\u3002\u4E0D\u7BA1\u624B\u673A\u6216\u684C\u9762\u7535\u8111\uFF0C\u6240\u6709\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A API \u90FD\u4F1A\u76D1\u542C\u5230\u9875\u9762\u7684\u53EF\u89C1\u6027\u53D1\u751F\u53D8\u5316\u3002</p><p>\u8FD9\u4E2A\u65B0\u7684 API \u7684\u610F\u4E49\u5728\u4E8E\uFF0C\u901A\u8FC7\u76D1\u542C\u7F51\u9875\u7684\u53EF\u89C1\u6027\uFF0C\u53EF\u4EE5\u9884\u5224\u7F51\u9875\u7684\u5378\u8F7D\uFF0C\u8FD8\u53EF\u4EE5\u7528\u6765\u8282\u7701\u8D44\u6E90\uFF0C\u51CF\u7F13\u7535\u80FD\u7684\u6D88\u8017\u3002\u6BD4\u5982\uFF0C\u4E00\u65E6\u7528\u6237\u4E0D\u770B\u7F51\u9875\uFF0C\u4E0B\u9762\u8FD9\u4E9B\u7F51\u9875\u884C\u4E3A\u90FD\u662F\u53EF\u4EE5\u6682\u505C\u7684\u3002</p><blockquote><ul><li>\u5BF9\u670D\u52A1\u5668\u7684\u8F6E\u8BE2</li><li>\u7F51\u9875\u52A8\u753B</li><li>\u6B63\u5728\u64AD\u653E\u7684\u97F3\u9891\u6216\u89C6\u9891</li></ul></blockquote><h2 id="document-visibilitystate" tabindex="-1"><a class="header-anchor" href="#document-visibilitystate" aria-hidden="true">#</a> document.visibilityState</h2><p>\u8FD9\u4E2A API \u4E3B\u8981\u5728<code>document</code>\u5BF9\u8C61\u4E0A\uFF0C\u65B0\u589E\u4E86\u4E00\u4E2A<code>document.visibilityState</code>\u5C5E\u6027\u3002\u8BE5\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u9875\u9762\u5F53\u524D\u7684\u53EF\u89C1\u6027\u72B6\u6001\uFF0C\u5171\u6709\u4E09\u4E2A\u53EF\u80FD\u7684\u503C\u3002</p><blockquote><ul><li><code>hidden</code>\uFF1A\u9875\u9762\u5F7B\u5E95\u4E0D\u53EF\u89C1\u3002</li><li><code>visible</code>\uFF1A\u9875\u9762\u81F3\u5C11\u4E00\u90E8\u5206\u53EF\u89C1\u3002</li><li><code>prerender</code>\uFF1A\u9875\u9762\u5373\u5C06\u6216\u6B63\u5728\u6E32\u67D3\uFF0C\u5904\u4E8E\u4E0D\u53EF\u89C1\u72B6\u6001\u3002</li></ul></blockquote><p>\u5176\u4E2D\uFF0C<code>hidden</code>\u72B6\u6001\u548C<code>visible</code>\u72B6\u6001\u662F\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u5FC5\u987B\u652F\u6301\u7684\u3002<code>prerender</code>\u72B6\u6001\u53EA\u5728\u652F\u6301\u201C\u9884\u6E32\u67D3\u201D\u7684\u6D4F\u89C8\u5668\u4E0A\u624D\u4F1A\u51FA\u73B0\uFF0C\u6BD4\u5982 Chrome \u6D4F\u89C8\u5668\u5C31\u6709\u9884\u6E32\u67D3\u529F\u80FD\uFF0C\u53EF\u4EE5\u5728\u7528\u6237\u4E0D\u53EF\u89C1\u7684\u72B6\u6001\u4E0B\uFF0C\u9884\u5148\u628A\u9875\u9762\u6E32\u67D3\u51FA\u6765\uFF0C\u7B49\u5230\u7528\u6237\u8981\u6D4F\u89C8\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u5C55\u793A\u6E32\u67D3\u597D\u7684\u7F51\u9875\u3002</p><p>\u53EA\u8981\u9875\u9762\u53EF\u89C1\uFF0C\u54EA\u6015\u53EA\u9732\u51FA\u4E00\u4E2A\u89D2\uFF0C<code>document.visibilityState</code>\u5C5E\u6027\u5C31\u8FD4\u56DE<code>visible</code>\u3002\u53EA\u6709\u4EE5\u4E0B\u56DB\u79CD\u60C5\u51B5\uFF0C\u624D\u4F1A\u8FD4\u56DE<code>hidden</code>\u3002</p><blockquote><ul><li>\u6D4F\u89C8\u5668\u6700\u5C0F\u5316\u3002</li><li>\u6D4F\u89C8\u5668\u6CA1\u6709\u6700\u5C0F\u5316\uFF0C\u4F46\u662F\u5F53\u524D\u9875\u9762\u5207\u6362\u6210\u4E86\u80CC\u666F\u9875\u3002</li><li>\u6D4F\u89C8\u5668\u5C06\u8981\u5378\u8F7D\uFF08unload\uFF09\u9875\u9762\u3002</li><li>\u64CD\u4F5C\u7CFB\u7EDF\u89E6\u53D1\u9501\u5C4F\u5C4F\u5E55\u3002</li></ul></blockquote><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4E0A\u9762\u56DB\u79CD\u573A\u666F\u6DB5\u76D6\u4E86\u9875\u9762\u53EF\u80FD\u88AB\u5378\u8F7D\u7684\u6240\u6709\u60C5\u51B5\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u9875\u9762\u5378\u8F7D\u4E4B\u524D\uFF0C<code>document.visibilityState</code>\u5C5E\u6027\u4E00\u5B9A\u4F1A\u53D8\u6210<code>hidden</code>\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u8FD9\u4E5F\u662F\u8BBE\u8BA1\u8FD9\u4E2A API \u7684\u4E3B\u8981\u76EE\u7684\u3002</p><p>\u53E6\u5916\uFF0C\u65E9\u671F\u7248\u672C\u7684 API\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u8FD8\u6709\u7B2C\u56DB\u4E2A\u503C<code>unloaded</code>\uFF0C\u8868\u793A\u9875\u9762\u5373\u5C06\u5378\u8F7D\uFF0C\u73B0\u5728\u5DF2\u7ECF\u88AB\u5E9F\u5F03\u4E86\u3002</p><p>\u6CE8\u610F\uFF0C<code>document.visibilityState</code>\u5C5E\u6027\u53EA\u9488\u5BF9\u9876\u5C42\u7A97\u53E3\uFF0C\u5185\u5D4C\u7684<code>&lt;iframe&gt;</code>\u9875\u9762\u7684<code>document.visibilityState</code>\u5C5E\u6027\u7531\u9876\u5C42\u7A97\u53E3\u51B3\u5B9A\u3002\u4F7F\u7528 CSS \u5C5E\u6027\u9690\u85CF<code>&lt;iframe&gt;</code>\u9875\u9762\uFF08\u6BD4\u5982<code>display: none;</code>\uFF09\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5185\u5D4C\u9875\u9762\u7684\u53EF\u89C1\u6027\u3002</p><h2 id="document-hidden" tabindex="-1"><a class="header-anchor" href="#document-hidden" aria-hidden="true">#</a> document.hidden</h2><p>\u7531\u4E8E\u5386\u53F2\u539F\u56E0\uFF0C\u8FD9\u4E2A API \u8FD8\u5B9A\u4E49\u4E86<code>document.hidden</code>\u5C5E\u6027\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5F53\u524D\u9875\u9762\u662F\u5426\u53EF\u89C1\u3002</p><p>\u5F53<code>document.visibilityState</code>\u5C5E\u6027\u8FD4\u56DE<code>visible</code>\u65F6\uFF0C<code>document.hidden</code>\u5C5E\u6027\u8FD4\u56DE<code>false</code>\uFF1B\u5176\u4ED6\u60C5\u51B5\u4E0B\uFF0C\u90FD\u8FD4\u56DE<code>true</code>\u3002</p><p>\u8BE5\u5C5E\u6027\u53EA\u662F\u51FA\u4E8E\u5386\u53F2\u539F\u56E0\u800C\u4FDD\u7559\u7684\uFF0C\u53EA\u8981\u6709\u53EF\u80FD\uFF0C\u90FD\u5E94\u8BE5\u4F7F\u7528<code>document.visibilityState</code>\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528\u8FD9\u4E2A\u5C5E\u6027\u3002</p><h2 id="visibilitychange-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#visibilitychange-\u4E8B\u4EF6" aria-hidden="true">#</a> visibilitychange \u4E8B\u4EF6</h2><p>\u53EA\u8981<code>document.visibilityState</code>\u5C5E\u6027\u53D1\u751F\u53D8\u5316\uFF0C\u5C31\u4F1A\u89E6\u53D1<code>visibilitychange</code>\u4E8B\u4EF6\u3002\u56E0\u6B64\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76D1\u542C\u8FD9\u4E2A\u4E8B\u4EF6\uFF08\u901A\u8FC7<code>document.addEventListener()</code>\u65B9\u6CD5\u6216<code>document.onvisibilitychange</code>\u5C5E\u6027\uFF09\uFF0C\u8DDF\u8E2A\u9875\u9762\u53EF\u89C1\u6027\u7684\u53D8\u5316\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;visibilitychange&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7528\u6237\u79BB\u5F00\u4E86\u5F53\u524D\u9875\u9762</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">&#39;hidden&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;\u9875\u9762\u4E0D\u53EF\u89C1&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7528\u6237\u6253\u5F00\u6216\u56DE\u5230\u9875\u9762</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">&#39;visible&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;\u9875\u9762\u53EF\u89C1&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u662F Page Visibility API \u7684\u6700\u57FA\u672C\u7528\u6CD5\uFF0C\u53EF\u4EE5\u76D1\u542C\u53EF\u89C1\u6027\u53D8\u5316\u3002</p><p>\u4E0B\u9762\u662F\u53E6\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u4E00\u65E6\u9875\u9762\u4E0D\u53EF\u89C1\uFF0C\u5C31\u6682\u505C\u89C6\u9891\u64AD\u653E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> vidElem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;video-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;visibilitychange&#39;</span><span class="token punctuation">,</span> startStopVideo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">startStopVideo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">&#39;hidden&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vidElem<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">&#39;visible&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vidElem<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9875\u9762\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u5378\u8F7D" aria-hidden="true">#</a> \u9875\u9762\u5378\u8F7D</h2><p>\u4E0B\u9762\u4E13\u95E8\u8BA8\u8BBA\u4E00\u4E0B\uFF0C\u5982\u4F55\u6B63\u786E\u76D1\u542C\u9875\u9762\u5378\u8F7D\u3002</p><p>\u9875\u9762\u5378\u8F7D\u53EF\u4EE5\u5206\u6210\u4E09\u79CD\u60C5\u51B5\u3002</p><blockquote><ul><li>\u9875\u9762\u53EF\u89C1\u65F6\uFF0C\u7528\u6237\u5173\u95ED Tab \u9875\u6216\u6D4F\u89C8\u5668\u7A97\u53E3\u3002</li><li>\u9875\u9762\u53EF\u89C1\u65F6\uFF0C\u7528\u6237\u5728\u5F53\u524D\u7A97\u53E3\u524D\u5F80\u53E6\u4E00\u4E2A\u9875\u9762\u3002</li><li>\u9875\u9762\u4E0D\u53EF\u89C1\u65F6\uFF0C\u7528\u6237\u6216\u7CFB\u7EDF\u5173\u95ED\u6D4F\u89C8\u5668\u7A97\u53E3\u3002</li></ul></blockquote><p>\u8FD9\u4E09\u79CD\u60C5\u51B5\uFF0C\u90FD\u4F1A\u89E6\u53D1<code>visibilitychange</code>\u4E8B\u4EF6\u3002\u524D\u4E24\u79CD\u60C5\u51B5\uFF0C\u8BE5\u4E8B\u4EF6\u5728\u7528\u6237\u79BB\u5F00\u9875\u9762\u65F6\u89E6\u53D1\uFF1B\u6700\u540E\u4E00\u79CD\u60C5\u51B5\uFF0C\u8BE5\u4E8B\u4EF6\u5728\u9875\u9762\u4ECE\u53EF\u89C1\u72B6\u6001\u53D8\u4E3A\u4E0D\u53EF\u89C1\u72B6\u6001\u65F6\u89E6\u53D1\u3002</p><p>\u7531\u6B64\u53EF\u89C1\uFF0C<code>visibilitychange</code>\u4E8B\u4EF6\u6BD4<code>pagehide</code>\u3001<code>beforeunload</code>\u3001<code>unload</code>\u4E8B\u4EF6\u66F4\u53EF\u9760\uFF0C\u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u4F1A\u89E6\u53D1\uFF08\u4ECE<code>visible</code>\u53D8\u4E3A<code>hidden</code>\uFF09\u3002\u56E0\u6B64\uFF0C\u53EF\u4EE5\u53EA\u76D1\u542C\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u8FD0\u884C\u9875\u9762\u5378\u8F7D\u65F6\u9700\u8981\u8FD0\u884C\u7684\u4EE3\u7801\uFF0C\u4E0D\u7528\u76D1\u542C\u540E\u9762\u90A3\u4E09\u4E2A\u4E8B\u4EF6\u3002</p><p>\u751A\u81F3\u53EF\u4EE5\u8FD9\u6837\u8BF4\uFF0C<code>unload</code>\u4E8B\u4EF6\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u4E0D\u5FC5\u76D1\u542C\uFF0C<code>beforeunload</code>\u4E8B\u4EF6\u53EA\u6709\u4E00\u79CD\u9002\u7528\u573A\u666F\uFF0C\u5C31\u662F\u7528\u6237\u4FEE\u6539\u4E86\u8868\u5355\uFF0C\u6CA1\u6709\u63D0\u4EA4\u5C31\u79BB\u5F00\u5F53\u524D\u9875\u9762\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u6307\u5B9A\u4E86\u8FD9\u4E24\u4E2A\u4E8B\u4EF6\u7684\u76D1\u542C\u51FD\u6570\uFF0C\u6D4F\u89C8\u5668\u5C31\u4E0D\u4F1A\u7F13\u5B58\u5F53\u524D\u9875\u9762\u3002</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,37),u={href:"https://w3c.github.io/page-visibility/",target:"_blank",rel:"noopener noreferrer"},r={href:"http://davidwalsh.name/page-visibility",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.html5rocks.com/en/tutorials/pagevisibility/intro/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/",target:"_blank",rel:"noopener noreferrer"};function h(m,g){const a=p("ExternalLinkIcon");return t(),o("div",null,[d,n("ul",null,[n("li",null,[n("a",u,[e("Page Visibility Level 2"),s(a)]),e(", W3C")]),n("li",null,[n("a",r,[e("Page Visibility API"),s(a)]),e(", David Walsh")]),n("li",null,[n("a",k,[e("Using the pageVisbility API"),s(a)]),e(", Joe Marini")]),n("li",null,[n("a",v,[e("Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 2"),s(a)]),e(", Jatinder Mann")]),n("li",null,[n("a",b,[e("Don't lose user and app state, use Page Visibility"),s(a)]),e(", Ilya Grigorik")])])])}const f=i(l,[["render",h],["__file","page-visibility.html.vue"]]);export{f as default};
