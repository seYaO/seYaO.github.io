import{_ as e,o as d,c,e as o}from"./app.3b2d76f3.js";const a={},i=o(`<h1 id="dom-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#dom-\u6982\u8FF0" aria-hidden="true">#</a> DOM \u6982\u8FF0</h1><h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h2><p>DOM \u662F JavaScript \u64CD\u4F5C\u7F51\u9875\u7684\u63A5\u53E3\uFF0C\u5168\u79F0\u4E3A\u201C\u6587\u6863\u5BF9\u8C61\u6A21\u578B\u201D\uFF08Document Object Model\uFF09\u3002\u5B83\u7684\u4F5C\u7528\u662F\u5C06\u7F51\u9875\u8F6C\u4E3A\u4E00\u4E2A JavaScript \u5BF9\u8C61\uFF0C\u4ECE\u800C\u53EF\u4EE5\u7528\u811A\u672C\u8FDB\u884C\u5404\u79CD\u64CD\u4F5C\uFF08\u6BD4\u5982\u589E\u5220\u5185\u5BB9\uFF09\u3002</p><p>\u6D4F\u89C8\u5668\u4F1A\u6839\u636E DOM \u6A21\u578B\uFF0C\u5C06\u7ED3\u6784\u5316\u6587\u6863\uFF08\u6BD4\u5982 HTML \u548C XML\uFF09\u89E3\u6790\u6210\u4E00\u7CFB\u5217\u7684\u8282\u70B9\uFF0C\u518D\u7531\u8FD9\u4E9B\u8282\u70B9\u7EC4\u6210\u4E00\u4E2A\u6811\u72B6\u7ED3\u6784\uFF08DOM Tree\uFF09\u3002\u6240\u6709\u7684\u8282\u70B9\u548C\u6700\u7EC8\u7684\u6811\u72B6\u7ED3\u6784\uFF0C\u90FD\u6709\u89C4\u8303\u7684\u5BF9\u5916\u63A5\u53E3\u3002</p><p>DOM \u53EA\u662F\u4E00\u4E2A\u63A5\u53E3\u89C4\u8303\uFF0C\u53EF\u4EE5\u7528\u5404\u79CD\u8BED\u8A00\u5B9E\u73B0\u3002\u6240\u4EE5\u4E25\u683C\u5730\u8BF4\uFF0CDOM \u4E0D\u662F JavaScript \u8BED\u6CD5\u7684\u4E00\u90E8\u5206\uFF0C\u4F46\u662F DOM \u64CD\u4F5C\u662F JavaScript \u6700\u5E38\u89C1\u7684\u4EFB\u52A1\uFF0C\u79BB\u5F00\u4E86 DOM\uFF0CJavaScript \u5C31\u65E0\u6CD5\u63A7\u5236\u7F51\u9875\u3002\u53E6\u4E00\u65B9\u9762\uFF0CJavaScript \u4E5F\u662F\u6700\u5E38\u7528\u4E8E DOM \u64CD\u4F5C\u7684\u8BED\u8A00\u3002\u540E\u9762\u4ECB\u7ECD\u7684\u5C31\u662F JavaScript \u5BF9 DOM \u6807\u51C6\u7684\u5B9E\u73B0\u548C\u7528\u6CD5\u3002</p><h2 id="\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9" aria-hidden="true">#</a> \u8282\u70B9</h2><p>DOM \u7684\u6700\u5C0F\u7EC4\u6210\u5355\u4F4D\u53EB\u505A\u8282\u70B9\uFF08node\uFF09\u3002\u6587\u6863\u7684\u6811\u5F62\u7ED3\u6784\uFF08DOM \u6811\uFF09\uFF0C\u5C31\u662F\u7531\u5404\u79CD\u4E0D\u540C\u7C7B\u578B\u7684\u8282\u70B9\u7EC4\u6210\u3002\u6BCF\u4E2A\u8282\u70B9\u53EF\u4EE5\u770B\u4F5C\u662F\u6587\u6863\u6811\u7684\u4E00\u7247\u53F6\u5B50\u3002</p><p>\u8282\u70B9\u7684\u7C7B\u578B\u6709\u4E03\u79CD\u3002</p><ul><li><code>Document</code>\uFF1A\u6574\u4E2A\u6587\u6863\u6811\u7684\u9876\u5C42\u8282\u70B9</li><li><code>DocumentType</code>\uFF1A<code>doctype</code>\u6807\u7B7E\uFF08\u6BD4\u5982<code>&lt;!DOCTYPE html&gt;</code>\uFF09</li><li><code>Element</code>\uFF1A\u7F51\u9875\u7684\u5404\u79CDHTML\u6807\u7B7E\uFF08\u6BD4\u5982<code>&lt;body&gt;</code>\u3001<code>&lt;a&gt;</code>\u7B49\uFF09</li><li><code>Attr</code>\uFF1A\u7F51\u9875\u5143\u7D20\u7684\u5C5E\u6027\uFF08\u6BD4\u5982<code>class=&quot;right&quot;</code>\uFF09</li><li><code>Text</code>\uFF1A\u6807\u7B7E\u4E4B\u95F4\u6216\u6807\u7B7E\u5305\u542B\u7684\u6587\u672C</li><li><code>Comment</code>\uFF1A\u6CE8\u91CA</li><li><code>DocumentFragment</code>\uFF1A\u6587\u6863\u7684\u7247\u6BB5</li></ul><p>\u6D4F\u89C8\u5668\u63D0\u4F9B\u4E00\u4E2A\u539F\u751F\u7684\u8282\u70B9\u5BF9\u8C61<code>Node</code>\uFF0C\u4E0A\u9762\u8FD9\u4E03\u79CD\u8282\u70B9\u90FD\u7EE7\u627F\u4E86<code>Node</code>\uFF0C\u56E0\u6B64\u5177\u6709\u4E00\u4E9B\u5171\u540C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><h2 id="\u8282\u70B9\u6811" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u6811" aria-hidden="true">#</a> \u8282\u70B9\u6811</h2><p>\u4E00\u4E2A\u6587\u6863\u7684\u6240\u6709\u8282\u70B9\uFF0C\u6309\u7167\u6240\u5728\u7684\u5C42\u7EA7\uFF0C\u53EF\u4EE5\u62BD\u8C61\u6210\u4E00\u79CD\u6811\u72B6\u7ED3\u6784\u3002\u8FD9\u79CD\u6811\u72B6\u7ED3\u6784\u5C31\u662F DOM \u6811\u3002\u5B83\u6709\u4E00\u4E2A\u9876\u5C42\u8282\u70B9\uFF0C\u4E0B\u4E00\u5C42\u90FD\u662F\u9876\u5C42\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u7136\u540E\u5B50\u8282\u70B9\u53C8\u6709\u81EA\u5DF1\u7684\u5B50\u8282\u70B9\uFF0C\u5C31\u8FD9\u6837\u5C42\u5C42\u884D\u751F\u51FA\u4E00\u4E2A\u91D1\u5B57\u5854\u7ED3\u6784\uFF0C\u53C8\u50CF\u4E00\u68F5\u6811\u3002</p><p>\u6D4F\u89C8\u5668\u539F\u751F\u63D0\u4F9B<code>document</code>\u8282\u70B9\uFF0C\u4EE3\u8868\u6574\u4E2A\u6587\u6863\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document
<span class="token comment">// \u6574\u4E2A\u6587\u6863\u6811</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u6863\u7684\u7B2C\u4E00\u5C42\u6709\u4E24\u4E2A\u8282\u70B9\uFF0C\u7B2C\u4E00\u4E2A\u662F\u6587\u6863\u7C7B\u578B\u8282\u70B9\uFF08<code>&lt;!doctype html&gt;</code>\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u662F HTML \u7F51\u9875\u7684\u9876\u5C42\u5BB9\u5668\u6807\u7B7E<code>&lt;html&gt;</code>\u3002\u540E\u8005\u6784\u6210\u4E86\u6811\u7ED3\u6784\u7684\u6839\u8282\u70B9\uFF08root node\uFF09\uFF0C\u5176\u4ED6 HTML \u6807\u7B7E\u8282\u70B9\u90FD\u662F\u5B83\u7684\u4E0B\u7EA7\u8282\u70B9\u3002</p><p>\u9664\u4E86\u6839\u8282\u70B9\uFF0C\u5176\u4ED6\u8282\u70B9\u90FD\u6709\u4E09\u79CD\u5C42\u7EA7\u5173\u7CFB\u3002</p><ul><li>\u7236\u8282\u70B9\u5173\u7CFB\uFF08parentNode\uFF09\uFF1A\u76F4\u63A5\u7684\u90A3\u4E2A\u4E0A\u7EA7\u8282\u70B9</li><li>\u5B50\u8282\u70B9\u5173\u7CFB\uFF08childNodes\uFF09\uFF1A\u76F4\u63A5\u7684\u4E0B\u7EA7\u8282\u70B9</li><li>\u540C\u7EA7\u8282\u70B9\u5173\u7CFB\uFF08sibling\uFF09\uFF1A\u62E5\u6709\u540C\u4E00\u4E2A\u7236\u8282\u70B9\u7684\u8282\u70B9</li></ul><p>DOM \u63D0\u4F9B\u64CD\u4F5C\u63A5\u53E3\uFF0C\u7528\u6765\u83B7\u53D6\u8FD9\u4E09\u79CD\u5173\u7CFB\u7684\u8282\u70B9\u3002\u6BD4\u5982\uFF0C\u5B50\u8282\u70B9\u63A5\u53E3\u5305\u62EC<code>firstChild</code>\uFF08\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\uFF09\u548C<code>lastChild</code>\uFF08\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9\uFF09\u7B49\u5C5E\u6027\uFF0C\u540C\u7EA7\u8282\u70B9\u63A5\u53E3\u5305\u62EC<code>nextSibling</code>\uFF08\u7D27\u90BB\u5728\u540E\u7684\u90A3\u4E2A\u540C\u7EA7\u8282\u70B9\uFF09\u548C<code>previousSibling</code>\uFF08\u7D27\u90BB\u5728\u524D\u7684\u90A3\u4E2A\u540C\u7EA7\u8282\u70B9\uFF09\u5C5E\u6027\u3002</p>`,18),t=[i];function l(n,r){return d(),c("div",null,t)}const p=e(a,[["render",l],["__file","general.html.vue"]]);export{p as default};
