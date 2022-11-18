import{_ as o,o as p,c,a as n,b as s,d as e,e as t,r as i}from"./app.3b2d76f3.js";const l={},r=t(`<h1 id="server-sent-events" tabindex="-1"><a class="header-anchor" href="#server-sent-events" aria-hidden="true">#</a> Server-Sent Events</h1><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u670D\u52A1\u5668\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u6570\u636E\uFF0C\u6709\u5F88\u591A\u89E3\u51B3\u65B9\u6848\u3002\u9664\u4E86\u201C\u8F6E\u8BE2\u201D \u548C WebSocket\uFF0CHTML 5 \u8FD8\u63D0\u4F9B\u4E86 Server-Sent Events\uFF08\u4EE5\u4E0B\u7B80\u79F0 SSE\uFF09\u3002</p><p>\u4E00\u822C\u6765\u8BF4\uFF0CHTTP \u534F\u8BAE\u53EA\u80FD\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u4E0D\u80FD\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u3002\u4F46\u662F\u6709\u4E00\u79CD\u7279\u6B8A\u60C5\u51B5\uFF0C\u5C31\u662F\u670D\u52A1\u5668\u5411\u5BA2\u6237\u7AEF\u58F0\u660E\uFF0C\u63A5\u4E0B\u6765\u8981\u53D1\u9001\u7684\u662F\u6D41\u4FE1\u606F\uFF08streaming\uFF09\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53D1\u9001\u7684\u4E0D\u662F\u4E00\u6B21\u6027\u7684\u6570\u636E\u5305\uFF0C\u800C\u662F\u4E00\u4E2A\u6570\u636E\u6D41\uFF0C\u4F1A\u8FDE\u7EED\u4E0D\u65AD\u5730\u53D1\u9001\u8FC7\u6765\u3002\u8FD9\u65F6\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u4F1A\u5173\u95ED\u8FDE\u63A5\uFF0C\u4F1A\u4E00\u76F4\u7B49\u7740\u670D\u52A1\u5668\u53D1\u8FC7\u6765\u7684\u65B0\u7684\u6570\u636E\u6D41\u3002\u672C\u8D28\u4E0A\uFF0C\u8FD9\u79CD\u901A\u4FE1\u5C31\u662F\u4EE5\u6D41\u4FE1\u606F\u7684\u65B9\u5F0F\uFF0C\u5B8C\u6210\u4E00\u6B21\u7528\u65F6\u5F88\u957F\u7684\u4E0B\u8F7D\u3002</p><p>SSE \u5C31\u662F\u5229\u7528\u8FD9\u79CD\u673A\u5236\uFF0C\u4F7F\u7528\u6D41\u4FE1\u606F\u5411\u6D4F\u89C8\u5668\u63A8\u9001\u4FE1\u606F\u3002\u5B83\u57FA\u4E8E HTTP \u534F\u8BAE\uFF0C\u76EE\u524D\u9664\u4E86 IE/Edge\uFF0C\u5176\u4ED6\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002</p><h2 id="\u4E0E-websocket-\u7684\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u4E0E-websocket-\u7684\u6BD4\u8F83" aria-hidden="true">#</a> \u4E0E WebSocket \u7684\u6BD4\u8F83</h2><p>SSE \u4E0E WebSocket \u4F5C\u7528\u76F8\u4F3C\uFF0C\u90FD\u662F\u5EFA\u7ACB\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u901A\u4FE1\u6E20\u9053\uFF0C\u7136\u540E\u670D\u52A1\u5668\u5411\u6D4F\u89C8\u5668\u63A8\u9001\u4FE1\u606F\u3002</p><p>\u603B\u4F53\u6765\u8BF4\uFF0CWebSocket \u66F4\u5F3A\u5927\u548C\u7075\u6D3B\u3002\u56E0\u4E3A\u5B83\u662F\u5168\u53CC\u5DE5\u901A\u9053\uFF0C\u53EF\u4EE5\u53CC\u5411\u901A\u4FE1\uFF1BSSE \u662F\u5355\u5411\u901A\u9053\uFF0C\u53EA\u80FD\u670D\u52A1\u5668\u5411\u6D4F\u89C8\u5668\u53D1\u9001\uFF0C\u56E0\u4E3A streaming \u672C\u8D28\u4E0A\u5C31\u662F\u4E0B\u8F7D\u3002\u5982\u679C\u6D4F\u89C8\u5668\u5411\u670D\u52A1\u5668\u53D1\u9001\u4FE1\u606F\uFF0C\u5C31\u53D8\u6210\u4E86\u53E6\u4E00\u6B21 HTTP \u8BF7\u6C42\u3002</p><p>\u4F46\u662F\uFF0CSSE \u4E5F\u6709\u81EA\u5DF1\u7684\u4F18\u70B9\u3002</p><ul><li>SSE \u4F7F\u7528 HTTP \u534F\u8BAE\uFF0C\u73B0\u6709\u7684\u670D\u52A1\u5668\u8F6F\u4EF6\u90FD\u652F\u6301\u3002WebSocket \u662F\u4E00\u4E2A\u72EC\u7ACB\u534F\u8BAE\u3002</li><li>SSE \u5C5E\u4E8E\u8F7B\u91CF\u7EA7\uFF0C\u4F7F\u7528\u7B80\u5355\uFF1BWebSocket \u534F\u8BAE\u76F8\u5BF9\u590D\u6742\u3002</li><li>SSE \u9ED8\u8BA4\u652F\u6301\u65AD\u7EBF\u91CD\u8FDE\uFF0CWebSocket \u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u65AD\u7EBF\u91CD\u8FDE\u3002</li><li>SSE \u4E00\u822C\u53EA\u7528\u6765\u4F20\u9001\u6587\u672C\uFF0C\u4E8C\u8FDB\u5236\u6570\u636E\u9700\u8981\u7F16\u7801\u540E\u4F20\u9001\uFF0CWebSocket \u9ED8\u8BA4\u652F\u6301\u4F20\u9001\u4E8C\u8FDB\u5236\u6570\u636E\u3002</li><li>SSE \u652F\u6301\u81EA\u5B9A\u4E49\u53D1\u9001\u7684\u6D88\u606F\u7C7B\u578B\u3002</li></ul><p>\u56E0\u6B64\uFF0C\u4E24\u8005\u5404\u6709\u7279\u70B9\uFF0C\u9002\u5408\u4E0D\u540C\u7684\u573A\u5408\u3002</p><h2 id="\u5BA2\u6237\u7AEF-api" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF-api" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF API</h2><h3 id="eventsource-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#eventsource-\u5BF9\u8C61" aria-hidden="true">#</a> EventSource \u5BF9\u8C61</h3><p>SSE \u7684\u5BA2\u6237\u7AEF API \u90E8\u7F72\u5728<code>EventSource</code>\u5BF9\u8C61\u4E0A\u3002\u4E0B\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u68C0\u6D4B\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301 SSE\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;EventSource&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 SSE \u65F6\uFF0C\u6D4F\u89C8\u5668\u9996\u5148\u751F\u6210\u4E00\u4E2A<code>EventSource</code>\u5B9E\u4F8B\uFF0C\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8FDE\u63A5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684<code>url</code>\u53EF\u4EE5\u4E0E\u5F53\u524D\u7F51\u5740\u540C\u57DF\uFF0C\u4E5F\u53EF\u4EE5\u8DE8\u57DF\u3002\u8DE8\u57DF\u65F6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u6253\u5F00<code>withCredentials</code>\u5C5E\u6027\uFF0C\u8868\u793A\u662F\u5426\u4E00\u8D77\u53D1\u9001 Cookie\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="readystate-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#readystate-\u5C5E\u6027" aria-hidden="true">#</a> readyState \u5C5E\u6027</h3><p><code>EventSource</code>\u5B9E\u4F8B\u7684<code>readyState</code>\u5C5E\u6027\uFF0C\u8868\u660E\u8FDE\u63A5\u7684\u5F53\u524D\u72B6\u6001\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\uFF0C\u53EF\u4EE5\u53D6\u4EE5\u4E0B\u503C\u3002</p><ul><li>0\uFF1A\u76F8\u5F53\u4E8E\u5E38\u91CF<code>EventSource.CONNECTING</code>\uFF0C\u8868\u793A\u8FDE\u63A5\u8FD8\u672A\u5EFA\u7ACB\uFF0C\u6216\u8005\u65AD\u7EBF\u6B63\u5728\u91CD\u8FDE\u3002</li><li>1\uFF1A\u76F8\u5F53\u4E8E\u5E38\u91CF<code>EventSource.OPEN</code>\uFF0C\u8868\u793A\u8FDE\u63A5\u5DF2\u7ECF\u5EFA\u7ACB\uFF0C\u53EF\u4EE5\u63A5\u53D7\u6570\u636E\u3002</li><li>2\uFF1A\u76F8\u5F53\u4E8E\u5E38\u91CF<code>EventSource.CLOSED</code>\uFF0C\u8868\u793A\u8FDE\u63A5\u5DF2\u65AD\uFF0C\u4E14\u4E0D\u4F1A\u91CD\u8FDE\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>source<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#url-\u5C5E\u6027" aria-hidden="true">#</a> url \u5C5E\u6027</h3><p><code>EventSource</code>\u5B9E\u4F8B\u7684<code>url</code>\u5C5E\u6027\u8FD4\u56DE\u8FDE\u63A5\u7684\u7F51\u5740\uFF0C\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</p><h3 id="withcredentials-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#withcredentials-\u5C5E\u6027" aria-hidden="true">#</a> withCredentials \u5C5E\u6027</h3><p><code>EventSource</code>\u5B9E\u4F8B\u7684<code>withCredentials</code>\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5F53\u524D\u5B9E\u4F8B\u662F\u5426\u5F00\u542F CORS \u7684<code>withCredentials</code>\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\uFF0C\u9ED8\u8BA4\u662F<code>false</code>\u3002</p><h3 id="onopen-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#onopen-\u5C5E\u6027" aria-hidden="true">#</a> onopen \u5C5E\u6027</h3><p>\u8FDE\u63A5\u4E00\u65E6\u5EFA\u7ACB\uFF0C\u5C31\u4F1A\u89E6\u53D1<code>open</code>\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u5728<code>onopen</code>\u5C5E\u6027\u5B9A\u4E49\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u53E6\u4E00\u79CD\u5199\u6CD5</span>
source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onmessage-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#onmessage-\u5C5E\u6027" aria-hidden="true">#</a> onmessage \u5C5E\u6027</h3><p>\u5BA2\u6237\u7AEF\u6536\u5230\u670D\u52A1\u5668\u53D1\u6765\u7684\u6570\u636E\uFF0C\u5C31\u4F1A\u89E6\u53D1<code>message</code>\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u5728<code>onmessage</code>\u5C5E\u6027\u5B9A\u4E49\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">var</span> origin <span class="token operator">=</span> event<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
  <span class="token keyword">var</span> lastEventId <span class="token operator">=</span> event<span class="token punctuation">.</span>lastEventId<span class="token punctuation">;</span>
  <span class="token comment">// handle message</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u53E6\u4E00\u79CD\u5199\u6CD5</span>
source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">var</span> origin <span class="token operator">=</span> event<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
  <span class="token keyword">var</span> lastEventId <span class="token operator">=</span> event<span class="token punctuation">.</span>lastEventId<span class="token punctuation">;</span>
  <span class="token comment">// handle message</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u53C2\u6570\u5BF9\u8C61<code>event</code>\u6709\u5982\u4E0B\u5C5E\u6027\u3002</p><ul><li><code>data</code>\uFF1A\u670D\u52A1\u5668\u7AEF\u4F20\u56DE\u7684\u6570\u636E\uFF08\u6587\u672C\u683C\u5F0F\uFF09\u3002</li><li><code>origin</code>\uFF1A \u670D\u52A1\u5668 URL \u7684\u57DF\u540D\u90E8\u5206\uFF0C\u5373\u534F\u8BAE\u3001\u57DF\u540D\u548C\u7AEF\u53E3\uFF0C\u8868\u793A\u6D88\u606F\u7684\u6765\u6E90\u3002</li><li><code>lastEventId</code>\uFF1A\u6570\u636E\u7684\u7F16\u53F7\uFF0C\u7531\u670D\u52A1\u5668\u7AEF\u53D1\u9001\u3002\u5982\u679C\u6CA1\u6709\u7F16\u53F7\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u4E3A\u7A7A\u3002</li></ul><h3 id="onerror-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#onerror-\u5C5E\u6027" aria-hidden="true">#</a> onerror \u5C5E\u6027</h3><p>\u5982\u679C\u53D1\u751F\u901A\u4FE1\u9519\u8BEF\uFF08\u6BD4\u5982\u8FDE\u63A5\u4E2D\u65AD\uFF09\uFF0C\u5C31\u4F1A\u89E6\u53D1<code>error</code>\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u5728<code>onerror</code>\u5C5E\u6027\u5B9A\u4E49\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// handle error event</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u53E6\u4E00\u79CD\u5199\u6CD5</span>
source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// handle error event</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u4E8B\u4EF6</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u670D\u52A1\u5668\u53D1\u6765\u7684\u6570\u636E\uFF0C\u603B\u662F\u89E6\u53D1\u6D4F\u89C8\u5668<code>EventSource</code>\u5B9E\u4F8B\u7684<code>message</code>\u4E8B\u4EF6\u3002\u5F00\u53D1\u8005\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49 SSE \u4E8B\u4EF6\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53D1\u9001\u56DE\u6765\u7684\u6570\u636E\u4E0D\u4F1A\u89E6\u53D1<code>message</code>\u4E8B\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">var</span> origin <span class="token operator">=</span> event<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
  <span class="token keyword">var</span> lastEventId <span class="token operator">=</span> event<span class="token punctuation">.</span>lastEventId<span class="token punctuation">;</span>
  <span class="token comment">// handle message</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6D4F\u89C8\u5668\u5BF9 SSE \u7684<code>foo</code>\u4E8B\u4EF6\u8FDB\u884C\u76D1\u542C\u3002\u5982\u4F55\u5B9E\u73B0\u670D\u52A1\u5668\u53D1\u9001<code>foo</code>\u4E8B\u4EF6\uFF0C\u8BF7\u770B\u4E0B\u6587\u3002</p><h3 id="close-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#close-\u65B9\u6CD5" aria-hidden="true">#</a> close() \u65B9\u6CD5</h3><p><code>close</code>\u65B9\u6CD5\u7528\u4E8E\u5173\u95ED SSE \u8FDE\u63A5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u670D\u52A1\u5668\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u5B9E\u73B0" aria-hidden="true">#</a> \u670D\u52A1\u5668\u5B9E\u73B0</h2><h3 id="\u6570\u636E\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a> \u6570\u636E\u683C\u5F0F</h3><p>\u670D\u52A1\u5668\u5411\u6D4F\u89C8\u5668\u53D1\u9001\u7684 SSE \u6570\u636E\uFF0C\u5FC5\u987B\u662F UTF-8 \u7F16\u7801\u7684\u6587\u672C\uFF0C\u5177\u6709\u5982\u4E0B\u7684 HTTP \u5934\u4FE1\u606F\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4E09\u884C\u4E4B\u4E2D\uFF0C\u7B2C\u4E00\u884C\u7684<code>Content-Type</code>\u5FC5\u987B\u6307\u5B9A MIME \u7C7B\u578B\u4E3A<code>event-steam</code>\u3002</p><p>\u6BCF\u4E00\u6B21\u53D1\u9001\u7684\u4FE1\u606F\uFF0C\u7531\u82E5\u5E72\u4E2A<code>message</code>\u7EC4\u6210\uFF0C\u6BCF\u4E2A<code>message</code>\u4E4B\u95F4\u7528<code>\\n\\n</code>\u5206\u9694\u3002\u6BCF\u4E2A<code>message</code>\u5185\u90E8\u7531\u82E5\u5E72\u884C\u7EC4\u6210\uFF0C\u6BCF\u4E00\u884C\u90FD\u662F\u5982\u4E0B\u683C\u5F0F\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>[field]: value\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684<code>field</code>\u53EF\u4EE5\u53D6\u56DB\u4E2A\u503C\u3002</p><ul><li>data</li><li>event</li><li>id</li><li>retry</li></ul><p>\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5\u6709\u5192\u53F7\u5F00\u5934\u7684\u884C\uFF0C\u8868\u793A\u6CE8\u91CA\u3002\u901A\u5E38\uFF0C\u670D\u52A1\u5668\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u5C31\u4F1A\u5411\u6D4F\u89C8\u5668\u53D1\u9001\u4E00\u4E2A\u6CE8\u91CA\uFF0C\u4FDD\u6301\u8FDE\u63A5\u4E0D\u4E2D\u65AD\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>: This is a comment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>: this is a test stream\\n\\n

data: some text\\n\\n

data: another message\\n
data: with two lines \\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="data-\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#data-\u5B57\u6BB5" aria-hidden="true">#</a> data \u5B57\u6BB5</h3><p>\u6570\u636E\u5185\u5BB9\u7528<code>data</code>\u5B57\u6BB5\u8868\u793A\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>data:  message\\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u6570\u636E\u5F88\u957F\uFF0C\u53EF\u4EE5\u5206\u6210\u591A\u884C\uFF0C\u6700\u540E\u4E00\u884C\u7528<code>\\n\\n</code>\u7ED3\u5C3E\uFF0C\u524D\u9762\u884C\u90FD\u7528<code>\\n</code>\u7ED3\u5C3E\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>data: begin message\\n
data: continue message\\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u53D1\u9001 JSON \u6570\u636E\u7684\u4F8B\u5B50\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>data: {\\n
data: &quot;foo&quot;: &quot;bar&quot;,\\n
data: &quot;baz&quot;, 555\\n
data: }\\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id-\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#id-\u5B57\u6BB5" aria-hidden="true">#</a> id \u5B57\u6BB5</h3><p>\u6570\u636E\u6807\u8BC6\u7B26\u7528<code>id</code>\u5B57\u6BB5\u8868\u793A\uFF0C\u76F8\u5F53\u4E8E\u6BCF\u4E00\u6761\u6570\u636E\u7684\u7F16\u53F7\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>id: msg1\\n
data: message\\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4F\u89C8\u5668\u7528<code>lastEventId</code>\u5C5E\u6027\u8BFB\u53D6\u8FD9\u4E2A\u503C\u3002\u4E00\u65E6\u8FDE\u63A5\u65AD\u7EBF\uFF0C\u6D4F\u89C8\u5668\u4F1A\u53D1\u9001\u4E00\u4E2A HTTP \u5934\uFF0C\u91CC\u9762\u5305\u542B\u4E00\u4E2A\u7279\u6B8A\u7684<code>Last-Event-ID</code>\u5934\u4FE1\u606F\uFF0C\u5C06\u8FD9\u4E2A\u503C\u53D1\u9001\u56DE\u6765\uFF0C\u7528\u6765\u5E2E\u52A9\u670D\u52A1\u5668\u7AEF\u91CD\u5EFA\u8FDE\u63A5\u3002\u56E0\u6B64\uFF0C\u8FD9\u4E2A\u5934\u4FE1\u606F\u53EF\u4EE5\u88AB\u89C6\u4E3A\u4E00\u79CD\u540C\u6B65\u673A\u5236\u3002</p><h3 id="event-\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#event-\u5B57\u6BB5" aria-hidden="true">#</a> event \u5B57\u6BB5</h3><p><code>event</code>\u5B57\u6BB5\u8868\u793A\u81EA\u5B9A\u4E49\u7684\u4E8B\u4EF6\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u662F<code>message</code>\u4E8B\u4EF6\u3002\u6D4F\u89C8\u5668\u53EF\u4EE5\u7528<code>addEventListener()</code>\u76D1\u542C\u8BE5\u4E8B\u4EF6\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>event: foo\\n
data: a foo event\\n\\n

data: an unnamed event\\n\\n

event: bar\\n
data: a bar event\\n\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u521B\u9020\u4E86\u4E09\u6761\u4FE1\u606F\u3002\u7B2C\u4E00\u6761\u7684\u540D\u5B57\u662F<code>foo</code>\uFF0C\u89E6\u53D1\u6D4F\u89C8\u5668\u7684<code>foo</code>\u4E8B\u4EF6\uFF1B\u7B2C\u4E8C\u6761\u672A\u53D6\u540D\uFF0C\u8868\u793A\u9ED8\u8BA4\u7C7B\u578B\uFF0C\u89E6\u53D1\u6D4F\u89C8\u5668\u7684<code>message</code>\u4E8B\u4EF6\uFF1B\u7B2C\u4E09\u6761\u662F<code>bar</code>\uFF0C\u89E6\u53D1\u6D4F\u89C8\u5668\u7684<code>bar</code>\u4E8B\u4EF6\u3002</p><p>\u4E0B\u9762\u662F\u53E6\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>event: userconnect
data: {&quot;username&quot;: &quot;bobby&quot;, &quot;time&quot;: &quot;02:33:48&quot;}

event: usermessage
data: {&quot;username&quot;: &quot;bobby&quot;, &quot;time&quot;: &quot;02:34:11&quot;, &quot;text&quot;: &quot;Hi everyone.&quot;}

event: userdisconnect
data: {&quot;username&quot;: &quot;bobby&quot;, &quot;time&quot;: &quot;02:34:23&quot;}

event: usermessage
data: {&quot;username&quot;: &quot;sean&quot;, &quot;time&quot;: &quot;02:34:36&quot;, &quot;text&quot;: &quot;Bye, bobby.&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="retry-\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#retry-\u5B57\u6BB5" aria-hidden="true">#</a> retry \u5B57\u6BB5</h3><p>\u670D\u52A1\u5668\u53EF\u4EE5\u7528<code>retry</code>\u5B57\u6BB5\uFF0C\u6307\u5B9A\u6D4F\u89C8\u5668\u91CD\u65B0\u53D1\u8D77\u8FDE\u63A5\u7684\u65F6\u95F4\u95F4\u9694\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>retry: 10000\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E24\u79CD\u60C5\u51B5\u4F1A\u5BFC\u81F4\u6D4F\u89C8\u5668\u91CD\u65B0\u53D1\u8D77\u8FDE\u63A5\uFF1A\u4E00\u79CD\u662F\u65F6\u95F4\u95F4\u9694\u5230\u671F\uFF0C\u4E8C\u662F\u7531\u4E8E\u7F51\u7EDC\u9519\u8BEF\u7B49\u539F\u56E0\uFF0C\u5BFC\u81F4\u8FDE\u63A5\u51FA\u9519\u3002</p><h2 id="node-\u670D\u52A1\u5668\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#node-\u670D\u52A1\u5668\u5B9E\u4F8B" aria-hidden="true">#</a> Node \u670D\u52A1\u5668\u5B9E\u4F8B</h2><p>SSE \u8981\u6C42\u670D\u52A1\u5668\u4E0E\u6D4F\u89C8\u5668\u4FDD\u6301\u8FDE\u63A5\u3002\u5BF9\u4E8E\u4E0D\u540C\u7684\u670D\u52A1\u5668\u8F6F\u4EF6\u6765\u8BF4\uFF0C\u6240\u6D88\u8017\u7684\u8D44\u6E90\u662F\u4E0D\u4E00\u6837\u7684\u3002Apache \u670D\u52A1\u5668\uFF0C\u6BCF\u4E2A\u8FDE\u63A5\u5C31\u662F\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u5982\u679C\u8981\u7EF4\u6301\u5927\u91CF\u8FDE\u63A5\uFF0C\u52BF\u5FC5\u8981\u6D88\u8017\u5927\u91CF\u8D44\u6E90\u3002Node \u5219\u662F\u6240\u6709\u8FDE\u63A5\u90FD\u4F7F\u7528\u540C\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u56E0\u6B64\u6D88\u8017\u7684\u8D44\u6E90\u4F1A\u5C0F\u5F97\u591A\uFF0C\u4F46\u662F\u8FD9\u8981\u6C42\u6BCF\u4E2A\u8FDE\u63A5\u4E0D\u80FD\u5305\u542B\u5F88\u8017\u65F6\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982\u78C1\u76D8\u7684 IO \u8BFB\u5199\u3002</p>`,81),u={href:"http://cjihrig.com/blog/server-sent-events-in-node-js/",target:"_blank",rel:"noopener noreferrer"},d=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> fileName <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>url<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>fileName <span class="token operator">===</span> <span class="token string">&quot;./stream&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text/event-stream&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;Cache-Control&quot;</span><span class="token operator">:</span><span class="token string">&quot;no-cache&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;Connection&quot;</span><span class="token operator">:</span><span class="token string">&quot;keep-alive&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;Access-Control-Allow-Origin&quot;</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;retry: 10000\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;event: connecttime\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;data: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;data: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;data: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    req<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8844</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,2),v={href:"http://jspro.com/apis/implementing-push-technology-using-server-sent-events/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://cjihrig.com/blog/the-server-side-of-server-sent-events/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.html5rocks.com/en/tutorials/eventsource/basics/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.mozilla.org/en-US/docs/Server-sent_events/Using_server-sent_events",target:"_blank",rel:"noopener noreferrer"},b={href:"https://segment.io/blog/2014-04-03-server-sent-events-the-simplest-realtime-browser-spec/",target:"_blank",rel:"noopener noreferrer"};function g(f,q){const a=i("ExternalLinkIcon");return p(),c("div",null,[r,n("p",null,[s("\u4E0B\u9762\u662F Node \u7684 SSE \u670D\u52A1\u5668"),n("a",u,[s("\u5B9E\u4F8B"),e(a)]),s("\u3002")]),d,n("ul",null,[n("li",null,[s("Colin Ihrig, "),n("a",v,[s("Implementing Push Technology Using Server-Sent Events"),e(a)])]),n("li",null,[s("Colin Ihrig\uFF0C"),n("a",k,[s("The Server Side of Server-Sent Events"),e(a)])]),n("li",null,[s("Eric Bidelman, "),n("a",m,[s("Stream Updates with Server-Sent Events"),e(a)])]),n("li",null,[s("MDN\uFF0C"),n("a",h,[s("Using server-sent events"),e(a)])]),n("li",null,[s("Segment.io, "),n("a",b,[s("Server-Sent Events: The simplest realtime browser spec"),e(a)])])])])}const y=o(l,[["render",g],["__file","server-sent-events.html.vue"]]);export{y as default};
