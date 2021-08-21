var billAmt=document.querySelector('#Bill-Amt');
var cashGiven=document.querySelector('#Cash-given');
var checkBtn=document.querySelector('#btn-check');
var errorMessage=document.querySelector('#error-msg');

console.log(billAmt.value);
checkBtn.addEventListener('click',function validateCash(){
 
    if(billAmt.value>0)
    {
        if(cashGiven.value>=billAmt.value)
        {
            
            var calculateCash=cashGiven.value - billAmt.value;
            validateChange(calculateCash);
        }
        else
        {
            showError('wanna wash plates?')
        }
    }
    else{
    
        showError('Invalid Amount')
    }

})

function hideMsg()
{
    errorMessage.style.display='None';
}
function validateChange()
{

}
function showError(errorMsg)
{
    errorMessage.style.display='Block';
    errorMessage.innerText=errorMsg;
}