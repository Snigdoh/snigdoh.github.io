/* !snig.js (formally 'gsJSidx3.js' > !gs63.js) [6 = 6th month (June); 3 = '(2)3] */
	const PLAYwk0 = []; const PLAYwk1 = []; const PLAYwk2 = [];
	var PLAYwk0str; var PLAYwk1str; var PLAYwk2str;
//How to save a javascript variable:
  localStorage.setItem("mykey",99); // set a variable
  var varNumber = localStorage.getItem("mykey"); // retrieve variable
  let prevIPT = "TDp1h1";   
 
//SERVICE WORKER
	 /* DISABLED/ENABLED SERVICE WORKER CODE FOR TESTING NEW CODE IN THIS VERSION !!!!*/
  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/SnigStuffsw.js')
             .then(function() { console.log('Service Worker Registered'); });
			alert('Service Worker Registered!'); navigator.storage.estimate().then(function(estimate) {
  //document.getElementById("percent").value =
    //  (estimate.usage / estimate.quota * 100).toFixed(2);
  });//end storageManagerEstimate	
  
		 }//end if service worker
	//StorageManager.estimate()..https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate
	
	if(!navigator.serviceWorker) {
	console.log('You are not running in Safari!');
	//document.getElementById("percent").value = '(Not running in Safari so not able to return )';
}//end if not! service worker
	
	//what about the manifest file? triggered by oninstall? A2HS?	 
//If the service worker API is supported in the browser, it is registered against the site using the ServiceWorkerContainer.register() method. Its contents reside in the sw.js file, and can be executed after the registration is successful. It's the only piece of Service Worker code that sits inside the app.js file; everything else that is Service Worker-specific is written in the sw.js file itself.
//END OF DISABLED SERVICE WORKER !!!*/
	
	//SERVICE WORKER
/* +++++++++++++++++++++++ ADDED BY DOUG ^ ++++++++++++++++++++++++++++++++++++++ */	

	function clearFFx() {
		alert("To clear your data on Firefox for Android, go to Settings via the three dots icon. Here, scroll down to Delete browsing data. You'll then be given a list of items you can choose to delete including Open tabs, Browsing history, Cookies and site data, Cached images and files, Site permissions and, finally, Downloads.");
	}
	
	function openNav() {
		  if (document.getElementById("mySidenav").style.width<"200px") {
				document.getElementById("mySidenav").style.width = "600px";
				//document.getElementById("mySidenav").style.overflow = "scroll";
		  }
		  else {
			 	document.getElementById("mySidenav").style.width = "0px"; 
		  }
	}	
	function closeNav() {
		document.getElementById("mySidenav").style.width = "0px";
	}		
	
	function emails() {
		alert("dbpengelly@gmail.com, jas@uvic.ca, abbuck@shaw.ca, tp70connolly@gmail.com, therad@shaw.ca, charlesmed@shaw.ca, evan@evanhazell.com, geofffield@shaw.ca, cathyhodgins2@gmail.com, pmkuechler@gmail.com, jmccr99@gmail.com, gportermd@gmail.com, jwdutton@telus.net, gmharris@hotmail.com, shaynej@shaw.ca, nigelbailey@shaw.ca, dave.pianoman@gmail.com");
	}
	
						/*   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   */
	
	function PLAYwk(pl,pNO,wk) {
		/*
		var locStorWK0str = localStorage.getItem("lsWK0");
		var locStorWK1str = localStorage.getItem("lsWK1");
		var locStorWK2str = localStorage.getItem("lsWK2");
		let concatWKstr = locStorWK0str.concat(",",locStorWK1str,",",locStorWK2str);
		alert("In 'PLAYwk' fn!\n\n"+
			  "'locStorWK2str' fr locStor = "+locStorWK2str+"\n"+
			  "'locStorWK1str' fr locStor = "+locStorWK1str+"\n"+
			  "'locStorWK0str' fr locStor = "+locStorWK0str+"\n\n"+
			  "'concatWKstr' = "+concatWKstr);
		*/
		
		
		if ( document.getElementById("G"+pNO+"wk"+wk).style.background == "lime" ) {
			//alert(pl+" is NOT playing wk "+wk+"!");
			document.getElementById("G"+pNO+"wk"+wk).style.background = "slategray";	
			localStorage.setItem("G"+pNO+"playWK"+wk,"");
			
			if ( wk==1 ) {
				//alert("PLAYwk1 array includes "+pl+". Will REMOVE from array!");
				var index = PLAYwk1.indexOf(pl);		//alert("index of "+pl+" = "+index+"\nPLAY = "+PLAYwk1);
				PLAYwk1.splice(index, 1);				/* <<< HELP! (July 15/23 */		// < **!
				//alert("Post splice PLAYwk1 = "+PLAYwk1);
				PLAYwk1str = PLAYwk1.toString();
				localStorage.setItem("lsWK1",PLAYwk1str);
			}	
			if ( wk==0 ) { var index = PLAYwk0.indexOf(pl);	PLAYwk0.splice(index, 1); PLAYwk0str = PLAYwk0.toString(); localStorage.setItem("lsWK0",PLAYwk0str);}	
			if ( wk==2 ) { var index = PLAYwk2.indexOf(pl);	PLAYwk2.splice(index, 1); PLAYwk2str = PLAYwk2.toString(); localStorage.setItem("lsWK2",PLAYwk2str);}	
		}
		else { 
			//alert(pl+" is playing wk "+wk+"!");
			document.getElementById("G"+pNO+"wk"+wk).style.background = "lime"; 
			localStorage.setItem("G"+pNO+"playWK"+wk,pl);
			
			if ( wk == 1 ) {
				PLAYwk1.push(pl); 			//alert("PLAY array = "+PLAY);
				alert("'PLAYwk1' array = "+PLAYwk1);
				PLAYwk1str = PLAYwk1.toString();
				//lastARRAY = LASTstring.split(",");
				//localStorage.setItem("lsWK1",PLAYwk1str);
				
			}
			if ( wk == 0 ) { PLAYwk0.push(pl); alert("'PLAYwk0' array = "+PLAYwk0); PLAYwk0str = PLAYwk0.toString(); /*localStorage.setItem("lsWK0",PLAYwk0str);*/ }
			if ( wk == 2 ) { PLAYwk2.push(pl); alert("'PLAYwk2' array = "+PLAYwk2); PLAYwk2str = PLAYwk2.toString(); /*localStorage.setItem("lsWK2",PLAYwk2str);*/ }
		}		
		
		
	}
	
	function locStor() {
		/* alert("localStorage:\n\n"+
			  "lS 'G3wk0' = "+localStorage.getItem('G3playWK0')+
			  "\nlS 'G1wk3' = "+localStorage.getItem('G1playWK3')+
			  "\n\nG1wk1: "+localStorage.getItem('G1playWK1')+" | G2wk1: "+localStorage.getItem('G2playWK1')+" | G3wk1: "+localStorage.getItem('G3playWK1')+" | G4wk1: "+localStorage.getItem('G4playWK1')+" | G5wk1: "+localStorage.getItem('G5playWK1') ); */
			  		
/*		for (let i = 1; i < 6; i++) {	  
			if ( localStorage.getItem('G'+i+'playWK1') !== "" ) {
				document.getElementById("G"+i+"wk1").style.background = "green";
			}
		}
*/	
		for (let w = 0; w < 5; w++) {	  
			for (let i = 1; i < 17; i++) {	  
				if ( (localStorage.getItem('G'+i+'playWK'+w) != "") &&  (localStorage.getItem('G'+i+'playWK'+w) != null) ) {
					document.getElementById("G"+i+"wk"+w).style.background = "green";
				}
			}
		}

		document.getElementById("mySidenav").style.width = "0px";
		
	}
	
	function clearLS () {		
			//alert("G1playWK0 PRE clear = "+localStorage.getItem('G1playWK0'));
			
		  let reply;
		  if (confirm("Are you SURE you want to CLEAR 'localStorage'?") == true) {
		    reply = "YES!";
		  } else {
		    reply = "NO!";
		  }
  		  alert(reply);
			  
		  if ( reply=="YES!") {			  
				//localStorage.setItem("lastPLAY","");
				localStorage.clear();
				//alert("G1playWK0 post clear = "+localStorage.getItem('G1playWK0'));
				alert("'localStorage' has been CLEARED!");
		  }
	}
	
				/*   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   */
				
	function showNOTE() {
		//alert("Trying to show 'note'!");
		if (document.getElementById("noteTA").style.visibility=="visible") {
			document.getElementById("noteTA").style.visibility="hidden"; 
			//onchange="localStorage.setItem('bkDATE',this.value);"	
		}		
		else {
			document.getElementById("noteTA").style.visibility="visible"; 
			storedNOTE = localStorage.getItem("NOTEchange");
				//alert("storedNOTE (fr lS) = "+storedNOTE);
			document.getElementById("noteTA").value=storedNOTE;	
		}
		//hideMENU();		
	}

	function codeFILES() {
		alert("CODE FILES:\n\n"+
			  "SCORING 'APP':\t*\n"+
			  "'GSidx3' files (Sept/23): !sep23_index.html (= index.html); !sep23_!gs63.css; !sep23_!gs63.js; WaltStuff.webmanifest; WaltStuffsw.js [on iPad @ Files/2021/$CODE/!code23/Elmer23]\n\n"+
			  "BOOKING APP:\nDOCbk24+.html [on iPad @ Files/2021/$GOLF]\n\n"+			  
			  "PIXEL reload/refresh: Hold icon > App info > Storage & cache > Manage space > MANAGE (Site storage) > 'gwhodg.github.io' > Clear & reset"
			  
			  );
	}	
	
	function showSFL() {
		//alert("Trying to show 'tblSFL'!");
		if (document.getElementById("tblSFL").style.visibility=="visible") {
			document.getElementById("tblSFL").style.visibility="hidden"; 
			//onchange="localStorage.setItem('bkDATE',this.value);"	
		}		
		else {
			  let sflWK = prompt("Please enter week to shuffle", 1);
			  //lsWK2:
			  /*var locStorWK2str = localStorage.getItem("lsWK2");
			  		alert("'locStorWK2str' fr locStor = "+locStorWK2str);*/
			  if (sflWK != null) {
			    //document.getElementById("demo").innerHTML =
			    //"Hello " + person + "! How are you today?";	
		
					//LASTstring = localStorage.getItem("lastPLAY");
					//lastARRAY = LASTstring.split(",");
					//newLASTarray = lastARRAY.slice(1,lastARRAY.length);	
						//LASTstring = LASTstring  + "," + NAME;
						//localStorage.setItem("lastPLAY",LASTstring); //alert("GOT to 'localStorage.setItem'!");
						
				/* alert("sflWK = "+sflWK+"\n"+
					  "'PLAYwk1' array = "+PLAYwk1+"\n"+
					  "'PLAYwk1str' = "+PLAYwk1str); */
			  }
			document.getElementById("tblSFL").style.visibility="visible"; 
			//storedNOTE = localStorage.getItem("NOTEchange");
				//alert("storedNOTE (fr lS) = "+storedNOTE);
			//document.getElementById("tblSFL").value=storedNOTE;	
			
			const SFLwk0 = []; const SFLwk1 = []; const SFLwk2 = []; 
			for (let i = 1; i < 17; i++) {	  
					if ( (document.getElementById("G"+i+"wk"+sflWK).style.background=="green") || (document.getElementById("G"+i+"wk"+sflWK).style.background=="lime") ) {
						if (sflWK==0) {SFLwk0.push(document.getElementById("G"+i).innerHTML);} 
						if (sflWK==1) {SFLwk1.push(document.getElementById("G"+i).innerHTML);} 
						if (sflWK==2) {SFLwk2.push(document.getElementById("G"+i).innerHTML);} 
						//alert("G"+i+"wk2 bkgd is green/lime!");
						//alert("SFLwk2' array = "+SFLwk2);
					}
			}
			alert("'SFLwk0' array = "+SFLwk0+"\n"+
				  "'SFLwk1' array = "+SFLwk1+"\n"+
				  "'SFLwk2' array = "+SFLwk2);
			if ( sflWK == 0 ) { document.getElementById("WKipt").value = "W0"; }
			if ( sflWK == 1 ) { document.getElementById("WKipt").value = "W1"; }
			if ( sflWK == 2 ) { document.getElementById("WKipt").value = "W2"; }
				  
			/* if ( (SFLwk2[0] != "undefined") && (SFLwk2[0] != null) && (SFLwk2[0] != "") ) {
				document.getElementById("SFL5").innerHTML=SFLwk2[0]; 
			} */

			const PLAYfull = [];
					//alert("PLAY array pre-adjusted = "+PLAY);
			for (let n = 1; n < 6; n++) {
				if ((SFLwk0[n-1] == "AB")||(SFLwk1[n-1] == "AB")||(SFLwk2[n-1] == "AB")) { PLAYfull[n-1] = "Buckley, Alan" }
				if ((SFLwk0[n-1] == "TC")||(SFLwk1[n-1] == "TC")||(SFLwk2[n-1] == "TC")) { PLAYfull[n-1] = "Connolly, Thomas" }
				if ((SFLwk0[n-1] == "JD")||(SFLwk1[n-1] == "JD")||(SFLwk2[n-1] == "JD")) { PLAYfull[n-1] = "Dutton, (James)" }
				if ((SFLwk0[n-1] == "GF")||(SFLwk1[n-1] == "GF")||(SFLwk2[n-1] == "GF")) { PLAYfull[n-1] = "Field, Geoffrey" }
				if ((SFLwk0[n-1] == "WH")||(SFLwk1[n-1] == "WH")||(SFLwk2[n-1] == "WH")) { PLAYfull[n-1] = "Hodgins, George W." }
				if ((SFLwk0[n-1] == "SJ")||(SFLwk1[n-1] == "SJ")||(SFLwk2[n-1] == "SJ")) { PLAYfull[n-1] = "Jessop, Shayne A." }
				if ((SFLwk0[n-1] == "PK")||(SFLwk1[n-1] == "PK")||(SFLwk2[n-1] == "PK")) { PLAYfull[n-1] = "Kuechler, Peter M." }
				if ((SFLwk0[n-1] == "JM")||(SFLwk1[n-1] == "JM")||(SFLwk2[n-1] == "JM")) { PLAYfull[n-1] = "McCracken, John G." }
				if ((SFLwk0[n-1] == "CM")||(SFLwk1[n-1] == "CM")||(SFLwk2[n-1] == "CM")) { PLAYfull[n-1] = "Medhurst, Charles" }
				if ((SFLwk0[n-1] == "DP")||(SFLwk1[n-1] == "DP")||(SFLwk2[n-1] == "DP")) { PLAYfull[n-1] = "Pengelly, Delmer B." }
				if ((SFLwk0[n-1] == "Pd")||(SFLwk1[n-1] == "Pd")||(SFLwk2[n-1] == "Pd")) { PLAYfull[n-1] = "Paulson, David B." }
				if ((SFLwk0[n-1] == "BP")||(SFLwk1[n-1] == "BP")||(SFLwk2[n-1] == "BP")) { PLAYfull[n-1] = "Porter, George R." }
				if ((SFLwk0[n-1] == "WR")||(SFLwk1[n-1] == "WR")||(SFLwk2[n-1] == "WR")) { PLAYfull[n-1] = "Ritchie, William" }
				if ((SFLwk0[n-1] == "JS")||(SFLwk1[n-1] == "JS")||(SFLwk2[n-1] == "JS")) { PLAYfull[n-1] = "Schofield, John A." }
			}
			//alert("PLAY array POST-adjusted = "+PLAY);
					
			for (let z = 1; z < 6; z++) {
					document.getElementById("SFL"+z).innerHTML = "";
			}
			/*alert("Will try to SHUFFLE finished player order. Array to shuffle = "+array+"\n\n"+
				  array+" array content = "+PLAY);*/
			
			  //let shuffled = PLAY
			  let shuffled = PLAYfull
			    .map(value => ({ value, sort: Math.random() }))
			    .sort((a, b) => a.sort - b.sort)
			    .map(({ value }) => value)
			  
			//alert("'PLAY' array = "+PLAY+"\n\nNew 'shuffled' array = "+shuffled);	
			var sflLen = shuffled.length;
			for (let q = 0; q < sflLen; q++) {
					document.getElementById("SFL"+(q+1)).innerHTML = shuffled[q];
			}		
	//}

	/* =========================================== */			
	



			
		}

							/*  #################################  */
							
							
		
	}
	
	
	function SFL2() {
		alert("Will try to code shuffle from popup!");
	}