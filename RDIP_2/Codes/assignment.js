var English=['The child liked the chocolate.', 'She was stopped by the bravest knight.', 'Mary baked a cake for his birthday', 'She decorated the cake carefully', 'Mary wore a dress with polka dots.'];
var Hindi=['राम ने सीता के लिए फल तोड़ा।', 'छोटे बच्चे पाठशाला जल्दी आयेंगे।', 'मेहनत का फल मीठा होता है।', 'वाह! वह खूबसूरत है।', 'पेड़ से पत्ते गिर गए।'];
 function select_language()
 {
 	if(document.getElementById("language").value=='English')
 	{
 		document.getElementById("demo1").innerHTML='<center><select id="sentenceE" name="sentenceE" style="width:30%;height:2%;font-size: 70%"onchange="select_sentence();"><option value="null" onclick="reload();" >--Select a Sentence--</option><option value="se1">The child liked the chocolate.</option><option value="se2" >She was stopped by the bravest knight.</option><option value="se3" >Mary baked a cake for his birthday</option><option value="se4" >She decorated the cake carefully</option><option value="se5" >Mary wore a dress with polka dots.</option></select>';
 	}
 	else if(document.getElementById("language").value=='Hindi')
 	{
 		document.getElementById("demo1").innerHTML='<center><select id="sentenceH" name="sentenceH" style="width:30%;height:2%;font-size: 70%"onchange="select_sentence();"><option value="null" onclick="reload();" >--Select a Sentence--</option><option value="sh1">राम ने सीता के लिए फल तोड़ा।</option><option value="sh2" >छोटे बच्चे पाठशाला जल्दी आयेंगे।</option><option value="sh3" >मेहनत का फल मीठा होता है।</option><option value="sh4" >वाह! वह खूबसूरत है।</option><option value="sh5" >पेड़ से पत्ते गिर गए।</option></select>';
 	}
 }