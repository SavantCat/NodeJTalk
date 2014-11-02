var nodejtalk   = require('./NodeJTalk/nodejtalk');
var Dictionary = "./NodeJTalk/dic";
var Voice	   = "./NodeJTalk/voice\\mei_happy.htsvoice";
var Sampling   = 48000;
var file_name  = "voice.wav";
var text = '我輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。';

//OpenJTalk------------------------------------------
nodejtalk.setup(Dictionary,Voice,Sampling,file_name);

nodejtalk.run(text);

nodejtalk.end();
//---------------------------------------------------

//バイナリとしてBuffer変数にロードしてあれこれする準備----------
var fs = require("fs");
var buffer = fs.readFileSync( file_name );
console.log("Buffer size:"+buffer.length);
//---------------------------------------------------

/*
var sys = require('sys');
for(var i=0;i<buffer.length;i++){
    if (i % 15 == 0 && i>0) {
        console.log("");
    }
    sys.print(buffer[i]);
}
*/

