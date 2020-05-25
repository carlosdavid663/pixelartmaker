// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

var height;
var width;
var color;

$('#sizePicker').submit(function(event)
{
    // takes the value from the HTML and saves it into the variables

    event.preventDefault();
    height=$('#inputHeight').val();
    width=$('#inputWidth').val();
    makeGrid(height, width);

})

function makeGrid(height,width) {

    // Your code goes here!
    
    // Removes any previous grids in case user wants to update their grid
    
    $('tr').remove();

    // Creates rows
    for (var rows=1; rows<=height; rows++)
    
    {
        $('#pixelCanvas').append('<tr id=table' + rows + '></tr>' );
        // Creates columns
        for (var columns=1; columns<= width; columns ++)
        {
            $('#table'+ rows).append('<td></td>');
        }
    }
    
    //Gets the color from the colorPicker

    $('td').click(function addColor()
    {
        color = $("#colorPicker").val();

        if ($(this).attr('style'))
        {
            $(this).removeAttr('style')
        } 
        else
        {
            $(this).attr('style',"background-color:" + color );
        }
    })
}
