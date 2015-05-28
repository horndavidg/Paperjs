// Imitating a paint brush with rectangles. Shows brush weight with 
// with regards to rectangle size.

tool.minDistance = 10;

function onMouseDrag(event) {
	
var rect = new Path.Rectangle(event.point, (event.point + event.delta.length));	

rect.fillColor = 'black';

}


////////////////////////////////////////////////////////////////////////////////


