import{_ as a,o as n,c as e,e as s}from"./app.3b2d76f3.js";const t={},o=s(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p><code>&lt;video&gt;</code>\u5143\u7D20\u7528\u6765\u52A0\u8F7D\u89C6\u9891\uFF0C\u662F<code>HTMLVideoElement</code>\u5BF9\u8C61\u7684\u5B9E\u4F8B\u3002<code>&lt;audio&gt;</code>\u5143\u7D20\u7528\u6765\u52A0\u8F7D\u97F3\u9891\uFF0C\u662F<code>HTMLAudioElement</code>\u5BF9\u8C61\u7684\u5B9E\u4F8B\u3002\u800C<code>HTMLVideoElement</code>\u548C<code>HTMLAudioElement</code>\u90FD\u7EE7\u627F\u4E86<code>HTMLMediaElement</code>\uFF0C\u6240\u4EE5\u8FD9\u4E24\u4E2A HTML \u5143\u7D20\u6709\u8BB8\u591A\u5171\u540C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u653E\u5728\u4E00\u8D77\u4ECB\u7ECD\u3002</p><p>\u7406\u8BBA\u4E0A\uFF0C\u8FD9\u4E24\u4E2A HTML \u5143\u7D20\u76F4\u63A5\u7528<code>src</code>\u5C5E\u6027\u6307\u5B9A\u5A92\u4F53\u6587\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>background_music.mp3<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>news.mov<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>320</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>240/</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C<code>&lt;video&gt;</code>\u5143\u7D20\u6709<code>width</code>\u5C5E\u6027\u548C<code>height</code>\u5C5E\u6027\uFF0C\u53EF\u4EE5\u6307\u5B9A\u5BBD\u548C\u9AD8\u3002<code>&lt;audio&gt;</code>\u5143\u7D20\u6CA1\u6709\u8FD9\u4E24\u4E2A\u5C5E\u6027\uFF0C\u56E0\u4E3A\u5B83\u7684\u64AD\u653E\u5668\u5916\u5F62\u662F\u6D4F\u89C8\u5668\u7ED9\u5B9A\u7684\uFF0C\u4E0D\u80FD\u6307\u5B9A\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u652F\u6301\u4E0D\u540C\u7684\u5A92\u4F53\u683C\u5F0F\uFF0C\u6211\u4EEC\u4E0D\u5F97\u4E0D\u7528<code>&lt;source&gt;</code>\u5143\u7D20\u6307\u5B9A\u540C\u4E00\u4E2A\u5A92\u4F53\u6587\u4EF6\u7684\u4E0D\u540C\u683C\u5F0F\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>music<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>music.mp3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio/mpeg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>music.ogg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>audio/ogg; codec=&quot;vorbis&quot;<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4F\u89C8\u5668\u9047\u5230\u652F\u6301\u7684\u683C\u5F0F\uFF0C\u5C31\u4F1A\u5FFD\u7565\u540E\u9762\u7684\u683C\u5F0F\u3002</p><p>\u8FD9\u4E24\u4E2A\u5143\u7D20\u90FD\u6709\u4E00\u4E2A<code>controls</code>\u5C5E\u6027\uFF0C\u53EA\u6709\u6253\u5F00\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u624D\u4F1A\u663E\u793A\u63A7\u5236\u6761\u3002\u6CE8\u610F\uFF0C<code>&lt;audio&gt;</code>\u5143\u7D20\u5982\u679C\u4E0D\u6253\u5F00<code>controls</code>\u5C5E\u6027\uFF0C\u6839\u672C\u4E0D\u4F1A\u663E\u793A\uFF0C\u800C\u662F\u76F4\u63A5\u5728\u80CC\u666F\u64AD\u653E\u3002</p><h2 id="htmlmediaelement-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#htmlmediaelement-\u63A5\u53E3" aria-hidden="true">#</a> HTMLMediaElement \u63A5\u53E3</h2><p><code>HTMLMediaElement</code>\u5E76\u6CA1\u6709\u5BF9\u5E94\u7684 HTML \u5143\u7D20\uFF0C\u800C\u662F\u4F5C\u4E3A<code>&lt;video&gt;</code>\u548C<code>&lt;audio&gt;</code>\u7684\u57FA\u7C7B\uFF0C\u5B9A\u4E49\u4E00\u4E9B\u5B83\u4EEC\u5171\u540C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><p><code>HTMLMediaElement</code>\u63A5\u53E3\u6709\u4EE5\u4E0B\u5C5E\u6027\u3002</p><ul><li>HTMLMediaElement.audioTracks\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\uFF0C\u8868\u793A\u5A92\u4F53\u6587\u4EF6\u5305\u542B\u7684\u97F3\u8F68\u3002</li><li>HTMLMediaElement.autoplay\uFF1A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5A92\u4F53\u6587\u4EF6\u662F\u5426\u81EA\u52A8\u64AD\u653E\uFF0C\u5BF9\u5E94 HTML \u5C5E\u6027<code>autoplay</code>\u3002</li><li>HTMLMediaElement.buffered\uFF1A\u8FD4\u56DE\u4E00\u4E2A TimeRanges \u5BF9\u8C61\uFF0C\u8868\u793A\u6D4F\u89C8\u5668\u7F13\u51B2\u7684\u5185\u5BB9\u3002\u8BE5\u5BF9\u8C61\u7684<code>length</code>\u5C5E\u6027\u8FD4\u56DE\u7F13\u5B58\u91CC\u9762\u6709\u591A\u5C11\u6BB5\u5185\u5BB9\uFF0C<code>start(rangeId)</code>\u65B9\u6CD5\u8FD4\u56DE\u6307\u5B9A\u7684\u67D0\u6BB5\u5185\u5BB9\uFF08\u4ECE0\u5F00\u59CB\uFF09\u5F00\u59CB\u7684\u65F6\u95F4\u70B9\uFF0C<code>end()</code>\u8FD4\u56DE\u6307\u5B9A\u7684\u67D0\u6BB5\u5185\u5BB9\u7ED3\u675F\u7684\u65F6\u95F4\u70B9\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.controls\uFF1A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u663E\u793A\u5A92\u4F53\u6587\u4EF6\u7684\u63A7\u5236\u680F\uFF0C\u5BF9\u5E94 HTML \u5C5E\u6027<code>controls</code>\u3002</li><li>HTMLMediaElement.controlsList\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\uFF0C\u8868\u793A\u662F\u5426\u663E\u793A\u63A7\u5236\u680F\u7684\u67D0\u4E9B\u63A7\u4EF6\u3002\u8BE5\u5BF9\u8C61\u5305\u542B\u4E09\u4E2A\u53EF\u80FD\u7684\u503C\uFF1A<code>nodownload</code>\u3001<code>nofullscreen</code>\u548C<code>noremoteplayback</code>\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.crossOrigin\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u8DE8\u57DF\u8BF7\u6C42\u65F6\u662F\u5426\u9644\u5E26\u7528\u6237\u4FE1\u606F\uFF08\u6BD4\u5982 Cookie\uFF09\uFF0C\u5BF9\u5E94 HTML \u5C5E\u6027<code>crossorigin</code>\u3002\u8BE5\u5C5E\u6027\u53EA\u6709\u4E24\u4E2A\u53EF\u80FD\u7684\u503C\uFF1A<code>anonymous</code>\u548C<code>use-credentials</code>\u3002</li><li>HTMLMediaElement.currentSrc\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u5F53\u524D\u6B63\u5728\u64AD\u653E\u7684\u5A92\u4F53\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.currentTime\uFF1A\u6D6E\u70B9\u6570\uFF0C\u8868\u793A\u5F53\u524D\u64AD\u653E\u7684\u65F6\u95F4\u70B9\u3002</li><li>HTMLMediaElement.defaultMuted\uFF1A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u9ED8\u8BA4\u662F\u5426\u5173\u95ED\u97F3\u91CF\uFF0C\u5BF9\u5E94 HTML \u5C5E\u6027<code>muted</code>\u3002</li><li>HTMLMediaElement.defaultPlaybackRate\uFF1A\u6D6E\u70B9\u6570\uFF0C\u8868\u793A\u9ED8\u8BA4\u7684\u64AD\u653E\u901F\u7387\uFF0C\u9ED8\u8BA4\u662F1.0\u3002</li><li>HTMLMediaElement.disableRemotePlayback\uFF1A\u5E03\u5C14\u503C\uFF0C\u662F\u5426\u5141\u8BB8\u8FDC\u7A0B\u56DE\u653E\uFF0C\u5373\u8FDC\u7A0B\u56DE\u653E\u7684\u65F6\u5019\u662F\u5426\u4F1A\u6709\u5DE5\u5177\u680F\u3002</li><li>HTMLMediaElement.duration\uFF1A\u6D6E\u70B9\u6570\uFF0C\u8868\u793A\u5A92\u4F53\u6587\u4EF6\u7684\u65F6\u95F4\u957F\u5EA6\uFF08\u5355\u4F4D\u79D2\uFF09\u3002\u5982\u679C\u5F53\u524D\u6CA1\u6709\u5A92\u4F53\u6587\u4EF6\uFF0C\u8BE5\u5C5E\u6027\u8FD4\u56DE0\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.ended\uFF1A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5F53\u524D\u5A92\u4F53\u6587\u4EF6\u662F\u5426\u5DF2\u7ECF\u64AD\u653E\u7ED3\u675F\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.error\uFF1A\u8FD4\u56DE\u6700\u8FD1\u4E00\u6B21\u62A5\u9519\u7684\u9519\u8BEF\u5BF9\u8C61\uFF0C\u5982\u679C\u6CA1\u6709\u62A5\u9519\uFF0C\u8FD4\u56DE<code>null</code>\u3002</li><li>HTMLMediaElement.loop\uFF1A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5A92\u4F53\u6587\u4EF6\u662F\u5426\u4F1A\u5FAA\u73AF\u64AD\u653E\uFF0C\u5BF9\u5E94 HTML \u5C5E\u6027<code>loop</code>\u3002</li><li>HTMLMediaElement.muted\uFF1A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u97F3\u91CF\u662F\u5426\u5173\u95ED\u3002</li><li>HTMLMediaElement.networkState\uFF1A\u5F53\u524D\u7F51\u7EDC\u72B6\u6001\uFF0C\u5171\u6709\u56DB\u4E2A\u53EF\u80FD\u7684\u503C\u30020\u8868\u793A\u6CA1\u6709\u6570\u636E\uFF1B1\u8868\u793A\u5A92\u4F53\u5143\u7D20\u5904\u5728\u6FC0\u6D3B\u72B6\u6001\uFF0C\u4F46\u662F\u8FD8\u6CA1\u5F00\u59CB\u4E0B\u8F7D\uFF1B2\u8868\u793A\u4E0B\u8F7D\u4E2D\uFF1B3\u8868\u793A\u6CA1\u6709\u627E\u5230\u5A92\u4F53\u6587\u4EF6\u3002</li><li>HTMLMediaElement.paused\uFF1A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5A92\u4F53\u6587\u4EF6\u662F\u5426\u5904\u5728\u6682\u505C\u72B6\u6001\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.playbackRate\uFF1A\u6D6E\u70B9\u6570\uFF0C\u8868\u793A\u5A92\u4F53\u6587\u4EF6\u7684\u64AD\u653E\u901F\u5EA6\uFF0C1.0\u662F\u6B63\u5E38\u901F\u5EA6\u3002\u5982\u679C\u662F\u8D1F\u6570\uFF0C\u8868\u793A\u5411\u540E\u64AD\u653E\u3002</li><li>HTMLMediaElement.played\uFF1A\u8FD4\u56DE\u4E00\u4E2A TimeRanges \u5BF9\u8C61\uFF0C\u8868\u793A\u64AD\u653E\u7684\u5A92\u4F53\u5185\u5BB9\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.preload\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u5E94\u8BE5\u9884\u52A0\u8F7D\u54EA\u4E9B\u5185\u5BB9\uFF0C\u53EF\u80FD\u7684\u503C\u4E3A<code>none</code>\u3001<code>metadata</code>\u548C<code>auto</code>\u3002</li><li>HTMLMediaElement.readyState\uFF1A\u6574\u6570\uFF0C\u8868\u793A\u5A92\u4F53\u6587\u4EF6\u7684\u51C6\u5907\u72B6\u6001\uFF0C\u53EF\u80FD\u7684\u503C\u4E3A0\uFF08\u6CA1\u6709\u4EFB\u4F55\u6570\u636E\uFF09\u30011\uFF08\u5DF2\u83B7\u53D6\u5143\u6570\u636E\uFF09\u30012\uFF08\u53EF\u64AD\u653E\u5F53\u524D\u5E27\uFF0C\u4F46\u4E0D\u8DB3\u4EE5\u64AD\u653E\u591A\u4E2A\u5E27\uFF09\u30013\uFF08\u53EF\u4EE5\u64AD\u653E\u591A\u5E27\uFF0C\u81F3\u5C11\u4E3A\u4E24\u5E27\uFF09\u30014\uFF08\u53EF\u4EE5\u6D41\u7545\u64AD\u653E\uFF09\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.seekable\uFF1A\u8FD4\u56DE\u4E00\u4E2A TimeRanges \u5BF9\u8C61\uFF0C\u8868\u793A\u4E00\u4E2A\u7528\u6237\u53EF\u4EE5\u641C\u7D22\u7684\u5A92\u4F53\u5185\u5BB9\u8303\u56F4\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.seeking\uFF1A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5A92\u4F53\u6587\u4EF6\u662F\u5426\u6B63\u5728\u5BFB\u627E\u65B0\u4F4D\u7F6E\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.src\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u5A92\u4F53\u6587\u4EF6\u6240\u5728\u7684 URL\uFF0C\u5BF9\u5E94 HTML \u5C5E\u6027<code>src</code>\u3002</li><li>HTMLMediaElement.srcObject\uFF1A\u8FD4\u56DE<code>src</code>\u5C5E\u6027\u5BF9\u5E94\u7684\u5A92\u4F53\u6587\u4EF6\u8D44\u6E90\uFF0C\u53EF\u80FD\u662F<code>MediaStream</code>\u3001<code>MediaSource</code>\u3001<code>Blob</code>\u6216<code>File</code>\u5BF9\u8C61\u3002\u76F4\u63A5\u6307\u5B9A\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u64AD\u653E\u5A92\u4F53\u6587\u4EF6\u3002</li><li>HTMLMediaElement.textTracks\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\uFF0C\u5305\u542B\u6240\u6709\u6587\u672C\u8F68\u9053\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.videoTracks\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\uFF0C\u5305\u542B\u591A\u6709\u89C6\u9891\u8F68\u9053\u3002\u8BE5\u5C5E\u6027\u53EA\u8BFB\u3002</li><li>HTMLMediaElement.volume\uFF1A\u6D6E\u70B9\u6570\uFF0C\u8868\u793A\u97F3\u91CF\u30020.0 \u8868\u793A\u9759\u97F3\uFF0C1.0 \u8868\u793A\u6700\u5927\u97F3\u91CF\u3002</li></ul><p><code>HTMLMediaElement</code>\u63A5\u53E3\u6709\u5982\u4E0B\u65B9\u6CD5\u3002</p><ul><li>HTMLMediaElement.addTextTrack()\uFF1A\u6DFB\u52A0\u6587\u672C\u8F68\u9053\uFF08\u6BD4\u5982\u5B57\u5E55\uFF09\u5230\u5A92\u4F53\u6587\u4EF6\u3002</li><li>HTMLMediaElement.captureStream()\uFF1A\u8FD4\u56DE\u4E00\u4E2A MediaStream \u5BF9\u8C61\uFF0C\u7528\u6765\u6355\u83B7\u5F53\u524D\u5A92\u4F53\u6587\u4EF6\u7684\u6D41\u5185\u5BB9\u3002</li><li>HTMLMediaElement.canPlayType()\uFF1A\u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A MIME \u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u7528\u6765\u5224\u65AD\u8FD9\u79CD\u7C7B\u578B\u7684\u5A92\u4F53\u6587\u4EF6\u662F\u5426\u53EF\u4EE5\u64AD\u653E\u3002\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u6709\u4E09\u79CD\u53EF\u80FD\u7684\u503C\uFF0C<code>probably</code>\u8868\u793A\u4F3C\u4E4E\u53EF\u64AD\u653E\uFF0C<code>maybe</code>\u8868\u793A\u65E0\u6CD5\u5728\u4E0D\u64AD\u653E\u7684\u60C5\u51B5\u4E0B\u5224\u65AD\u662F\u5426\u53EF\u64AD\u653E\uFF0C\u7A7A\u5B57\u7B26\u4E32\u8868\u793A\u65E0\u6CD5\u64AD\u653E\u3002</li><li>HTMLMediaElement.fastSeek()\uFF1A\u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u6D6E\u70B9\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8868\u793A\u6307\u5B9A\u7684\u65F6\u95F4\uFF08\u5355\u4F4D\u79D2\uFF09\u3002\u8BE5\u65B9\u6CD5\u5C06\u5A92\u4F53\u6587\u4EF6\u79FB\u52A8\u5230\u6307\u5B9A\u65F6\u95F4\u3002</li><li>HTMLMediaElement.load()\uFF1A\u91CD\u65B0\u52A0\u8F7D\u5A92\u4F53\u6587\u4EF6\u3002</li><li>HTMLMediaElement.pause()\uFF1A\u6682\u505C\u64AD\u653E\u3002\u8BE5\u65B9\u6CD5\u6CA1\u6709\u8FD4\u56DE\u503C\u3002</li><li>HTMLMediaElement.play()\uFF1A\u5F00\u59CB\u64AD\u653E\u3002\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\u3002</li></ul><p>\u4E0B\u9762\u662F<code>play()</code>\u65B9\u6CD5\u7684\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myVideo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myVideoElement&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

myVideo
<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;playing&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="htmlvideoelement-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#htmlvideoelement-\u63A5\u53E3" aria-hidden="true">#</a> HTMLVideoElement \u63A5\u53E3</h2><p><code>HTMLVideoElement</code>\u63A5\u53E3\u4EE3\u8868\u4E86<code>&lt;video&gt;</code>\u5143\u7D20\u3002\u8FD9\u4E2A\u63A5\u53E3\u7EE7\u627F\u4E86<code>HTMLMediaElement</code>\u63A5\u53E3\uFF0C\u5E76\u4E14\u6709\u4E00\u4E9B\u81EA\u5DF1\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><p>HTMLVideoElement \u63A5\u53E3\u7684\u5C5E\u6027\u3002</p><ul><li>HTMLVideoElement.height\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u89C6\u9891\u64AD\u653E\u533A\u57DF\u7684\u9AD8\u5EA6\uFF08\u5355\u4F4D\u50CF\u7D20\uFF09\uFF0C\u5BF9\u5E94 HTML \u5C5E\u6027<code>height</code>\u3002</li><li>HTMLVideoElement.width\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u89C6\u9891\u64AD\u653E\u533A\u57DF\u7684\u5BBD\u5EA6\uFF08\u5355\u4F4D\u50CF\u7D20\uFF09\uFF0C\u5BF9\u5E94 HTML \u5C5E\u6027<code>width</code>\u3002</li><li>HTMLVideoElement.videoHeight\uFF1A\u8BE5\u5C5E\u6027\u53EA\u8BFB\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\uFF0C\u8868\u793A\u89C6\u9891\u6587\u4EF6\u81EA\u8EAB\u7684\u9AD8\u5EA6\uFF08\u5355\u4F4D\u50CF\u7D20\uFF09\u3002</li><li>HTMLVideoElement.videoWidth\uFF1A\u8BE5\u5C5E\u6027\u53EA\u8BFB\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\uFF0C\u8868\u793A\u89C6\u9891\u6587\u4EF6\u81EA\u8EAB\u7684\u5BBD\u5EA6\uFF08\u5355\u4F4D\u50CF\u7D20\uFF09\u3002</li><li>HTMLVideoElement.poster\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u4E00\u4E2A\u56FE\u50CF\u6587\u4EF6\u7684 URL\uFF0C\u7528\u6765\u5728\u65E0\u6CD5\u83B7\u53D6\u89C6\u9891\u6587\u4EF6\u65F6\u66FF\u4EE3\u663E\u793A\uFF0C\u5BF9\u5E94 HTML \u5C5E\u6027<code>poster</code>\u3002</li></ul><p>HTMLVideoElement \u63A5\u53E3\u7684\u65B9\u6CD5\u3002</p><ul><li>HTMLVideoElement.getVideoPlaybackQuality()\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u5F53\u524D\u89C6\u9891\u56DE\u653E\u7684\u4E00\u4E9B\u6570\u636E\u3002</li></ul><h2 id="htmlaudioelement-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#htmlaudioelement-\u63A5\u53E3" aria-hidden="true">#</a> HTMLAudioElement \u63A5\u53E3</h2><p><code>HTMLAudioElement</code>\u63A5\u53E3\u4EE3\u8868\u4E86<code>&lt;audio&gt;</code>\u5143\u7D20\u3002</p><p>\u8BE5\u63A5\u53E3\u7EE7\u627F\u4E86<code>HTMLMediaElement</code>\uFF0C\u4F46\u662F\u6CA1\u6709\u5B9A\u4E49\u81EA\u5DF1\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002\u6D4F\u89C8\u5668\u539F\u751F\u63D0\u4F9B\u4E00\u4E2A<code>Audio()</code>\u6784\u9020\u51FD\u6570\uFF0C\u8FD4\u56DE\u7684\u5C31\u662F<code>HTMLAudioElement</code>\u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> song <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Audio</span><span class="token punctuation">(</span><span class="token punctuation">[</span>URLString<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Audio()</code>\u6784\u9020\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8868\u793A\u5A92\u4F53\u6587\u4EF6\u7684 URL\u3002\u5982\u679C\u7701\u7565\u8FD9\u4E2A\u53C2\u6570\uFF0C\u53EF\u4EE5\u7A0D\u540E\u901A\u8FC7<code>src</code>\u5C5E\u6027\u6307\u5B9A\u3002</p><p>\u751F\u6210<code>HTMLAudioElement</code>\u5B9E\u4F8B\u4EE5\u540E\uFF0C\u4E0D\u7528\u63D2\u5165 DOM\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528<code>play()</code>\u65B9\u6CD5\u5728\u80CC\u666F\u64AD\u653E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Audio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">canPlayType</span><span class="token punctuation">(</span><span class="token string">&#39;audio/wav&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;soundeffect.wav&#39;</span><span class="token punctuation">;</span>
  a<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><p><code>&lt;video&gt;</code>\u548C<code>&lt;audio&gt;</code>\u5143\u7D20\u6709\u4EE5\u4E0B\u4E8B\u4EF6\u3002</p><ul><li>loadstart\uFF1A\u5F00\u59CB\u52A0\u8F7D\u5A92\u4F53\u6587\u4EF6\u65F6\u89E6\u53D1\u3002</li><li>progress\uFF1A\u5A92\u4F53\u6587\u4EF6\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u89E6\u53D1\uFF0C\u5927\u6982\u662F\u6BCF\u79D2\u89E6\u53D12\u52308\u6B21\u3002</li><li>loadedmetadata\uFF1A\u5A92\u4F53\u6587\u4EF6\u5143\u6570\u636E\u52A0\u8F7D\u6210\u529F\u65F6\u89E6\u53D1\u3002</li><li>loadeddata\uFF1A\u5F53\u524D\u64AD\u653E\u4F4D\u7F6E\u52A0\u8F7D\u6210\u529F\u540E\u89E6\u53D1\u3002</li><li>canplay\uFF1A\u5DF2\u7ECF\u52A0\u8F7D\u4E86\u8DB3\u591F\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u5F00\u59CB\u64AD\u653E\u65F6\u89E6\u53D1\uFF0C\u540E\u9762\u53EF\u80FD\u8FD8\u4F1A\u8BF7\u6C42\u6570\u636E\u3002</li><li>canplaythrough\uFF1A\u5DF2\u7ECF\u52A0\u8F7D\u4E86\u8DB3\u591F\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u4E00\u76F4\u64AD\u653E\u65F6\u89E6\u53D1\uFF0C\u540E\u9762\u4E0D\u9700\u8981\u7EE7\u7EED\u8BF7\u6C42\u6570\u636E\u3002</li><li>suspend\uFF1A\u5DF2\u7ECF\u7F13\u51B2\u4E86\u8DB3\u591F\u7684\u6570\u636E\uFF0C\u6682\u65F6\u505C\u6B62\u4E0B\u8F7D\u65F6\u89E6\u53D1\u3002</li><li>stalled\uFF1A\u5C1D\u8BD5\u52A0\u8F7D\u6570\u636E\uFF0C\u4F46\u662F\u6CA1\u6709\u6570\u636E\u8FD4\u56DE\u65F6\u89E6\u53D1\u3002</li><li>play\uFF1A\u8C03\u7528<code>play()</code>\u65B9\u6CD5\u65F6\u6216\u81EA\u52A8\u64AD\u653E\u542F\u52A8\u65F6\u89E6\u53D1\u3002\u5982\u679C\u5DF2\u7ECF\u52A0\u8F7D\u4E86\u8DB3\u591F\u7684\u6570\u636E\uFF0C\u8FD9\u4E2A\u4E8B\u4EF6\u540E\u9762\u4F1A\u7D27\u8DDF<code>playing</code>\u4E8B\u4EF6\uFF0C\u5426\u5219\u4F1A\u89E6\u53D1<code>waiting</code>\u4E8B\u4EF6\u3002</li><li>waiting\uFF1A\u7531\u4E8E\u6CA1\u6709\u8DB3\u591F\u7684\u7F13\u5B58\u6570\u636E\uFF0C\u65E0\u6CD5\u64AD\u653E\u6216\u64AD\u653E\u505C\u6B62\u65F6\u89E6\u53D1\u3002\u4E00\u65E6\u7F13\u51B2\u6570\u636E\u8DB3\u591F\u5F00\u59CB\u64AD\u653E\uFF0C\u540E\u9762\u5C31\u4F1A\u7D27\u8DDF<code>playing</code>\u4E8B\u4EF6\u3002</li><li>playing\uFF1A\u5A92\u4F53\u5F00\u59CB\u64AD\u653E\u65F6\u89E6\u53D1\u3002</li><li>timeupdate\uFF1A<code>currentTime</code>\u5C5E\u6027\u53D8\u5316\u65F6\u89E6\u53D1\uFF0C\u6BCF\u79D2\u53EF\u80FD\u89E6\u53D14\u523060\u6B21\u3002</li><li>pause\uFF1A\u8C03\u7528<code>pause()</code>\u65B9\u6CD5\u3001\u64AD\u653E\u6682\u505C\u65F6\u89E6\u53D1\u3002</li><li>seeking\uFF1A\u811A\u672C\u6216\u8005\u7528\u6237\u8981\u6C42\u64AD\u653E\u67D0\u4E2A\u6CA1\u6709\u7F13\u51B2\u7684\u4F4D\u7F6E\uFF0C\u64AD\u653E\u505C\u6B62\u5F00\u59CB\u52A0\u8F7D\u6570\u636E\u65F6\u89E6\u53D1\u3002\u6B64\u65F6\uFF0C<code>seeking</code>\u5C5E\u6027\u8FD4\u56DE<code>true</code>\u3002</li><li>seeked\uFF1A<code>seeking</code>\u5C5E\u6027\u53D8\u56DE<code>false</code>\u65F6\u89E6\u53D1\u3002</li><li>ended\uFF1A\u5A92\u4F53\u6587\u4EF6\u64AD\u653E\u5B8C\u6BD5\u65F6\u89E6\u53D1\u3002</li><li>durationchange\uFF1A<code>duration</code>\u5C5E\u6027\u53D8\u5316\u65F6\u89E6\u53D1\u3002</li><li>volumechange\uFF1A\u97F3\u91CF\u53D8\u5316\u65F6\u89E6\u53D1\u3002</li><li>ratechange\uFF1A\u64AD\u653E\u901F\u5EA6\u6216\u9ED8\u8BA4\u7684\u64AD\u653E\u901F\u5EA6\u53D8\u5316\u65F6\u89E6\u53D1\u3002</li><li>abort\uFF1A\u505C\u6B62\u52A0\u8F7D\u5A92\u4F53\u6587\u4EF6\u65F6\u89E6\u53D1\uFF0C\u901A\u5E38\u662F\u7528\u6237\u4E3B\u52A8\u8981\u6C42\u505C\u6B62\u4E0B\u8F7D\u3002</li><li>error\uFF1A\u7F51\u7EDC\u6216\u5176\u4ED6\u539F\u56E0\u5BFC\u81F4\u5A92\u4F53\u6587\u4EF6\u65E0\u6CD5\u52A0\u8F7D\u65F6\u89E6\u53D1\u3002</li><li>emptied\uFF1A\u7531\u4E8E<code>error</code>\u6216<code>abort</code>\u4E8B\u4EF6\u5BFC\u81F4<code>networkState</code>\u5C5E\u6027\u53D8\u6210\u65E0\u6CD5\u83B7\u53D6\u6570\u636E\u65F6\u89E6\u53D1\u3002</li></ul>`,33),l=[o];function c(i,p){return n(),e("div",null,l)}const u=a(t,[["render",c],["__file","video.html.vue"]]);export{u as default};
