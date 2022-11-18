import{_ as o,o as t,c as p,a as e,b as s,d as a,e as c,r as l}from"./app.3b2d76f3.js";const d={},r=c(`<h1 id="cors-\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#cors-\u901A\u4FE1" aria-hidden="true">#</a> CORS \u901A\u4FE1</h1><p>CORS \u662F\u4E00\u4E2A W3C \u6807\u51C6\uFF0C\u5168\u79F0\u662F\u201C\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\u201D\uFF08Cross-origin resource sharing\uFF09\u3002\u5B83\u5141\u8BB8\u6D4F\u89C8\u5668\u5411\u8DE8\u57DF\u7684\u670D\u52A1\u5668\uFF0C\u53D1\u51FA<code>XMLHttpRequest</code>\u8BF7\u6C42\uFF0C\u4ECE\u800C\u514B\u670D\u4E86 AJAX \u53EA\u80FD\u540C\u6E90\u4F7F\u7528\u7684\u9650\u5236\u3002</p><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>CORS \u9700\u8981\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u540C\u65F6\u652F\u6301\u3002\u76EE\u524D\uFF0C\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u8BE5\u529F\u80FD\u3002</p><p>\u6574\u4E2A CORS \u901A\u4FE1\u8FC7\u7A0B\uFF0C\u90FD\u662F\u6D4F\u89C8\u5668\u81EA\u52A8\u5B8C\u6210\uFF0C\u4E0D\u9700\u8981\u7528\u6237\u53C2\u4E0E\u3002\u5BF9\u4E8E\u5F00\u53D1\u8005\u6765\u8BF4\uFF0CCORS \u901A\u4FE1\u4E0E\u666E\u901A\u7684 AJAX \u901A\u4FE1\u6CA1\u6709\u5DEE\u522B\uFF0C\u4EE3\u7801\u5B8C\u5168\u4E00\u6837\u3002\u6D4F\u89C8\u5668\u4E00\u65E6\u53D1\u73B0 AJAX \u8BF7\u6C42\u8DE8\u57DF\uFF0C\u5C31\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E00\u4E9B\u9644\u52A0\u7684\u5934\u4FE1\u606F\uFF0C\u6709\u65F6\u8FD8\u4F1A\u591A\u51FA\u4E00\u6B21\u9644\u52A0\u7684\u8BF7\u6C42\uFF0C\u4F46\u7528\u6237\u4E0D\u4F1A\u6709\u611F\u77E5\u3002\u56E0\u6B64\uFF0C\u5B9E\u73B0 CORS \u901A\u4FE1\u7684\u5173\u952E\u662F\u670D\u52A1\u5668\u3002\u53EA\u8981\u670D\u52A1\u5668\u5B9E\u73B0\u4E86 CORS \u63A5\u53E3\uFF0C\u5C31\u53EF\u4EE5\u8DE8\u57DF\u901A\u4FE1\u3002</p><h2 id="\u4E24\u79CD\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4E24\u79CD\u8BF7\u6C42" aria-hidden="true">#</a> \u4E24\u79CD\u8BF7\u6C42</h2><p>CORS \u8BF7\u6C42\u5206\u6210\u4E24\u7C7B\uFF1A\u7B80\u5355\u8BF7\u6C42\uFF08simple request\uFF09\u548C\u975E\u7B80\u5355\u8BF7\u6C42\uFF08not-so-simple request\uFF09\u3002</p><p>\u53EA\u8981\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u4E24\u5927\u6761\u4EF6\uFF0C\u5C31\u5C5E\u4E8E\u7B80\u5355\u8BF7\u6C42\u3002</p><p>\uFF081\uFF09\u8BF7\u6C42\u65B9\u6CD5\u662F\u4EE5\u4E0B\u4E09\u79CD\u65B9\u6CD5\u4E4B\u4E00\u3002</p><blockquote><ul><li>HEAD</li><li>GET</li><li>POST</li></ul></blockquote><p>\uFF082\uFF09HTTP \u7684\u5934\u4FE1\u606F\u4E0D\u8D85\u51FA\u4EE5\u4E0B\u51E0\u79CD\u5B57\u6BB5\u3002</p><blockquote><ul><li>Accept</li><li>Accept-Language</li><li>Content-Language</li><li>Last-Event-ID</li><li>Content-Type\uFF1A\u53EA\u9650\u4E8E\u4E09\u4E2A\u503C<code>application/x-www-form-urlencoded</code>\u3001<code>multipart/form-data</code>\u3001<code>text/plain</code></li></ul></blockquote><p>\u51E1\u662F\u4E0D\u540C\u65F6\u6EE1\u8DB3\u4E0A\u9762\u4E24\u4E2A\u6761\u4EF6\uFF0C\u5C31\u5C5E\u4E8E\u975E\u7B80\u5355\u8BF7\u6C42\u3002\u4E00\u53E5\u8BDD\uFF0C\u7B80\u5355\u8BF7\u6C42\u5C31\u662F\u7B80\u5355\u7684 HTTP \u65B9\u6CD5\u4E0E\u7B80\u5355\u7684 HTTP \u5934\u4FE1\u606F\u7684\u7ED3\u5408\u3002</p><p>\u8FD9\u6837\u5212\u5206\u7684\u539F\u56E0\u662F\uFF0C\u8868\u5355\u5728\u5386\u53F2\u4E0A\u4E00\u76F4\u53EF\u4EE5\u8DE8\u57DF\u53D1\u51FA\u8BF7\u6C42\u3002\u7B80\u5355\u8BF7\u6C42\u5C31\u662F\u8868\u5355\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u6CBF\u88AD\u4E86\u4F20\u7EDF\u7684\u5904\u7406\u65B9\u5F0F\uFF0C\u4E0D\u628A\u884C\u4E3A\u590D\u6742\u5316\uFF0C\u5426\u5219\u5F00\u53D1\u8005\u53EF\u80FD\u8F6C\u800C\u4F7F\u7528\u8868\u5355\uFF0C\u89C4\u907F CORS \u7684\u9650\u5236\u3002\u5BF9\u4E8E\u975E\u7B80\u5355\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u4F1A\u91C7\u7528\u65B0\u7684\u5904\u7406\u65B9\u5F0F\u3002</p><h2 id="\u7B80\u5355\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u8BF7\u6C42" aria-hidden="true">#</a> \u7B80\u5355\u8BF7\u6C42</h2><h3 id="\u57FA\u672C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6D41\u7A0B" aria-hidden="true">#</a> \u57FA\u672C\u6D41\u7A0B</h3><p>\u5BF9\u4E8E\u7B80\u5355\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u76F4\u63A5\u53D1\u51FA CORS \u8BF7\u6C42\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u5C31\u662F\u5728\u5934\u4FE1\u606F\u4E4B\u4E2D\uFF0C\u589E\u52A0\u4E00\u4E2A<code>Origin</code>\u5B57\u6BB5\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u6D4F\u89C8\u5668\u53D1\u73B0\u8FD9\u6B21\u8DE8\u57DF AJAX \u8BF7\u6C42\u662F\u7B80\u5355\u8BF7\u6C42\uFF0C\u5C31\u81EA\u52A8\u5728\u5934\u4FE1\u606F\u4E4B\u4E2D\uFF0C\u6DFB\u52A0\u4E00\u4E2A<code>Origin</code>\u5B57\u6BB5\u3002</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/cors</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Origin</span><span class="token punctuation">:</span> <span class="token header-value">http://api.bob.com</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">api.alice.com</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Language</span><span class="token punctuation">:</span> <span class="token header-value">en-US</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Mozilla/5.0...</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u5934\u4FE1\u606F\u4E2D\uFF0C<code>Origin</code>\u5B57\u6BB5\u7528\u6765\u8BF4\u660E\uFF0C\u672C\u6B21\u8BF7\u6C42\u6765\u81EA\u54EA\u4E2A\u57DF\uFF08\u534F\u8BAE + \u57DF\u540D + \u7AEF\u53E3\uFF09\u3002\u670D\u52A1\u5668\u6839\u636E\u8FD9\u4E2A\u503C\uFF0C\u51B3\u5B9A\u662F\u5426\u540C\u610F\u8FD9\u6B21\u8BF7\u6C42\u3002</p><p>\u5982\u679C<code>Origin</code>\u6307\u5B9A\u7684\u6E90\uFF0C\u4E0D\u5728\u8BB8\u53EF\u8303\u56F4\u5185\uFF0C\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6B63\u5E38\u7684 HTTP \u56DE\u5E94\u3002\u6D4F\u89C8\u5668\u53D1\u73B0\uFF0C\u8FD9\u4E2A\u56DE\u5E94\u7684\u5934\u4FE1\u606F\u6CA1\u6709\u5305\u542B<code>Access-Control-Allow-Origin</code>\u5B57\u6BB5\uFF08\u8BE6\u89C1\u4E0B\u6587\uFF09\uFF0C\u5C31\u77E5\u9053\u51FA\u9519\u4E86\uFF0C\u4ECE\u800C\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF0C\u88AB<code>XMLHttpRequest</code>\u7684<code>onerror</code>\u56DE\u8C03\u51FD\u6570\u6355\u83B7\u3002\u6CE8\u610F\uFF0C\u8FD9\u79CD\u9519\u8BEF\u65E0\u6CD5\u901A\u8FC7\u72B6\u6001\u7801\u8BC6\u522B\uFF0C\u56E0\u4E3A HTTP \u56DE\u5E94\u7684\u72B6\u6001\u7801\u6709\u53EF\u80FD\u662F200\u3002</p><p>\u5982\u679C<code>Origin</code>\u6307\u5B9A\u7684\u57DF\u540D\u5728\u8BB8\u53EF\u8303\u56F4\u5185\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u54CD\u5E94\uFF0C\u4F1A\u591A\u51FA\u51E0\u4E2A\u5934\u4FE1\u606F\u5B57\u6BB5\u3002</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">http://api.bob.com</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Expose-Headers</span><span class="token punctuation">:</span> <span class="token header-value">FooBar</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html; charset=utf-8</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u5934\u4FE1\u606F\u4E4B\u4E2D\uFF0C\u6709\u4E09\u4E2A\u4E0E CORS \u8BF7\u6C42\u76F8\u5173\u7684\u5B57\u6BB5\uFF0C\u90FD\u4EE5<code>Access-Control-</code>\u5F00\u5934\u3002</p><p><strong>\uFF081\uFF09<code>Access-Control-Allow-Origin</code></strong></p><p>\u8BE5\u5B57\u6BB5\u662F\u5FC5\u987B\u7684\u3002\u5B83\u7684\u503C\u8981\u4E48\u662F\u8BF7\u6C42\u65F6<code>Origin</code>\u5B57\u6BB5\u7684\u503C\uFF0C\u8981\u4E48\u662F\u4E00\u4E2A<code>*</code>\uFF0C\u8868\u793A\u63A5\u53D7\u4EFB\u610F\u57DF\u540D\u7684\u8BF7\u6C42\u3002</p><p><strong>\uFF082\uFF09<code>Access-Control-Allow-Credentials</code></strong></p><p>\u8BE5\u5B57\u6BB5\u53EF\u9009\u3002\u5B83\u7684\u503C\u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u5141\u8BB8\u53D1\u9001 Cookie\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CCookie \u4E0D\u5305\u62EC\u5728 CORS \u8BF7\u6C42\u4E4B\u4E2D\u3002\u8BBE\u4E3A<code>true</code>\uFF0C\u5373\u8868\u793A\u670D\u52A1\u5668\u660E\u786E\u8BB8\u53EF\uFF0C\u6D4F\u89C8\u5668\u53EF\u4EE5\u628A Cookie \u5305\u542B\u5728\u8BF7\u6C42\u4E2D\uFF0C\u4E00\u8D77\u53D1\u7ED9\u670D\u52A1\u5668\u3002\u8FD9\u4E2A\u503C\u4E5F\u53EA\u80FD\u8BBE\u4E3A<code>true</code>\uFF0C\u5982\u679C\u670D\u52A1\u5668\u4E0D\u8981\u6D4F\u89C8\u5668\u53D1\u9001 Cookie\uFF0C\u4E0D\u53D1\u9001\u8BE5\u5B57\u6BB5\u5373\u53EF\u3002</p><p><strong>\uFF083\uFF09<code>Access-Control-Expose-Headers</code></strong></p><p>\u8BE5\u5B57\u6BB5\u53EF\u9009\u3002CORS \u8BF7\u6C42\u65F6\uFF0C<code>XMLHttpRequest</code>\u5BF9\u8C61\u7684<code>getResponseHeader()</code>\u65B9\u6CD5\u53EA\u80FD\u62FF\u52306\u4E2A\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u57FA\u672C\u5B57\u6BB5\uFF1A<code>Cache-Control</code>\u3001<code>Content-Language</code>\u3001<code>Content-Type</code>\u3001<code>Expires</code>\u3001<code>Last-Modified</code>\u3001<code>Pragma</code>\u3002\u5982\u679C\u60F3\u62FF\u5230\u5176\u4ED6\u5B57\u6BB5\uFF0C\u5C31\u5FC5\u987B\u5728<code>Access-Control-Expose-Headers</code>\u91CC\u9762\u6307\u5B9A\u3002\u4E0A\u9762\u7684\u4F8B\u5B50\u6307\u5B9A\uFF0C<code>getResponseHeader(&#39;FooBar&#39;)</code>\u53EF\u4EE5\u8FD4\u56DE<code>FooBar</code>\u5B57\u6BB5\u7684\u503C\u3002</p><h3 id="withcredentials-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#withcredentials-\u5C5E\u6027" aria-hidden="true">#</a> withCredentials \u5C5E\u6027</h3><p>\u4E0A\u9762\u8BF4\u5230\uFF0CCORS \u8BF7\u6C42\u9ED8\u8BA4\u4E0D\u5305\u542B Cookie \u4FE1\u606F\uFF08\u4EE5\u53CA HTTP \u8BA4\u8BC1\u4FE1\u606F\u7B49\uFF09\uFF0C\u8FD9\u662F\u4E3A\u4E86\u964D\u4F4E CSRF \u653B\u51FB\u7684\u98CE\u9669\u3002\u4F46\u662F\u67D0\u4E9B\u573A\u5408\uFF0C\u670D\u52A1\u5668\u53EF\u80FD\u9700\u8981\u62FF\u5230 Cookie\uFF0C\u8FD9\u65F6\u9700\u8981\u670D\u52A1\u5668\u663E\u5F0F\u6307\u5B9A<code>Access-Control-Allow-Credentials</code>\u5B57\u6BB5\uFF0C\u544A\u8BC9\u6D4F\u89C8\u5668\u53EF\u4EE5\u53D1\u9001 Cookie\u3002</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Access-Control-Allow-Credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u540C\u65F6\uFF0C\u5F00\u53D1\u8005\u5FC5\u987B\u5728 AJAX \u8BF7\u6C42\u4E2D\u6253\u5F00<code>withCredentials</code>\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5426\u5219\uFF0C\u5373\u4F7F\u670D\u52A1\u5668\u8981\u6C42\u53D1\u9001 Cookie\uFF0C\u6D4F\u89C8\u5668\u4E5F\u4E0D\u4F1A\u53D1\u9001\u3002\u6216\u8005\uFF0C\u670D\u52A1\u5668\u8981\u6C42\u8BBE\u7F6E Cookie\uFF0C\u6D4F\u89C8\u5668\u4E5F\u4E0D\u4F1A\u5904\u7406\u3002</p><p>\u4F46\u662F\uFF0C\u6709\u7684\u6D4F\u89C8\u5668\u9ED8\u8BA4\u5C06<code>withCredentials</code>\u5C5E\u6027\u8BBE\u4E3A<code>true</code>\u3002\u8FD9\u5BFC\u81F4\u5982\u679C\u7701\u7565<code>withCredentials</code>\u8BBE\u7F6E\uFF0C\u8FD9\u4E9B\u6D4F\u89C8\u5668\u53EF\u80FD\u8FD8\u662F\u4F1A\u4E00\u8D77\u53D1\u9001 Cookie\u3002\u8FD9\u65F6\uFF0C\u53EF\u4EE5\u663E\u5F0F\u5173\u95ED<code>withCredentials</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u670D\u52A1\u5668\u8981\u6C42\u6D4F\u89C8\u5668\u53D1\u9001 Cookie\uFF0C<code>Access-Control-Allow-Origin</code>\u5C31\u4E0D\u80FD\u8BBE\u4E3A\u661F\u53F7\uFF0C\u5FC5\u987B\u6307\u5B9A\u660E\u786E\u7684\u3001\u4E0E\u8BF7\u6C42\u7F51\u9875\u4E00\u81F4\u7684\u57DF\u540D\u3002\u540C\u65F6\uFF0CCookie \u4F9D\u7136\u9075\u5FAA\u540C\u6E90\u653F\u7B56\uFF0C\u53EA\u6709\u7528\u670D\u52A1\u5668\u57DF\u540D\u8BBE\u7F6E\u7684 Cookie \u624D\u4F1A\u4E0A\u4F20\uFF0C\u5176\u4ED6\u57DF\u540D\u7684 Cookie \u5E76\u4E0D\u4F1A\u4E0A\u4F20\uFF0C\u4E14\uFF08\u8DE8\u57DF\uFF09\u539F\u7F51\u9875\u4EE3\u7801\u4E2D\u7684<code>document.cookie</code>\u4E5F\u65E0\u6CD5\u8BFB\u53D6\u670D\u52A1\u5668\u57DF\u540D\u4E0B\u7684 Cookie\u3002</p><h2 id="\u975E\u7B80\u5355\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u975E\u7B80\u5355\u8BF7\u6C42" aria-hidden="true">#</a> \u975E\u7B80\u5355\u8BF7\u6C42</h2><h3 id="\u9884\u68C0\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u9884\u68C0\u8BF7\u6C42" aria-hidden="true">#</a> \u9884\u68C0\u8BF7\u6C42</h3><p>\u975E\u7B80\u5355\u8BF7\u6C42\u662F\u90A3\u79CD\u5BF9\u670D\u52A1\u5668\u63D0\u51FA\u7279\u6B8A\u8981\u6C42\u7684\u8BF7\u6C42\uFF0C\u6BD4\u5982\u8BF7\u6C42\u65B9\u6CD5\u662F<code>PUT</code>\u6216<code>DELETE</code>\uFF0C\u6216\u8005<code>Content-Type</code>\u5B57\u6BB5\u7684\u7C7B\u578B\u662F<code>application/json</code>\u3002</p><p>\u975E\u7B80\u5355\u8BF7\u6C42\u7684 CORS \u8BF7\u6C42\uFF0C\u4F1A\u5728\u6B63\u5F0F\u901A\u4FE1\u4E4B\u524D\uFF0C\u589E\u52A0\u4E00\u6B21 HTTP \u67E5\u8BE2\u8BF7\u6C42\uFF0C\u79F0\u4E3A\u201C\u9884\u68C0\u201D\u8BF7\u6C42\uFF08preflight\uFF09\u3002\u6D4F\u89C8\u5668\u5148\u8BE2\u95EE\u670D\u52A1\u5668\uFF0C\u5F53\u524D\u7F51\u9875\u6240\u5728\u7684\u57DF\u540D\u662F\u5426\u5728\u670D\u52A1\u5668\u7684\u8BB8\u53EF\u540D\u5355\u4E4B\u4E2D\uFF0C\u4EE5\u53CA\u53EF\u4EE5\u4F7F\u7528\u54EA\u4E9B HTTP \u65B9\u6CD5\u548C\u5934\u4FE1\u606F\u5B57\u6BB5\u3002\u53EA\u6709\u5F97\u5230\u80AF\u5B9A\u7B54\u590D\uFF0C\u6D4F\u89C8\u5668\u624D\u4F1A\u53D1\u51FA\u6B63\u5F0F\u7684<code>XMLHttpRequest</code>\u8BF7\u6C42\uFF0C\u5426\u5219\u5C31\u62A5\u9519\u3002\u8FD9\u662F\u4E3A\u4E86\u9632\u6B62\u8FD9\u4E9B\u65B0\u589E\u7684\u8BF7\u6C42\uFF0C\u5BF9\u4F20\u7EDF\u7684\u6CA1\u6709 CORS \u652F\u6301\u7684\u670D\u52A1\u5668\u5F62\u6210\u538B\u529B\uFF0C\u7ED9\u670D\u52A1\u5668\u4E00\u4E2A\u63D0\u524D\u62D2\u7EDD\u7684\u673A\u4F1A\uFF0C\u8FD9\u6837\u53EF\u4EE5\u9632\u6B62\u670D\u52A1\u5668\u6536\u5230\u5927\u91CF<code>DELETE</code>\u548C<code>PUT</code>\u8BF7\u6C42\uFF0C\u8FD9\u4E9B\u4F20\u7EDF\u7684\u8868\u5355\u4E0D\u53EF\u80FD\u8DE8\u57DF\u53D1\u51FA\u7684\u8BF7\u6C42\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u6BB5\u6D4F\u89C8\u5668\u7684 JavaScript \u811A\u672C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&#39;http://api.alice.com/cors&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;X-Custom-Header&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CHTTP \u8BF7\u6C42\u7684\u65B9\u6CD5\u662F<code>PUT</code>\uFF0C\u5E76\u4E14\u53D1\u9001\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5934\u4FE1\u606F<code>X-Custom-Header</code>\u3002</p><p>\u6D4F\u89C8\u5668\u53D1\u73B0\uFF0C\u8FD9\u662F\u4E00\u4E2A\u975E\u7B80\u5355\u8BF7\u6C42\uFF0C\u5C31\u81EA\u52A8\u53D1\u51FA\u4E00\u4E2A\u201C\u9884\u68C0\u201D\u8BF7\u6C42\uFF0C\u8981\u6C42\u670D\u52A1\u5668\u786E\u8BA4\u53EF\u4EE5\u8FD9\u6837\u8BF7\u6C42\u3002\u4E0B\u9762\u662F\u8FD9\u4E2A\u201C\u9884\u68C0\u201D\u8BF7\u6C42\u7684 HTTP \u5934\u4FE1\u606F\u3002</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">OPTIONS</span> <span class="token request-target url">/cors</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Origin</span><span class="token punctuation">:</span> <span class="token header-value">http://api.bob.com</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Request-Method</span><span class="token punctuation">:</span> <span class="token header-value">PUT</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Request-Headers</span><span class="token punctuation">:</span> <span class="token header-value">X-Custom-Header</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">api.alice.com</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Language</span><span class="token punctuation">:</span> <span class="token header-value">en-US</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Mozilla/5.0...</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u9884\u68C0\u201D\u8BF7\u6C42\u7528\u7684\u8BF7\u6C42\u65B9\u6CD5\u662F<code>OPTIONS</code>\uFF0C\u8868\u793A\u8FD9\u4E2A\u8BF7\u6C42\u662F\u7528\u6765\u8BE2\u95EE\u7684\u3002\u5934\u4FE1\u606F\u91CC\u9762\uFF0C\u5173\u952E\u5B57\u6BB5\u662F<code>Origin</code>\uFF0C\u8868\u793A\u8BF7\u6C42\u6765\u81EA\u54EA\u4E2A\u6E90\u3002</p><p>\u9664\u4E86<code>Origin</code>\u5B57\u6BB5\uFF0C\u201C\u9884\u68C0\u201D\u8BF7\u6C42\u7684\u5934\u4FE1\u606F\u5305\u62EC\u4E24\u4E2A\u7279\u6B8A\u5B57\u6BB5\u3002</p><p><strong>\uFF081\uFF09<code>Access-Control-Request-Method</code></strong></p><p>\u8BE5\u5B57\u6BB5\u662F\u5FC5\u987B\u7684\uFF0C\u7528\u6765\u5217\u51FA\u6D4F\u89C8\u5668\u7684 CORS \u8BF7\u6C42\u4F1A\u7528\u5230\u54EA\u4E9B HTTP \u65B9\u6CD5\uFF0C\u4E0A\u4F8B\u662F<code>PUT</code>\u3002</p><p><strong>\uFF082\uFF09<code>Access-Control-Request-Headers</code></strong></p><p>\u8BE5\u5B57\u6BB5\u662F\u4E00\u4E2A\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\uFF0C\u6307\u5B9A\u6D4F\u89C8\u5668 CORS \u8BF7\u6C42\u4F1A\u989D\u5916\u53D1\u9001\u7684\u5934\u4FE1\u606F\u5B57\u6BB5\uFF0C\u4E0A\u4F8B\u662F<code>X-Custom-Header</code>\u3002</p><h3 id="\u9884\u68C0\u8BF7\u6C42\u7684\u56DE\u5E94" tabindex="-1"><a class="header-anchor" href="#\u9884\u68C0\u8BF7\u6C42\u7684\u56DE\u5E94" aria-hidden="true">#</a> \u9884\u68C0\u8BF7\u6C42\u7684\u56DE\u5E94</h3><p>\u670D\u52A1\u5668\u6536\u5230\u201C\u9884\u68C0\u201D\u8BF7\u6C42\u4EE5\u540E\uFF0C\u68C0\u67E5\u4E86<code>Origin</code>\u3001<code>Access-Control-Request-Method</code>\u548C<code>Access-Control-Request-Headers</code>\u5B57\u6BB5\u4EE5\u540E\uFF0C\u786E\u8BA4\u5141\u8BB8\u8DE8\u6E90\u8BF7\u6C42\uFF0C\u5C31\u53EF\u4EE5\u505A\u51FA\u56DE\u5E94\u3002</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 01 Dec 2008 01:15:39 GMT</span></span>
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">Apache/2.0.61 (Unix)</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">http://api.bob.com</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Methods</span><span class="token punctuation">:</span> <span class="token header-value">GET, POST, PUT</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Headers</span><span class="token punctuation">:</span> <span class="token header-value">X-Custom-Header</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html; charset=utf-8</span></span>
<span class="token header"><span class="token header-name keyword">Content-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">gzip</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
<span class="token header"><span class="token header-name keyword">Keep-Alive</span><span class="token punctuation">:</span> <span class="token header-value">timeout=2, max=100</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">Keep-Alive</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684 HTTP \u56DE\u5E94\u4E2D\uFF0C\u5173\u952E\u7684\u662F<code>Access-Control-Allow-Origin</code>\u5B57\u6BB5\uFF0C\u8868\u793A<code>http://api.bob.com</code>\u53EF\u4EE5\u8BF7\u6C42\u6570\u636E\u3002\u8BE5\u5B57\u6BB5\u4E5F\u53EF\u4EE5\u8BBE\u4E3A\u661F\u53F7\uFF0C\u8868\u793A\u540C\u610F\u4EFB\u610F\u8DE8\u6E90\u8BF7\u6C42\u3002</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">*</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u670D\u52A1\u5668\u5426\u5B9A\u4E86\u201C\u9884\u68C0\u201D\u8BF7\u6C42\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6B63\u5E38\u7684 HTTP \u56DE\u5E94\uFF0C\u4F46\u662F\u6CA1\u6709\u4EFB\u4F55 CORS \u76F8\u5173\u7684\u5934\u4FE1\u606F\u5B57\u6BB5\uFF0C\u6216\u8005\u660E\u786E\u8868\u793A\u8BF7\u6C42\u4E0D\u7B26\u5408\u6761\u4EF6\u3002</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">OPTIONS</span> <span class="token request-target url">http://api.bob.com</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Status</span><span class="token punctuation">:</span> <span class="token header-value">200</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">https://notyourdomain.com</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Method</span><span class="token punctuation">:</span> <span class="token header-value">POST</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u670D\u52A1\u5668\u56DE\u5E94\uFF0C<code>Access-Control-Allow-Origin</code>\u5B57\u6BB5\u660E\u786E\u4E0D\u5305\u62EC\u53D1\u51FA\u8BF7\u6C42\u7684<code>http://api.bob.com</code>\u3002</p><p>\u8FD9\u65F6\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u8BA4\u5B9A\uFF0C\u670D\u52A1\u5668\u4E0D\u540C\u610F\u9884\u68C0\u8BF7\u6C42\uFF0C\u56E0\u6B64\u89E6\u53D1\u4E00\u4E2A\u9519\u8BEF\uFF0C\u88AB<code>XMLHttpRequest</code>\u5BF9\u8C61\u7684<code>onerror</code>\u56DE\u8C03\u51FD\u6570\u6355\u83B7\u3002\u63A7\u5236\u53F0\u4F1A\u6253\u5370\u51FA\u5982\u4E0B\u7684\u62A5\u9519\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>XMLHttpRequest cannot load http://api.alice.com.
Origin http://api.bob.com is not allowed by Access-Control-Allow-Origin.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u670D\u52A1\u5668\u56DE\u5E94\u7684\u5176\u4ED6 CORS \u76F8\u5173\u5B57\u6BB5\u5982\u4E0B\u3002</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Access-Control-Allow-Methods</span><span class="token punctuation">:</span> <span class="token header-value">GET, POST, PUT</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Headers</span><span class="token punctuation">:</span> <span class="token header-value">X-Custom-Header</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Max-Age</span><span class="token punctuation">:</span> <span class="token header-value">1728000</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\uFF081\uFF09<code>Access-Control-Allow-Methods</code></strong></p><p>\u8BE5\u5B57\u6BB5\u5FC5\u9700\uFF0C\u5B83\u7684\u503C\u662F\u9017\u53F7\u5206\u9694\u7684\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u660E\u670D\u52A1\u5668\u652F\u6301\u7684\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\u7684\u65B9\u6CD5\u3002\u6CE8\u610F\uFF0C\u8FD4\u56DE\u7684\u662F\u6240\u6709\u652F\u6301\u7684\u65B9\u6CD5\uFF0C\u800C\u4E0D\u5355\u662F\u6D4F\u89C8\u5668\u8BF7\u6C42\u7684\u90A3\u4E2A\u65B9\u6CD5\u3002\u8FD9\u662F\u4E3A\u4E86\u907F\u514D\u591A\u6B21\u201C\u9884\u68C0\u201D\u8BF7\u6C42\u3002</p><p><strong>\uFF082\uFF09<code>Access-Control-Allow-Headers</code></strong></p><p>\u5982\u679C\u6D4F\u89C8\u5668\u8BF7\u6C42\u5305\u62EC<code>Access-Control-Request-Headers</code>\u5B57\u6BB5\uFF0C\u5219<code>Access-Control-Allow-Headers</code>\u5B57\u6BB5\u662F\u5FC5\u9700\u7684\u3002\u5B83\u4E5F\u662F\u4E00\u4E2A\u9017\u53F7\u5206\u9694\u7684\u5B57\u7B26\u4E32\uFF0C\u8868\u660E\u670D\u52A1\u5668\u652F\u6301\u7684\u6240\u6709\u5934\u4FE1\u606F\u5B57\u6BB5\uFF0C\u4E0D\u9650\u4E8E\u6D4F\u89C8\u5668\u5728\u201C\u9884\u68C0\u201D\u4E2D\u8BF7\u6C42\u7684\u5B57\u6BB5\u3002</p><p><strong>\uFF083\uFF09<code>Access-Control-Allow-Credentials</code></strong></p><p>\u8BE5\u5B57\u6BB5\u4E0E\u7B80\u5355\u8BF7\u6C42\u65F6\u7684\u542B\u4E49\u76F8\u540C\u3002</p><p><strong>\uFF084\uFF09<code>Access-Control-Max-Age</code></strong></p><p>\u8BE5\u5B57\u6BB5\u53EF\u9009\uFF0C\u7528\u6765\u6307\u5B9A\u672C\u6B21\u9884\u68C0\u8BF7\u6C42\u7684\u6709\u6548\u671F\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002\u4E0A\u9762\u7ED3\u679C\u4E2D\uFF0C\u6709\u6548\u671F\u662F20\u5929\uFF081728000\u79D2\uFF09\uFF0C\u5373\u5141\u8BB8\u7F13\u5B58\u8BE5\u6761\u56DE\u5E941728000\u79D2\uFF08\u537320\u5929\uFF09\uFF0C\u5728\u6B64\u671F\u95F4\uFF0C\u4E0D\u7528\u53D1\u51FA\u53E6\u4E00\u6761\u9884\u68C0\u8BF7\u6C42\u3002</p><h3 id="\u6D4F\u89C8\u5668\u7684\u6B63\u5E38\u8BF7\u6C42\u548C\u56DE\u5E94" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684\u6B63\u5E38\u8BF7\u6C42\u548C\u56DE\u5E94" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7684\u6B63\u5E38\u8BF7\u6C42\u548C\u56DE\u5E94</h3><p>\u4E00\u65E6\u670D\u52A1\u5668\u901A\u8FC7\u4E86\u201C\u9884\u68C0\u201D\u8BF7\u6C42\uFF0C\u4EE5\u540E\u6BCF\u6B21\u6D4F\u89C8\u5668\u6B63\u5E38\u7684 CORS \u8BF7\u6C42\uFF0C\u5C31\u90FD\u8DDF\u7B80\u5355\u8BF7\u6C42\u4E00\u6837\uFF0C\u4F1A\u6709\u4E00\u4E2A<code>Origin</code>\u5934\u4FE1\u606F\u5B57\u6BB5\u3002\u670D\u52A1\u5668\u7684\u56DE\u5E94\uFF0C\u4E5F\u90FD\u4F1A\u6709\u4E00\u4E2A<code>Access-Control-Allow-Origin</code>\u5934\u4FE1\u606F\u5B57\u6BB5\u3002</p><p>\u4E0B\u9762\u662F\u201C\u9884\u68C0\u201D\u8BF7\u6C42\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u7684\u6B63\u5E38 CORS \u8BF7\u6C42\u3002</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">PUT</span> <span class="token request-target url">/cors</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Origin</span><span class="token punctuation">:</span> <span class="token header-value">http://api.bob.com</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">api.alice.com</span></span>
<span class="token header"><span class="token header-name keyword">X-Custom-Header</span><span class="token punctuation">:</span> <span class="token header-value">value</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Language</span><span class="token punctuation">:</span> <span class="token header-value">en-US</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Mozilla/5.0...</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u5934\u4FE1\u606F\u7684<code>Origin</code>\u5B57\u6BB5\u662F\u6D4F\u89C8\u5668\u81EA\u52A8\u6DFB\u52A0\u7684\u3002</p><p>\u4E0B\u9762\u662F\u670D\u52A1\u5668\u6B63\u5E38\u7684\u56DE\u5E94\u3002</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">http://api.bob.com</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html; charset=utf-8</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u5934\u4FE1\u606F\u4E2D\uFF0C<code>Access-Control-Allow-Origin</code>\u5B57\u6BB5\u662F\u6BCF\u6B21\u56DE\u5E94\u90FD\u5FC5\u5B9A\u5305\u542B\u7684\u3002</p><h2 id="\u4E0E-jsonp-\u7684\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u4E0E-jsonp-\u7684\u6BD4\u8F83" aria-hidden="true">#</a> \u4E0E JSONP \u7684\u6BD4\u8F83</h2><p>CORS \u4E0E JSONP \u7684\u4F7F\u7528\u76EE\u7684\u76F8\u540C\uFF0C\u4F46\u662F\u6BD4 JSONP \u66F4\u5F3A\u5927\u3002JSONP \u53EA\u652F\u6301<code>GET</code>\u8BF7\u6C42\uFF0CCORS \u652F\u6301\u6240\u6709\u7C7B\u578B\u7684 HTTP \u8BF7\u6C42\u3002JSONP \u7684\u4F18\u52BF\u5728\u4E8E\u652F\u6301\u8001\u5F0F\u6D4F\u89C8\u5668\uFF0C\u4EE5\u53CA\u53EF\u4EE5\u5411\u4E0D\u652F\u6301 CORS \u7684\u7F51\u7AD9\u8BF7\u6C42\u6570\u636E\u3002</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,85),i={href:"http://www.html5rocks.com/en/tutorials/cors/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"},h={href:"https://frontendian.co/cors",target:"_blank",rel:"noopener noreferrer"},k={href:"http://performantcode.com/web/do-you-really-know-cors",target:"_blank",rel:"noopener noreferrer"};function v(m,g){const n=l("ExternalLinkIcon");return t(),p("div",null,[r,e("ul",null,[e("li",null,[e("a",i,[s("Using CORS"),a(n)]),s(", Monsur Hossain")]),e("li",null,[e("a",u,[s("HTTP access control (CORS)"),a(n)]),s(", MDN")]),e("li",null,[e("a",h,[s("CORS"),a(n)]),s(", Ryan Miller")]),e("li",null,[e("a",k,[s("Do You Really Know CORS?"),a(n)]),s(", Grzegorz Mirek")])])])}const C=o(d,[["render",v],["__file","cors.html.vue"]]);export{C as default};
