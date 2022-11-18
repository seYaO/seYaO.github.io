import{_ as p,o as t,c as l,a as n,b as s,d as e,e as c,r as i}from"./app.3b2d76f3.js";const o={},r=c(`<h1 id="mktemp-\u547D\u4EE4-trap-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#mktemp-\u547D\u4EE4-trap-\u547D\u4EE4" aria-hidden="true">#</a> mktemp \u547D\u4EE4\uFF0Ctrap \u547D\u4EE4</h1><p>Bash \u811A\u672C\u6709\u65F6\u9700\u8981\u521B\u5EFA\u4E34\u65F6\u6587\u4EF6\u6216\u4E34\u65F6\u76EE\u5F55\u3002\u5E38\u89C1\u7684\u505A\u6CD5\u662F\uFF0C\u5728<code>/tmp</code>\u76EE\u5F55\u91CC\u9762\u521B\u5EFA\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u8FD9\u6837\u505A\u6709\u5F88\u591A\u5F0A\u7AEF\uFF0C\u4F7F\u7528<code>mktemp</code>\u547D\u4EE4\u662F\u6700\u5B89\u5168\u7684\u505A\u6CD5\u3002</p><h2 id="\u4E34\u65F6\u6587\u4EF6\u7684\u5B89\u5168\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E34\u65F6\u6587\u4EF6\u7684\u5B89\u5168\u95EE\u9898" aria-hidden="true">#</a> \u4E34\u65F6\u6587\u4EF6\u7684\u5B89\u5168\u95EE\u9898</h2><p>\u76F4\u63A5\u521B\u5EFA\u4E34\u65F6\u6587\u4EF6\uFF0C\u5C24\u5176\u5728<code>/tmp</code>\u76EE\u5F55\u91CC\u9762\uFF0C\u5F80\u5F80\u4F1A\u5BFC\u81F4\u5B89\u5168\u95EE\u9898\u3002</p><p>\u9996\u5148\uFF0C<code>/tmp</code>\u76EE\u5F55\u662F\u6240\u6709\u4EBA\u53EF\u8BFB\u5199\u7684\uFF0C\u4EFB\u4F55\u7528\u6237\u90FD\u53EF\u4EE5\u5F80\u8BE5\u76EE\u5F55\u91CC\u9762\u5199\u6587\u4EF6\u3002\u521B\u5EFA\u7684\u4E34\u65F6\u6587\u4EF6\u4E5F\u662F\u6240\u6709\u4EBA\u53EF\u8BFB\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">touch</span> /tmp/info.txt
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /tmp/info.txt
-rw-r--r-- <span class="token number">1</span> ruanyf ruanyf <span class="token number">0</span> <span class="token number">12</span>\u6708 <span class="token number">28</span> <span class="token number">17</span>:12 /tmp/info.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u5728<code>/tmp</code>\u76EE\u5F55\u76F4\u63A5\u521B\u5EFA\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u9ED8\u8BA4\u662F\u6240\u6709\u4EBA\u53EF\u8BFB\u7684\u3002</p><p>\u5176\u6B21\uFF0C\u5982\u679C\u653B\u51FB\u8005\u77E5\u9053\u4E34\u65F6\u6587\u4EF6\u7684\u6587\u4EF6\u540D\uFF0C\u4ED6\u53EF\u4EE5\u521B\u5EFA\u7B26\u53F7\u94FE\u63A5\uFF0C\u94FE\u63A5\u5230\u4E34\u65F6\u6587\u4EF6\uFF0C\u53EF\u80FD\u5BFC\u81F4\u7CFB\u7EDF\u8FD0\u884C\u5F02\u5E38\u3002\u653B\u51FB\u8005\u4E5F\u53EF\u80FD\u5411\u811A\u672C\u63D0\u4F9B\u4E00\u4E9B\u6076\u610F\u6570\u636E\u3002\u56E0\u6B64\uFF0C\u4E34\u65F6\u6587\u4EF6\u6700\u597D\u4F7F\u7528\u4E0D\u53EF\u9884\u6D4B\u3001\u6BCF\u6B21\u90FD\u4E0D\u4E00\u6837\u7684\u6587\u4EF6\u540D\uFF0C\u9632\u6B62\u88AB\u5229\u7528\u3002</p><p>\u6700\u540E\uFF0C\u4E34\u65F6\u6587\u4EF6\u4F7F\u7528\u5B8C\u6BD5\uFF0C\u5E94\u8BE5\u5220\u9664\u3002\u4F46\u662F\uFF0C\u811A\u672C\u610F\u5916\u9000\u51FA\u65F6\uFF0C\u5F80\u5F80\u4F1A\u5FFD\u7565\u6E05\u7406\u4E34\u65F6\u6587\u4EF6\u3002</p><p>\u751F\u6210\u4E34\u65F6\u6587\u4EF6\u5E94\u8BE5\u9075\u5FAA\u4E0B\u9762\u7684\u89C4\u5219\u3002</p><blockquote><ul><li>\u521B\u5EFA\u524D\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u3002</li><li>\u786E\u4FDD\u4E34\u65F6\u6587\u4EF6\u5DF2\u6210\u529F\u521B\u5EFA\u3002</li><li>\u4E34\u65F6\u6587\u4EF6\u5FC5\u987B\u6709\u6743\u9650\u7684\u9650\u5236\u3002</li><li>\u4E34\u65F6\u6587\u4EF6\u8981\u4F7F\u7528\u4E0D\u53EF\u9884\u6D4B\u7684\u6587\u4EF6\u540D\u3002</li><li>\u811A\u672C\u9000\u51FA\u65F6\uFF0C\u8981\u5220\u9664\u4E34\u65F6\u6587\u4EF6\uFF08\u4F7F\u7528<code>trap</code>\u547D\u4EE4\uFF09\u3002</li></ul></blockquote><h2 id="mktemp-\u547D\u4EE4\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#mktemp-\u547D\u4EE4\u7684\u7528\u6CD5" aria-hidden="true">#</a> mktemp \u547D\u4EE4\u7684\u7528\u6CD5</h2><p><code>mktemp</code>\u547D\u4EE4\u5C31\u662F\u4E3A\u5B89\u5168\u521B\u5EFA\u4E34\u65F6\u6587\u4EF6\u800C\u8BBE\u8BA1\u7684\u3002\u867D\u7136\u5728\u521B\u5EFA\u4E34\u65F6\u6587\u4EF6\u4E4B\u524D\uFF0C\u5B83\u4E0D\u4F1A\u68C0\u67E5\u4E34\u65F6\u6587\u4EF6\u662F\u5426\u5B58\u5728\uFF0C\u4F46\u662F\u5B83\u652F\u6301\u552F\u4E00\u6587\u4EF6\u540D\u548C\u6E05\u9664\u673A\u5236\uFF0C\u56E0\u6B64\u53EF\u4EE5\u51CF\u8F7B\u5B89\u5168\u653B\u51FB\u7684\u98CE\u9669\u3002</p><p>\u76F4\u63A5\u8FD0\u884C<code>mktemp</code>\u547D\u4EE4\uFF0C\u5C31\u80FD\u751F\u6210\u4E00\u4E2A\u4E34\u65F6\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mktemp
/tmp/tmp.4GcsWSG4vj

$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /tmp/tmp.4GcsWSG4vj
-rw------- <span class="token number">1</span> ruanyf ruanyf <span class="token number">0</span> <span class="token number">12</span>\u6708 <span class="token number">28</span> <span class="token number">12</span>:49 /tmp/tmp.4GcsWSG4vj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C<code>mktemp</code>\u547D\u4EE4\u751F\u6210\u7684\u4E34\u65F6\u6587\u4EF6\u540D\u662F\u968F\u673A\u7684\uFF0C\u800C\u4E14\u6743\u9650\u662F\u53EA\u6709\u7528\u6237\u672C\u4EBA\u53EF\u8BFB\u5199\u3002</p><p>Bash \u811A\u672C\u4F7F\u7528<code>mktemp</code>\u547D\u4EE4\u7684\u7528\u6CD5\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">TMPFILE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Our temp file is <span class="token variable">$TMPFILE</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u786E\u4FDD\u4E34\u65F6\u6587\u4EF6\u521B\u5EFA\u6210\u529F\uFF0C<code>mktemp</code>\u547D\u4EE4\u540E\u9762\u6700\u597D\u4F7F\u7528 OR \u8FD0\u7B97\u7B26\uFF08<code>||</code>\uFF09\uFF0C\u4FDD\u8BC1\u521B\u5EFA\u5931\u8D25\u65F6\u9000\u51FA\u811A\u672C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">TMPFILE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp<span class="token variable">)</span></span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Our temp file is <span class="token variable">$TMPFILE</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u4FDD\u8BC1\u811A\u672C\u9000\u51FA\u65F6\u4E34\u65F6\u6587\u4EF6\u88AB\u5220\u9664\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>trap</code>\u547D\u4EE4\u6307\u5B9A\u9000\u51FA\u65F6\u7684\u6E05\u9664\u64CD\u4F5C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">trap</span> <span class="token string">&#39;rm -f &quot;$TMPFILE&quot;&#39;</span> EXIT

<span class="token assign-left variable">TMPFILE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp<span class="token variable">)</span></span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Our temp file is <span class="token variable">$TMPFILE</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mktemp-\u547D\u4EE4\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#mktemp-\u547D\u4EE4\u7684\u53C2\u6570" aria-hidden="true">#</a> mktemp \u547D\u4EE4\u7684\u53C2\u6570</h2><p><code>-d</code>\u53C2\u6570\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mktemp <span class="token parameter variable">-d</span>
/tmp/tmp.Wcau5UjmN6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-p</code>\u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u4E34\u65F6\u6587\u4EF6\u6240\u5728\u7684\u76EE\u5F55\u3002\u9ED8\u8BA4\u662F\u4F7F\u7528<code>$TMPDIR</code>\u73AF\u5883\u53D8\u91CF\u6307\u5B9A\u7684\u76EE\u5F55\uFF0C\u5982\u679C\u8FD9\u4E2A\u53D8\u91CF\u6CA1\u8BBE\u7F6E\uFF0C\u90A3\u4E48\u4F7F\u7528<code>/tmp</code>\u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mktemp <span class="token parameter variable">-p</span> /home/ruanyf/
/home/ruanyf/tmp.FOKEtvs2H3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-t</code>\u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u4E34\u65F6\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u6A21\u677F\uFF0C\u6A21\u677F\u7684\u672B\u5C3E\u5FC5\u987B\u81F3\u5C11\u5305\u542B\u4E09\u4E2A\u8FDE\u7EED\u7684<code>X</code>\u5B57\u7B26\uFF0C\u8868\u793A\u968F\u673A\u5B57\u7B26\uFF0C\u5EFA\u8BAE\u81F3\u5C11\u4F7F\u7528\u516D\u4E2A<code>X</code>\u3002\u9ED8\u8BA4\u7684\u6587\u4EF6\u540D\u6A21\u677F\u662F<code>tmp.</code>\u540E\u63A5\u5341\u4E2A\u968F\u673A\u5B57\u7B26\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mktemp <span class="token parameter variable">-t</span> mytemp.XXXXXXX
/tmp/mytemp.yZ1HgZV
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trap-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#trap-\u547D\u4EE4" aria-hidden="true">#</a> trap \u547D\u4EE4</h2><p><code>trap</code>\u547D\u4EE4\u7528\u6765\u5728 Bash \u811A\u672C\u4E2D\u54CD\u5E94\u7CFB\u7EDF\u4FE1\u53F7\u3002</p><p>\u6700\u5E38\u89C1\u7684\u7CFB\u7EDF\u4FE1\u53F7\u5C31\u662F SIGINT\uFF08\u4E2D\u65AD\uFF09\uFF0C\u5373\u6309 Ctrl + C \u6240\u4EA7\u751F\u7684\u4FE1\u53F7\u3002<code>trap</code>\u547D\u4EE4\u7684<code>-l</code>\u53C2\u6570\uFF0C\u53EF\u4EE5\u5217\u51FA\u6240\u6709\u7684\u7CFB\u7EDF\u4FE1\u53F7\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">trap</span> <span class="token parameter variable">-l</span>
 <span class="token number">1</span><span class="token punctuation">)</span> SIGHUP	 <span class="token number">2</span><span class="token punctuation">)</span> SIGINT	 <span class="token number">3</span><span class="token punctuation">)</span> SIGQUIT	 <span class="token number">4</span><span class="token punctuation">)</span> SIGILL	 <span class="token number">5</span><span class="token punctuation">)</span> SIGTRAP
 <span class="token number">6</span><span class="token punctuation">)</span> SIGABRT	 <span class="token number">7</span><span class="token punctuation">)</span> SIGBUS	 <span class="token number">8</span><span class="token punctuation">)</span> SIGFPE	 <span class="token number">9</span><span class="token punctuation">)</span> SIGKILL	<span class="token number">10</span><span class="token punctuation">)</span> SIGUSR1
<span class="token number">11</span><span class="token punctuation">)</span> SIGSEGV	<span class="token number">12</span><span class="token punctuation">)</span> SIGUSR2	<span class="token number">13</span><span class="token punctuation">)</span> SIGPIPE	<span class="token number">14</span><span class="token punctuation">)</span> SIGALRM	<span class="token number">15</span><span class="token punctuation">)</span> SIGTERM
<span class="token number">16</span><span class="token punctuation">)</span> SIGSTKFLT	<span class="token number">17</span><span class="token punctuation">)</span> SIGCHLD	<span class="token number">18</span><span class="token punctuation">)</span> SIGCONT	<span class="token number">19</span><span class="token punctuation">)</span> SIGSTOP	<span class="token number">20</span><span class="token punctuation">)</span> SIGTSTP
<span class="token number">21</span><span class="token punctuation">)</span> SIGTTIN	<span class="token number">22</span><span class="token punctuation">)</span> SIGTTOU	<span class="token number">23</span><span class="token punctuation">)</span> SIGURG	<span class="token number">24</span><span class="token punctuation">)</span> SIGXCPU	<span class="token number">25</span><span class="token punctuation">)</span> SIGXFSZ
<span class="token number">26</span><span class="token punctuation">)</span> SIGVTALRM	<span class="token number">27</span><span class="token punctuation">)</span> SIGPROF	<span class="token number">28</span><span class="token punctuation">)</span> SIGWINCH	<span class="token number">29</span><span class="token punctuation">)</span> SIGIO	<span class="token number">30</span><span class="token punctuation">)</span> SIGPWR
<span class="token number">31</span><span class="token punctuation">)</span> SIGSYS	<span class="token number">34</span><span class="token punctuation">)</span> SIGRTMIN	<span class="token number">35</span><span class="token punctuation">)</span> SIGRTMIN+1	<span class="token number">36</span><span class="token punctuation">)</span> SIGRTMIN+2	<span class="token number">37</span><span class="token punctuation">)</span> SIGRTMIN+3
<span class="token number">38</span><span class="token punctuation">)</span> SIGRTMIN+4	<span class="token number">39</span><span class="token punctuation">)</span> SIGRTMIN+5	<span class="token number">40</span><span class="token punctuation">)</span> SIGRTMIN+6	<span class="token number">41</span><span class="token punctuation">)</span> SIGRTMIN+7	<span class="token number">42</span><span class="token punctuation">)</span> SIGRTMIN+8
<span class="token number">43</span><span class="token punctuation">)</span> SIGRTMIN+9	<span class="token number">44</span><span class="token punctuation">)</span> SIGRTMIN+10	<span class="token number">45</span><span class="token punctuation">)</span> SIGRTMIN+11	<span class="token number">46</span><span class="token punctuation">)</span> SIGRTMIN+12	<span class="token number">47</span><span class="token punctuation">)</span> SIGRTMIN+13
<span class="token number">48</span><span class="token punctuation">)</span> SIGRTMIN+14	<span class="token number">49</span><span class="token punctuation">)</span> SIGRTMIN+15	<span class="token number">50</span><span class="token punctuation">)</span> SIGRTMAX-14	<span class="token number">51</span><span class="token punctuation">)</span> SIGRTMAX-13	<span class="token number">52</span><span class="token punctuation">)</span> SIGRTMAX-12
<span class="token number">53</span><span class="token punctuation">)</span> SIGRTMAX-11	<span class="token number">54</span><span class="token punctuation">)</span> SIGRTMAX-10	<span class="token number">55</span><span class="token punctuation">)</span> SIGRTMAX-9	<span class="token number">56</span><span class="token punctuation">)</span> SIGRTMAX-8	<span class="token number">57</span><span class="token punctuation">)</span> SIGRTMAX-7
<span class="token number">58</span><span class="token punctuation">)</span> SIGRTMAX-6	<span class="token number">59</span><span class="token punctuation">)</span> SIGRTMAX-5	<span class="token number">60</span><span class="token punctuation">)</span> SIGRTMAX-4	<span class="token number">61</span><span class="token punctuation">)</span> SIGRTMAX-3	<span class="token number">62</span><span class="token punctuation">)</span> SIGRTMAX-2
<span class="token number">63</span><span class="token punctuation">)</span> SIGRTMAX-1	<span class="token number">64</span><span class="token punctuation">)</span> SIGRTMAX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>trap</code>\u7684\u547D\u4EE4\u683C\u5F0F\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">trap</span> <span class="token punctuation">[</span>\u52A8\u4F5C<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u4FE1\u53F71<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u4FE1\u53F72<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u201C\u52A8\u4F5C\u201D\u662F\u4E00\u4E2A Bash \u547D\u4EE4\uFF0C\u201C\u4FE1\u53F7\u201D\u5E38\u7528\u7684\u6709\u4EE5\u4E0B\u51E0\u4E2A\u3002</p><blockquote><ul><li>HUP\uFF1A\u7F16\u53F71\uFF0C\u811A\u672C\u4E0E\u6240\u5728\u7684\u7EC8\u7AEF\u8131\u79BB\u8054\u7CFB\u3002</li><li>INT\uFF1A\u7F16\u53F72\uFF0C\u7528\u6237\u6309\u4E0B Ctrl + C\uFF0C\u610F\u56FE\u8BA9\u811A\u672C\u7EC8\u6B62\u8FD0\u884C\u3002</li><li>QUIT\uFF1A\u7F16\u53F73\uFF0C\u7528\u6237\u6309\u4E0B Ctrl + \u659C\u6760\uFF0C\u610F\u56FE\u9000\u51FA\u811A\u672C\u3002</li><li>KILL\uFF1A\u7F16\u53F79\uFF0C\u8BE5\u4FE1\u53F7\u7528\u4E8E\u6740\u6B7B\u8FDB\u7A0B\u3002</li><li>TERM\uFF1A\u7F16\u53F715\uFF0C\u8FD9\u662F<code>kill</code>\u547D\u4EE4\u53D1\u51FA\u7684\u9ED8\u8BA4\u4FE1\u53F7\u3002</li><li>EXIT\uFF1A\u7F16\u53F70\uFF0C\u8FD9\u4E0D\u662F\u7CFB\u7EDF\u4FE1\u53F7\uFF0C\u800C\u662F Bash \u811A\u672C\u7279\u6709\u7684\u4FE1\u53F7\uFF0C\u4E0D\u7BA1\u4EC0\u4E48\u60C5\u51B5\uFF0C\u53EA\u8981\u9000\u51FA\u811A\u672C\u5C31\u4F1A\u4EA7\u751F\u3002</li></ul></blockquote><p><code>trap</code>\u547D\u4EE4\u54CD\u5E94<code>EXIT</code>\u4FE1\u53F7\u7684\u5199\u6CD5\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">trap</span> <span class="token string">&#39;rm -f &quot;$TMPFILE&quot;&#39;</span> EXIT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C\u811A\u672C\u9047\u5230<code>EXIT</code>\u4FE1\u53F7\u65F6\uFF0C\u5C31\u4F1A\u6267\u884C<code>rm -f &quot;$TMPFILE&quot;</code>\u3002</p><p>trap \u547D\u4EE4\u7684\u5E38\u89C1\u4F7F\u7528\u573A\u666F\uFF0C\u5C31\u662F\u5728 Bash \u811A\u672C\u4E2D\u6307\u5B9A\u9000\u51FA\u65F6\u6267\u884C\u7684\u6E05\u7406\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">trap</span> <span class="token string">&#39;rm -f &quot;$TMPFILE&quot;&#39;</span> EXIT

<span class="token assign-left variable">TMPFILE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp<span class="token variable">)</span></span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token function">ls</span> /etc <span class="token operator">&gt;</span> <span class="token variable">$TMPFILE</span>
<span class="token keyword">if</span> <span class="token function">grep</span> <span class="token parameter variable">-qi</span> <span class="token string">&quot;kernel&quot;</span> <span class="token variable">$TMPFILE</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;find&#39;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u4E0D\u7BA1\u662F\u811A\u672C\u6B63\u5E38\u6267\u884C\u7ED3\u675F\uFF0C\u8FD8\u662F\u7528\u6237\u6309 Ctrl + C \u7EC8\u6B62\uFF0C\u90FD\u4F1A\u4EA7\u751F<code>EXIT</code>\u4FE1\u53F7\uFF0C\u4ECE\u800C\u89E6\u53D1\u5220\u9664\u4E34\u65F6\u6587\u4EF6\u3002</p><p>\u6CE8\u610F\uFF0C<code>trap</code>\u547D\u4EE4\u5FC5\u987B\u653E\u5728\u811A\u672C\u7684\u5F00\u5934\u3002\u5426\u5219\uFF0C\u5B83\u4E0A\u65B9\u7684\u4EFB\u4F55\u547D\u4EE4\u5BFC\u81F4\u811A\u672C\u9000\u51FA\uFF0C\u90FD\u4E0D\u4F1A\u88AB\u5B83\u6355\u83B7\u3002</p><p>\u5982\u679C<code>trap</code>\u9700\u8981\u89E6\u53D1\u591A\u6761\u547D\u4EE4\uFF0C\u53EF\u4EE5\u5C01\u88C5\u4E00\u4E2A Bash \u51FD\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">egress</span> <span class="token punctuation">{</span>
  command1
  command2
  command3
<span class="token punctuation">}</span>

<span class="token builtin class-name">trap</span> egress EXIT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,47),u={href:"https://www.putorius.net/working-with-temporary-files.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.putorius.net/using-trap-to-exit-bash-scripts-cleanly.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mywiki.wooledge.org/SignalTrap",target:"_blank",rel:"noopener noreferrer"};function k(b,v){const a=i("ExternalLinkIcon");return t(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[s("Working with Temporary Files and Directories in Shell Scripts"),e(a)]),s(", Steven Vona")]),n("li",null,[n("a",d,[s("Using Trap to Exit Bash Scripts Cleanly"),e(a)])]),n("li",null,[n("a",m,[s("Sending and Trapping Signals"),e(a)])])])])}const I=p(o,[["render",k],["__file","mktemp.html.vue"]]);export{I as default};
