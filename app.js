var billAmt=document.querySelector('#Bill-Amt');
var cashGiven=document.querySelector('#Cash-given');
var checkBtn=document.querySelector('#btn-check');
var errorMessage=document.querySelector('#error-msg');
var noOfNote=document.querySelector('.no-of-notes')

const notes =[2000,500,200,100,50,20,10,5,1];
checkBtn.addEventListener('click',function validateCash(){
    hideMsg();
    if(billAmt.value>0)
    {
        if(cashGiven.value >= billAmt.value)
        {
            var calculateCash=cashGiven.value - billAmt.value;
            validateChange(calculateCash);
        }
        else
        {
            showError('wanna wash plates?🍽️');
        }
    }
    else{
    
        showError('Invalid Amount');
    }

});

function hideMsg()
{
    errorMessage.style.display='none';
}
function validateChange(calculateCash)
{
    
    for (let i = 0;i<notes.length;i++)
    {
        const calcNote=Math.trunc(
        calculateCash/notes[i]
        );
    calculateCash=calculateCash%notes[i];
    noOfNote[i].innerText=calcNote;
    }
}
function showError(errorMsg)
{
    errorMessage.style.display='block';
    errorMessage.innerText=errorMsg;
}