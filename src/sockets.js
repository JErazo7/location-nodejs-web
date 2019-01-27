module.exports = io => {
  conections=[]


    io.on('connection', socket => {
      
      socket.on('disconnect', () => {
        console.log('Got disconnect!');
        socket.emit('UserDesco')
     });

     socket.on('addMarker', (newMarker) => {
      socket.broadcast.emit('addMarkers',newMarker)
      socket.emit('addMarkers',newMarker)
     })

    
      socket.on('init',(cords) => {
        socket.emit('InitUnsers',conections)
        conections.push(cords);
      })
      
      console.log('new socket connected');
      socket.on('userCoordinates', (coords) => {
        socket.broadcast.emit('newUserCoordinates', coords);
        
      });
      
    });
  };