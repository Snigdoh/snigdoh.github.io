const BUYnow = [];  // < was PLAYwk1
var BUYnowstr; 		// < was PLAYwk1str 
/* var sflBUY; */	 // < was sflWK
	
	function GhideSFL() {
		document.getElementById("tblSFL").style.visibility="hidden";	//display="none";
		document.getElementById("SVDspan").style.visibility="hidden";
		for (let n = 1; n < 19; n++) {
				document.getElementById("GsflODR"+n).style.display="none"; 
		}
	}	
	
	function GshowSFL() {
		//alert("Trying to show 'tblSFL'!");
		if (document.getElementById("tblSFL").style.visibility=="visible") {
			document.getElementById("tblSFL").style.visibility="hidden"; 
			//onchange="localStorage.setItem('bkDATE',this.value);"	
		}		
		else {
			document.getElementById("tblSFL").style.visibility="visible"; 

				//BUYnow.push(pNO);	//pl); 			//alert("PLAY array = "+PLAY);
				//alert("'BUYnow' array = "+BUYnow+"\n\nBUYnowstr = "+BUYnowstr);
				//BUYnowstr = BUYnow.toString();
			
			for (let z = 1; z < 19; z++) {
					document.getElementById("SFL"+z).innerHTML = "";
			}

			
			/*alert("Will try to SHUFFLE finished irem order. Array to shuffle = "+array+"\n\n"+
				  array+" 'BUYnow' array content = "+BUYnow)*/
			//alert("Will try to SHUFFLE finished irem order.\n'BUYnow' (?array) = "+BUYnow); // *!
			//localStorage.setItem("G"+pNO,'y');
			for (let b = 1; b < 9; b++) {
				//alert("Trying to get localStorage's 'yes's to show in shuffle!");
				if ( localStorage.getItem("G"+b) == 'y' ) {
					//alert("lS 'G"+b+"' =  'y'");
					//BUYnow += ", qw"; 
					//BUYnow.push(b);
					if (!BUYnow.includes(b)) { // < add item only if it doesn't already exist in array *
						BUYnow.push(b);
					}
				}				
			} //most common way to append to a string is by using the += operator. str += " World"; 
																// BUYnow.push(pNO);
			//alert("Post APPENDED 'BUYnow' = "+BUYnow); // *!
							
							
							//let shuffled = PLAY
			  let shuffled = BUYnow	//PLAYfull
			    /*.map(value => ({ value, sort: Math.random() }))
			    .sort((a, b) => a.sort - b.sort)
			    .map(({ value }) => value)*/
			  
			//alert("'PLAY' array = "+PLAY+"\n\nNew 'shuffled' array = "+shuffled);	
			var sflLen = shuffled.length;
			for (let q = 0; q < sflLen; q++) {
					//document.getElementById("SFL"+(q+1)).innerHTML = shuffled[q];
					document.getElementById("SFL"+(q+1)).innerHTML = document.getElementById("G"+shuffled[q]).innerText;					
/*					
					if (document.getElementById("SFL"+(q+1)).innerHTML == "Hodgins, George W.") {
						document.getElementById("SFL"+(q+1)).style.color = "green";
					}
					else {
						document.getElementById("SFL"+(q+1)).style.color = "black";
					}
*/					
			}					
			
			document.getElementById("mySidenav").style.width = "0px";	//hideMENU();		
			//document.getElementById("tblDATE").style.visibility="hidden";	//display="none";
			
		}		
	}	


	function LOADgroc() {		
		GlocStor();
		storedNOTE = localStorage.getItem("NOTEchange");
		for (let i = 1; i < 9; i++) {	// > 17
				var PL = document.getElementById("G"+i).innerHTML;
					//alert("PL = "+PL);
				const afterPL = storedNOTE.split(PL)[1]; 
				//console.log(result); // Output: "12345"				
				  if (storedNOTE.includes(PL)) {
					document.getElementById("G"+i).style.color = "orange"; // < Sep/26 *!
				  } else {
				    //alert("No note re "+pl+"!");
				}	
		}
		
		storedNOTE = localStorage.getItem("NOTEchangeG");
		for (let i = 1; i < 16; i++) {	// > 17
				var PL = "g"+i;
					//alert("PL = "+PL);
				const afterPL = storedNOTE.split(PL)[1]; 
				//console.log(result); // Output: "12345"				
				  if (storedNOTE.includes(PL)) {
				    //console.log("Match found!");
					//alert(pl+": "+afterPL);	//storedNOTE);
					//document.getElementById("G"+i).style.background = "maroon"; // < Sep/26 *!
					//document.getElementById("G"+i).style.border = "2px solid red"; // < Sep/26 *!
					//document.getElementById("G"+i).innerHTML = document.getElementById("G"+i).innerHTML+" n"; // < Sep/26 *!
					document.getElementById("G"+i).style.background = "orange"; // < Oct/26 *!
					document.getElementById("G"+i).style.color = "black"; // < Oct/26 *!
				  } else {
				    //alert("No note re "+pl+"!");
				}	
			}		
		
			for (let n = 1; n < 9; n++) {	// first 8 items can have picture!
				//localStorage.setItem("G"+n+"itemPIC", pic);	
				// 1. Retrieve the URL string from localStorage
				const storedImageUrl = localStorage.getItem("G"+n+"itemPIC");			
				// 2. If it exists, apply it to the <img> src attribute
				if (storedImageUrl) {
					document.getElementById("myG"+n).src = storedImageUrl;	
				}		
			}
	}

	function GlocStor() {
		//localStorage.setItem("G"+pNO,'y');
		for (let i = 1; i < 9; i++) {	  // was i < 17 pre July/26 *
				if ( localStorage.getItem('G'+i) == "y" ) {
					document.getElementById("G"+i+"check").style.background = "green";
					document.getElementById("G"+i+"check").style.fontSize = "20px"; 
					document.getElementById("G"+i+"check").innerHTML = '&#10003;'; 
				}
		}
/*		for (let w = 0; w < 5; w++) {	  
			for (let i = 1; i < 19; i++) {	  // was i < 17 pre July/26 *
				if ( (localStorage.getItem('G'+i+'playWK'+w) != "") &&  (localStorage.getItem('G'+i+'playWK'+w) != null) ) {
					document.getElementById("G"+i+"wk"+w).style.background = "green";
				}
			}
		}
*/

		//localStorage.setItem("G"+n+"item",ITEMname);	// < G9 - G10
		/*alert("localStorage 'G9item' = '" + localStorage.getItem("G9item") + "'.\n"+
		      "localStorage 'G10item' = '" + localStorage.getItem("G10item") + "'.");*/	
		for (let n = 9; n < 16; n++) {
			if ( (localStorage.getItem("G"+n+"item") != '')  &&  (localStorage.getItem("G"+n+"item") != null)  ) {
				document.getElementById("R"+n).style.display="block";
				document.getElementById("G"+n).innerHTML=localStorage.getItem("G"+n+"item");
				/*var ITEMname = prompt("Enter item name", 'drink');
			  		localStorage.setItem("G"+n+"item",ITEMname);
				return;*/     // Exits early, returning undefined
			}
			//alert("No more slots available!");
		}			  
			  
		for (let n = 1; n < 16; n++) {
			document.getElementById("G"+n).style.fontSize = "20px"; 	
			document.getElementById("G"+n).innerHTML = localStorage.getItem("G"+n+"item");;
			document.getElementById("G"+n+"detail").style.fontSize = "20px"; 	
			document.getElementById("G"+n+"detail").innerHTML = localStorage.getItem("G"+n+"detail");;
		}
		
		document.getElementById("mySidenav").style.width = "0px";
		
	}

	function GopenNav() {
		  if (document.getElementById("mySidenav").style.width<"200px") {
				document.getElementById("mySidenav").style.width = "600px";
				//document.getElementById("mySidenav").style.overflow = "scroll";
		  }
		  else {
			 	document.getElementById("mySidenav").style.width = "0px"; 
		  }
	}	
	function GcloseNav() {
		document.getElementById("mySidenav").style.width = "0px";
	}		

	

						/*   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   */
//const NOwk0 = []; const NOwk1 = []; const NOwk2 = [];  const NOwk3 = [];  const NOwk4 = [];
//var NOwk0str; var NOwk1str; var NOwk2str; var NOwk3str; var NOwk4str;    //PLAYwk4str = PLA	
function BUY(pNO) {
	if ( document.getElementById("G"+pNO).style.background == "lime" ) {
		  let reply;
		  if (confirm("Are you SURE you want to change "+pNO+" scheduled to play?" ) == true) {
		    reply = "YES!";
		  } else {
		    reply = "NO!";
		  }
  		  alert(reply);
			  
		  if ( reply=="NO!") {	
			  return;     // Exits early, returning undefined
		  }		  
	}
	
		if ( (document.getElementById("G"+pNO+"check").style.background == "blue") || (document.getElementById("G"+pNO+"check").style.background == "green") ) {
			//alert(pl+" is NOT playing wk "+wk+"!");
			document.getElementById("G"+pNO+"check").style.background = "slategray";
			document.getElementById("G"+pNO+"check").innerHTML = ""; 	
			localStorage.setItem("G"+pNO,"n");
			
				var index = BUYnow.indexOf(pNO);		//alert("index of "+pl+" = "+index+"\nPLAY = "+BUYnow);
				BUYnow.splice(index, 1);				/* <<< HELP! (July 15/23 */		// < **!
				alert("Post splice BUYnow = "+BUYnow);
				//BUYnowstr = BUYnow.toString();
				//localStorage.setItem("lsBUY",BUYnowstr);	//localStorage.setItem("noWK1",BUYnowstr);				
		}
		else { 
			//alert(pl+" is playing wk "+wk+"!");
			document.getElementById("G"+pNO+"check").style.background = "blue"; 
				document.getElementById("G"+pNO+"check").style.fontSize = "20px"; 
			document.getElementById("G"+pNO+"check").innerHTML = '&#10003;'; 
			
					//&#10003;<!--check symbol-->
			localStorage.setItem("G"+pNO,'y');	//pl);
			
				BUYnow.push(pNO);	//pl); 			//alert("PLAY array = "+PLAY);
				//alert("'BUYnow' array = "+BUYnow);
				BUYnowstr = BUYnow.toString();
				
		}		


		
}

						/*    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$    */
						
	function GclearLS() {				
		  /* SHOP.html:
		  	 	localStorage.setItem("G"+n+"item",ITEMname); *
		  	 		localStorage.setItem('NOTEchange',this.value); *
					localStorage.setItem("G"+n+"detail",ITEMdetail); // < Oct 27 **
			 !shopJS.js:	
				localStorage.getItem("G"+b) = localStorage.setItem("G"+pNO,"n");
			 		localStorage.getItem("NOTEchange"); *
					localStorage.getItem("G"+n+"item") *
					localStorage.setItem("G"+itemNO+"detail",ITEMdetail); // < Oct 27 **
		  */
		  	const ITEMarray = []; var ITEMstr; 
			const Garray = []; var Gstr;
			for (let b = 1; b < 16; b++) {
				Garray.push(localStorage.getItem("G"+b));
				ITEMarray.push(localStorage.getItem("G"+b+"item"));				
		  	}
			alert("Garray (G1-10) = "+ Garray+
				  "\n\nITEMarray (e.g. G5item) = "+ ITEMarray+
				  "\n\nlocalStorage 'NOTEchange' = \n"+localStorage.getItem("NOTEchange"));
					
   		  let reply;
		  if (confirm("Are you SURE you want to CLEAR 'localStorage'?") == true) {
		    reply = "YES!";
		  } else {
		    reply = "NO!";
		  }
  		  alert(reply);
		  
/*		  
		  if ( reply=="YES!") {			  
					for (let w = 0; w < 5; w++) {	  
						for (let i = 1; i < 19; i++) {	  // was i < 17 pre July/26 *
							if ( (localStorage.getItem('G'+i+'playWK'+w) != "") &&  (localStorage.getItem('G'+i+'playWK'+w) != null) ) {
									localStorage.setItem('G'+i+'playWK'+w,""); 
								//document.getElementById("G"+i+"wk"+w).style.background = "green";
							}
						}
					}
				
				localStorage.setItem("LSawyW0",'0'); localStorage.setItem("LSawyW1",'0'); 
				localStorage.setItem("LSawyW2",'0');  localStorage.setItem("LSawyW3",'0'); 
				localStorage.setItem("LSawyW4",'0'); 
				
				alert("'localStorage' (except week dates & note) have been CLEARED!\n"+
					  "'Away' data also cleared. *");
					  
				location.reload();					  
					  
		  }
*/		

		if ( reply=="YES!") {
			for (let i = 1; i < 16; i++) {	  // was i < 17 pre July/26 *
				//if ( (localStorage.getItem('G'+i+'playWK'+w) != "") &&  (localStorage.getItem('G'+i+'playWK'+w) != null) ) {
						localStorage.setItem('G'+i+'item',""); 
						localStorage.setItem("G"+n+"detail",""); // < Oct 27 **
					//document.getElementById("G"+i+"wk"+w).style.background = "green";
				//}
						//"G"+itemNO+"itemPIC"
						//localStorage.getItem("NOTEchange"); *
						alert("localStorage 'G#item' & 'G#detail' (1-15) cleared.\n\n"+
							  "'G#itemPIC' (1-8) & 'NOTEchange' NOT cleared!");
			}	
		}


	}
	
	
	function gSFLmnl(){
		document.getElementById("SVDspan").style.visibility="hidden";
		
		const cars = []; //cars[0]= "Saab"; cars[1]= "Volvo"; cars[2]= "BMW";
				//document.getElementById("demo").innerHTML = cars;
		for (let n = 1; n < 19; n++) {
			if ( document.getElementById("SFL"+n).innerHTML != "" ) {
				document.getElementById("GsflODR"+n).style.display="block"; 
				cars[n] = document.getElementById("SFL"+n).innerHTML;
				document.getElementById("GsflODR"+n).value=n;	// < July 11/26 *
			}	
		}
		
		for (let i = 1; i < 19; i++) {
			if ( document.getElementById("GsflODR"+i).value=="1" ) {
				//document.getElementById("SFL1").innerHTML=document.getElementById("SFL"+i).innerHTML; 
				document.getElementById("SFL1").innerHTML=cars[i];
				//document.getElementById("sflODR1").value="1";
				//localStorage.setItem('sflODR1',cars[i]);
			}
			if ( document.getElementById("GsflODR"+i).value=="2" ) {
				//alert("'sflODR"+i+"' val = "+document.getElementById("sflODR"+i).value);
				//document.getElementById("SFL2").innerHTML=document.getElementById("SFL"+i).innerHTML; 
				document.getElementById("SFL2").innerHTML=cars[i];
				//localStorage.setItem('sflODR2',cars[i]);
				//document.getElementById("sflODR2").value=2;
			}
			if ( document.getElementById("GsflODR"+i).value=="3" ) {
				//document.getElementById("SFL3").innerHTML=document.getElementById("SFL"+i).innerHTML; 
				document.getElementById("SFL3").innerHTML=cars[i]; //localStorage.setItem('sflODR3',cars[i]);
				//document.getElementById("sflODR3").value="3";
			}
			if ( document.getElementById("GsflODR"+i).value=="4" ) {
				document.getElementById("SFL4").innerHTML=cars[i]; //localStorage.setItem('sflODR4',cars[i]);
			}
			if ( document.getElementById("GsflODR"+i).value=="5" ) {
				document.getElementById("SFL5").innerHTML=cars[i]; //localStorage.setItem('sflODR5',cars[i]);
			}
			if ( document.getElementById("GsflODR"+i).value=="6" ) {
				document.getElementById("SFL6").innerHTML=cars[i]; //localStorage.setItem('sflODR6',cars[i]);
			}
			if ( document.getElementById("GsflODR"+i).value=="7" ) {
				document.getElementById("SFL7").innerHTML=cars[i]; //localStorage.setItem('sflODR7',cars[i]);
			}
			if ( document.getElementById("GsflODR"+i).value=="8" ) {
				document.getElementById("SFL8").innerHTML=cars[i]; //localStorage.setItem('sflODR8',cars[i]);
			}			
			if ( document.getElementById("GsflODR"+i).value=="9" ) {
				document.getElementById("SFL9").innerHTML=cars[i]; //localStorage.setItem('sflODR9',cars[i]);
			}
			if ( document.getElementById("GsflODR"+i).value=="10" ) {
				document.getElementById("SFL10").innerHTML=cars[i]; //localStorage.setItem('sflODR10',cars[i]);
			}			
			if ( document.getElementById("GsflODR"+i).value=="11" ) {
				document.getElementById("SFL11").innerHTML=cars[i]; //localStorage.setItem('sflODR11',cars[i]);
			}	
			if ( document.getElementById("GsflODR"+i).value=="12" ) {
				document.getElementById("SFL12").innerHTML=cars[i]; //localStorage.setItem('sflODR12',cars[i]);
			}			
			if ( document.getElementById("GsflODR"+i).value=="13" ) {
				document.getElementById("SFL13").innerHTML=cars[i]; //localStorage.setItem('sflODR13',cars[i]);
			}			
			if ( document.getElementById("GsflODR"+i).value=="14" ) {
				document.getElementById("SFL14").innerHTML=cars[i]; //localStorage.setItem('sflODR14',cars[i]);
			}
			if ( document.getElementById("GsflODR"+i).value=="15" ) {
				document.getElementById("SFL15").innerHTML=cars[i]; //localStorage.setItem('sflODR15',cars[i]);
			}			
			if ( document.getElementById("GsflODR"+i).value=="16" ) {
				document.getElementById("SFL16").innerHTML=cars[i]; //localStorage.setItem('sflODR16',cars[i]);
			}			
			if ( document.getElementById("GsflODR"+i).value=="17" ) {
				document.getElementById("SFL17").innerHTML=cars[i]; //localStorage.setItem('sflODR17',cars[i]);
			}			
			if ( document.getElementById("GsflODR"+i).value=="18" ) {
				document.getElementById("SFL18").innerHTML=cars[i]; //localStorage.setItem('sflODR18',cars[i]);
			}	
			
		}
		
	}
	
	function GshowNOTE() {
		//alert("Trying to show 'note'!");
		if (document.getElementById("noteTAg").style.visibility=="visible") {
			document.getElementById("noteTAg").style.visibility="hidden"; 
			//onchange="localStorage.setItem('bkDATE',this.value);"	
				document.getElementById("noteG").style.visibility="hidden"; 
		}		
		else {
			document.getElementById("noteTAg").style.visibility="visible"; 
				document.getElementById("noteG").style.visibility="visible"; 
			storedNOTE = localStorage.getItem("NOTEchangeG");
				//alert("storedNOTE (fr lS) = "+storedNOTE);
			document.getElementById("noteTAg").value=storedNOTE;	
		}
		//hideMENU();		
	}
	function GhideNOTE() {
			document.getElementById("noteTAg").style.visibility="hidden"; 
			document.getElementById("noteG").style.visibility="hidden"; 		
	}
	
	function GsaveSFL() {
		if (confirm("Are you SURE you want to save this LIST to localStorage?") == true) {
		    reply = "YES!";
				for (let n = 1; n < 19; n++) {
					localStorage.removeItem('listG'+n);	//sflP'+n);		
				}
		//alert("Will save SFL to localStorage!");
		//localStorage.setItem('sflP'+i,document.getElementById("SFL"+i).innerHTML);
				for (let i = 1; i < 19; i++) {
					for (let q = 1; q < 19; q++) {
						if ( document.getElementById("GsflODR"+i).value == q) {
							localStorage.setItem('listG'+q,document.getElementById("SFL"+i).innerHTML);
						}
						
					}
				}
				alert("ls 'listG1' = "+localStorage.getItem("listG1")+"\nls 'listG3' = "+localStorage.getItem("listG3")+"\nls 'listG8' = "+localStorage.getItem("listG8"));
		} else {
		    reply = "NO!";
		}							
	}
	function displaySFLsavedG() {
		alert("Will display saved LIST!");
		for (let x = 1; x < 19; x++) {
			document.getElementById("SFL"+x).innerHTML = localStorage.getItem("listG"+x);
		}
		document.getElementById("SVDspan").style.visibility="visible";
	}
/*	
	function SFLcolorG(n) {
		//alert("In 'SFLcolor' fn!");
		//for (let x = 1; x < 19; x++) {
			if (document.getElementById("SFL"+n).style.background!="silver") {
				document.getElementById("SFL"+n).style.background="silver";
			}
			else {
				document.getElementById("SFL"+n).style.background="beige";
			}
		//}
	}
*/	
	function delNUMSg() {
		alert("Will try to delete NUMBERS!"); //sflODR18
		for (let n = 1; n < 19; n++) {
			document.getElementById("GsflODR"+n).value="";
		}		
		
	}
	
	function editSFLg() {
		//alert("Will try to edit saved sfl!");
		let SFLid = prompt("Please enter SFL id to be edited", "SFL15");	
				if (SFLid === null) {
			        return; //break out of the function early
			    }
		let SFLnew = prompt("Please enter new value for "+SFLid, 'Hodgins, George W.');
		//alert("SFLid = "+SFLid+"\nSFLnew = "+SFLnew);		
		var ordNUM = SFLid.slice(3); // < get chs after 1st 3
			//alert("ordNUM = "+ordNUM);		
	    let reply;
		if (confirm("Are you SURE you want to make this change to saved sfl?") == true) {
		    reply = "YES!";
			localStorage.setItem('sflP'+ordNUM,SFLnew);	
		} else {
		    reply = "NO!";
		}			
	}

							/*  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  */
	
	
	function itemNOTE(pl){	//plNOTE(pl){
		storedNOTE = localStorage.getItem("NOTEchangeG");
		//const text = "order-12345";
		//const result = text.split('-')[1]; 
		const afterPL = storedNOTE.split(pl+":")[1]; 
		//console.log(result); // Output: "12345"
		
		  if (storedNOTE.includes(pl)) {
		    	//console.log("Match found!");
				//alert(pl+": "+afterPL);	//storedNOTE);
			  const start = storedNOTE.indexOf(pl);	//+ 1;
			  //const end = storedNOTE.indexOf(start+10);
			  const end = storedNOTE.indexOf(";", start + 1);
			  const result = storedNOTE.slice(start, end);
			  alert(result);		//("result = "+result);			
		  } 
		  /*else {
		    alert("No note re "+pl+"!");
		  }*/	
		  	
	}
	
	function editITEM(){
		let itemNO = prompt("Enter item # to edit", 5);	
				if (itemNO === null) {
			        return; //break out of the function early
			    }
		let ITEMname = prompt("Enter new item NAME for # "+itemNO, document.getElementById("G"+itemNO).innerText);
		let ITEMdetail = prompt("Enter new item DETAILS for # "+itemNO, document.getElementById("G"+itemNO+"detail").innerText);
		
		alert("New # "+itemNO+" will = "+ITEMname+"; "+ITEMdetail);

		localStorage.setItem("G"+itemNO+"item",ITEMname);
		localStorage.setItem("G"+itemNO+"detail",ITEMdetail); // < Oct 27 **
			document.getElementById("G"+itemNO).style.fontSize = "19px"; // < ???
			document.getElementById("G"+itemNO).innerHTML = ITEMname;
			//document.getElementById("G"+itemNO).style.fontSize = "20px"; // < ???
			//alert("G"+itemNO+" font size = "+document.getElementById("G"+itemNO).style.fontSize);
			document.getElementById("G"+itemNO+"detail").style.fontSize = "19px"; // < ???
			document.getElementById("G"+itemNO+"detail").innerHTML = ITEMdetail;
		
	}