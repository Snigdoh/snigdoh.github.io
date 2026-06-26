		
		// Use standard or vendor-prefixed speech recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
			//const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList; //??
		const recognition = new SpeechRecognition(); 
		//const allowedCommands = ["three", "four", "five", "six"];  // < M21/26*
		
		
		
		
		
		var VRyn;
		var p1nn; var p2nn; var p3nn; var p4nn; var p5nn; // < player nicknames for SR!
		function fVRyn() {
			  let reply;
			  if (confirm("Do you want to use voice recognition?") == true) {
			    reply = "YES!";
			  } else {
			    reply = "NO!";
			  }
	  		  //alert(reply);			  
			  if ( reply=="YES!") {	
				//alert("You replied "+reply); 
				VRyn = "y";	
				alert("Can use speech recognition for P1-4!\n\nSay 'good/fine/fair/poor/bad/worse | great/eagle/albatross/ace'\n(good = par)");
				document.getElementById("VRbtn").style.background='green';
				document.getElementById("VRbtn").innerText='VR -';
				//document.getElementById("TDp3h4").style.borderLeft = "4px solid gold"; // < Mar/26 **
						//document.getElementById("TDp2h5").style.borderTop = "4px solid gold";
				//document.getElementById("TDp3h5").style.borderLeft = "4px solid gold";
						//document.getElementById("transcription-result").style.visibility = "visible";
				document.getElementById("MICsymbol").style.visibility = "visible";
				document.getElementById("transcription-result").value = "";
				document.getElementById("THhc").style.background = "yellow";
					document.getElementById("THhc").style.fontSize = "35px";
					document.getElementById("THhc").innerHTML = ">";
				document.getElementById("THsf").style.background = "yellow";
					document.getElementById("THsf").style.fontSize = "35px";
					document.getElementById("THsf").innerHTML = "<";	 
			  }
			  else { 
				  VRyn = 'n';
				  alert("Speech recognition is didabled. Enter scores manually.");
				  document.getElementById("VRbtn").style.background='gray';
				  document.getElementById("VRbtn").innerText='VR +';
				  //document.getElementById("TDp3h4").style.borderLeft = "0px solid black";
				  		//document.getElementById("TDp2h5").style.borderTop = "0px solid black";
				  //document.getElementById("TDp3h5").style.borderLeft = "0px solid black";
				  		//document.getElementById("transcription-result").style.visibility = "hidden";
				  document.getElementById("MICsymbol").style.visibility = "hidden";
				  document.getElementById("transcription-result").value = "H";
				  document.getElementById("THhc").style.background = "beige";
						document.getElementById("THhc").style.fontSize = "20px";
				  		document.getElementById("THhc").innerHTML = "hc";
				  document.getElementById("THsf").style.background = "beige";
						document.getElementById("THsf").style.fontSize = "20px";
				  		document.getElementById("THsf").innerHTML = "Sf";					  
			  }
			  //alert("You replied "+reply+"\n\t(VRyn = "+VRyn+")");
			  
			  /*
			  p1nn="Me"; p5nn="Dude";
			  if (document.getElementById("p2NAME").value=="BP") {p2nn="Bud"};
			  	if (document.getElementById("p3NAME").value=="BP") {p3nn="Bud"};
			  	if (document.getElementById("p4NAME").value=="BP") {p4nn="Bud"};
			  if (document.getElementById("p2NAME").value=="AB") {p2nn="Al"};
			  	if (document.getElementById("p3NAME").value=="AB") {p3nn="Al"};
			  	if (document.getElementById("p4NAME").value=="AB") {p4nn="Al"};
			  if (document.getElementById("p2NAME").value=="DP") {p2nn="Del"};
			  	if (document.getElementById("p3NAME").value=="DP") {p3nn="Del"};
			  	if (document.getElementById("p4NAME").value=="DP") {p4nn="Del"};
			  if (document.getElementById("p2NAME").value=="PK") {p2nn="Pete"};
			  	if (document.getElementById("p3NAME").value=="PK") {p3nn="Pete"};
			  	if (document.getElementById("p4NAME").value=="PK") {p4nn="Pete"};
			  if (document.getElementById("p2NAME").value=="CM") {p2nn="Chuck"};
			  	if (document.getElementById("p3NAME").value=="CM") {p3nn="Chuck"};
			  	if (document.getElementById("p4NAME").value=="CM") {p4nn="Chuck"};
			  if (document.getElementById("p2NAME").value=="TC") {p2nn="Tom"};
			  	if (document.getElementById("p3NAME").value=="TC") {p3nn="Tom"};
			  	if (document.getElementById("p4NAME").value=="TC") {p4nn="Tom"};
			  alert("PLAYER SR NAMES:\n\t"+p1nn+"; "+p2nn+"; "+p3nn+"; "+p4nn+"; "+p5nn);
			  */
		  }		
		
		function CLICKvr(inputID) {
		  //document.getElementById('lastFOCUS').value=inputID;
		  //var lastFOCUSvr = document.getElementById('lastFOCUS').value;
		  if (VRyn=="y") {  
			  //document.getElementById('lastFOCUS').value=inputID; // < Apr 11/26 **
			  		/* var lastFOCUSvr = document.getElementById('lastFOCUS').value; 
					   alert("In 'CLICKvr(inputID)' function!\nlastFOCUSvr = "+lastFOCUSvr+"\n"+
						   "inputID = "+inputID); */
			  for (var a = 1; a < 19; a++) {	//a=h; b=p
					for (var b = 1; b<3; b++) {	
						document.getElementById("TDp"+b+"h"+a).style.border = "0px solid black";   //clear red borders
					}
				}
			  
			  document.getElementById("TD"+inputID).style.border = "2px solid red";   // < Mar/26 **
			  document.getElementById("TD"+inputID).style.background = "gold";
			  //const allowedCommands = ["three", "four", "five", "six"];  // < M21/26*
			  //Prevent keyboard input using the disabled attribute
			  	//document.getElementById(inputID).disabled = true;
			  //Prevent keyboard input using the readonly attribute
			  	document.getElementById(inputID).readOnly = true; // < **
			  
			  let p = inputID.charAt(1); 
			  var h;
			  if ( inputID.length > 4 ) {
					h = inputID.substr(inputID.length-2);	
			  }
			  else { h = inputID.charAt(3) }
			 
					document.getElementById(inputID).addEventListener('focus', (event) => {
						event.target.blur();
					});
					
			  var CHGaudio = new Audio('mixkit-modern-technology-select-3124.wav'); // < **
			  
			  if (SpeechRecognition) {        
					//const allowedCommands = ["three", "four", "five", "six"];  // < M21/26*
				    //const recognition = new SpeechRecognition(); 
						recognition.start();
		            //const toggleButton = document.getElementById("toggle-recording");
		            const output = document.getElementById("transcription-result");
		            let isRecording = false;
		            // Configure settings
		            //recognition.continuous = true;	//false;	//true;    //false = stop after single 'utterance'
		            //recognition.interimResults = true;
		            recognition.lang = 'en-US';					
					//recognition.lang = 'en-US'; - Sets the language for better accuracy.
					recognition.continuous = false; //- (Optional) Stops recognition after a single utterance, useful for number input.
					recognition.interimResults = false; //- (Optional) //Ensures only final results are returned.
					
					/*
					const speechRecognitionList = new SpeechGrammarList();	// <+\/ ??		
					const commands = ['good', 'fine', 'fair', 'poor', 'bad', 'worse', 'great', 'eagle', 'albatross',, 'ace']; // Your specific words
					const grammar = '#JSGF V1.0; grammar commands; public <command> = ' + commands.join(' | ') + ' ;';			
					speechRecognitionList.addFromString(grammar, 1); // Add grammar with a high weight
					recognition.grammars = speechRecognitionList;
					*/
					//recognition.lang = 'en-US';
					// ... other properties (e.g., continuous, interimResults)		
					recognition.phrases = ['good', 'fine', 'fair', 'poor', 'bad', 'worse', 'great', 'eagle', 'albatross',, 'ace'];
			
					
							/*
							const constraints = {
							  audio: {
							    noiseSuppression: true, // Enable built-in noise suppression
							    echoCancellation: true  // Recommended for communication apps
							  },
							  video: false
							};
							
							navigator.mediaDevices.getUserMedia(constraints)
							  .then(stream => {
							    // Use the stream (e.g., in a video call or for speech recognition)
							    // The stream will have basic noise suppression applied automatically
							    const audioTrack = stream.getAudioTracks()[0];
							    console.log('Noise suppression enabled:', audioTrack.getSettings().noiseSuppression);
							  })
							  .catch(err => {
							    console.error('Error accessing microphone: ', err);
							});
							*/
					//Add Event Listener for result: This is where you process the recognized speech. The result will be in the form of a string (e.g., "one two three" or "123").
					recognition.onresult = function(event) {
					    var current = event.resultIndex;
					    var transcript = event.results[current][0].transcript;
					    //console.log('Recognized speech: ' + transcript);
							//alert("onresult transcript var = "+transcript);
								
					    //processNumber(transcript); // Call a custom function to handle the number
						processSR(transcript,h,p); //Handle results
						
						/*
						var lastFOCUSvr = document.getElementById('lastFOCUS').value; 
					    alert("In 'CLICKvr(inputID)' function > 'if (SpeechRecognition)'!\nlastFOCUSvr = "+lastFOCUSvr+"\ninputID = "+inputID);
						GOnext(); // < Apr 10/26 for auto advance to nxt box post speach input 
								  // - works in Safari ONLY       **  
						*/
					};	
			  }	
	    }	
	  } 
	  
	function processSR(S,H,P) { // < S=transcript=VRresult=par/bird; H=hole; P=player(1-4)
		var Hpar = document.getElementById("PARh"+H).value;
		/* alert("VR result = "+S+"; HOLE = "+H+"; Player = "+P+"\n"+
			  "Hole par = "+Hpar+"\n"+
			  "'p'+P+'h'+H = "+"p"+P+"h"+H +"!"); */
			  
		var CHGaudio = new Audio('mixkit-modern-technology-select-3124.wav'); // < **			  
			  
		if (S=='fine'||S=="Fine") { //bogey
			document.getElementById("p"+P+"h"+H).value=+Hpar+1; 
			localStorage.setItem('g'+P+'H'+H+'s',+Hpar+1); CHGaudio.play();	
		}
		if (S=='fair'||S=="Fair"||S=="fare") { //double bogey
			document.getElementById("p"+P+"h"+H).value=+Hpar+2; 
			localStorage.setItem('g'+P+'H'+H+'s',+Hpar+2); CHGaudio.play();	
			//localStorage.setItem('g'+P+'H'+H+'s',6); 
		}
		if (S=='poor'||S=="Poor") { //triple bogey
			document.getElementById("p"+P+"h"+H).value=+Hpar+3; 
			localStorage.setItem('g'+P+'H'+H+'s',+Hpar+3); CHGaudio.play();	
		}
		if (S=='bad'||S=="Bad"||S=="Bag") { //quad bogey (8 on par 4)
			document.getElementById("p"+P+"h"+H).value=+Hpar+4; 
			localStorage.setItem('g'+P+'H'+H+'s',+Hpar+4); CHGaudio.play();	
		}
		if (S=='worse'||S=="Worse"||S=="worst") { // pickup (?) **
			document.getElementById("p"+P+"h"+H).value="#"; 
			localStorage.setItem('g'+P+'H'+H+'s',"#"); CHGaudio.play();	
		}
		if (S=='good'||S=="Good") { //par (ANY hole)
			document.getElementById("p"+P+"h"+H).value=+Hpar; 
			localStorage.setItem('g'+P+'H'+H+'s',+Hpar); CHGaudio.play();	
		}		
		if (S=='eagle'||S=="Eagle") { //eagle
			document.getElementById("p"+P+"h"+H).value=+Hpar-2; 
			localStorage.setItem('g'+P+'H'+H+'s',+Hpar-2); CHGaudio.play();	
		}
		if (S=='albatross'||S=="Albatross") { //albatross = 3 under par
			document.getElementById("p"+P+"h"+H).value=+Hpar-3; 
			localStorage.setItem('g'+P+'H'+H+'s',+Hpar-3); CHGaudio.play();	
		}	
		if (S=='great'||S=="Great"||S=="Grate") { //birdie
			document.getElementById("p"+P+"h"+H).value=+Hpar-1; 
			localStorage.setItem('g'+P+'H'+H+'s',+Hpar-1); CHGaudio.play();	
		}
		if (S=='ace'||S=="Ace") { //hole-in-one 
			document.getElementById("p"+P+"h"+H).value=1;	//+Hpar-3; 
			localStorage.setItem('g'+P+'H'+H+'s',1); CHGaudio.play();	
		}	
	
						    /*
							//const fullString = "Hello World, welcome to GeeksforGeeks";
							const firstWord = S.split(' ')[0];
							if ((firstword=="Bud"||firstword=="bud"||firstword=="but") && p2nn=="Bud") { P=2 };
							alert("first word of 'transcript' (S) string = "+firstword+"\n"+
								  "P = "+P);
							//console.log(firstWord);
							// Output: "Hello"			
							*/
	
	
		
	}


	function codeHELP() {
		alert("CODING Help:\n\n"+
			"To start new round: MENU > CLEAR 'saved' scores\n\n"+ 
			"Pickup input = # (max score + 1 > red circle)\n"+  
			"Input edit: 'Input Edit' [remREADONLY()] OR 'Slider'\n"+
			"PART ROUND: post 'drop'/'add' = -/+\n\n"+
			"Code files ['2021/$CODE/!code23/ELMER23' folder] (Sep/25): index.html (?'!gs63.html'); !gs63.css; !!gs63.js; [pre Sep/25 > indexSep25*.html, !gs63Sep25*.css & !gs63Sep25*.js]\n"+
			"\tSnigStuff.webmanifest; SnigStuffsw.js; [pre Sep/25: WaltStuff.webmanifest; WaltStuffsw.js]\n"+
			"\tSNIGmatch.html; indexCOPYbook24.html; !snig.js; !snig.css\n\n"+
			  "PIXEL reload/refresh: Hold icon > App info > Storage & cache > Manage space > MANAGE (Site storage) > 'https://snigdoh.github.io' > Clear & reset.\nMust also clear Chrome cache to enable new app to play offline (so +> old vn).");	
		alert("Red circle scores functions: circleMAXs25(); countCIRCLES()\n\n"+
			  "BOOK: pwd = 'GWH42' ('bridge')\n"+
			  "Del P + HC > clear scores\n\n"+
			  "Edit Input > purple border + brown TD [BLURfn(SCRinput); EnterInput(); countCIRCLES() > circleMAXs25(); clearSAVED()] > remREADONLY()*\n\n"+
			  "ADD: w/ 3 gps > F9/B9 TOTs only\n"+
			  "'Pull-to-refresh' deactivated (CSS) √\n"+
			  "Edit Stablefords: 'SP Edit' (SPp1h5) > orange > totaled [editSP()]\n\n"+
			  "Flag hole: click hole # (red <> beige): cellTOslide(P,H); loadFN(); clearSAVED().\n\n"+
			  "Edit Holes (pars): editHOLES(); chgHpar(h); loadFN(); clearSAVED(). [needed to re-do SPs & Ts - in loadFN() & chgHpar(h)]\n\n"+
			  "SLIDER ('25): enterInput(); replace(); circleMAXs25(); clearSAVED().\n\n");
		alert("Edit Holes (HCs): editHOLES(); chgHhcp(h); loadFN(); clearSAVED(). [?? need to re-do SPs & Ts - in 		   loadFN() & chgHhcp(h); ?? need to include load player hcp color chg - inserted pHCcolors() X 2 in 		loadFN(); remCOLORS() used!]\n\n"+
			  "onkeyup='KeyUp()' > audio for ea input!\n\n");
		alert("SNIGDOH 37 'test' files (May/26): index,html (?'SnigTest26.html'); SnigTestsw.js; SnigStuff.webmanifest; !snigT.js; !snigT.css; indexCOPYbook24.html; ttBRIDGEcol2.html; SNIGmatch.html; VGClogo.jpeg; UPLANDSlogo.jpeg; COLWOODlogo.png; CBGClogo.jpeg; HISTORY2.html");  
	}

	function HELP() {
		alert(//"HELP:\n\n"+
			  "\u2022Load link (https://gwhodg.github.io/index.html) into browser search field. Enter.\n"+
			  "\u2022> MENU (Android phones) or UP-ARROW icon (iPhones) > 'Add to Home screen' (Installs & saves with home screen icon).\n"+
			  "\u2022NOTE: App takes 10 seconds to load on iPhones (BE PATIENT)!\n"+
			  "\u2022NOTE: MAY have to perform a 'clear' after a new app download to get stroke hole colors & totals to display on 'reload'. *\n\n"+
			  	"\u2022To clear all existing data tap “clear”.\n"+ // ‘OK’ X 4.  *
				"\u2022Can enter date (upper right input).\n"+
				"\u2022Enter 1-4 players initials (2 chs) + their course handicaps (upper left inputs).\n"+
				"\u2022ANDROID PHONES: Tap 'Reload!’ (or just reload app) > only active inputs enabled + stoke holes colour coded (white=0; lime=1; green=2).\n"+
					"iPHONES: Tap 'Strokes' & 'Inputs+/-'. \n"+
				"\u2022Enter scores as played. Stableford points + totals displayed upon leaving input box. Active box > red border (EXCEPT player1/hole1)!\n\n"+
				"\u2022. . .\n"+
				"\u2022[Tap StrokesX > remove player stoke holes]"); 
	}
	
	function addTIP() {
		var F9totADD = document.getElementById("ptsADDf9").value;   
		alert("ADD-IN:\nCan just enter F9/B9 totals if not comparing hole-by-hole (i.e. 3 groups)");/*+
			"\n\nF9 total to add in = '"+F9totADD+"'");*/
	}
	
	function USplus() {
		document.getElementById("up/dwn").value = +document.getElementById("up/dwn").value + 1;
	}
	function THEMplus() {
		document.getElementById("up/dwn").value = +document.getElementById("up/dwn").value - 1;
	}

	function bkgdCLR(crs,gp) {
		if ( (document.getElementById(crs+"gp1").style.background!="lime") && (document.getElementById(crs+"gp2").style.background!="lime") && (document.getElementById(crs+"gp3").style.background!="lime") ) {
				document.getElementById(crs+"gp"+gp).style.background="lime";
		}	
		else { document.getElementById(crs+"gp"+gp).style.background="silver"; }
	} 
	
	function getSUM() {
		document.getElementById('g+/-').value = +document.getElementById('f+/-').value + +document.getElementById('b+/-').value;
		//f+/-
	}	

	function resetSC() {
		document.getElementById("Fgp1").style.background="white";
		document.getElementById("Fgp2").style.background="white";
		document.getElementById("Fgp3").style.background="white";
		document.getElementById("Bgp1").style.background="white";
		document.getElementById("Bgp2").style.background="white";
		document.getElementById("Bgp3").style.background="white";
		document.getElementById("Ggp1").style.background="white";
		document.getElementById("Ggp2").style.background="white";
		document.getElementById("Ggp3").style.background="white";
	}		//Bgp3

	function editHOLES() {
		if (document.getElementById('HOLEbtn').innerHTML=="Edit Holes +") {
	    	  let reply;
			  if (confirm("Are you SURE you want to edit hole pars &/or handicaps?") == true) {
			    reply = "YES!";
			  } else {
			    reply = "NO!";
			  }
	  		  //alert(reply);
				  
			  if ( reply=="YES!") {
					alert("Can now edit hole pars & handicaps!");
					//localStorage.setItem('DROPstr', "Medhurst,Dutton,Hodgins");
					//id="PARh1" placeholder=5 value=5 readonly
					//id="HCPh1"
					for (let i = 1; i < 19; i++) {
						  //document.getElementById("PARh1").setAttribute('readonly', 'false'); 
						  document.getElementById('PARh'+i).readOnly = false;
						  document.getElementById('HCPh'+i).readOnly = false;
					}		
					document.getElementById('HOLEbtn').innerHTML = "Edit Holes -";
				}	
		}
		else {
			for (let i = 1; i < 19; i++) {
				  document.getElementById('PARh'+i).readOnly = true;
				  document.getElementById('HCPh'+i).readOnly = true;
			}	
			document.getElementById('HOLEbtn').innerHTML = "Edit Holes +";
			alert("Hole editing disabled!");	
		}	
	}
	function chgHpar(h) {
		var p = document.getElementById("PARh"+h).value;
		alert("Par of hole # " + h + " WAS changed!\n\tNew par = "+ p + ".");
		document.getElementById("TDparH"+h).style.background = "orange";
		localStorage.setItem("lsPARh"+h,p);
		var newPAR = localStorage.getItem("lsPARh"+h);
			alert("New p for h"+h+" (fr ls) = "+newPAR);		
		calcALL(); calcTOTALS(); // < ?? Nov/25 **
	}
	function chgHhcp(h) {
		var hc = document.getElementById("HCPh"+h).value;
		alert("HC of hole # " + h + " WAS changed!\n\tNew HC = "+ hc + ".");
		document.getElementById("TDhcpH"+h).style.background = "orange";
		localStorage.setItem("lsHCPh"+h,hc);
		var newHC = localStorage.getItem("lsHCPh"+h);
			alert("New HC for h"+h+" (fr ls) = "+newHC);
			
		pHCcolors(); 
		alert("Will now REPLACE stroke colors . . ."); pHCcolors(); // < ??	
			
		calcALL(); calcTOTALS(); // < ?? Nov/25 **
	}
	
	function note() {
		if (document.getElementById("ROUNDnote").style.visibility=="visible") {
			document.getElementById("ROUNDnote").style.visibility="hidden";
			//var noteTEXT = localStorage.setItem('roundNOTE',document.getElementById("ROUNDnote").value);
			localStorage.setItem('roundNOTE',document.getElementById("ROUNDnote").value);
			//localStorage.setItem('roundNOTE',document.getElementById("ROUNDnote").innerText);"	
		}		
		else {
			document.getElementById("ROUNDnote").style.visibility="visible";
			document.getElementById("ROUNDnote").innerHTML = localStorage.getItem("roundNOTE");
		}
		hideMENU();		
	}		

		function openNav() {
			  if (document.getElementById("mySidenav").style.width<"200px") {
					document.getElementById("mySidenav").style.width = "350px";	//400px";
					//document.getElementById("mySidenav").style.overflow = "scroll";
			  }
			  else {
				 	document.getElementById("mySidenav").style.width = "0px"; 
			  }
		}
		
		function closeNav() {
			document.getElementById("mySidenav").style.width = "0px";
		}		

									/* &&&&&&&&&&&&&&&&& */
									
	function showPARTIAL() {
		if (document.getElementById("PARTIALdiv").style.visibility=="visible") {
			document.getElementById("PARTIALdiv").style.visibility="hidden"; 
		}		
		else {
			document.getElementById("PARTIALdiv").style.visibility="visible";
		}
		
		hideMENU();		
	}	
	function showMONEY() {
		
		//loadFN(); // < ?? Jun 24/26 *
		/* $MONEY$ values: */
		/*document.getElementById('gpAp1NAME').value = localStorage.getItem('g1NAME');
			document.getElementById('gpAp2NAME').value = localStorage.getItem('g2NAME');
			document.getElementById('gpAp3NAME').value = localStorage.getItem('g3NAME');
			document.getElementById('gpAp4NAME').value = localStorage.getItem('g4NAME');*/
				document.getElementById('gAf').value = document.getElementById('sTf9gp').innerHTML;
					document.getElementById('gAb').value = document.getElementById('sTb9gp').innerHTML;
					document.getElementById('gAt').value = document.getElementById('sT18gp').innerHTML;
		/*document.getElementById('gpBp1NAME').value = localStorage.getItem('Bp1NAME');	
			document.getElementById('gpBp2NAME').value = localStorage.getItem('Bp2NAME');
			document.getElementById('gpBp3NAME').value = localStorage.getItem('Bp3NAME');
			document.getElementById('gpBp4NAME').value = localStorage.getItem('Bp4NAME');*/
				/*document.getElementById('gBf').value = localStorage.getItem('gBf');
					document.getElementById('gBb').value = localStorage.getItem('gBb');*/
					document.getElementById('gBt').value = +document.getElementById('gBf').value + +document.getElementById('gBb').value;		
		/*document.getElementById('gpCp1NAME').value = localStorage.getItem('Cp1NAME');	
			document.getElementById('gpCp2NAME').value = localStorage.getItem('Cp2NAME');
			document.getElementById('gpCp3NAME').value = localStorage.getItem('Cp3NAME');
			document.getElementById('gpCp4NAME').value = localStorage.getItem('Cp4NAME');*/
				/*document.getElementById('gCf').value = localStorage.getItem('gCf');
					document.getElementById('gCb').value = localStorage.getItem('gCb');*/
					document.getElementById('gCt').value = +document.getElementById('gCf').value + +document.getElementById('gCb').value;		
			
			
					
		
		if (document.getElementById("MONEYdiv").style.visibility=="visible") {
			document.getElementById("MONEYdiv").style.visibility="hidden"; 
		}		
		else {
			document.getElementById("MONEYdiv").style.visibility="visible";
			//alert ("'pDROPPED' in DROPBOX = '"+ document.getElementById('pDROPPED').value + "'!");
			if ( document.getElementById('pDROPPED').value != "" ) {
				//alert ('pDROPPED in DROPBOX is not empty!');
				//document.getElementById('gpAp5NAME').value = document.getElementById('pDROPPED').value;
				//document.getElementById('gpAp5NAME').style.setProperty("text-decoration", "line-through");
				for (var p = 1; p < 5; p++) {
					if ( document.getElementById('gpAp'+p+'NAME').value == document.getElementById('pDROPPED').value ) {
						  document.getElementById('gpAp'+p+'NAME').style.setProperty("text-decoration", "line-through");	
						  document.getElementById('gpAp5NAME').value = "-"+document.getElementById('pDROPPED').value;	
					}	
				}
				
				document.getElementById('gAf').value = document.getElementById('f9ptT').innerHTML;
				document.getElementById('gAb').value = document.getElementById('b9ptT').innerHTML;
				document.getElementById('gAt').value = document.getElementById('18ptT').innerHTML;
				
				document.getElementById('gBf').value = localStorage.getItem('gBf');
					document.getElementById('gBb').value = localStorage.getItem('gBb');
					document.getElementById('gBt').value = localStorage.getItem('gBt');
				document.getElementById('gCf').value = localStorage.getItem('gCf');
					document.getElementById('gCb').value = localStorage.getItem('gCb');
					document.getElementById('gCt').value = localStorage.getItem('gCt');
										
			}
			
			if ( document.getElementById('pADDED').value != "" ) {
				alert ('pADDED in ADD-IN BOX is not empty!');
				//document.getElementById('gpAp5NAME').value = document.getElementById('pDROPPED').value;
				//document.getElementById('gpAp5NAME').style.setProperty("text-decoration", "line-through");
				//for (var p = 1; p < 5; p++) {
					//if (document.getElementById('gpAp'+p+'NAME').value == document.getElementById('pADDED').value) {
						  document.getElementById('gpAp5NAME').value = "+"+document.getElementById('pADDED').value;	
						  //document.getElementById('gpAp5NAME').style.setProperty("text-decoration", "bold")
					//}	
				//}
				
				document.getElementById('gAf').value = +document.getElementById('gAf').value + +document.getElementById('ptsADDf9').value;
				document.getElementById('gAb').value = +document.getElementById('gAb').value + +document.getElementById('ptsADDb9').value;
				document.getElementById('gAt').value = +document.getElementById('gAt').value + +document.getElementById('ptsADD18').value;
				
			}						
			//ptsADDb9/pADDED
			
		}
		
		hideMENU();		
	}												
	function showCALCULATOR() {
		if (document.getElementById("Calculator").style.visibility=="visible") {
			document.getElementById("CalcFrame").src="";
			document.getElementById("Calculator").style.visibility="hidden"; 			
		}		
		else {
			document.getElementById("Calculator").style.visibility="visible";
			//loadOnlineCalc();
			document.getElementById("CalcFrame").src="https://www.theonlinecalculator.com";
		}
		
		hideMENU();		
	}											

	function PARTcalcMASTER() {
		if(document.getElementById('cN').checked==true) {
	  		alert ("'cN' radio button is checked (using native values).");	
			//selPL = p;
			document.getElementById("PARTIALdiv").style.left = "35%";
							//PARTIALdiv
			calcPARTIAL();
		}
		if(document.getElementById('c-').checked==true) {
			alert ("'c-' radio button is checked.\n\n"+
				"'H3ptT' td from DROP fn = '"+ document.getElementById("H3ptT").innerText+"'."); //H3ptT
			calcPARTdropped();
		}
		if(document.getElementById('c+').checked==true) {
			alert ("'c+' radio button is checked.\n\n"+
			"'newH3ptT' td from ADD fn = '"+ document.getElementById("newH3ptT").innerText+"'!"); //newH3ptT
																//TDs: ptsADDh3 | newH3ptT
			calcPARTadded();
	    }				
	}
	function calcPARTIAL() {
		for (let a = 1; a < 19; a++) {	  
				document.getElementById("H"+a+"tSF").innerText = "";
				document.getElementById("H"+a+"tSF").style.background = "ivory";
				document.getElementById("H"+a+"tSF").style.color = "slategray";
		}
		
							/*   ()()()()()()()()   */		
		
		var Ft = 0;  var p1Ft=0; var p2Ft=0; var p3Ft=0; var p4Ft=0;
					 var p1Bt=0; var p2Bt=0; var p3Bt=0; var p4Bt=0;
		for (let i = 1; i < 19; i++) {	  
			if(document.getElementById('chkF'+i).checked) {
				document.getElementById("H"+i+"tSF").innerText = document.getElementById("SPgpH"+i).innerText;
				Ft = +Ft + +document.getElementById("H"+i+"tSF").innerText;
				document.getElementById("H"+i+"tSF").style.background = "black";
				document.getElementById("H"+i+"tSF").style.color = "white";
				
				p1Ft = +p1Ft + +document.getElementById("SPp1h"+i).innerText; //**. //alert("p1Ft = "+p1Ft);
				p2Ft = +p2Ft + +document.getElementById("SPp2h"+i).innerText; //**
				p3Ft = +p3Ft + +document.getElementById("SPp3h"+i).innerText; //**
				p4Ft = +p4Ft + +document.getElementById("SPp4h"+i).innerText; //**
			}
		}
		//alert("Ft = '"+Ft+"'!");
		document.getElementById("myF9ptT").innerText = Ft;  //f9ptT 
		document.getElementById("myF9ptT").style.background = "black";
		document.getElementById("myF9ptT").style.color = "white";
		
							/*   ()()()()()()()()   */
							
		var Bt = 0;	
		for (let x = 1; x < 19; x++) {	  
			if(document.getElementById('chkB'+x).checked) {
				document.getElementById("H"+x+"tSF").innerText = document.getElementById("SPgpH"+x).innerText;
				Bt = +Bt + +document.getElementById("H"+x+"tSF").innerText;
				document.getElementById("H"+x+"tSF").style.background = "yellow";
				document.getElementById("H"+x+"tSF").style.color = "maroon";
				
				p1Bt = +p1Bt + +document.getElementById("SPp1h"+x).innerText; //**. //alert("p1Ft = "+p1Ft);
				p2Bt = +p2Bt + +document.getElementById("SPp2h"+x).innerText; //**
				p3Bt = +p3Bt + +document.getElementById("SPp3h"+x).innerText; //**
				p4Bt = +p4Bt + +document.getElementById("SPp4h"+x).innerText; //**
			}
		}
		//alert("Bt = '"+Bt+"'!");		
		document.getElementById("myB9ptT").innerText = Bt;  //f9ptT 
		document.getElementById("myB9ptT").style.background = "yellow";
		document.getElementById("myB9ptT").style.color = "maroon";
		
		document.getElementById("my18ptT").innerText = Ft+Bt;  //f9ptT 
		document.getElementById("my18ptT").style.background = "red";
		document.getElementById("my18ptT").style.color = "white";
		
				//INDIVIDUAL PLAYER POINTS (Mar/26):
					//alert("localStorage.getItem('guy1') = "+localStorage.getItem("guy1"));
				document.getElementById("PARTp1").innerHTML = localStorage.getItem("g1NAME");  //individual pts **
				document.getElementById("PARTp2").innerHTML = localStorage.getItem("g2NAME");
				document.getElementById("PARTp3").innerHTML = localStorage.getItem("g3NAME");
				document.getElementById("PARTp4").innerHTML = localStorage.getItem("g4NAME");
				
				document.getElementById("F9p1sf").innerHTML = p1Ft;
				document.getElementById("F9p2sf").innerHTML = p2Ft;
				document.getElementById("F9p3sf").innerHTML = p3Ft;
				document.getElementById("F9p4sf").innerHTML = p4Ft;

				document.getElementById("B9p1sf").innerHTML = p1Bt;
				document.getElementById("B9p2sf").innerHTML = p2Bt;
				document.getElementById("B9p3sf").innerHTML = p3Bt;
				document.getElementById("B9p4sf").innerHTML = p4Bt;
				
				document.getElementById("Tp1sf").innerHTML = p1Ft+p1Bt;
				document.getElementById("Tp2sf").innerHTML = p2Ft+p2Bt;
				document.getElementById("Tp3sf").innerHTML = p3Ft+p3Bt;
				document.getElementById("Tp4sf").innerHTML = p4Ft+p4Bt;
				
		
		
	}
	function calcPARTdropped() {
		for (let a = 1; a < 19; a++) {	  
				document.getElementById("H"+a+"tSF").innerText = "";
				document.getElementById("H"+a+"tSF").style.background = "ivory";
				document.getElementById("H"+a+"tSF").style.color = "slategray";
			}
							/*   ()()()()()()()()   */		
		
		var Ft = 0;
		for (let i = 1; i < 19; i++) {	 //H3ptT 
			if(document.getElementById('chkF'+i).checked) {
				document.getElementById("H"+i+"tSF").innerText = document.getElementById("H"+i+"ptT").innerText;
				Ft = +Ft + +document.getElementById("H"+i+"tSF").innerText;
				document.getElementById("H"+i+"tSF").style.background = "black";
				document.getElementById("H"+i+"tSF").style.color = "white";
			}
		}
		alert("Ft = '"+Ft+"'!");
		document.getElementById("myF9ptT").innerText = Ft;  //f9ptT 
		document.getElementById("myF9ptT").style.background = "black";
		document.getElementById("myF9ptT").style.color = "white";
		
							/*   ()()()()()()()()   */
							
		var Bt = 0;	
		for (let x = 1; x < 19; x++) {	  
			if(document.getElementById('chkB'+x).checked) {
				document.getElementById("H"+x+"tSF").innerText = document.getElementById("H"+x+"ptT").innerText;
				Bt = +Bt + +document.getElementById("H"+x+"tSF").innerText;
				document.getElementById("H"+x+"tSF").style.background = "yellow";
				document.getElementById("H"+x+"tSF").style.color = "maroon";
			}
		}
		alert("Bt = '"+Bt+"'!");		
		document.getElementById("myB9ptT").innerText = Bt;  //f9ptT 
		document.getElementById("myB9ptT").style.background = "yellow";
		document.getElementById("myB9ptT").style.color = "maroon";
		
		document.getElementById("my18ptT").innerText = Ft+Bt;  //f9ptT 
		document.getElementById("my18ptT").style.background = "red";
		document.getElementById("my18ptT").style.color = "white";			
	}		
	function calcPARTadded() {
		for (let a = 1; a < 19; a++) {	  
				document.getElementById("H"+a+"tSF").innerText = "";
				document.getElementById("H"+a+"tSF").style.background = "ivory";
				document.getElementById("H"+a+"tSF").style.color = "slategray";
			}
							/*   ()()()()()()()()   */		
		
		var Ft = 0;
		for (let i = 1; i < 19; i++) {	 //newH3ptT
			if(document.getElementById('chkF'+i).checked) {
				document.getElementById("H"+i+"tSF").innerText = document.getElementById("newH"+i+"ptT").innerText;
				Ft = +Ft + +document.getElementById("H"+i+"tSF").innerText;
				document.getElementById("H"+i+"tSF").style.background = "black";
				document.getElementById("H"+i+"tSF").style.color = "white";
			}
		}
		alert("Ft = '"+Ft+"'!");
		document.getElementById("myF9ptT").innerText = Ft;  //f9ptT 
		document.getElementById("myF9ptT").style.background = "black";
		document.getElementById("myF9ptT").style.color = "white";
		
							/*   ()()()()()()()()   */
							
		var Bt = 0;	
		for (let x = 1; x < 19; x++) {	  
			if(document.getElementById('chkB'+x).checked) {
				document.getElementById("H"+x+"tSF").innerText = document.getElementById("newH"+x+"ptT").innerText;
				Bt = +Bt + +document.getElementById("H"+x+"tSF").innerText;
				document.getElementById("H"+x+"tSF").style.background = "yellow";
				document.getElementById("H"+x+"tSF").style.color = "maroon";
			}
		}
		alert("Bt = '"+Bt+"'!");		
		document.getElementById("myB9ptT").innerText = Bt;  //f9ptT 
		document.getElementById("myB9ptT").style.background = "yellow";
		document.getElementById("myB9ptT").style.color = "maroon";
		
		document.getElementById("my18ptT").innerText = Ft+Bt;  //f9ptT 
		document.getElementById("my18ptT").style.background = "red";
		document.getElementById("my18ptT").style.color = "white";						
	}	

	function book() {
		pwd = prompt("'book', 'bridge' or 'swing'", "");
		if (pwd == "book") {
			//alert ("Password is valid. Will try to load href = 'indexCOPYbook24.html'.");
			window.location.href = "indexCOPYbook24.html";
		}
		else if (pwd == "bridge") {
			//alert ("Password is valid. Will try to load href = 'indexCOPYbook24.html'.");
			window.location.href = "ttBRIDGEcol2.html";
		}
		else if (pwd == "swing") {
			//alert ("Password is valid. Will try to load href = 'indexCOPYbook24.html'.");
			window.location.href = "SWINGcol.html";
		}
		else {
			alert ("No selection made.");
		}
	}	
	
	function VoiceRec(){
		window.location.href = "VoiceRec3.html";
	}

	
	function GOback() {
		if (VRyn=="y") {  
			var lastFOCUSgo = document.getElementById('lastFOCUS').value;
			//var LFindex = lastFOCUSgo.tabIndex;
				  let p = lastFOCUSgo.charAt(1); 
				  var h;
				  if ( lastFOCUSgo.length > 4 ) {
						h = lastFOCUSgo.substr(lastFOCUSgo.length-2);	
				  }
				  else { h = lastFOCUSgo.charAt(3) }
			/* alert("Will try to focus on LAST index!\n"+
				  "current focused input = "+lastFOCUSgo+"\n"+
				  "p = "+p+"; h = "+h); */
			var lastP=0; var lastH=0;	  
			if (p==1) {lastP=4; lastH=+h-1}		
			else {lastP=+p-1; lastH=+h};	//4th player. > nxt hole *
			//alert("lastP = "+lastP+"; lastH = "+lastH);			
			//document.getElementById("p"+p+"h"+h).disabled = false;			
			if (document.getElementById("p"+lastP+"h"+lastH).disabled) {			// **
			    if (document.getElementById("p3NAME").value!="") {lastP=+p+2; lastH=+h-1}
				else if (document.getElementById("p2NAME").value!="") {lastP=+p+1; lastH=+h-1}
				else {lastP=1; lastH=+lastH-1};
				//alert("The element is disabled.");
				//lastP=1; lastH=+lastH-1;
				//lastP=1; lastH=+lastH; // < ?? *
			} /*else {
			  	//alert("The element is enabled.");
			}*/			
			document.getElementById("p"+lastP+"h"+lastH).focus();	
			var newFocus = "p"+lastP+"h"+lastH;			
			CLICKvr(newFocus);			
		}		
	}	
	function GOnext() {
		if (VRyn=="y") {  
			var lastFOCUSgo = document.getElementById('lastFOCUS').value;
			//var LFindex = lastFOCUSgo.tabIndex;
				  let p = lastFOCUSgo.charAt(1); 
				  var h;
				  if ( lastFOCUSgo.length > 4 ) {
						h = lastFOCUSgo.substr(lastFOCUSgo.length-2);	
				  }
				  else { h = lastFOCUSgo.charAt(3) }
			/*alert("Will try to focus on NEXT index!\n"+
				  "last focused input = "+lastFOCUSgo+"\n"+
				  "p = "+p+"; h = "+h);*/
							//"GNlastFOCUS ="+lastFOCUSgo+"\nLFindex = "+LFindex);
			var nxtP=0; var nxtH=0;	  
			if (p<4) {nxtP=+p+1; nxtH=+h}		
			else {nxtP=1; nxtH=+h+1};	//4th player. > nxt hole *
			//alert("nxtP = "+nxtP+"; nxtH = "+nxtH);
			
			//document.getElementById("p"+p+"h"+h).disabled = false;			
			if (document.getElementById("p"+nxtP+"h"+nxtH).disabled) {
			    //alert("The element is disabled. Go to next hole.");
				nxtP=1; nxtH=+nxtH+1;
				//console.log("The element is disabled.");
			} else {
			  	//alert("The element is enabled.");
				//document.getElementById("p"+nxtP+"h"+nxtH).focus();
				//console.log("The element is enabled.");
			}
			
			document.getElementById("p"+nxtP+"h"+nxtH).focus();
			var newFocus = "p"+nxtP+"h"+nxtH;	//alert("GOnext  newFocus = "+ newFocus);		
			CLICKvr(newFocus);
			
		}		
	}

	function changeCOURSE() {
		let newCOURSE = prompt("Enter course:\n\t1. Cordova Bay\n\t2. Uplands\n\t3. Royal Colwood\n\t4. VGC\n\n\t5. Custom", "1");	//+
								     //"\n\t3. SSI\n\t4. Royal Collwood"+
									 //"\n\t5. Uplands\n\t6. Gorge Vail", "1");	
		if (newCOURSE=="1") { 
			alert("You chose Cordova Bay!");
				localStorage.setItem("lsCOURSE","CordovaBay");
			document.getElementById("CourseLogo").src="CBGClogo.jpeg";
			document.getElementById("CourseLogo").alt="CDVB";
			
			document.getElementById("PARh1").value=4; document.getElementById("HCPh1").value=5;
			document.getElementById("PARh2").value=5; document.getElementById("HCPh2").value=7;
			document.getElementById("PARh3").value=4; document.getElementById("HCPh3").value=17;
			document.getElementById("PARh4").value=3; document.getElementById("HCPh4").value=9;
			document.getElementById("PARh5").value=4; document.getElementById("HCPh5").value=1;
			document.getElementById("PARh6").value=3; document.getElementById("HCPh6").value=13;
			document.getElementById("PARh7").value=5; document.getElementById("HCPh7").value=11;
			document.getElementById("PARh8").value=4; document.getElementById("HCPh8").value=3;
			document.getElementById("PARh9").value=4; document.getElementById("HCPh9").value=15;
			
			document.getElementById("PARh10").value=4; document.getElementById("HCPh10").value=6;
			document.getElementById("PARh11").value=3; document.getElementById("HCPh11").value=10;
			document.getElementById("PARh12").value=4; document.getElementById("HCPh12").value=4;
			document.getElementById("PARh13").value=3; document.getElementById("HCPh13").value=18;
			document.getElementById("PARh14").value=5; document.getElementById("HCPh14").value=2;
			document.getElementById("PARh15").value=4; document.getElementById("HCPh15").value=14;
			document.getElementById("PARh16").value=4; document.getElementById("HCPh16").value=8;
			document.getElementById("PARh17").value=3; document.getElementById("HCPh17").value=12;
			document.getElementById("PARh18").value=5; document.getElementById("HCPh18").value=16;
			
			for (var h = 1; h < 19; h++) {
				localStorage.setItem("lsPARh"+h,document.getElementById("PARh"+h).value);
				localStorage.setItem("lsHCPh"+h,document.getElementById("HCPh"+h).value);
			}			
			pHCcolors(); 
			//alert("Will now REPLACE stroke colors . . ."); 
						pHCcolors(); // < ??	
			calcALL(); calcTOTALS(); // < ?? Nov/25 **
				
		}
		else if (newCOURSE=="2") { 
			alert("You chose Uplands!");
			localStorage.setItem("lsCOURSE","Uplands");
			document.getElementById("CourseLogo").src="UPLANDSlogo.jpeg";
			document.getElementById("CourseLogo").alt="UPLD";
			
			document.getElementById("PARh1").value=4; document.getElementById("HCPh1").value=3;
			document.getElementById("PARh2").value=4; document.getElementById("HCPh2").value=5;
			document.getElementById("PARh3").value=4; document.getElementById("HCPh3").value=11;
			document.getElementById("PARh4").value=3; document.getElementById("HCPh4").value=15;
			document.getElementById("PARh5").value=4; document.getElementById("HCPh5").value=9;
			document.getElementById("PARh6").value=4; document.getElementById("HCPh6").value=1;
			document.getElementById("PARh7").value=5; document.getElementById("HCPh7").value=7;
			document.getElementById("PARh8").value=4; document.getElementById("HCPh8").value=17;
			document.getElementById("PARh9").value=3; document.getElementById("HCPh9").value=13;
			
			document.getElementById("PARh10").value=4; document.getElementById("HCPh10").value=10;
			document.getElementById("PARh11").value=3; document.getElementById("HCPh11").value=18;
			document.getElementById("PARh12").value=4; document.getElementById("HCPh12").value=4;
			document.getElementById("PARh13").value=4; document.getElementById("HCPh13").value=16;
			document.getElementById("PARh14").value=4; document.getElementById("HCPh14").value=2;
			document.getElementById("PARh15").value=5; document.getElementById("HCPh15").value=8;
			document.getElementById("PARh16").value=4; document.getElementById("HCPh16").value=12;
			document.getElementById("PARh17").value=3; document.getElementById("HCPh17").value=14;
			document.getElementById("PARh18").value=4; document.getElementById("HCPh18").value=6;
			
			for (var h = 1; h < 19; h++) {
				localStorage.setItem("lsPARh"+h,document.getElementById("PARh"+h).value);
				localStorage.setItem("lsHCPh"+h,document.getElementById("HCPh"+h).value);
			}			
			pHCcolors(); 
			//alert("Will now REPLACE stroke colors . . ."); 
						pHCcolors(); // < ??	
			calcALL(); calcTOTALS(); // < ?? Nov/25 **
			
		}
		else if (newCOURSE=="3") { 
			alert("You chose Royal Colwood!");
			localStorage.setItem("lsCOURSE","Colwood");
			document.getElementById("CourseLogo").src="COLWOODlogo.png";
			document.getElementById("CourseLogo").alt="CLWD";
			
			document.getElementById("PARh1").value=4; document.getElementById("HCPh1").value=7;
			document.getElementById("PARh2").value=4; document.getElementById("HCPh2").value=9;
			document.getElementById("PARh3").value=4; document.getElementById("HCPh3").value=1;
			document.getElementById("PARh4").value=3; document.getElementById("HCPh4").value=13;
			document.getElementById("PARh5").value=5; document.getElementById("HCPh5").value=11;
			document.getElementById("PARh6").value=4; document.getElementById("HCPh6").value=3;
			document.getElementById("PARh7").value=3; document.getElementById("HCPh7").value=17;
			document.getElementById("PARh8").value=4; document.getElementById("HCPh8").value=15;
			document.getElementById("PARh9").value=4; document.getElementById("HCPh9").value=5;
			
			document.getElementById("PARh10").value=4; document.getElementById("HCPh10").value=6;
			document.getElementById("PARh11").value=3; document.getElementById("HCPh11").value=12;
			document.getElementById("PARh12").value=4; document.getElementById("HCPh12").value=2;
			document.getElementById("PARh13").value=4; document.getElementById("HCPh13").value=8;
			document.getElementById("PARh14").value=5; document.getElementById("HCPh14").value=16;
			document.getElementById("PARh15").value=3; document.getElementById("HCPh15").value=18;
			document.getElementById("PARh16").value=4; document.getElementById("HCPh16").value=10;
			document.getElementById("PARh17").value=4; document.getElementById("HCPh17").value=14;
			document.getElementById("PARh18").value=4; document.getElementById("HCPh18").value=4;
			
			for (var h = 1; h < 19; h++) {
				localStorage.setItem("lsPARh"+h,document.getElementById("PARh"+h).value);
				localStorage.setItem("lsHCPh"+h,document.getElementById("HCPh"+h).value);
			}			
			pHCcolors(); 
			//alert("Will now REPLACE stroke colors . . ."); 
						pHCcolors(); // < ??	
			calcALL(); calcTOTALS(); // < ?? Nov/25 **
			
		}
		else if (newCOURSE=="4") { 
			alert("You chose VGC!");
			localStorage.setItem("lsCOURSE","VGC");
			document.getElementById("CourseLogo").src="VGClogo.jpeg";
			document.getElementById("CourseLogo").alt="VGC";
			
			document.getElementById("PARh1").value=5; document.getElementById("HCPh1").value=14;
			document.getElementById("PARh2").value=3; document.getElementById("HCPh2").value=16;
			document.getElementById("PARh3").value=4; document.getElementById("HCPh3").value=2;
			document.getElementById("PARh4").value=4; document.getElementById("HCPh4").value=6;
			document.getElementById("PARh5").value=4; document.getElementById("HCPh5").value=8;
			document.getElementById("PARh6").value=4; document.getElementById("HCPh6").value=12;
			document.getElementById("PARh7").value=4; document.getElementById("HCPh7").value=4;
			document.getElementById("PARh8").value=3; document.getElementById("HCPh8").value=18;
			document.getElementById("PARh9").value=3; document.getElementById("HCPh9").value=10;
			
			document.getElementById("PARh10").value=4; document.getElementById("HCPh10").value=5;
			document.getElementById("PARh11").value=4; document.getElementById("HCPh11").value=1;
			document.getElementById("PARh12").value=5; document.getElementById("HCPh12").value=11;
			document.getElementById("PARh13").value=3; document.getElementById("HCPh13").value=15;
			document.getElementById("PARh14").value=3; document.getElementById("HCPh14").value=9;
			document.getElementById("PARh15").value=4; document.getElementById("HCPh15").value=3;
			document.getElementById("PARh16").value=4; document.getElementById("HCPh16").value=13;
			document.getElementById("PARh17").value=5; document.getElementById("HCPh17").value=17;
			document.getElementById("PARh18").value=4; document.getElementById("HCPh18").value=7;
			
			for (var h = 1; h < 19; h++) {
				localStorage.setItem("lsPARh"+h,document.getElementById("PARh"+h).value);
				localStorage.setItem("lsHCPh"+h,document.getElementById("HCPh"+h).value);
			}			
			pHCcolors(); 
			//alert("Will now REPLACE stroke colors . . ."); 
						pHCcolors(); // < ??	
			calcALL(); calcTOTALS(); // < ?? Nov/25 **
			
		}
		else if (newCOURSE=="5") { 
			//alert("You chose to create a CUSTOM course!");
				//localStorage.setItem("lsCOURSE","CST");
				//document.getElementById("CourseLogo").src="VGClogo.jpeg";
				//document.getElementById("CourseLogo").alt="CST";
			if (document.getElementById("CUSTcourse").style.visibility=="visible") {
				document.getElementById("CUSTcourse").style.visibility="hidden"; 
			}		
			else {
				document.getElementById("CUSTcourse").style.visibility="visible";
				document.getElementById("cstNAME").value = localStorage.getItem('CCname');
				for (H=1; H<19; H++) {
					document.getElementById("cstPARh"+H).value = localStorage.getItem('CCh'+H+'PAR');
					document.getElementById("cstHCh"+H).value = localStorage.getItem('CCh'+H+'HC');
				}
				//document.getElementById("useCUSTOM").disabled = true;
			}
		
		}
		else { alert("No course chosen!"); }
	}
	
	/*function loadOnlineCalc() {
		document.getElementById("CalcFrame").src="https://www.theonlinecalculator.com";
	}*/
	function loadCALCapp() {
		window.location = "Calculator://open";
		//https://apps.apple.com/app/id486645049
	}	
	
	function SKINScalc(){
		//alert("Will try to calculate SKINS values!");
		var pot = document.getElementById('NOp').value * 2;
			document.getElementById('pot').value = pot;
		var SKNval = document.getElementById('pot').value / document.getElementById('NOsk').value;
			SKNval = Math.round(SKNval * 100) / 100;
			document.getElementById('Sval').value = SKNval;
		var roundedSKINvalue = Math.round(SKNval * 2) / 2;	
			document.getElementById('rdSval').value = roundedSKINvalue;
		var diff = SKNval - roundedSKINvalue;
			document.getElementById('diff').value = diff;
		var winnerBALANCE = diff * document.getElementById('NOsk').value;
			document.getElementById('balance').value = winnerBALANCE;
		
		
	}
	
	function showTEES() {
		if (document.getElementById("TEESdiv").style.visibility=="visible") {
			document.getElementById("TEESdiv").style.visibility="hidden"; 
		}		
		else {
			document.getElementById("TEESdiv").style.visibility="visible";	
			document.getElementById('Tp1name').value = localStorage.getItem('g1NAME');
			document.getElementById('Tp2name').value = localStorage.getItem('g2NAME');
			document.getElementById('Tp3name').value = localStorage.getItem('g3NAME');
			document.getElementById('Tp4name').value = localStorage.getItem('g4NAME');
			
		}
		
	}
	function TEESselect(){
		alert("Will try to SELECT tees!");
		for (var a = 1; a < 5; a++) {
			if ( document.getElementById('Tp'+a+'tee').value == "B" ) { 
				document.getElementById('p'+a+'HCtee').style.background = "blue";
				localStorage.setItem('Tp'+a+'teeLS',"blue");
			}
			if ( document.getElementById('Tp'+a+'tee').value == "W" ) { 
				document.getElementById('p'+a+'HCtee').style.background = "white";
				localStorage.setItem('Tp'+a+'teeLS',"white");
			}	
			if ( document.getElementById('Tp'+a+'tee').value == "R" ) { 
				document.getElementById('p'+a+'HCtee').style.background = "red";
				localStorage.setItem('Tp'+a+'teeLS',"red");
			}			
			if ( document.getElementById('Tp'+a+'tee').value == "G" ) { 
				document.getElementById('p'+a+'HCtee').style.background = "green";
				localStorage.setItem('Tp'+a+'teeLS',"green");
			}
		}
		
	}		
	
	function showMISC() {
		let pwd = prompt("Please enter password", "r");	 
		if (pwd === null) {
			return; //break out of the function early
		}
		if (pwd == 'r') {	//if (pwd == 'roentgen') {
				if (document.getElementById("MISCdiv").style.visibility=="visible") {
					document.getElementById("MISCdiv").style.visibility="hidden"; 
				}		
				else {
					document.getElementById("MISCdiv").style.visibility="visible";	
				}
		}
	}	
	function closeMISC() {
		document.getElementById("MISCdiv").style.visibility="hidden"; 
	}	