import{_ as n,o as s,c as a,e}from"./app.3b2d76f3.js";const c={},p=e(`<h1 id="enum-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#enum-\u7C7B\u578B" aria-hidden="true">#</a> Enum \u7C7B\u578B</h1><p>\u5982\u679C\u4E00\u79CD\u6570\u636E\u7C7B\u578B\u7684\u53D6\u503C\u53EA\u6709\u5C11\u6570\u51E0\u79CD\u53EF\u80FD\uFF0C\u5E76\u4E14\u6BCF\u79CD\u53D6\u503C\u90FD\u6709\u81EA\u5DF1\u7684\u542B\u4E49\uFF0C\u4E3A\u4E86\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\uFF0C\u53EF\u4EE5\u5C06\u5B83\u4EEC\u5B9A\u4E49\u4E3A Enum \u7C7B\u578B\uFF0C\u4E2D\u6587\u540D\u4E3A\u679A\u4E3E\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">colors</span> <span class="token punctuation">{</span>RED<span class="token punctuation">,</span> GREEN<span class="token punctuation">,</span> BLUE<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> RED<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> GREEN<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> BLUE<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u5047\u5B9A\u7A0B\u5E8F\u91CC\u9762\u9700\u8981\u4E09\u79CD\u989C\u8272\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528<code>enum</code>\u547D\u4EE4\uFF0C\u628A\u8FD9\u4E09\u79CD\u989C\u8272\u5B9A\u4E49\u6210\u4E00\u79CD\u679A\u4E3E\u7C7B\u578B<code>colors</code>\uFF0C\u5B83\u53EA\u6709\u4E09\u79CD\u53D6\u503C\u53EF\u80FD<code>RED</code>\u3001<code>GREEN</code>\u3001<code>BLUE</code>\u3002\u8FD9\u65F6\uFF0C\u8FD9\u4E09\u4E2A\u540D\u5B57\u81EA\u52A8\u6210\u4E3A\u6574\u6570\u5E38\u91CF\uFF0C\u7F16\u8BD1\u5668\u9ED8\u8BA4\u5C06\u5B83\u4EEC\u7684\u503C\u8BBE\u4E3A\u6570\u5B57<code>0</code>\u3001<code>1</code>\u3001<code>2</code>\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF0C<code>RED</code>\u8981\u6BD4<code>0</code>\u7684\u53EF\u8BFB\u6027\u597D\u4E86\u8BB8\u591A\u3002</p><p>\u6CE8\u610F\uFF0CEnum \u5185\u90E8\u7684\u5E38\u91CF\u540D\uFF0C\u9075\u5B88\u6807\u8BC6\u7B26\u7684\u547D\u540D\u89C4\u8303\uFF0C\u4F46\u662F\u901A\u5E38\u90FD\u4F7F\u7528\u5927\u5199\u3002</p><p>\u4F7F\u7528\u65F6\uFF0C\u53EF\u4EE5\u5C06\u53D8\u91CF\u58F0\u660E\u4E3A Enum \u7C7B\u578B\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">colors</span> color<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u5C06\u53D8\u91CF<code>color</code>\u58F0\u660E\u4E3A<code>enum colors</code>\u7C7B\u578B\u3002\u8FD9\u4E2A\u53D8\u91CF\u7684\u503C\u5C31\u662F\u5E38\u91CF<code>RED</code>\u3001<code>GREEN</code>\u3001<code>BLUE</code>\u4E4B\u4E2D\u7684\u4E00\u4E2A\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>color <span class="token operator">=</span> BLUE<span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%i\\n&quot;</span><span class="token punctuation">,</span> color<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u5C06\u53D8\u91CF<code>color</code>\u7684\u503C\u8BBE\u4E3A<code>BLUE</code>\uFF0C\u8FD9\u91CC<code>BLUE</code>\u5C31\u662F\u4E00\u4E2A\u5E38\u91CF\uFF0C\u503C\u7B49\u4E8E<code>2</code>\u3002</p><p>typedef \u547D\u4EE4\u53EF\u4EE5\u4E3A Enum \u7C7B\u578B\u8D77\u522B\u540D\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">enum</span> <span class="token punctuation">{</span>
  SHEEP<span class="token punctuation">,</span>
  WHEAT<span class="token punctuation">,</span>
  WOOD<span class="token punctuation">,</span>
  BRICK<span class="token punctuation">,</span>
  ORE
<span class="token punctuation">}</span> RESOURCE<span class="token punctuation">;</span>

RESOURCE r<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>RESOURCE</code>\u662F Enum \u7C7B\u578B\u7684\u522B\u540D\u3002\u58F0\u660E\u53D8\u91CF\u65F6\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u522B\u540D\u5373\u53EF\u3002</p><p>\u8FD8\u6709\u4E00\u79CD\u4E0D\u5E38\u89C1\u7684\u5199\u6CD5\uFF0C\u5C31\u662F\u58F0\u660E Enum \u7C7B\u578B\u65F6\uFF0C\u5728\u540C\u4E00\u884C\u91CC\u9762\u4E3A\u53D8\u91CF\u8D4B\u503C\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token punctuation">{</span>
  SHEEP<span class="token punctuation">,</span>
  WHEAT<span class="token punctuation">,</span>
  WOOD<span class="token punctuation">,</span>
  BRICK<span class="token punctuation">,</span>
  ORE
<span class="token punctuation">}</span> r <span class="token operator">=</span> BRICK<span class="token punctuation">,</span> s <span class="token operator">=</span> WOOD<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>r</code>\u7684\u503C\u662F<code>3</code>\uFF0C<code>s</code>\u7684\u503C\u662F<code>2</code>\u3002</p><p>\u7531\u4E8E Enum \u7684\u5C5E\u6027\u4F1A\u81EA\u52A8\u58F0\u660E\u4E3A\u5E38\u91CF\uFF0C\u6240\u4EE5\u6709\u65F6\u5019\u4F7F\u7528 Enum \u7684\u76EE\u7684\uFF0C\u4E0D\u662F\u4E3A\u4E86\u81EA\u5B9A\u4E49\u4E00\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u800C\u662F\u4E3A\u4E86\u58F0\u660E\u4E00\u7EC4\u5E38\u91CF\u3002\u8FD9\u65F6\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u8FD9\u79CD\u5199\u6CD5\uFF0C\u6BD4\u8F83\u7B80\u5355\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token punctuation">{</span> ONE<span class="token punctuation">,</span> TWO <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d&quot;</span><span class="token punctuation">,</span> ONE<span class="token punctuation">,</span> TWO<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 0 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C<code>enum</code>\u662F\u4E00\u4E2A\u5173\u952E\u5B57\uFF0C\u540E\u9762\u8DDF\u7740\u4E00\u4E2A\u4EE3\u7801\u5757\uFF0C\u5E38\u91CF\u5C31\u5728\u4EE3\u7801\u5185\u58F0\u660E\u3002<code>ONE</code>\u548C<code>TWO</code>\u5C31\u662F\u4E24\u4E2A Enum \u5E38\u91CF\u3002</p><p>\u5E38\u91CF\u4E4B\u95F4\u4F7F\u7528\u9017\u53F7\u5206\u9694\u3002\u6700\u540E\u4E00\u4E2A\u5E38\u91CF\u540E\u9762\u7684\u5C3E\u9017\u53F7\uFF0C\u53EF\u4EE5\u7701\u7565\uFF0C\u4E5F\u53EF\u4EE5\u4FDD\u7559\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token punctuation">{</span> ONE<span class="token punctuation">,</span> TWO<span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7531\u4E8EEnum \u4F1A\u81EA\u52A8\u7F16\u53F7\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4E0D\u5FC5\u4E3A\u5E38\u91CF\u8D4B\u503C\u3002C \u8BED\u8A00\u4F1A\u81EA\u52A8\u4ECE0\u5F00\u59CB\u9012\u589E\uFF0C\u4E3A\u5E38\u91CF\u8D4B\u503C\u3002\u4F46\u662F\uFF0CC \u8BED\u8A00\u4E5F\u5141\u8BB8\u4E3A ENUM \u5E38\u91CF\u6307\u5B9A\u503C\uFF0C\u4E0D\u8FC7\u53EA\u80FD\u6307\u5B9A\u4E3A\u6574\u6570\uFF0C\u4E0D\u80FD\u662F\u5176\u4ED6\u7C7B\u578B\u3002\u56E0\u6B64\uFF0C\u4EFB\u4F55\u53EF\u4EE5\u4F7F\u7528\u6574\u6570\u7684\u573A\u5408\uFF0C\u90FD\u53EF\u4EE5\u4F7F\u7528 Enum \u5E38\u91CF\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token punctuation">{</span> ONE <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> TWO <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d&quot;</span><span class="token punctuation">,</span> ONE<span class="token punctuation">,</span> TWO<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Enum \u5E38\u91CF\u53EF\u4EE5\u662F\u4E0D\u8FDE\u7EED\u7684\u503C\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token punctuation">{</span> X <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> Y <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">,</span> Z <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Enum \u5E38\u91CF\u4E5F\u53EF\u4EE5\u662F\u540C\u4E00\u4E2A\u503C\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token punctuation">{</span> X <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> Y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> Z <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4E00\u7EC4\u5E38\u91CF\u4E4B\u4E2D\uFF0C\u6709\u4E9B\u6307\u5B9A\u4E86\u503C\uFF0C\u6709\u4E9B\u6CA1\u6709\u6307\u5B9A\u3002\u90A3\u4E48\uFF0C\u6CA1\u6709\u6307\u5B9A\u503C\u7684\u5E38\u91CF\u4F1A\u4ECE\u4E0A\u4E00\u4E2A\u6307\u5B9A\u4E86\u503C\u7684\u5E38\u91CF\uFF0C\u5F00\u59CB\u81EA\u52A8\u9012\u589E\u8D4B\u503C\u3002</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token punctuation">{</span>
  A<span class="token punctuation">,</span>    <span class="token comment">// 0</span>
  B<span class="token punctuation">,</span>    <span class="token comment">// 1</span>
  C <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span>  <span class="token comment">// 4</span>
  D<span class="token punctuation">,</span>    <span class="token comment">// 5</span>
  E<span class="token punctuation">,</span>    <span class="token comment">// 6</span>
  F <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>   <span class="token comment">// 3</span>
  G<span class="token punctuation">,</span>    <span class="token comment">// 4</span>
  H     <span class="token comment">// 5</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Enum \u7684\u4F5C\u7528\u57DF\u4E0E\u53D8\u91CF\u76F8\u540C\u3002\u5982\u679C\u662F\u5728\u9876\u5C42\u58F0\u660E\uFF0C\u90A3\u4E48\u5728\u6574\u4E2A\u6587\u4EF6\u5185\u90FD\u6709\u6548\uFF1B\u5982\u679C\u662F\u5728\u4EE3\u7801\u5757\u5185\u90E8\u58F0\u660E\uFF0C\u5219\u53EA\u5BF9\u8BE5\u4EE3\u7801\u5757\u6709\u6548\u3002\u5982\u679C\u4E0E\u4F7F\u7528<code>int</code>\u58F0\u660E\u7684\u5E38\u91CF\u76F8\u6BD4\uFF0CEnum \u7684\u597D\u5904\u662F\u66F4\u6E05\u6670\u5730\u8868\u793A\u4EE3\u7801\u610F\u56FE\u3002</p>`,30),o=[p];function t(i,l){return s(),a("div",null,o)}const d=n(c,[["render",t],["__file","enum.html.vue"]]);export{d as default};