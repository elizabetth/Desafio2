
      function initMap(){  
         var udb= {lat: 13.715462, lng:-89.153863  };//son las coordenadas del marcador
         var udb2= {lat: 13.673972, lng:-89.236764 };
         var posicion={lat: 13.696117, lng:  -89.195062};//Estas coordenadas sirvio para poder centrar los otros dos marcadores
         var map = new google.maps.Map(document.getElementById('map'), { //Donde se llama al id del html donde se pondrs el mapa
          zoom: 12, //para modificar que tab cerva o lejos se vean los marcadores al cargar el mapa      
         center:posicion ,

        });
       
       var icono = 'img/mapa.png';  //imagen guardada en una variable que servira en los marcadores
       var marker = new google.maps.Marker({
       position: udb, //udb es la variable creada que contiene lqs coordenadas del marcador
       map: map,
      icon: icono,  //icono variable que viarda la imagen udb 
       });
        
        var marker2 = new google.maps.Marker({
        position: udb2,
        map: map,
        icon: icono,
        });

         var conten = '<div>'+'<p>Universidad don Bosco Soyapango</p>'+'</div>';
         var ventana = new google.maps.InfoWindow({ //sirve para crear la ventanita de informacion.
          content: conten
         });

         var conten2 = '<div>'+'<p>Universidad don Bosco campus de postgrados</p>'+'</div>';
         var ventana2 = new google.maps.InfoWindow({ //sirve para crear la ventanita de informacion.
          content: conten2,
         });


         marker.addListener('mouseover',function(){   //
         ventana.open(map,marker);
         });
         
         marker2.addListener('mouseover',function(){   //
         ventana2.open(map,marker2);
         });
         
      }