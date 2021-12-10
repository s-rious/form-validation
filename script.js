function validation() {
    var namefirst = document.registration.fName;
    var namelast = document.registration.lName;
    var $gender = document.registration.gender;
    var $pNumber = document.registration.pNumber;
    if (validatefName(namefirst)) {
        if (validatelName(namelast)) {
            if (validategender($gender)) {
                if (validatepNumber($pNumber)) {

                }
            }
        }
    }
    return false;
}
function validatefName(namefirst) { 
	var letters = /^[A-Za-z]+$/;
	if(namefirst.value.length==0)
	{
		alert('Please enter your first name');
		namefirst.focus();
		return false;
	}

	else if(namefirst.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('First name must have alphabet characters only');
		namefirst.focus();
		return false;
	}
}

function validatelName(namelast) { 
	var letters = /^[A-Za-z]+$/;
	if(namelast.value.length==0)
	{
		alert('Please enter your last name');
		namelast.focus();
		return false;
	}
	else if(namelast.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('Last name must have alphabet characters only');
		namelast.focus();
		return false;
		
	}
}
function validategender($gender) {
	if($gender.value == "")
	{
		alert('Please select a gender');
		$gender.focus();
		return false;
	}
	else
	{
		return true;
	}
}
function validatepNumber($pNumber)
{ 
	var numbers = /^[0-9]+$/;
	if($pNumber.value.length==0 )
	{
		alert('Please enter a phone number');
		$pNumber.focus();
		return false;
	}
	else if($pNumber.value.length>10)
	{
		alert('Please enter a valid phone number');
		$pNumber.focus();
		return false;

	}
	else if($pNumber.value.match(numbers))
	{
		window.location.reload();
		return true;
	}
	else
	{
		alert('Please check the phone number');
		return false;
	}
}