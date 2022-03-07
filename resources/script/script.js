let inputsubstrateman;
let totalVol;
let totalVolmL;
let inpSubNum;
let inpSubVol;

let inputinialginateconc;
let inputfinalginateconc;
let inputalgsodcont;
let inputalgibiccont;
let inputinirgdconc;
let inputinirgdcont;
let inputfinrgdcont;
let inputrgdsodcont;
let inputrgdbiccont;


let inputinifibconc;
let inputfinfibconc;
let inputfibsodcont;
let inputfibbiccont;
let inputinicolconc;
let inputfincolconc;
let inputcolacidconc;
let inputconcbicar;
let inputfinbicarb;


let outputrgdneeded;
let outputrgdneededmg;
let outputrgdneededperc;
let outputalgiconc;
let outputalgiused;
let ouputfibriused;
let outputcolused;
let outputfinbicarbneeded;
let ouputcolacid;
let ouputmatrixbicarb;
let outputbicarbneeded;
let outputsodiumadded;
let outputsodiumneeded;
let outputsodiumtoadd;


let costofalginatemg = $("#costofalginatemg").val();
let costofrgdalginatemg = $("#costofrgdalginatemg").val();
let costoffibrinogenmg = $("#costoffibrinogenmg").val();
let costofcollagenmg = $("#costofcollagenmg").val();
let costofalginate;
let costofrgdalginate;
let costoffribrinogen;
let costofcollagen;



let calcstandalg;
let calcrgdalg;
let calccollagen;
let calcfibrinogen;
let calcwater;
let calcbicarb;
let calcnacl;


let actustandalg;
let acturgdalg;
let actcollagen;
let actfibrinogen;
let actwater;
let actbicarb;
let actnacl;
let totalcalvol;


let secactustdalg;
let secacturgdalg;
let secactucollagen;
let secactufibrinogen;
let secactwater;
let secactbicarb;
let secactnacl;
let totalrgdvol;


function alginateError() {
    if (inputfinalginateconc === '') {
       $('.alginateError').show();
       $('.inpfinalg').addClass('errorActive');
       $("#inputinialginateconc").get(0).scrollIntoView();
}
else if (inputfinalginateconc <= 0) {
   $('.alginateError').html('You need to enter a number greater than zero.');
   $('.alginateError').show();
   $('.inpfinalg').addClass('errorActive');
   $("#inputinialginateconc").get(0).scrollIntoView();
}
else if (inputfinalginateconc > inputinialginateconc) {
    $('.alginateError').html('Final Alginate concentration cannot be greater than initial.');
    $('.alginateError').show();
    $('.inpfinalg').addClass('errorActive');
    $("#inputinialginateconc").get(0).scrollIntoView();


}
else {
   $('.inpfinalg').removeClass('errorActive');
   $('.alginateError').hide(); 
   return true
}
 }

 function rgdError() {
    if (inputfinrgdcont === '') {
       $('.rgdError').show();
       $('.inpfinrgd').addClass('errorActive');
       $("#inputinirgdcont").get(0).scrollIntoView();
}
    else if (inputfinrgdcont <= 0) {
    $('.rgdError').html('You need to enter a number greater than zero.');
     $('.rgdError').show();
     $('.inpfinalg').addClass('errorActive');
     $("#inputinirgdcont").get(0).scrollIntoView();
}
else {
   $('.inpfinrgd').removeClass('errorActive');
   $('.rgdError').hide(); 
   return true
}
 }

 function iniFibError() {
    if (inputinifibconc === '') {
       $('.iniFibError').show();
       $('.inpinifib').addClass('errorActive');
       $("#inputrgdbiccont").get(0).scrollIntoView();
}
else if (inputinifibconc <= 0) {
   $('.iniFibError').html('You need to enter a number greater than zero.');
   $('.iniFibError').show();
   $('.inpinifib').addClass('errorActive');
   $("#inputrgdbiccont").get(0).scrollIntoView();
}
else {
   $('.inpinifib').removeClass('errorActive');
   $('.iniFibError').hide(); 
   return true
}
 }

 function finFibError() {

 if (inputfinfibconc > inputinifibconc) {
    $('.finFibError').html('Final Fibrinogen concentration cannot be greater than initial.');
    $('.finFibError').show();
    $('.inpfinfib').addClass('errorActive');
    $("#inputinifibconc").get(0).scrollIntoView();
}
if (inputfinfibconc === '') {
    $('.finFibError').show();
    $('.inpfinfib').addClass('errorActive');
    $("#inputinifibconc").get(0).scrollIntoView();
}
else if (inputfinfibconc <= 0) {
   $('.finFibError').html('You need to enter a number greater than zero.');
   $('.finFibError').show();
   $('.inpfinfib').addClass('errorActive');
   $("#inputinifibconc").get(0).scrollIntoView();
}

else {
   $('.inpfinfib').removeClass('errorActive');
   $('.finFibError').hide(); 
   return true
}
 }


 function collagenError() {
    if (inputfincolconc === '') {
       $('.collagenError').show();
       $('.inpfincol').addClass('errorActive');
       $("#inputinicolconc").get(0).scrollIntoView();
}
else if (inputfincolconc <= 0) {
   $('.collagenError').html('You need to enter a number greater than zero.');
   $('.collagenError').show();
   $('.inpfincol').addClass('errorActive');
   $("#inputinicolconc").get(0).scrollIntoView();
}
else if (inputfincolconc > inputinicolconc) {
    $('.collagenError').html('Final collagen concentration cannot be greater than initial.');
    $('.collagenError').show();
    $('.inpfincol').addClass('errorActive');
    $("#inputinicolconc").get(0).scrollIntoView();
}
else {
   $('.inpfincol').removeClass('errorActive');
   $('.collagenError').hide(); 
   return true
}
 }






$(document).ready(function() {



    $("button").click(function(event){
        inpSubNum = $("#inputsubstratenum").val();
        inpSubVol = $("#inputsubstratevol").val();
        inputsubstrateman = $("#inputsubstrateman").val();
        inputinialginateconc = $("#inputinialginateconc").val();
        inputfinalginateconc = $("#inputfinalginateconc").val();
        inputalgsodcont = $("#inputalgsodcont").val();
        inputalgibiccont = $("#inputalgibiccont").val();
        inputinirgdconc = $("#inputinirgdconc").val();
        inputinirgdcont = $("#inputinirgdcont").val();
        inputfinrgdcont = $("#inputfinrgdcont").val();
        inputrgdsodcont = $("#inputrgdsodcont").val();
        inputrgdbiccont = $("#inputrgdbiccont").val();
        inputinifibconc = $("#inputinifibconc").val();
        inputfinfibconc = $("#inputfinfibconc").val();
        inputfibsodcont = $("#inputfibsodcont").val();
        inputfibbiccont = $("#inputfibbiccont").val();
        inputinicolconc = $("#inputinicolconc").val();
        inputfincolconc = $("#inputfincolconc").val();
        inputcolacidconc = $("#inputcolacidconc").val();
        inputconcbicar = $("#inputconcbicar").val();
        inputfinbicarb = $("#inputfinbicarb").val();

  



        if (inputsubstrateman == 0) {
            totalVol = (inpSubNum * inpSubVol) * 1000;
            totalVolmL = inpSubNum * inpSubVol;
            totalcalvol = totalVolmL;
         }
         else {
             totalVol = inputsubstrateman * 1000;
             totalVolmL = inputsubstrateman;
             totalVolmL = totalVolmL;
         }

         outputrgdneeded = (totalVolmL*inputfinrgdcont)/1000;
         outputrgdneededmg = outputrgdneeded/inputinirgdcont;
         outputrgdneededperc = outputrgdneededmg/10/totalVolmL;
         outputalgiconc = inputfinalginateconc-outputrgdneededperc;
         outputalgiused = totalVolmL*outputalgiconc*10;
         ouputfibriused = inputfinfibconc*totalVolmL;
         outputcolused = totalVolmL*inputfincolconc;
         costofalginate = costofalginatemg*outputalgiused;
         costofrgdalginate = costofrgdalginatemg*outputrgdneededmg;
         costoffribrinogen = costoffibrinogenmg*ouputfibriused;
         costofcollagen = costofcollagenmg*outputcolused;

         $('#outputrgdneeded').val(outputrgdneeded);
         $('#outputrgdneededmg').val(outputrgdneededmg);
         $('#outputrgdneededperc').val(outputrgdneededperc);
         $('#outputalgiconc').val(outputalgiconc);
         $('#outputalgiused').val(outputalgiused);
         $('#ouputfibriused').val(ouputfibriused);
         $('#outputcolused').val(outputcolused);
         $('#costofalginate').val('$' + costofalginate.toFixed(2));
         $('#costofrgdalginate').val('$' + costofrgdalginate.toFixed(2));
         $('#costoffribrinogen').val('$' + costoffribrinogen);
         $('#costofcollagen').val('$' + costofcollagen.toFixed(2));
        $('#totalvol').val(totalVol);

        //Caluclations
        calcstandalg = outputalgiconc/(inputinialginateconc/totalVolmL);
        calcrgdalg = outputrgdneededperc/(inputinirgdconc/totalVolmL);
        calccollagen = outputcolused/inputinicolconc;
        calcfibrinogen = ouputfibriused/inputinifibconc;
        outputfinbicarbneeded = inputfinbicarb*totalVolmL;
        ouputcolacid = inputcolacidconc*calccollagen;
        ouputmatrixbicarb = (inputalgibiccont*calcstandalg)+(inputrgdbiccont*calcrgdalg)+(inputfibbiccont*calcfibrinogen);
        outputbicarbneeded = (outputfinbicarbneeded+ouputcolacid)-ouputmatrixbicarb;
        calcbicarb = outputbicarbneeded/inputconcbicar;
        outputsodiumadded = (inputalgsodcont*calcstandalg)+(inputalgibiccont*calcstandalg)+(inputrgdsodcont*calcrgdalg)+(inputrgdbiccont*calcrgdalg)+(inputfibsodcont*calcfibrinogen)+(inputfibbiccont*calcfibrinogen)+(inputconcbicar*calcbicarb);
        outputsodiumneeded = 150*totalVolmL;
        outputsodiumtoadd = outputsodiumneeded - outputsodiumadded;
        calcnacl = outputsodiumtoadd/1500;
        calcwater = totalVolmL-(calcstandalg+calcrgdalg+calccollagen+calcfibrinogen+calcbicarb+calcnacl);
        $('#calcstandalg').val(Math.floor(calcstandalg*1000));
        $('#calcrgdalg').val(Math.floor(calcrgdalg*1000));
        $('#calccollagen').val(Math.floor(calccollagen*1000));
        $('#calcfibrinogen').val(Math.floor(calcfibrinogen*1000));
        $('#calcbicarb').val(Math.floor(calcbicarb*1000));
        $('#calcnacl').val(Math.floor(calcnacl*1000));
        $('#calcwater').val(Math.floor(calcwater*1000));
         $('#outputfinbicarbneeded').val(outputfinbicarbneeded.toFixed(2));
         $('#ouputcolacid').val(ouputcolacid.toFixed(2));
         $('#ouputmatrixbicarb').val(ouputmatrixbicarb.toFixed(2));
         $('#outputbicarbneeded').val(outputbicarbneeded.toFixed(2));
         $('#outputsodiumadded').val(outputsodiumadded.toFixed(2));
         $('#outputsodiumneeded').val(outputsodiumneeded.toFixed(2));
         $('#outputsodiumtoadd').val(outputsodiumtoadd.toFixed(2));

       
         if (alginateError() && rgdError() && iniFibError() && finFibError() && collagenError()) {
            $("#calculatedVolumes").get(0).scrollIntoView();

         }



         $('#totalcalvol').val(Math.floor(totalcalvol*1000));   




        event.preventDefault();

      });

      $("#actustandalg").keyup(function(){
          let a = Number(this.value);
        acturgdalg = (calcrgdalg*this.value)/calcstandalg;
        actcollagen = (calccollagen*this.value)/calcstandalg;
        actfibrinogen = (calcfibrinogen*this.value)/calcstandalg;
        actwater = (calcwater*this.value)/calcstandalg;
        actbicarb = (calcbicarb*this.value)/calcstandalg;
        actnacl = (calcnacl*this.value)/calcstandalg;
        totalcalvol = acturgdalg+a+actcollagen+actfibrinogen+actwater+actbicarb+actnacl;

     


        $('#acturgdalg').val(Math.floor(acturgdalg));
        $('#actcollagen').val(Math.floor(actcollagen));    
        $('#actfibrinogen').val(Math.floor(actfibrinogen));    
        $('#actwater').val(Math.floor(actwater));    
        $('#actbicarb').val(Math.floor(actbicarb));    
        $('#actnacl').val(Math.floor(actnacl)); 
        $('#totalcalvol').val(Math.floor(totalcalvol));   
    });



    $("#secacturgdalg").keyup(function(){
        let a = Number(this.value);
        secactustdalg = (calcstandalg*this.value)/calcrgdalg;
        secactucollagen = (calccollagen*this.value)/calcrgdalg;
        secactufibrinogen = (calcfibrinogen*this.value)/calcrgdalg;
        secactwater = (calcwater*this.value)/calcrgdalg;
        secactbicarb = (calcbicarb*this.value)/calcrgdalg;
        secactnacl = (calcnacl*this.value)/calcrgdalg;
        totalrgdvol = a+secactustdalg+secactucollagen+secactufibrinogen+secactwater+secactbicarb+secactnacl;

        $('#secactustdalg').val(Math.floor(secactustdalg));
        $('#secactucollagen').val(Math.floor(secactucollagen));    
        $('#secactufibrinogen').val(Math.floor(secactufibrinogen));    
        $('#secactwater').val(Math.floor(secactwater));    
        $('#secactbicarb').val(Math.floor(secactbicarb));    
        $('#secactnacl').val(Math.floor(secactnacl)); 
        $('#totalrgdvol').val(Math.floor(totalrgdvol));  
    });


  })

