
function select_language()
{
	document.getElementById('demo').innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
	document.getElementById('demo1').innerHTML="(select the buttons in proper order)";
	
    //document.getElementById('demo3').innerHTML = 
    if(document.getElementById("language").value=='English')
    {
    	//alert("hi");
    	var Sentences = ['John ate an apple before afternoon', 'before afternoon John ate an apple', 'John before afternoon ate an apple', 'some students like to study in the night',
    'at night some students like to study', 'John and Mary went to church', 'Mary and John went to church', 'John went to church after eating', 'after eating John went to church',
    'John after eating went to church', 'did he go to market', 'he did go to market', 'the woman who called my sister sells cosmetics', 'the woman who sells cosmetics called my sister', 'my sister who sells cosmetics called the woman', 'my sister who called the woman sells cosmetics',
    'John goes to the library and studies', 'John studies and goes to the library', 'John ate an apple so did she', 'she ate an apple so did John',
    'the teacher returned the book after she noticed the error', 'the teacher noticed the error after she returned the book', 'after the teacher returned the book she noticed the error',
     'after the teacher noticed the error she returned the book', 'she returned the book after the teacher noticed the error', 'she noticed the error after the teacher returned the book',
 'after she returned the book the teacher noticed the error', 'after she noticed the error the teacher returned the book', 'I told her that I bought a book yesterday',
    'I told her yesterday that I bought a book', 'yesterday I told her that I bought a book', 'I bought a book that I told her yesterday', 'I bought a book yesterday that I told her', 'yesterday I bought a book that I told her'];
    var len=Number(Sentences.length);
    var sentence=Sentences[Math.floor(random(1, len)-1)]; 
  
    var words = sentence.split(" ");
    //alert(words);
   
    var len1=Number(words.length);
   
    words=shuffle(words);
    
    for(var i=0;i<len1;i++)
    {
    	//alert("hi");
    	var dis = document.getElementById("demo3");
   	 var block = document.createElement('BUTTON');
        var txt = document.createTextNode(words[i]);
        block.appendChild(txt);
        dis.appendChild(block);
        document.getElementById("demo3").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }

    }
    else if(document.getElementById("language").value=='Hindi')
    {
    	var Sentencesh=["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम", "राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी",
        "मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम",
        "राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम", "बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर", "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर",
        "सो गया कुत्ता मारकर बिल्लियों को", "एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब", "एक बड़ी सी किताब वहाँ है", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", " बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", "है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"];
    
    
    var lenh=Number(Sentencesh.length);
    var sentenceh=Sentencesh[Math.floor(random(1, lenh)-1)]; 
  
    var wordsh = sentenceh.split(" ");
    //alert(words);
   
    var len1h=Number(wordsh.length);
   
    wordsh=shuffle(wordsh);
    
    for(var j=0;j<len1h;j++)
    {
    	//alert("hi");
    	var dish = document.getElementById("demo3");
   	 var blockh = document.createElement('BUTTON');
        var txth = document.createTextNode(wordsh[j]);
        blockh.appendChild(txth);
        dish.appendChild(blockh);
        document.getElementById("demo3").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
}
else
{
	alert("Choose correct Option");
}
    function random(mn, mx) 
    {  
            
          return Math.random() * (mx - mn) + mn;  
        }    

function shuffle(o)
{ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;

}
}