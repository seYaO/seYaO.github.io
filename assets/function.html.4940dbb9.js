import{_ as e,o as i,c as l,a as n,b as s,d as c,e as o,r as d}from"./app.3b2d76f3.js";const t={},p=o(`<h1 id="bash-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#bash-\u51FD\u6570" aria-hidden="true">#</a> Bash \u51FD\u6570</h1><p>\u672C\u7AE0\u4ECB\u7ECD Bash \u51FD\u6570\u7684\u7528\u6CD5\u3002</p><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u51FD\u6570\uFF08function\uFF09\u662F\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u7684\u4EE3\u7801\u7247\u6BB5\uFF0C\u6709\u5229\u4E8E\u4EE3\u7801\u7684\u590D\u7528\u3002\u5B83\u4E0E\u522B\u540D\uFF08alias\uFF09\u7684\u533A\u522B\u662F\uFF0C\u522B\u540D\u53EA\u9002\u5408\u5C01\u88C5\u7B80\u5355\u7684\u5355\u4E2A\u547D\u4EE4\uFF0C\u51FD\u6570\u5219\u53EF\u4EE5\u5C01\u88C5\u590D\u6742\u7684\u591A\u884C\u547D\u4EE4\u3002</p><p>\u51FD\u6570\u603B\u662F\u5728\u5F53\u524D Shell \u6267\u884C\uFF0C\u8FD9\u662F\u8DDF\u811A\u672C\u7684\u4E00\u4E2A\u91CD\u5927\u533A\u522B\uFF0CBash \u4F1A\u65B0\u5EFA\u4E00\u4E2A\u5B50 Shell \u6267\u884C\u811A\u672C\u3002\u5982\u679C\u51FD\u6570\u4E0E\u811A\u672C\u540C\u540D\uFF0C\u51FD\u6570\u4F1A\u4F18\u5148\u6267\u884C\u3002\u4F46\u662F\uFF0C\u51FD\u6570\u7684\u4F18\u5148\u7EA7\u4E0D\u5982\u522B\u540D\uFF0C\u5373\u5982\u679C\u51FD\u6570\u4E0E\u522B\u540D\u540C\u540D\uFF0C\u90A3\u4E48\u522B\u540D\u4F18\u5148\u6267\u884C\u3002</p><p>Bash \u51FD\u6570\u5B9A\u4E49\u7684\u8BED\u6CD5\u6709\u4E24\u79CD\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7B2C\u4E00\u79CD</span>
<span class="token function-name function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment"># codes</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u7B2C\u4E8C\u79CD</span>
<span class="token keyword">function</span> <span class="token function-name function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment"># codes</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>fn</code>\u662F\u81EA\u5B9A\u4E49\u7684\u51FD\u6570\u540D\uFF0C\u51FD\u6570\u4EE3\u7801\u5C31\u5199\u5728\u5927\u62EC\u53F7\u4E4B\u4E2D\u3002\u8FD9\u4E24\u79CD\u5199\u6CD5\u662F\u7B49\u4EF7\u7684\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u51FD\u6570\u7684\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function-name function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello <span class="token variable">$1</span>&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570\u4F53\u91CC\u9762\u7684<code>$1</code>\u8868\u793A\u51FD\u6570\u8C03\u7528\u65F6\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002</p><p>\u8C03\u7528\u65F6\uFF0C\u5C31\u76F4\u63A5\u5199\u51FD\u6570\u540D\uFF0C\u53C2\u6570\u8DDF\u5728\u51FD\u6570\u540D\u540E\u9762\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ hello world
Hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u591A\u884C\u51FD\u6570\u7684\u4F8B\u5B50\uFF0C\u663E\u793A\u5F53\u524D\u65E5\u671F\u65F6\u95F4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function-name function">today</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Today&#39;s date is: &quot;</span>
  <span class="token function">date</span> +<span class="token string">&quot;%A, %B %-d, %Y&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5220\u9664\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>unset</code>\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">unset</span> <span class="token parameter variable">-f</span> functionName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u5F53\u524D Shell \u5DF2\u7ECF\u5B9A\u4E49\u7684\u6240\u6709\u51FD\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>declare</code>\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">declare</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684<code>declare</code>\u547D\u4EE4\u4E0D\u4EC5\u4F1A\u8F93\u51FA\u51FD\u6570\u540D\uFF0C\u8FD8\u4F1A\u8F93\u51FA\u6240\u6709\u5B9A\u4E49\u3002\u8F93\u51FA\u987A\u5E8F\u662F\u6309\u7167\u51FD\u6570\u540D\u7684\u5B57\u6BCD\u8868\u987A\u5E8F\u3002\u7531\u4E8E\u4F1A\u8F93\u51FA\u5F88\u591A\u5185\u5BB9\uFF0C\u6700\u597D\u901A\u8FC7\u7BA1\u9053\u547D\u4EE4\u914D\u5408<code>more</code>\u6216<code>less</code>\u4F7F\u7528\u3002</p><p><code>declare</code>\u547D\u4EE4\u8FD8\u652F\u6301\u67E5\u770B\u5355\u4E2A\u51FD\u6570\u7684\u5B9A\u4E49\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">declare</span> <span class="token parameter variable">-f</span> functionName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>declare -F</code>\u53EF\u4EE5\u8F93\u51FA\u6240\u6709\u5DF2\u7ECF\u5B9A\u4E49\u7684\u51FD\u6570\u540D\uFF0C\u4E0D\u542B\u51FD\u6570\u4F53\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">declare</span> <span class="token parameter variable">-F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u6570\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u53D8\u91CF" aria-hidden="true">#</a> \u53C2\u6570\u53D8\u91CF</h2><p>\u51FD\u6570\u4F53\u5185\u53EF\u4EE5\u4F7F\u7528\u53C2\u6570\u53D8\u91CF\uFF0C\u83B7\u53D6\u51FD\u6570\u53C2\u6570\u3002\u51FD\u6570\u7684\u53C2\u6570\u53D8\u91CF\uFF0C\u4E0E\u811A\u672C\u53C2\u6570\u53D8\u91CF\u662F\u4E00\u81F4\u7684\u3002</p><ul><li><code>$1</code>~<code>$9</code>\uFF1A\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u5230\u7B2C9\u4E2A\u7684\u53C2\u6570\u3002</li><li><code>$0</code>\uFF1A\u51FD\u6570\u6240\u5728\u7684\u811A\u672C\u540D\u3002</li><li><code>$#</code>\uFF1A\u51FD\u6570\u7684\u53C2\u6570\u603B\u6570\u3002</li><li><code>$@</code>\uFF1A\u51FD\u6570\u7684\u5168\u90E8\u53C2\u6570\uFF0C\u53C2\u6570\u4E4B\u95F4\u4F7F\u7528\u7A7A\u683C\u5206\u9694\u3002</li><li><code>$*</code>\uFF1A\u51FD\u6570\u7684\u5168\u90E8\u53C2\u6570\uFF0C\u53C2\u6570\u4E4B\u95F4\u4F7F\u7528\u53D8\u91CF<code>$IFS</code>\u503C\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u5206\u9694\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u683C\uFF0C\u4F46\u662F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u3002</li></ul><p>\u5982\u679C\u51FD\u6570\u7684\u53C2\u6570\u591A\u4E8E9\u4E2A\uFF0C\u90A3\u4E48\u7B2C10\u4E2A\u53C2\u6570\u53EF\u4EE5\u7528<code>\${10}</code>\u7684\u5F62\u5F0F\u5F15\u7528\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\u811A\u672C<code>test.sh</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># test.sh</span>

<span class="token keyword">function</span> <span class="token function-name function">alice</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;alice: <span class="token variable">$@</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$0</span>: <span class="token variable">$1</span> <span class="token variable">$2</span> <span class="token variable">$3</span> <span class="token variable">$4</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$#</span> arguments&quot;</span>

<span class="token punctuation">}</span>

alice <span class="token keyword">in</span> wonderland
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u8BE5\u811A\u672C\uFF0C\u7ED3\u679C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> test.sh
alice: <span class="token keyword">in</span> wonderland
test.sh: <span class="token keyword">in</span> wonderland
<span class="token number">2</span> arguments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u7531\u4E8E\u51FD\u6570<code>alice</code>\u53EA\u6709\u7B2C\u4E00\u4E2A\u548C\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u6240\u4EE5\u7B2C\u4E09\u4E2A\u548C\u7B2C\u56DB\u4E2A\u53C2\u6570\u4E3A\u7A7A\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u65E5\u5FD7\u51FD\u6570\u7684\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">log_msg</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;[<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+ %F %T&#39;</span><span class="token variable">\`</span></span> ]: <span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ log_msg <span class="token string">&quot;This is sample log message&quot;</span>
<span class="token punctuation">[</span> <span class="token number">2018</span>-08-16 <span class="token number">19</span>:56:34 <span class="token punctuation">]</span>: This is sample log message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="return-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#return-\u547D\u4EE4" aria-hidden="true">#</a> return \u547D\u4EE4</h2><p><code>return</code>\u547D\u4EE4\u7528\u4E8E\u4ECE\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u503C\u3002\u51FD\u6570\u6267\u884C\u5230\u8FD9\u6761\u547D\u4EE4\uFF0C\u5C31\u4E0D\u518D\u5F80\u4E0B\u6267\u884C\u4E86\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E86\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">func_return_value</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570\u5C06\u8FD4\u56DE\u503C\u8FD4\u56DE\u7ED9\u8C03\u7528\u8005\u3002\u5982\u679C\u547D\u4EE4\u884C\u76F4\u63A5\u6267\u884C\u51FD\u6570\uFF0C\u4E0B\u4E00\u4E2A\u547D\u4EE4\u53EF\u4EE5\u7528<code>$?</code>\u62FF\u5230\u8FD4\u56DE\u503C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ func_return_value
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;Value returned by function is: <span class="token variable">$?</span>&quot;</span>
Value returned by <span class="token keyword">function</span> is: <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>return</code>\u540E\u9762\u4E0D\u8DDF\u53C2\u6570\uFF0C\u53EA\u7528\u4E8E\u8FD4\u56DE\u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">name</span> <span class="token punctuation">{</span>
  commands
  <span class="token builtin class-name">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5168\u5C40\u53D8\u91CF\u548C\u5C40\u90E8\u53D8\u91CF-local-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF\u548C\u5C40\u90E8\u53D8\u91CF-local-\u547D\u4EE4" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF\u548C\u5C40\u90E8\u53D8\u91CF\uFF0Clocal \u547D\u4EE4</h2><p>Bash \u51FD\u6570\u4F53\u5185\u76F4\u63A5\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u5C5E\u4E8E\u5168\u5C40\u53D8\u91CF\uFF0C\u6574\u4E2A\u811A\u672C\u90FD\u53EF\u4EE5\u8BFB\u53D6\u3002\u8FD9\u4E00\u70B9\u9700\u8981\u7279\u522B\u5C0F\u5FC3\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u811A\u672C test.sh</span>
<span class="token function-name function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">1</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;fn: foo = <span class="token variable">$foo</span>&quot;</span>
<span class="token punctuation">}</span>

fn
<span class="token builtin class-name">echo</span> <span class="token string">&quot;global: foo = <span class="token variable">$foo</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u811A\u672C\u7684\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> test.sh
fn: foo <span class="token operator">=</span> <span class="token number">1</span>
global: foo <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u53D8\u91CF<code>$foo</code>\u662F\u5728\u51FD\u6570<code>fn</code>\u5185\u90E8\u58F0\u660E\u7684\uFF0C\u51FD\u6570\u4F53\u5916\u4E5F\u53EF\u4EE5\u8BFB\u53D6\u3002</p><p>\u51FD\u6570\u4F53\u5185\u4E0D\u4EC5\u53EF\u4EE5\u58F0\u660E\u5168\u5C40\u53D8\u91CF\uFF0C\u8FD8\u53EF\u4EE5\u4FEE\u6539\u5168\u5C40\u53D8\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token function-name function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token punctuation">}</span>

fn

<span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7684\u53D8\u91CF<code>$foo</code>\u503C\u4E3A2\u3002</p><p>\u51FD\u6570\u91CC\u9762\u53EF\u4EE5\u7528<code>local</code>\u547D\u4EE4\u58F0\u660E\u5C40\u90E8\u53D8\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token comment"># \u811A\u672C test.sh</span>
<span class="token function-name function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">local</span> foo
  <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">1</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;fn: foo = <span class="token variable">$foo</span>&quot;</span>
<span class="token punctuation">}</span>

fn
<span class="token builtin class-name">echo</span> <span class="token string">&quot;global: foo = <span class="token variable">$foo</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u811A\u672C\u7684\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> test.sh
fn: foo <span class="token operator">=</span> <span class="token number">1</span>
global: foo <span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>local</code>\u547D\u4EE4\u58F0\u660E\u7684<code>$foo</code>\u53D8\u91CF\uFF0C\u53EA\u5728\u51FD\u6570\u4F53\u5185\u6709\u6548\uFF0C\u51FD\u6570\u4F53\u5916\u6CA1\u6709\u5B9A\u4E49\u3002</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,59),u={href:"https://www.linuxtechi.com/define-use-functions-linux-shell-script/",target:"_blank",rel:"noopener noreferrer"};function r(v,b){const a=d("ExternalLinkIcon");return i(),l("div",null,[p,n("ul",null,[n("li",null,[n("a",u,[s("How to define and use functions in Linux Shell Script"),c(a)]),s(", by Pradeep Kumar")])])])}const h=e(t,[["render",r],["__file","function.html.vue"]]);export{h as default};
