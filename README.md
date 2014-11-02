NodeJTalk
=========
OpenJTalkをNode.jsで使うためのnative addon  
**node.js v0.10.28 (32bit) windouws専用**

使い方
------
オープンソースのOpenJTalkをNode.jsから使うことができます。  
現時点では文字列を音楽ファイルに変換するのみです。
用意している関数は3つです。
+ setup関数では引数に辞書ファイルのディレクトリ、音声ファイルのディレクトリ、音響サンプリング、出力ファイル名を設定します。
+   run関数では変換したい文字列を入力します。
+   end関数は終了処理を行います。引数はなし
#### サンプルコード (nodejtalk.js)####
```javascript
    var nodejtalk     = require('./NodeJTalk/nodejtalk');<br>
    var Dictionary 　 = "./NodeJTalk/dic";  
    var Voice	        = "./NodeJTalk/voice\\mei_happy.htsvoice";  
    var Sampling      = 48000;  
    var file_name     = "voice.wav";  
    var text          = 'ほげほげ'; 
    
    nodejtalk.setup(Dictionary,Voice,Sampling,file_name); 
    nodejtalk.run(text);  
    nodejtalk.end();  
```
その他
------
Openjtalk_vc_projectsはVC2013のプロジェクトファイルが入っています。32bitで作成されているのでインストールされているnode.jsが64bitの方は注意が必要です一応example/NodeJTalkには32bitのNode.jsの実行ファイルが用意されています。
Node.jsはUTF-8で文字列の処理をしているそうなのですが辞書ファイルがShift-JISのためaddon内部の処理が上手くいかない場合がありますので文字エンコードを変換するためにオープンソースのc/c++用ライブラリICU(International Components for Unicode)を使いました。

今後の予定
-----
+ OpeJTalkで用意されている関数を全て利用できるようにする
+ 音声データのストリーミング
+ Unityの言語モジュールとしての活用

参考
-----
1. [OpenJTalk本家](http://open-jtalk.sourceforge.net/)
2. [ICU](http://site.icu-project.org/)

ライセンス
----------
Copyright &copy; 2014 @SavatCat   
Distributed under the [MIT License][mit].   
[MIT]: http://www.opensource.org/licenses/mit-license.php
