/* !snig.js (formally 'gsJSidx3.js' > !gs63.js) [6 = 6th month (June); 3 = '(2)3] */
	const PLAYwk1 = [];
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
		if ( document.getElementById("G"+pNO+"wk"+wk).style.background == "lime" ) {
			//alert(pl+" is NOT playing wk "+wk+"!");
			document.getElementById("G"+pNO+"wk"+wk).style.background = "slategray";	
			localStorage.setItem("G"+pNO+"playWK"+wk,"");
			
			if ( wk==1 ) {
				//alert("PLAYwk1 array includes "+pl+". Will REMOVE from array!");
				var index = PLAYwk1.indexOf(pl);		//alert("index of "+pl+" = "+index+"\nPLAY = "+PLAYwk1);
				PLAYwk1.splice(index, 1);				/* <<< HELP! (July 15/23 */		// < **!
				//alert("Post splice PLAYwk1 = "+PLAYwk1);
			}	
		}
		else { 
			//alert(pl+" is playing wk "+wk+"!");
			document.getElementById("G"+pNO+"wk"+wk).style.background = "lime"; 
			localStorage.setItem("G"+pNO+"playWK"+wk,pl);
			
			if ( wk == 1 ) {
				PLAYwk1.push(pl); 			//alert("PLAY array = "+PLAY);
				//alert("'PLAYwk1'array = "+PLAYwk1);
			}
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