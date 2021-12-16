    
	 var map;
	
	function GetMap()
    {
		var storeLocation = new Microsoft.Maps.Location(52.66013, -7.24128)
		map = new Microsoft.Maps.Map('#myMap',{
		credentials: 'AmCSoNg1y--HLPcdTPWqMag5Uf7VrWtVje1C4jLlWdW9g2XcnudcB48cum9NK2R-',
		center: storeLocation,
		mapTypeId: Microsoft.Maps.MapTypeId.road,
		zoom: 14,
		disableScrollWheelZoom: true,
		disablePanning: true
    });
	
        //Create an infobox at the center of the map but don't show it.
       var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false
        });

        //Assign the infobox to a map instance.
        infobox.setMap(map);	

   var pin = new Microsoft.Maps.Pushpin(storeLocation, {
     title: 'Shoping Center',
     subTitle: 'Kilkenny',
     
    });
        //Store some metadata with the pushpin.
     pin.metadata = {
       title: 'Shoping Center',
        description: 'Kilkenny'
     };	
	 
        //Add the pushpin to the map
        map.entities.push(pin);
        //Add your post map load code here.
		
		//Add a click event handler to the pushpin.
        Microsoft.Maps.Events.addHandler(pin, 'click',function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    });
    }