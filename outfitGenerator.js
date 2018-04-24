var generateSentence = function(gender) {

  var pronoun = gender === "male" ? "His" : "Her";
  var otherPronoun = gender === "male" ? "he" : "she";

  var aVocab = new Array();

  var intIncr
  var intCat

  intCat = 0
  intIncr = 0

  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "FIRST"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "This cat is adorned in <Top>, <Bottom>, and <Shoes><CloakOrNot>. " + pronoun + " accessories include <Accessories>. The whole ensemble is coordinated in <deccolors>."
  aVocab[intCat][1][intIncr++] = "This cat is adorned in <OPDesc> <OnePiece> and <Shoes><CloakOrNot>. " + pronoun + " accessories include <Accessories>. The whole ensemble is coordinated in <deccolors>."


  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "CloakOrNot"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = ""
  aVocab[intCat][1][intIncr++] = ""
  aVocab[intCat][1][intIncr++] = ""
  aVocab[intCat][1][intIncr++] = ""
  aVocab[intCat][1][intIncr++] = ", over which " + otherPronoun + " is wearing <length> cape"
  aVocab[intCat][1][intIncr++] = ", over which " + otherPronoun + " is wearing a corset"
  aVocab[intCat][1][intIncr++] = ", over which " + otherPronoun + " is wearing <length> cloak"
  aVocab[intCat][1][intIncr++] = ", over which " + otherPronoun + " is wearing <length> overcoat"
  aVocab[intCat][1][intIncr++] = ", over which " + otherPronoun + " is wearing <length> <textiletype>coat"
  aVocab[intCat][1][intIncr++] = ", over which " + otherPronoun + " is wearing <length> high-collared cape"
  aVocab[intCat][1][intIncr++] = ", over which " + otherPronoun + " is wearing <length> jacket"
  aVocab[intCat][1][intIncr++] = ", over which " + otherPronoun + " is wearing <length> vest"



  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "Top"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "a loose top"
  aVocab[intCat][1][intIncr++] = "<OPDesc> top"
  aVocab[intCat][1][intIncr++] = "a blouse"
  aVocab[intCat][1][intIncr++] = "a high-collar top"
  aVocab[intCat][1][intIncr++] = "an embroidered blouse"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "Bottom"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "a pair of loose trousers"
  aVocab[intCat][1][intIncr++] = "a kilt"
  aVocab[intCat][1][intIncr++] = "a pair of trousers"
  aVocab[intCat][1][intIncr++] = "a pair of knickers"
  aVocab[intCat][1][intIncr++] = "<length> <skirttype>skirt"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "skirttype"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "flared "
  aVocab[intCat][1][intIncr++] = "lacy "
  aVocab[intCat][1][intIncr++] = "layered "
  aVocab[intCat][1][intIncr++] = "simple "


  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "Shoes"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "a pair of <height> <lb> <textiletype>boots<h>"
  aVocab[intCat][1][intIncr++] = "a pair of <height> <lb> <textiletype>shoes<h>"
  aVocab[intCat][1][intIncr++] = "a pair of <height> <textiletype>boots"
  aVocab[intCat][1][intIncr++] = "a pair of <textiletype>shoes"
  aVocab[intCat][1][intIncr++] = "a pair of lacy <textiletype>shoes"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "height"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "high"
  aVocab[intCat][1][intIncr++] = "knee-high"
  aVocab[intCat][1][intIncr++] = "short"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "lb"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "buckled"
  aVocab[intCat][1][intIncr++] = "lace-up"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "h"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = " with heels"
  aVocab[intCat][1][intIncr++] = ""


  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "textiletype"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "leather "
  aVocab[intCat][1][intIncr++] = "embroidered "
  aVocab[intCat][1][intIncr++] = ""

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "length"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "a long"
  aVocab[intCat][1][intIncr++] = "a short"
  aVocab[intCat][1][intIncr++] = "a medium-length"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "OnePiece"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "suit"
  aVocab[intCat][1][intIncr++] = "dress"


  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "OPDesc"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "an elegant"
  aVocab[intCat][1][intIncr++] = "an extravagant"
  aVocab[intCat][1][intIncr++] = "a frilly"
  aVocab[intCat][1][intIncr++] = "a simple"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "jewelry"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "<jtype> brooch"
  aVocab[intCat][1][intIncr++] = "<jtype> ring"
  aVocab[intCat][1][intIncr++] = "a pair of <earringtype> earrings"
  aVocab[intCat][1][intIncr++] = "<jtype> pendant"
  aVocab[intCat][1][intIncr++] = "a lot of jewelry"
  aVocab[intCat][1][intIncr++] = "a single <earringtype> earring"
  aVocab[intCat][1][intIncr++] = "a necktie"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "jtype"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "a watch"
  aVocab[intCat][1][intIncr++] = "a cameo"
  aVocab[intCat][1][intIncr++] = "a jeweled"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "earringtype"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "diamond"
  aVocab[intCat][1][intIncr++] = "gold"
  aVocab[intCat][1][intIncr++] = "pearl"
  aVocab[intCat][1][intIncr++] = "ruby"
  aVocab[intCat][1][intIncr++] = "sapphire"
  aVocab[intCat][1][intIncr++] = "silver"


  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "Hat"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "a bowler hat"
  aVocab[intCat][1][intIncr++] = "a pork-pie hat"
  aVocab[intCat][1][intIncr++] = "a top hat"
  aVocab[intCat][1][intIncr++] = "a wide-brimmed hat"
  aVocab[intCat][1][intIncr++] = "a feathered hat"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "Brimlength"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "a wide"
  aVocab[intCat][1][intIncr++] = "a narrow"


  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "Accessory"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "<Brimlength> belt"
  aVocab[intCat][1][intIncr++] = "a belt"
  aVocab[intCat][1][intIncr++] = "a crossbelt"
  aVocab[intCat][1][intIncr++] = "a knit scarf"
  aVocab[intCat][1][intIncr++] = "a scarf"
  aVocab[intCat][1][intIncr++] = "a silk scarf"
  aVocab[intCat][1][intIncr++] = "a pair of goggles"



  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "Accessories"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "<jewelry> and <Accessory>"
  aVocab[intCat][1][intIncr++] = "<Accessory> and <Hat>"
  aVocab[intCat][1][intIncr++] = "<Accessory> and <Hat>"
  aVocab[intCat][1][intIncr++] = "<Accessory> and <Hat>"
  aVocab[intCat][1][intIncr++] = "<Accessory>, <Hat>, and <jewelry>"
  aVocab[intCat][1][intIncr++] = "<jewelry> and <Hat>"


  // Nothing Wrong Below This Point

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "deccolors"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "<mbw>"
  aVocab[intCat][1][intIncr++] = "<warmcolor> and <mbw>"
  aVocab[intCat][1][intIncr++] = "<coolcolor> and <mbw>"
  aVocab[intCat][1][intIncr++] = "<warmcolor> and <coolcolor>"
  aVocab[intCat][1][intIncr++] = "<bw>, <coolcolor>, and <metallic>"
  aVocab[intCat][1][intIncr++] = "<bw>, <warmcolor>, and <metallic>"
  aVocab[intCat][1][intIncr++] = "<bw>, <warmcolor>, <coolcolor>, and <metallic>"
  aVocab[intCat][1][intIncr++] = "<warmcolor>, <coolcolor>, and <mbw>"
  aVocab[intCat][1][intIncr++] = "<grayscale>"
  aVocab[intCat][1][intIncr++] = "<mostlywarm>"
  aVocab[intCat][1][intIncr++] = "<mostlycool>"
  aVocab[intCat][1][intIncr++] = "<tone>"
  aVocab[intCat][1][intIncr++] = "<shade>brown and <metallic>"
  aVocab[intCat][1][intIncr++] = "<shade>brown, <coolcolor>, and <metallic>"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "grayscale"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "black"
  aVocab[intCat][1][intIncr++] = "black and white"
  aVocab[intCat][1][intIncr++] = "black and <shade-g>gray"
  aVocab[intCat][1][intIncr++] = "white and <shade-g>gray"
  aVocab[intCat][1][intIncr++] = "black, white, and <metallic>"
  aVocab[intCat][1][intIncr++] = "black, white, and <warmcolor>"
  aVocab[intCat][1][intIncr++] = "black, white, and <coolcolor>"
  aVocab[intCat][1][intIncr++] = "black, <shade-g>gray, and <metallic>"
  aVocab[intCat][1][intIncr++] = "black, <shade-g>gray, and <warmcolor>"
  aVocab[intCat][1][intIncr++] = "black, <shade-g>gray, and <coolcolor>"
  aVocab[intCat][1][intIncr++] = "white, <shade-g>gray, and <metallic>"
  aVocab[intCat][1][intIncr++] = "white, <shade-g>gray, and <warmcolor>"
  aVocab[intCat][1][intIncr++] = "white, <shade-g>gray, and <coolcolor>"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "mostlycool"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "<shade>blue, <shade>purple, and <mostlycoolend>"
  aVocab[intCat][1][intIncr++] = "<shade>green, <shade>blue, and <mostlycoolend>"
  aVocab[intCat][1][intIncr++] = "<shade>green, <shade>purple, and <mostlycoolend>"
  aVocab[intCat][1][intIncr++] = "<shade>turquoise, <shade>purple, <mostlycoolend>"
  aVocab[intCat][1][intIncr++] = "<shade>turquoise, <shade>green, <mostlycoolend>"
  aVocab[intCat][1][intIncr++] = "<shade>turquoise, <shade>blue, <mostlycoolend>"
  aVocab[intCat][1][intIncr++] = "<shade>aqua, <shade>purple, <mostlycoolend>"
  aVocab[intCat][1][intIncr++] = "<shade>aqua, <shade>green, <mostlycoolend>"
  aVocab[intCat][1][intIncr++] = "<shade>aqua, <shade>blue, <mostlycoolend>"
  aVocab[intCat][1][intIncr++] = "<shade>aqua, <shade>turquoise, <mostlycoolend>"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "mostlycoolend"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "and <mbwwc>"
  aVocab[intCat][1][intIncr++] = "and <mbwwc>"
  aVocab[intCat][1][intIncr++] = "<warmcolor>, and <bw>"
  aVocab[intCat][1][intIncr++] = "<metallic>, and <bw>"
  aVocab[intCat][1][intIncr++] = "<metallic>, and <shade>brown"
  aVocab[intCat][1][intIncr++] = "and <shade>brown"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "mostlywarm"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "<shade-nl>red, <shade-nd>yellow, <mostlywarmend>"
  aVocab[intCat][1][intIncr++] = "<shade-nl>red, <shade-nd>orange, <mostlywarmend>"
  aVocab[intCat][1][intIncr++] = "<shade-nl>red, <shade>brown, <mostlywarmend>"
  aVocab[intCat][1][intIncr++] = "<shade>pink, <shade-nd>yellow, <mostlywarmend>"
  aVocab[intCat][1][intIncr++] = "<shade>pink, <shade-nd>orange, <mostlywarmend>"
  aVocab[intCat][1][intIncr++] = "<shade>pink, <shade>brown, <mostlywarmend>"
  aVocab[intCat][1][intIncr++] = "<shade-nd>orange, <shade>brown, <mostlywarmend>"
  aVocab[intCat][1][intIncr++] = "<shade-nd>orange, <shade-nd>yellow, <mostlywarmend>"
  aVocab[intCat][1][intIncr++] = "<shade>magenta, <shade-nd>yellow, <mostlywarmend>"
  aVocab[intCat][1][intIncr++] = "<shade>magenta, <shade-nd>orange, <mostlywarmend>"
  aVocab[intCat][1][intIncr++] = "<shade>magenta, <shade>pink, <mostlywarmend>"
  aVocab[intCat][1][intIncr++] = " <shade>brown, <shade>magenta, <mostlywarmend>"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "mostlywarmend"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "and <mbwcc>"
  aVocab[intCat][1][intIncr++] = "and <mbwcc>"
  aVocab[intCat][1][intIncr++] = "<coolcolor>, and <bw>"
  aVocab[intCat][1][intIncr++] = "<metallic>, and <bw>"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "warmcolor"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "<shade>brown"
  aVocab[intCat][1][intIncr++] = "magenta"
  aVocab[intCat][1][intIncr++] = "<shade-nl>red"
  aVocab[intCat][1][intIncr++] = "<shade-nl>red"
  aVocab[intCat][1][intIncr++] = "<shade>pink"
  aVocab[intCat][1][intIncr++] = "<shade-nd>yellow"
  aVocab[intCat][1][intIncr++] = "<shade-nd>yellow"
  aVocab[intCat][1][intIncr++] = "<shade-nd>orange"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "coolcolor"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "<shade>aqua"
  aVocab[intCat][1][intIncr++] = "<shade>green"
  aVocab[intCat][1][intIncr++] = "<shade>green"
  aVocab[intCat][1][intIncr++] = "<shade>blue"
  aVocab[intCat][1][intIncr++] = "<shade>blue"
  aVocab[intCat][1][intIncr++] = "<shade>blue"
  aVocab[intCat][1][intIncr++] = "<shade>purple"
  aVocab[intCat][1][intIncr++] = "<shade>purple"
  aVocab[intCat][1][intIncr++] = "<shade>turquoise"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "metallic"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "brass"
  aVocab[intCat][1][intIncr++] = "copper"
  aVocab[intCat][1][intIncr++] = "gold"
  aVocab[intCat][1][intIncr++] = "silver"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "tone"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "desert colors"
  aVocab[intCat][1][intIncr++] = "forest colors"
  aVocab[intCat][1][intIncr++] = "oceanic colors"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "bw"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "black"
  aVocab[intCat][1][intIncr++] = "<shade-g>gray"
  aVocab[intCat][1][intIncr++] = "white"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "mbw"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "<metallic>"
  aVocab[intCat][1][intIncr++] = "<bw>"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "mbwcc"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "<metallic>"
  aVocab[intCat][1][intIncr++] = "<bw>"
  aVocab[intCat][1][intIncr++] = "<coolcolor>"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "mbwwc"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "<metallic>"
  aVocab[intCat][1][intIncr++] = "<bw>"
  aVocab[intCat][1][intIncr++] = "<warmcolor>"

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "shade"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "light "
  aVocab[intCat][1][intIncr++] = "dark "
  aVocab[intCat][1][intIncr++] = "rich "
  aVocab[intCat][1][intIncr++] = ""

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "shade-g"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "light "
  aVocab[intCat][1][intIncr++] = "dark "
  aVocab[intCat][1][intIncr++] = ""

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "shade-nl"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "dark "
  aVocab[intCat][1][intIncr++] = "rich "
  aVocab[intCat][1][intIncr++] = ""

  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "shade-nd"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = "pastel "
  aVocab[intCat][1][intIncr++] = "rich "
  aVocab[intCat][1][intIncr++] = ""


  //Leave to Copy!
  intCat++
  intIncr = 0
  aVocab[intCat] = new Array();
  aVocab[intCat][0] = "THIRD"
  aVocab[intCat][1] = new Array()
  aVocab[intCat][1][intIncr++] = ""

  return aVocab;
}

function GenNumber(nRange) {
  var iNumGen
  iNumGen = Math.round((Math.random() * nRange));

  return iNumGen;
}

function GetFrom(aArray) {
  var undefined
  var sReturn
  sReturn = aArray[GenNumber(aArray.length)];
  if (sReturn == undefined) {
    sReturn = GetFrom(aArray)
  }
  return sReturn
}


function GetArray(sArrayName, gender) {
  var sentence = generateSentence(gender);
  for (var intLooper = 0; intLooper < sentence.length; intLooper++) {
    if (sentence[intLooper][0] == sArrayName) {
      return sentence[intLooper][1];
      break;
    }
  }
}

function ScanLine(sLine, gender) {
  var iTagStart, iTagEnd
  var sKey

  if (sLine.indexOf("<") > -1) {
    iTagStart = sLine.indexOf("<");
    iTagEnd = sLine.indexOf(">");

    sKey = sLine.substr(iTagStart + 1, iTagEnd - (iTagStart + 1));

    sKey = GetFrom(GetArray(sKey, gender))
    sLine = sLine.substr(0, iTagStart) + sKey + sLine.substr(iTagEnd + 1, (sLine.length - iTagEnd))

  }


  if (sLine.indexOf("<") > -1) {
    sLine = ScanLine(sLine, gender)
  }

  return sLine;
}


var generate = function(gender) {
  sLine = GetFrom(GetArray("FIRST", gender));

  return ScanLine(sLine, gender)
}

module.exports = generate;