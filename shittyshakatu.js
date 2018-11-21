var dicesize = 100000;
var items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var itemprices = [15000000000, 15000000000, 11399999296, 11399999296, 8999999680, 8999999680, 5999999936, 2934265808, 3124999968, 3124999968, 2375000048, 2375000048, 1874999952, 1874999952, 1250000016, 611305376, 1035141117, 1035141117, 0, 431308801, 431308801, 374999996, 374999996, 285000004, 285000004, 225000002, 225000002, 149999995, 73356646, 124999999, 124999999, 94999999, 94999999, 74999999, 74999999, 49999999, 27254730, 1600000, 3600000, 750000];
var numitems = 40;
var lastChanged = -1;
var boxesOpened = 0;

function rollDice() {
	loopAmount = parseInt(document.getElementById("number").value);
	boxesOpened = boxesOpened + loopAmount;
	
	for(i = 0; i < loopAmount; i++)
	{
		var roll = Math.floor(((Math.random()) * 100000) + 1);
		
		if(roll>99995){
			items[0]++;
			lastChanged=0;
		}
		else if(roll>99990&&roll<=99995){
			items[1]++;
			lastChanged=1;
		}
		else if(roll>99985&&roll<=99990){
			items[2]++;
			lastChanged=2;
		}
		else if(roll>99980&&roll<=99985){
			items[3]++;
			lastChanged=3;
		}
		else if(roll>99975&&roll<=99980){
			items[4]++;
			lastChanged=4;
		}
		else if(roll>99970&&roll<=99975){
			items[5]++;
			lastChanged=5;
		}
		else if(roll>99965&&roll<=99970){
			items[6]++;
			lastChanged=6;
		}
		else if(roll>99960&&roll<=99965){
			items[7]++;
			lastChanged=7;
		}
		else if(roll>99940&&roll<=99960){
			items[8]++;
			lastChanged=8;
		}
		else if(roll>99920&&roll<=99940){
			items[9]++;
			lastChanged=9;
		}
		else if(roll>99900&&roll<=99920){
			items[10]++;
			lastChanged=10;
		}
		else if(roll>99880&&roll<=99900){
			items[11]++;
			lastChanged=11;
		}
		else if(roll>99860&&roll<=99880){
			items[12]++;
			lastChanged=12;
		}
		else if(roll>99840&&roll<=99860){
			items[13]++;
			lastChanged=13;
		}
		else if(roll>99820&&roll<=99840){
			items[14]++;
			lastChanged=14;
		}
		else if(roll>99800&&roll<=99820){
			items[15]++;
			lastChanged=15;
		}
		else if(roll>99750&&roll<=99800){
			items[16]++;
			lastChanged=16;
		}
		else if(roll>99700&&roll<=99750){
			items[17]++;
			lastChanged=17;
		}
		else if(roll>99650&&roll<=99700){
			items[18]++;
			lastChanged=18;
		}
		else if(roll>99550&&roll<=99650){
			items[19]++;
			lastChanged=19;
		}
		else if(roll>99450&&roll<=99550){
			items[20]++;
			lastChanged=20;
		}
		else if(roll>98950&&roll<=99450){
			items[21]++;
			lastChanged=21;
		}
		else if(roll>98460&&roll<=98950){
			items[22]++;
			lastChanged=22;
		}
		else if(roll>97970&&roll<=98460){
			items[23]++;
			lastChanged=23;
		}
		else if(roll>97480&&roll<=97970){
			items[24]++;
			lastChanged=24;
		}
		else if(roll>96990&&roll<=97480){
			items[25]++;
			lastChanged=25;
		}
		else if(roll>96510&&roll<=96990){
			items[26]++;
			lastChanged=26;
		}
		else if(roll>96030&&roll<=96510){
			items[27]++;
			lastChanged=27;
		}
		else if(roll>95550&&roll<=96030){
			items[28]++;
			lastChanged=28;
		}
		else if(roll>94590&&roll<=95550){
			items[29]++;
			lastChanged=29;
		}
		else if(roll>93640&&roll<=94590){
			items[30]++;
			lastChanged=30;
		}
		else if(roll>92700&&roll<=93640){
			items[31]++;
			lastChanged=31;
		}
		else if(roll>91770&&roll<=92700){
			items[32]++;
			lastChanged=32;
		}
		else if(roll>89470&&roll<=91770){
			items[33]++;
			lastChanged=33;
		}
		else if(roll>87270&&roll<=89470){
			items[34]++;
			lastChanged=34;
		}
		else if(roll>85070&&roll<=87270){
			items[35]++;
			lastChanged=35;
		}
		else if(roll>82970&&roll<=85070){
			items[36]++;
			lastChanged=36;
		}
		else if(roll>74670&&roll<=82970){
			items[37] = items[37] + 12;
			lastChanged=37;
		}
		else if(roll>63670&&roll<=74670){
			items[38] = items[38] + 6;
			lastChanged=38;
		}
		else if(roll<=63670){
			items[39] = items[39] + 25;
			lastChanged=39;
		}
	}
	
	updateDisplay();
}

function updateDisplay()
{
	var tabledata = document.getElementsByTagName("td");
	for(i = 0; i < numitems; i++)
	{
		if(items[i]>0)
		{
			// Item #
			tabledata[i].getElementsByTagName("p")[0].innerHTML = items[i];
			// Colors
			tabledata[i].getElementsByTagName("p")[0].style.color="#00ffff";
			tabledata[i].getElementsByTagName("p")[1].style.color="#00ffff";
			
		}
	}
	
	var itemname = tabledata[lastChanged].getElementsByTagName("p")[1].innerHTML;
	// Last item dropped
	document.getElementsByClassName("drop")[0].getElementsByTagName("p")[0].innerHTML = "Last Drop: " + itemname;
	// Last item color change
	tabledata[lastChanged].getElementsByTagName("p")[0].style.color = "#ff00ff";
	tabledata[lastChanged].getElementsByTagName("p")[1].style.color = "#ff00ff";
	// Update info
	document.getElementsByClassName("drop")[0].getElementsByTagName("p")[1].innerHTML = "Total boxes opened: " + boxesOpened.toLocaleString('en');
	document.getElementsByClassName("info")[0].getElementsByTagName("p")[0].innerHTML = "Money spent: $" + (boxesOpened*50000000).toLocaleString('en');
	document.getElementsByClassName("info")[0].getElementsByTagName("p")[1].innerHTML = "Marketplace value: $" + calcValue().toLocaleString('en');
}

function calcValue()
{
	var sum = 0;
	for(i = 0; i < numitems; i++)
	{
		sum = sum + (items[i] * itemprices[i]);
	}
	return Math.floor(sum*0.845);
}