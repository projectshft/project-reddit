//add post


function GetDynamicTextBox1(value) {

    return '<input name = "DynamicTextBox1"  id="ingr_name" type="text" value = "' + value + '" required/>&nbsp'  +
    '<select name="selecval" onchange="selectres($(this))" id="selecval"><option value="">Select</option><option value="1">Yes</option><option value="2">No</option></select>'
    +'<input name = "DynamicTextBox2" style="display:none" id="res_name" type="text" value = "' + value + '" required/>&nbsp'+ '<input type="button" value="Remove" class="remove" />'

    }